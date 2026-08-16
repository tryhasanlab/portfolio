param(
    [int]$Port = 3000
)

$basePath = $PSScriptRoot
if (-not $basePath) {
    $basePath = (Get-Location).Path
}

$code = @"
using System;
using System.IO;
using System.Net;
using System.Threading.Tasks;
using System.Collections.Generic;

public class HighPerfServer {
    private HttpListener _listener;
    private string _basePath;
    private static readonly Dictionary<string, string> MimeTypes = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) {
        { ".html", "text/html; charset=utf-8" },
        { ".htm", "text/html; charset=utf-8" },
        { ".css", "text/css; charset=utf-8" },
        { ".js", "application/javascript; charset=utf-8" },
        { ".jpg", "image/jpeg" },
        { ".jpeg", "image/jpeg" },
        { ".png", "image/png" },
        { ".svg", "image/svg+xml" },
        { ".json", "application/json" },
        { ".ico", "image/x-icon" },
        { ".woff", "font/woff" },
        { ".woff2", "font/woff2" },
        { ".ttf", "font/ttf" }
    };

    public void Start(string basePath, int port) {
        _basePath = basePath;
        _listener = new HttpListener();
        _listener.Prefixes.Add("http://localhost:" + port + "/");
        _listener.Prefixes.Add("http://127.0.0.1:" + port + "/");
        try {
            _listener.Start();
            Console.WriteLine("SERVER_RUNNING: http://localhost:" + port + "/ and http://127.0.0.1:" + port + "/");
        } catch (Exception ex) {
            Console.WriteLine("SERVER_ERROR: " + ex.Message);
            return;
        }

        while (_listener.IsListening) {
            try {
                var context = _listener.GetContext();
                Task.Run(() => ProcessRequest(context));
            } catch {
                if (!_listener.IsListening) break;
            }
        }
    }

    private void ProcessRequest(HttpListenerContext context) {
        try {
            var req = context.Request;
            var res = context.Response;
            string urlPath = Uri.UnescapeDataString(req.Url.AbsolutePath);
            if (urlPath == "/" || string.IsNullOrEmpty(urlPath)) {
                urlPath = "/index.html";
            }
            string relPath = urlPath.TrimStart('/').Replace('/', Path.DirectorySeparatorChar);
            string fullPath = Path.Combine(_basePath, relPath);

            if (File.Exists(fullPath)) {
                string ext = Path.GetExtension(fullPath);
                string contentType = MimeTypes.ContainsKey(ext) ? MimeTypes[ext] : "application/octet-stream";
                res.ContentType = contentType;
                res.AddHeader("Access-Control-Allow-Origin", "*");
                res.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate");
                res.AddHeader("Pragma", "no-cache");
                res.AddHeader("Expires", "0");
                byte[] buffer = File.ReadAllBytes(fullPath);
                res.ContentLength64 = buffer.Length;
                res.OutputStream.Write(buffer, 0, buffer.Length);
            } else {
                res.StatusCode = 404;
                byte[] notFound = System.Text.Encoding.UTF8.GetBytes("404 Not Found");
                res.ContentLength64 = notFound.Length;
                res.OutputStream.Write(notFound, 0, notFound.Length);
            }
        } catch {
        } finally {
            try { context.Response.OutputStream.Close(); } catch {}
        }
    }
}
"@

Add-Type -TypeDefinition $code -Language CSharp

$server = New-Object HighPerfServer
$server.Start($basePath, $Port)

