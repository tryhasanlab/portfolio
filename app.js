/* ============================================================
   CONFIG — Data Source
   ============================================================ */
const CONFIG = {
  name: "Md Mahmudul Hasan",
  shortName: "HasanVLO",
  roles: ["WordPress Developer", "Graphic Designer", "T-Shirt Artist", "Google Ads Specialist"],
  tagline: "I build fast WordPress websites, design print-ready T-shirt & vector graphics, and run data-driven Google Ads campaigns — helping brands look sharp and scale online.",
  profileImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkE_sRiOg-HIPDM9Rq7te25Zx2m-IVUUx7AHmBYJfLbPJ0umnW7DIry5c94kwEAI-5fuMXvDSxHxmHZb7WHqYLlk85BliD6QkwDtTTEhpYfa1MriNWv6Exf5lr9V9dNyeUBTSDQxiV8CDwARZstW3xqWWXisVcD63COiJubQN6SX34NWkrRJ7jwcs7jZPG/s1600/Gemini_Generated_Image_stv4slstv4slstv4.png",
  cvUrl: "#",

  contact: {
    phone: "01892102001",
    email: "online.hasan360@gmail.com",
    location: "Dhaka, Bangladesh"
  },

  socials: [
    { icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/in/hasanvlo/", label: "LinkedIn" },
    { icon: "fa-brands fa-facebook-f", url: "https://facebook.com/hasanvlo", label: "Facebook" },
    { icon: "fa-brands fa-instagram", url: "https://www.instagram.com/hasanvlo1/", label: "Instagram" },
    { icon: "fa-brands fa-weixin", url: "#", label: "WeChat: hasanvlo" }
  ],

  whatsapp: {
    number: "8801892102001",
    prefillMessage: "Hi Mahmudul, I found your portfolio and I'd like to talk about a project."
  },

  skillGroups: [
    { title: "Web Development", icon: "fa-solid fa-code", skills: [
      { name: "WordPress", level: 95 },
      { name: "Elementor", level: 92 },
      { name: "Landing Pages", level: 90 },
      { name: "Website Maintenance", level: 85 }
    ]},
    { title: "SEO & Digital Marketing", icon: "fa-solid fa-bullhorn", skills: [
      { name: "On-page SEO", level: 88 },
      { name: "Keyword Research", level: 86 },
      { name: "Google Ads", level: 90 },
      { name: "Content & Affiliate Marketing", level: 84 }
    ]},
    { title: "Graphic Design", icon: "fa-solid fa-palette", skills: [
      { name: "Photoshop", level: 93 },
      { name: "Illustrator", level: 88 },
      { name: "Canva", level: 95 },
      { name: "Banner & Social Design", level: 90 }
    ]},
    { title: "Office & Productivity", icon: "fa-solid fa-briefcase", skills: [
      { name: "Google Workspace", level: 92 },
      { name: "MS Office & Excel", level: 88 },
      { name: "Zoom", level: 90 },
      { name: "Remote Collaboration", level: 94 }
    ]}
  ],

  experience: [
    {
      role: "Senior Executive – Fleet Management",
      org: "Steadfast Courier Ltd.",
      date: "2025 — Present",
      points: ["Payroll management", "Recruitment support", "Employee onboarding", "HR documentation", "Fleet administration"]
    },
    {
      role: "Digital Marketing Assistant",
      org: "Sichuan Chuhaiyi Network Technology",
      date: "2023 — 2024",
      points: ["SEO optimization", "Content localization", "Marketing campaigns", "Graphic design", "Analytics"]
    },
    {
      role: "WordPress Website Assistant",
      org: "HandtoolsBD",
      date: "2022 — 2023",
      points: ["WordPress management", "Elementor landing pages", "Website optimization", "Plugin integration"]
    },
    {
      role: "Graphic Designer",
      org: "Nadia Global",
      date: "2021 — 2022",
      points: ["Corporate branding", "Marketing creatives", "Social media campaigns"]
    }
  ],

  hireLinks: [
    { platform: "Fiverr", icon: "fa-brands fa-fiverr", url: "https://www.fiverr.com/sellers/hasanvlo", note: "Top T-shirt Designer & Vector Artist" },
    { platform: "Freelancer", icon: "fa-solid fa-globe", url: "https://www.freelancer.com/u/azhasan1212", note: "Custom Merchandise & Apparel Graphics" }
  ],

  engineeringProjects: [
    {
      title: "OpenMV Driverless Intelligent Car",
      desc: "An autonomous robotic vehicle prototype utilizing real-time computer vision for lane detection and neural traffic sign recognition.",
      tags: ["OpenMV", "ESP8266", "MicroPython", "Image Processing", "Robotics"]
    },
    {
      title: "DDS Signal Generator",
      desc: "An FPGA-based direct digital synthesis waveform generator with programmable frequency synthesis built in VHDL.",
      tags: ["FPGA", "VHDL", "Digital Signal Processing", "Electronics"]
    }
  ],

  testimonials: [
    { img: "https://blogger.googleusercontent.com/img/a/AVvXsEi1zDRe6iLdxeTYDILwQrYlI-s1UKGOvh-0nMY10RsQsgRbhvNywjVWtdgmZhnsc1uVnamiAw-x-mmOS3u-77mY28BFBjLvw9WIzJ-hZ1fCu9EM4UJ6JCtMKyxehK1u4xgr_nVbuhdBW3FbJ7y5oKm9YPFvBNujMGrZoCB9KgeU4WaA0AKKYOCWVgLcCOMl=s1600", text: "Client feedback shared from marketplace reviews." },
    { img: "https://blogger.googleusercontent.com/img/a/AVvXsEhMk52qy-M_p5iTDyG1EUd0G7U9ONW5ZgRRjLyub847fQb8z_FC26R0MMyuqgTg5VFhKDdrm2TkM990rM-YNn8zFgQqYYJfNUoXcVXru0f6ZhPXaW_wCupGurS4lj4fcJPXqZk4eAwbF4Fk6DMqvWEiavlXm7SfGjvq4HcSwXhqEpWGeds_gSvr1Se5TvDj=s1600", text: "Client feedback shared from marketplace reviews." },
    { img: "https://blogger.googleusercontent.com/img/a/AVvXsEjOROr35CCLHiJDTeFUQZBH8pM08-E4Ktn_kmLJC1o3VNdMslE6hJw6ujOyL89nJtDg6AiYz5Jd-DR36TCweKsoq3_6yjcrB0mxilfL0nusCPweP49dZ94DKk3HWPT24_3ljhBMgCfn_8xu_lMb1daaQx2J5iyUOPlegr_dtLOFjdKYO2vmc2AsNJUv0ys9=s1600", text: "Client feedback shared from marketplace reviews." },
    { img: "https://blogger.googleusercontent.com/img/a/AVvXsEgNs1sFTLtdB_E710qDjcDPwP82GcQe3ez8hLKnv-UrlXCL6wnP9PDfPjzjf3uiaGyPzetPKgXN1Y1nHTaYJV2MBSk2mSFBDkaAzcV8AImRYGS6yuqLQPjrYBM489cmG-F3-BOr94uSmHBgRo_LtcaMiwb7pvvmQXV5diyJ4OXY8iFTNem33I6Y1FKQF7RS=s1600", text: "Client feedback shared from marketplace reviews." },
    { img: "https://blogger.googleusercontent.com/img/a/AVvXsEiwYfaqKbvRqeo2tS0svQUZG_hvGOl9z-OFBnuJ5nQOFpkEPw5mASb6LZX97-KKtX_979eOrccjIXKIJki7wUs3iFIKLNZyxwV_Le7wk_SOTJ70bxte2eOYQ8GlenaiMdxLZywB6Z8WOPWAW8HiShku-7V_cgE_onRq9ShbTZbpfr2gRUSrieHLogz0DPQ=s1600", text: "Client feedback shared from marketplace reviews." }
  ],

  certifications: [
    { name: "WordPress Customization", icon: "fa-brands fa-wordpress" },
    { name: "SEO & Keyword Optimization", icon: "fa-solid fa-magnifying-glass-chart" },
    { name: "Graphic Design & Vector Art", icon: "fa-solid fa-palette" },
    { name: "Electrical House Wiring", icon: "fa-solid fa-plug" },
    { name: "Computer Office Application", icon: "fa-solid fa-computer" }
  ],

  awards: [
    { name: "Sichuan Provincial Scholarship", icon: "fa-solid fa-trophy" },
    { name: "First Prize — Short Video Competition", icon: "fa-solid fa-video" },
    { name: "International Student Union Member", icon: "fa-solid fa-people-group" },
    { name: "Volunteer, Smart Chinese Teachers", icon: "fa-solid fa-hand-holding-heart" }
  ],

  education: [
    { degree: "Bachelor's Degree", school: "China West Normal University", note: "Electronics Information Engineering", icon: "fa-solid fa-graduation-cap" },
    { degree: "Diploma in Engineering", school: "Thakurgaon Polytechnic Institute", note: "Refrigeration & Air Conditioning", icon: "fa-solid fa-user-graduate" }
  ],

  languages: [
    { name: "Bangla", level: "Native", pct: 100 },
    { name: "English", level: "Conversational", pct: 75 },
    { name: "Chinese", level: "HSK 3", pct: 55 },
    { name: "Hindi", level: "Good", pct: 65 }
  ],

  graphicDesigns: [
    { id: 1, title: "Corporate Event Promo Banner", category: "Social Media Post", catKey: "social-media", img: "images/social-media/44.jpg", desc: "Professional corporate event promotion social media graphic designed for maximum engagement." },
    { id: 2, title: "Business Services Growth Campaign", category: "Social Media Post", catKey: "social-media", img: "images/social-media/444.jpg", desc: "Sleek business services banner crafted for digital marketing campaigns." },
    { id: 3, title: "AutoCAD & 3D Max Training Ad", category: "Course & Education", catKey: "educational", img: "images/social-media/Autocat-3d-Max.jpg", desc: "Eye-catching course promotional banner for AutoCAD & 3D Max design certification." },
    { id: 4, title: "Artisan Bakery Gourmet Showcase", category: "Food & E-Commerce", catKey: "food", img: "images/social-media/Bake.jpg", desc: "Delicious bakery social media post highlighting gourmet baked goods & offers." },
    { id: 5, title: "Pastry & Baking Workshop Banner", category: "Food & E-Commerce", catKey: "food", img: "images/social-media/Bake-2.jpg", desc: "Appetizing food promotion design for culinary workshops and bakery events." },
    { id: 6, title: "Fresh Bakery Daily Specials", category: "Food & E-Commerce", catKey: "food", img: "images/social-media/Bake-3.jpg", desc: "Vibrant promotional banner for fresh bakery products and daily deals." },
    { id: 7, title: "Master Baking Online Academy", category: "Course & Education", catKey: "educational", img: "images/social-media/Bake-Course.jpg", desc: "Engaging educational ad banner for online baking masterclasses." },
    { id: 8, title: "Corporate Agency Brand Showcase", category: "Business & Marketing", catKey: "business", img: "images/social-media/Business.jpg", desc: "Modern corporate agency social post emphasizing business growth and solutions." },
    { id: 9, title: "Strategic Business Growth Banner", category: "Business & Marketing", catKey: "business", img: "images/social-media/Business1.jpg", desc: "Clean and powerful promotional graphic for corporate business strategy." },
    { id: 10, title: "Digital Enterprise Solutions", category: "Business & Marketing", catKey: "business", img: "images/social-media/Business2.jpg", desc: "High-converting promotional marketing poster for B2B enterprise services." },
    { id: 11, title: "Creative Digital Marketing Campaign", category: "Social Media Post", catKey: "social-media", img: "images/social-media/Copy-work-7.jpg", desc: "Strategic social media post designed for digital agencies and marketing pros." },
    { id: 12, title: "Brand Growth Strategy Creatives", category: "Social Media Post", catKey: "social-media", img: "images/social-media/Copy-Work5.jpg", desc: "Impactful brand awareness social banner created for social media ads." },
    { id: 13, title: "Advanced Excel Masterclass Ad", category: "Course & Education", catKey: "educational", img: "images/social-media/Excel-social-media-psot.jpg", desc: "Professional educational promo banner for MS Excel training courses." },
    { id: 14, title: "Graphic Design Agency Promo", category: "Social Media Post", catKey: "social-media", img: "images/social-media/Graps-smp.jpg", desc: "Vibrant promotional graphic showcasing professional design services." },
    { id: 15, title: "Creative Agency Branding Banner", category: "Social Media Post", catKey: "social-media", img: "images/social-media/Graps2.jpg", desc: "Modern social media banner for creative studios and design freelancers." },
    { id: 16, title: "Healthy Dry Fruits & Nuts Ad", category: "Food & E-Commerce", catKey: "food", img: "images/social-media/Nutt.jpg", desc: "E-commerce product banner showcasing healthy organic nuts and snacks." },
    { id: 17, title: "Premium Nut Snack Campaign", category: "Food & E-Commerce", catKey: "food", img: "images/social-media/Nutt-w.jpg", desc: "Attractive product promotional creative for dry fruit snack packages." },
    { id: 18, title: "Corporate Tech Solutions Banner", category: "Social Media Post", catKey: "social-media", img: "images/social-media/Social-Media-Post-1.jpg", desc: "Clean tech services promotional post tailored for Facebook and Instagram." },
    { id: 19, title: "Creative Marketing Showcase", category: "Social Media Post", catKey: "social-media", img: "images/social-media/Social-Media-Post-2.jpg", desc: "High-contrast promotional visual for social media marketing." },
    { id: 20, title: "Brand Identity Design Promo", category: "Social Media Post", catKey: "social-media", img: "images/social-media/Social-Media-Post-3.jpg", desc: "Professional graphic design post presenting branding and logo services." },
    { id: 21, title: "Digital Agency Promotion Ad", category: "Social Media Post", catKey: "social-media", img: "images/social-media/Social-Media-Post-4.jpg", desc: "Dynamic promotional creative built to drive clicks and conversions." },
    { id: 22, title: "Business Launch Campaign Banner", category: "Social Media Post", catKey: "social-media", img: "images/social-media/Social-Media-Post-5.jpg", desc: "High-impact social media post for startup and business launches." },
    { id: 23, title: "Modern Marketing Creatives", category: "Social Media Post", catKey: "social-media", img: "images/social-media/Social-Media-Post-6.jpg", desc: "Stylish promotional visual for social media management and marketing." },
    { id: 24, title: "Custom Brand Social Post", category: "Social Media Post", catKey: "social-media", img: "images/social-media/Social-Media-post-for-sathi.jpg", desc: "Bespoke social media promotional graphic tailored for client branding." },
    { id: 25, title: "Special Offer Promotional Banner", category: "Social Media Post", catKey: "social-media", img: "images/social-media/social-media-post-n.jpg", desc: "Eye-catching sale and offer banner designed for social media feeds." },
    { id: 26, title: "Academic Exam Preparation Banner", category: "Course & Education", catKey: "educational", img: "images/social-media/SSc-social-media-post.jpg", desc: "Educational social media post advertising academic coaching and courses." },
    { id: 27, title: "Luxury Product Launch Showcase", category: "Food & E-Commerce", catKey: "food", img: "images/social-media/watch-File.jpg", desc: "Premium product banner for luxury watches and high-end accessories." },
    { id: 28, title: "Urban Streetwear Vector Graphic", category: "Apparel & Vector", catKey: "apparel", img: "design_showcase_1.jpg", desc: "High-resolution vector artwork designed for print-ready streetwear T-shirts." },
    { id: 29, title: "Neon Digital Brand Campaign", category: "Business & Marketing", catKey: "business", img: "design_showcase_2.jpg", desc: "Cyberpunk aesthetic banner design for digital marketing campaigns." },
    { id: 30, title: "Wilderness Retro Apparel Badge", category: "Apparel & Vector", catKey: "apparel", img: "design_showcase_3.jpg", desc: "Vintage outdoor vector badge created for merchandise and apparel prints." }
  ],

  integrations: {
    googleScriptUrl: "https://script.google.com/macros/s/AKfycbwOWWavPatPk9orzSfcYEbtJhFw3TB3ihbM3t2qxfU85dBbgEU-PkIv4H6QTI3ZbZFmEg/exec",
    telegramBotToken: "8986464388:AAHGoovBnYPFKDoddJ6ejRGecWgjc2F81DQ",
    telegramChatId: "6662075706"
  },

  blogPosts: [
    {
      id: "wp-speed-optimization-2026",
      title: "Top 5 WordPress Speed Optimization Techniques for 2026",
      category: "WordPress & SEO",
      date: "August 12, 2026",
      readTime: "5 min read",
      excerpt: "Learn how to achieve 90+ Mobile PageSpeed scores on WordPress without breaking your Elementor layouts or site functionality.",
      content: `
        <h3>Why Speed Matters in 2026</h3>
        <p>Core Web Vitals are a primary Google ranking factor. A 1-second delay in page load time can reduce conversions by up to 20%. Here are 5 proven strategies to optimize WordPress performance.</p>
        
        <h4>1. Server-Level Caching & Nginx Tuning</h4>
        <p>Avoid relying solely on heavy caching plugins. Implement FastCGI caching on Nginx or LiteSpeed Cache at the server level for instantaneous responses.</p>
        
        <h4>2. AVIF & WebP Image Compression</h4>
        <p>Convert asset images to Next-Gen formats (AVIF and WebP). Serve responsive srcset images tailored to mobile viewports to cut bandwidth usage by 60%.</p>
        
        <h4>3. DOM Size Reduction in Elementor</h4>
        <p>Turn on Elementor's Optimized DOM Output and Flexbox Containers. Eliminate nested section wrapper divs that bloat DOM node count.</p>
        
        <h4>4. Defer Non-Essential JavaScript</h4>
        <p>Defer or delay third-party tracking scripts (Google Tag Manager, Facebook Pixel) until user interaction occurs (scroll or mouse movement).</p>
        
        <h4>5. Clean Up Database Bloat</h4>
        <p>Schedule automated cleanups for post revisions, transient options, and spam comments to keep MySQL queries lightning fast.</p>
      `
    },
    {
      id: "vector-tshirt-design-guide",
      title: "Designing Print-Ready 300 DPI Vector Graphics for Apparel",
      category: "Graphic Design",
      date: "July 28, 2026",
      readTime: "6 min read",
      excerpt: "Master vector art preparation in Adobe Illustrator for Direct-to-Garment (DTG) and Screen Printing on POD platforms.",
      content: `
        <h3>The Anatomy of a High-Selling Apparel Design</h3>
        <p>Creating T-shirt graphics for Print-on-Demand (Fiverr, Merch by Amazon, Teespring) requires technical precision to ensure vibrant, crisp prints on physical fabric.</p>
        
        <h4>1. Color Modes: CMYK vs. RGB for DTG</h4>
        <p>While screen printers rely on CMYK spot colors, modern DTG printers require 300 DPI RGB transparent PNG files (4500px × 5400px is standard).</p>
        
        <h4>2. Halftoning and Gradient Fades</h4>
        <p>Fades to transparent look blurry when printed on dark garments. Use vector halftoning or solid outline stippling for clean rasterized print edges.</p>
        
        <h4>3. Expanding Paths & Outlining Fonts</h4>
        <p>Always convert all text into outlines (\`Ctrl + Shift + O\`) and expand appearance on stroked paths so printers don't missing font errors.</p>
        
        <h4>4. Contrast on Dark Fabrics</h4>
        <p>Include an Underbase test layer in Illustrator to verify design visibility on black, navy, and charcoal heather apparel.</p>
      `
    },
    {
      id: "google-ads-high-roi-structure",
      title: "Structuring High-ROI Google Ads Search Campaigns for Local Businesses",
      category: "Digital Marketing",
      date: "July 15, 2026",
      readTime: "4 min read",
      excerpt: "Stop burning ad budget. Discover how single-intent keyword grouping and negative keyword lists deliver 3x+ ROAS.",
      content: `
        <h3>Maximizing PPC Performance</h3>
        <p>Google Ads PPC campaigns can generate targeted leads immediately if structured correctly from day one.</p>
        
        <h4>1. Negative Keyword lists</h4>
        <p>Before launching any search campaign, add robust negative lists (e.g. 'free', 'jobs', 'tutorial', 'cheap') to filter out non-converting traffic.</p>
        
        <h4>2. Responsive Search Ad Optimization</h4>
        <p>Provide 15 unique headline variations highlighting benefits, pricing, and urgency. Pair them with 4 compelling description lines.</p>
        
        <h4>3. Conversion Value Rules & Smart Bidding</h4>
        <p>Leverage Target CPA or Target ROAS bidding once your account logs at least 30 conversions per month.</p>
      `
    }
  ],

  legal: {
    privacy: `
      <h3>Privacy Policy</h3>
      <p>Last updated: August 2026</p>
      <p>Md Mahmudul Hasan ("HasanVLO") respects your privacy. This Privacy Policy explains how information is collected, used, and safeguarded when you visit this website or reach out via contact forms.</p>
      
      <h4>1. Information Collected</h4>
      <p>We collect information you voluntarily provide through the contact form, including your name, email address, phone number, and message content.</p>
      
      <h4>2. Use of Information</h4>
      <p>Your details are strictly used to respond to inquiries, discuss prospective project contracts, and deliver requested freelance services. We do not sell or rent your data to third parties.</p>
      
      <h4>3. Security</h4>
      <p>We implement standard HTTPS encryption and secure API integrations (Google Apps Script & Telegram Notification Bot) to protect your submissions.</p>
    `,
    terms: `
      <h3>Terms of Service</h3>
      <p>Last updated: August 2026</p>
      <p>By accessing or using the services provided on this website, you agree to comply with the following terms:</p>
      
      <h4>1. Services Scope</h4>
      <p>Freelance web development, graphic design, T-shirt apparel vector creation, and Google Ads marketing services are provided according to agreed-upon project specifications and contract scopes.</p>
      
      <h4>2. Intellectual Property</h4>
      <p>All client deliverables (custom WordPress code, final T-shirt vector files, graphic assets) become the property of the client upon full payment settlement, unless otherwise specified in writing.</p>
      
      <h4>3. Limitation of Liability</h4>
      <p>HasanVLO is not liable for third-party hosting outages, plugin software changes, or external platform policy updates beyond reasonable control.</p>
    `,
    disclaimer: `
      <h3>Disclaimer</h3>
      <p>The information and free tools provided on this website are for general portfolio showcase and educational purposes.</p>
      
      <h4>1. Accuracy</h4>
      <p>While every effort is made to keep information up to date, website performance metrics, ad ROI estimates, and tool outputs depend on user inputs and external market conditions.</p>
      
      <h4>2. External Links</h4>
      <p>This website contains links to third-party marketplaces (such as Fiverr and Freelancer). HasanVLO is not responsible for the privacy practices or content of external sites.</p>
    `
  }
};

/* ============================================================
   1. PINNED HERO CANVAS SEQUENCE ENGINE (HIGH PERFORMANCE)
   ============================================================ */
(() => {
  const FRAME_COUNT = 181;
  const canvas = document.getElementById('sequence-canvas');
  const heroWrapper = document.getElementById('hero-scroll-wrapper');
  if (!canvas || !heroWrapper) return;

  const ctx = canvas.getContext('2d', { alpha: false });
  const images = new Array(FRAME_COUNT);
  let isReady = false;

  let currentProgress = 0;
  let targetProgress = 0;
  let currentRenderedIndex = -1;
  const LERP_FACTOR = 0.28; // Snappy responsiveness without scroll lag

  function getFramePath(index) {
    const padded = String(index).padStart(3, '0');
    return `frames/ezgif-frame-${padded}.jpg`;
  }

  function resizeCanvas() {
    // Cap DPR on mobile / retina for ultra-smooth GPU performance
    const dpr = window.innerWidth <= 768 ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);

    if (isReady && currentRenderedIndex >= 0) {
      renderFrame(currentRenderedIndex);
    }
  }

  function getLoadedImage(targetIdx) {
    if (images[targetIdx] && images[targetIdx]._loaded) return images[targetIdx];
    // Search outwards for nearest loaded frame fallback to prevent blanking out
    for (let delta = 1; delta < 15; delta++) {
      const left = targetIdx - delta;
      if (left >= 0 && images[left] && images[left]._loaded) return images[left];
      const right = targetIdx + delta;
      if (right < FRAME_COUNT && images[right] && images[right]._loaded) return images[right];
    }
    return null;
  }

  function renderFrame(index) {
    const img = getLoadedImage(index);
    if (!img) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || 1920;
    const ih = img.naturalHeight || 1080;

    const canvasAspect = cw / ch;
    const imgAspect = iw / ih;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasAspect > imgAspect) {
      drawWidth = cw;
      drawHeight = cw / imgAspect;
      offsetX = 0;
      offsetY = (ch - drawHeight) / 2;
    } else {
      drawHeight = ch;
      drawWidth = ch * imgAspect;
      if (window.innerWidth >= 960) {
        offsetX = (cw - drawWidth) * 0.15;
      } else {
        offsetX = (cw - drawWidth) / 2;
      }
      offsetY = 0;
    }

    ctx.fillStyle = '#050811';
    ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    currentRenderedIndex = index;
  }

  function updateScrollTarget() {
    const rect = heroWrapper.getBoundingClientRect();
    const scrollDistance = heroWrapper.offsetHeight - window.innerHeight;
    if (scrollDistance <= 0) {
      targetProgress = 0;
      return;
    }
    const scrolled = Math.max(0, -rect.top);
    targetProgress = Math.max(0, Math.min(1, scrolled / scrollDistance));
  }

  function animate() {
    const diff = targetProgress - currentProgress;
    if (Math.abs(diff) > 0.0001) {
      currentProgress += diff * LERP_FACTOR;
    } else {
      currentProgress = targetProgress;
    }

    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.round(currentProgress * (FRAME_COUNT - 1)))
    );

    if (frameIndex !== currentRenderedIndex && isReady) {
      renderFrame(frameIndex);
    }

    requestAnimationFrame(animate);
  }

  function loadSingleFrame(i, onComplete) {
    const img = new Image();
    const frameIdx = i - 1;
    images[frameIdx] = img;

    const handleLoad = () => {
      if (!img._loaded) {
        img._loaded = true;
        if (!isReady) {
          isReady = true;
          renderFrame(0);
        }
        if (onComplete) onComplete();
      }
    };

    img.onload = handleLoad;
    img.onerror = () => {
      img._loaded = false;
      if (onComplete) onComplete();
    };

    img.src = getFramePath(i);
    if (img.complete && img.naturalWidth !== 0) {
      handleLoad();
    }
  }

  function preloadPriorityImages() {
    // 1. Priority Load initial keyframes
    const priorityIndices = [1, 2, 3, 5, 10, 15, 20, 30, 45, 60, 90, 120, 150, 181];
    let loadedPriority = 0;

    priorityIndices.forEach(idx => {
      loadSingleFrame(idx, () => {
        loadedPriority++;
        if (loadedPriority === 1) {
          renderFrame(0);
        }
      });
    });

    // 2. Queue non-priority frames in small batches so connection is never choked
    setTimeout(() => {
      let currentQueue = 1;
      function processBatch() {
        const batchSize = 10;
        let completedInBatch = 0;
        for (let b = 0; b < batchSize && currentQueue <= FRAME_COUNT; b++) {
          if (!images[currentQueue - 1]) {
            loadSingleFrame(currentQueue, () => {
              completedInBatch++;
            });
          } else {
            completedInBatch++;
          }
          currentQueue++;
        }
        if (currentQueue <= FRAME_COUNT) {
          setTimeout(processBatch, 40);
        }
      }
      processBatch();
    }, 150);
  }

  window.addEventListener('scroll', updateScrollTarget, { passive: true });
  window.addEventListener('resize', () => {
    resizeCanvas();
    updateScrollTarget();
  }, { passive: true });

  resizeCanvas();
  updateScrollTarget();
  preloadPriorityImages();
  requestAnimationFrame(animate);
})();

/* ============================================================
   2. PORTFOLIO DATA RENDERING
   ============================================================ */
const setElemText = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
const setElemHtml = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };

setElemText('nav-logo-text', CONFIG.shortName);
setElemText('hero-name', CONFIG.name);
setElemText('hero-lead', CONFIG.tagline);
setElemText('wa-name-head', CONFIG.name);
setElemHtml('footer-note', `© 2026 ${CONFIG.shortName} — Crafting Websites, Designs &amp; Digital Growth.`);

const aboutImg = document.getElementById('about-photo');
if (aboutImg) aboutImg.src = CONFIG.profileImage;

const cvBtn = document.getElementById('btn-cv');
if (cvBtn) cvBtn.href = (CONFIG.cvUrl && CONFIG.cvUrl !== '#') ? CONFIG.cvUrl : '#contact';

// Typewriter role effect
(function typeRoles(){
  const el = document.getElementById('typed-role');
  if (!el) return;
  let ri = 0, ci = 0, deleting = false;
  function tick(){
    const word = CONFIG.roles[ri];
    if(!deleting){
      ci++;
      el.textContent = word.slice(0, ci);
      if(ci === word.length){ deleting = true; setTimeout(tick, 1600); return; }
    } else {
      ci--;
      el.textContent = word.slice(0, ci);
      if(ci === 0){ deleting = false; ri = (ri+1) % CONFIG.roles.length; }
    }
    setTimeout(tick, deleting ? 45 : 85);
  }
  tick();
})();

// Socials (hero + footer)
function renderSocials(containerId){
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = CONFIG.socials.map(s => {
    const targetAttr = s.url && s.url.startsWith('http') ? 'target="_blank" rel="noopener"' : '';
    return `<a class="social-chip" href="${s.url}" ${targetAttr} aria-label="${s.label}"><i class="${s.icon}"></i></a>`;
  }).join('');
}
renderSocials('hero-socials');
renderSocials('footer-socials');

// About tags cloud
const aboutTagsEl = document.getElementById('about-tags');
if (aboutTagsEl) {
  aboutTagsEl.innerHTML = CONFIG.skillGroups.flatMap(g => g.skills.map(s => s.name)).slice(0, 10)
    .map(t => `<span class="tag-chip">${t}</span>`).join('');
}

// Skills Grid
const skillsGridEl = document.getElementById('skills-grid');
if (skillsGridEl) {
  skillsGridEl.innerHTML = CONFIG.skillGroups.map(g => `
    <div class="glass skill-card reveal">
      <div class="skill-card-head">
        <i class="${g.icon}"></i>
        <h3>${g.title}</h3>
      </div>
      ${g.skills.map(s => `
        <div class="skill-row">
          <div class="top"><span>${s.name}</span><span class="mono">${s.level}%</span></div>
          <div class="bar-track"><div class="bar-fill" data-level="${s.level}"></div></div>
        </div>`).join('')}
    </div>
  `).join('');
}

// Experience Timeline
const timelineEl = document.getElementById('timeline');
if (timelineEl) {
  timelineEl.innerHTML = CONFIG.experience.map(e => `
    <div class="tl-item reveal">
      <div class="tl-dot"></div>
      <div class="glass tl-card">
        <div class="tl-role">${e.role}</div>
        <div class="tl-org">${e.org}</div>
        <span class="tl-date mono">${e.date}</span>
        <ul class="tl-list">${e.points.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>
    </div>
  `).join('');
}

// Hire Links
const hireGridEl = document.getElementById('hire-grid');
if (hireGridEl) {
  hireGridEl.innerHTML = CONFIG.hireLinks.map(h => `
    <a class="glass hire-card reveal" href="${h.url}" target="_blank" rel="noopener">
      <div class="h-left">
        <div class="hire-icon"><i class="${h.icon}"></i></div>
        <div><h4>${h.platform}</h4><span>${h.note}</span></div>
      </div>
      <i class="fa-solid fa-arrow-up-right-from-square" style="color:var(--text-dim); font-size:1.2rem;"></i>
    </a>
  `).join('');
}

// Engineering Projects
const projGridEl = document.getElementById('proj-grid');
if (projGridEl) {
  projGridEl.innerHTML = CONFIG.engineeringProjects.map((p,i) => `
    <div class="glass proj-card reveal">
      <div class="proj-num mono">0${i+1} · PROJECT</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="proj-chips">${p.tags.map(t => `<span class="chip">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

// Testimonials
const testiTrackEl = document.getElementById('testi-track');
if (testiTrackEl) {
  testiTrackEl.innerHTML = CONFIG.testimonials.map(t => `
    <div class="glass testi-card reveal">
      <img src="${t.img}" alt="Client testimonial review" loading="lazy">
    </div>
  `).join('');
}

// Certifications
const certGridEl = document.getElementById('cert-grid');
if (certGridEl) {
  certGridEl.innerHTML = CONFIG.certifications.map(c => `
    <div class="glass cert-card reveal">
      <i class="${c.icon}"></i>
      <div><h4>${c.name}</h4><span>Verified Professional</span></div>
    </div>
  `).join('');
}

// Awards
const awardGridEl = document.getElementById('award-grid');
if (awardGridEl) {
  awardGridEl.innerHTML = CONFIG.awards.map(a => `
    <div class="glass award-card reveal">
      <div class="a-icon"><i class="${a.icon}"></i></div>
      <div><h4>${a.name}</h4><span>Honor &amp; Achievement</span></div>
    </div>
  `).join('');
}

// Education
const eduListEl = document.getElementById('edu-list');
if (eduListEl) {
  eduListEl.innerHTML = CONFIG.education.map(e => `
    <div class="glass edu-card reveal">
      <div class="edu-badge"><i class="${e.icon}"></i></div>
      <div><h4>${e.degree}</h4><div class="school">${e.school}</div><div class="note">${e.note}</div></div>
    </div>
  `).join('');
}

// Languages
const langCardEl = document.getElementById('lang-card');
if (langCardEl) {
  langCardEl.innerHTML = `<h3 style="margin-bottom:24px; font-size:1.2rem; font-weight:800;"><i class="fa-solid fa-language" style="color:var(--aqua);"></i> Languages</h3>` +
    CONFIG.languages.map(l => `
      <div class="lang-row">
        <div class="top"><span>${l.name}</span><span>${l.level}</span></div>
        <div class="bar-track"><div class="bar-fill" data-level="${l.pct}"></div></div>
      </div>
    `).join('');
}

// Contact Details
const contactInfoEl = document.getElementById('contact-info-card');
if (contactInfoEl) {
  contactInfoEl.innerHTML = `
    <h3 style="margin-bottom:24px; font-size:1.25rem; font-weight:800;">Direct Contact</h3>
    <div class="info-row"><div class="ic"><i class="fa-solid fa-phone"></i></div><div><div class="lbl">Phone</div><div class="val">${CONFIG.contact.phone}</div></div></div>
    <div class="info-row"><div class="ic"><i class="fa-solid fa-envelope"></i></div><div><div class="lbl">Email</div><div class="val">${CONFIG.contact.email}</div></div></div>
    <div class="info-row"><div class="ic"><i class="fa-solid fa-location-dot"></i></div><div><div class="lbl">Location</div><div class="val">${CONFIG.contact.location}</div></div></div>
  `;
}

/* =================== THEME TOGGLE =================== */
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
function setTheme(mode){
  root.setAttribute('data-theme', mode);
  if (themeToggle) {
    themeToggle.innerHTML = mode === 'light' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  }
  localStorage.setItem('hasanvlo-theme', mode);
}
setTheme(localStorage.getItem('hasanvlo-theme') || 'dark');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    setTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });
}

/* =================== MOBILE MENU =================== */
const mobileMenu = document.getElementById('mobileMenu');
const burgerBtn = document.getElementById('burgerBtn');
const mmClose = document.getElementById('mmClose');

if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
}
if (mmClose && mobileMenu) {
  mmClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
}
if (mobileMenu) {
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
}

/* =================== SCROLL REVEAL & COUNTERS =================== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.level + '%';
      });
      const counters = entry.target.querySelectorAll('[data-count]');
      counters.forEach(c => {
        const target = parseInt(c.dataset.count, 10);
        let cur = 0;
        const step = Math.max(1, Math.round(target/30));
        const iv = setInterval(() => {
          cur += step;
          if(cur >= target){ cur = target; clearInterval(iv); }
          c.textContent = cur;
        }, 30);
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* =================== WHATSAPP CHAT =================== */
const waFab = document.getElementById('waFab');
const waPanel = document.getElementById('waPanel');
const waSendBtn = document.getElementById('waSendBtn');

if (waFab && waPanel) {
  waFab.addEventListener('click', () => waPanel.classList.toggle('open'));
}
if (waSendBtn) {
  waSendBtn.addEventListener('click', () => {
    const msg = encodeURIComponent(CONFIG.whatsapp.prefillMessage);
    window.open(`https://wa.me/${CONFIG.whatsapp.number}?text=${msg}`, '_blank');
  });
}
document.addEventListener('click', (e) => {
  if(waPanel && waFab && !waPanel.contains(e.target) && !waFab.contains(e.target)){
    waPanel.classList.remove('open');
  }
});

/* =================== CONTACT FORM =================== */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    const data = {
      name: document.getElementById('cf-name').value.trim(),
      phone: document.getElementById('cf-phone').value.trim(),
      email: document.getElementById('cf-email').value.trim(),
      message: document.getElementById('cf-message').value.trim()
    };

    status.className = 'form-status';
    status.textContent = 'Sending message...';

    try{
      let sentSomewhere = false;

      if(CONFIG.integrations.googleScriptUrl){
        await fetch(CONFIG.integrations.googleScriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(data)
        });
        sentSomewhere = true;
      }

      if(CONFIG.integrations.telegramBotToken && CONFIG.integrations.telegramChatId){
        const messageText = `New portfolio inquiry\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nMessage: ${data.message}`;
        const text = encodeURIComponent(messageText);
        await fetch(`https://api.telegram.org/bot${CONFIG.integrations.telegramBotToken}/sendMessage?chat_id=${CONFIG.integrations.telegramChatId}&text=${text}`);
        sentSomewhere = true;
      }

      if(sentSomewhere){
        status.classList.add('ok');
        status.textContent = 'Thank you! Your message has been sent successfully.';
        e.target.reset();
      } else {
        status.classList.add('err');
        status.textContent = 'Form integration not yet configured. Please contact via WhatsApp or email directly.';
      }
    } catch(err){
      status.classList.add('err');
      status.textContent = 'Could not send message. Please connect with me on WhatsApp.';
    }
  });
}

/* ============================================================
   PORTFOLIO BLOG RENDERING & READ MODAL
   ============================================================ */
const blogGridEl = document.getElementById('blog-grid');
if (blogGridEl && CONFIG.blogPosts) {
  blogGridEl.innerHTML = CONFIG.blogPosts.map(post => `
    <article class="glass blog-card reveal">
      <div class="blog-meta">
        <span class="blog-cat"><i class="fa-solid fa-tag"></i> ${post.category}</span>
        <span class="blog-date mono">${post.date}</span>
      </div>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <div class="blog-foot">
        <span class="mono" style="font-size:0.8rem; color:var(--text-dim);"><i class="fa-regular fa-clock"></i> ${post.readTime}</span>
        <button class="btn btn-ghost btn-sm" onclick="openBlogArticle('${post.id}')">Read Article <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </article>
  `).join('');
}

window.openBlogArticle = function(postId) {
  const post = CONFIG.blogPosts.find(p => p.id === postId);
  if (!post) return;
  const contentEl = document.getElementById('blogArticleContent');
  if (contentEl) {
    contentEl.innerHTML = `
      <div class="blog-article-head">
        <span class="blog-cat"><i class="fa-solid fa-tag"></i> ${post.category}</span>
        <h2 style="font-size:1.8rem; margin:14px 0 10px; line-height:1.3;">${post.title}</h2>
        <div style="font-size:0.85rem; color:var(--text-dim); display:flex; gap:16px; margin-bottom:24px;">
          <span><i class="fa-regular fa-calendar"></i> ${post.date}</span>
          <span><i class="fa-regular fa-clock"></i> ${post.readTime}</span>
        </div>
      </div>
      <div class="blog-article-body">${post.content}</div>
    `;
  }
  openModal('blogModal');
};

/* ============================================================
   MODAL CONTROLLER (Tools, Blog, Legal)
   ============================================================ */
window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

// Close modals when clicking backdrop
document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

/* ============================================================
   LEGAL PAGES TAB SWITCHER
   ============================================================ */
window.openLegalModal = function(tabName = 'privacy') {
  openModal('legalModal');
  switchLegalTab(tabName);
};

window.switchLegalTab = function(tabName) {
  document.querySelectorAll('.legal-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  const container = document.getElementById('legalTabContent');
  if (container && CONFIG.legal[tabName]) {
    container.innerHTML = CONFIG.legal[tabName];
  }
};

/* ============================================================
   FREE TOOLS LOGIC
   ============================================================ */
// 1. UTM Builder
window.buildUtmUrl = function() {
  const baseUrl = document.getElementById('utm-url')?.value.trim() || '';
  const source = document.getElementById('utm-source')?.value.trim() || '';
  const medium = document.getElementById('utm-medium')?.value.trim() || '';
  const campaign = document.getElementById('utm-campaign')?.value.trim() || '';
  const outputEl = document.getElementById('utm-result');

  if (!baseUrl) {
    if (outputEl) outputEl.value = 'Please enter a valid Website URL.';
    return;
  }

  try {
    let url = new URL(baseUrl.startsWith('http') ? baseUrl : 'https://' + baseUrl);
    if (source) url.searchParams.set('utm_source', source);
    if (medium) url.searchParams.set('utm_medium', medium);
    if (campaign) url.searchParams.set('utm_campaign', campaign);
    if (outputEl) outputEl.value = url.toString();
  } catch (e) {
    if (outputEl) outputEl.value = 'Invalid URL format.';
  }
};

// 2. T-Shirt Print DPI Calculator
window.calcDpiResolution = function() {
  const wInches = parseFloat(document.getElementById('dpi-w')?.value) || 0;
  const hInches = parseFloat(document.getElementById('dpi-h')?.value) || 0;
  const targetDpi = parseInt(document.getElementById('dpi-val')?.value, 10) || 300;
  const resEl = document.getElementById('dpi-result');

  if (wInches > 0 && hInches > 0) {
    const pxW = Math.round(wInches * targetDpi);
    const pxH = Math.round(hInches * targetDpi);
    const megapixels = ((pxW * pxH) / 1000000).toFixed(1);
    if (resEl) {
      resEl.innerHTML = `<strong>Required Canvas:</strong> ${pxW} × ${pxH} px @ ${targetDpi} DPI (~${megapixels} MP)<br><span style="font-size:0.85rem; color:var(--aqua);">Standard POD format: Transparent PNG, RGB Color Mode</span>`;
    }
  } else {
    if (resEl) resEl.innerHTML = 'Enter print dimensions in inches above.';
  }
};

// 3. Word & Text Analyzer
window.analyzeTextStats = function() {
  const text = document.getElementById('tool-text-input')?.value || '';
  const charCount = text.length;
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const readTimeMin = Math.ceil(wordCount / 200);

  const charEl = document.getElementById('stat-chars');
  const wordEl = document.getElementById('stat-words');
  const timeEl = document.getElementById('stat-time');

  if (charEl) charEl.textContent = charCount;
  if (wordEl) wordEl.textContent = wordCount;
  if (timeEl) timeEl.textContent = wordCount > 0 ? `${readTimeMin} min` : '0 min';
};

// Copy helper
window.copyToolResult = function(inputId) {
  const el = document.getElementById(inputId);
  if (el && el.value) {
    navigator.clipboard.writeText(el.value);
    alert('Copied to clipboard!');
  }
};

/* ============================================================
   GRAPHIC DESIGN SHOWCASE & LIGHTBOX (Behind the Designs)
   ============================================================ */
let activeDesignsList = [];
let currentLightboxItemIndex = 0;

window.openDesignLightbox = function(id) {
  activeDesignsList = CONFIG.graphicDesigns || [];
  const idx = activeDesignsList.findIndex(item => item.id === id);
  if (idx !== -1) {
    currentLightboxItemIndex = idx;
    updateDesignLightboxContent();
    openModal('designModal');
  }
};

function updateDesignLightboxContent() {
  if (!activeDesignsList.length) return;
  const item = activeDesignsList[currentLightboxItemIndex];
  
  const imgEl = document.getElementById('designModalImg');
  const titleEl = document.getElementById('designModalTitle');
  const tagEl = document.getElementById('designModalTag');
  const descEl = document.getElementById('designModalDesc');
  const counterEl = document.getElementById('designModalCounter');

  if (imgEl) imgEl.src = item.img;
  if (titleEl) titleEl.textContent = item.title;
  if (tagEl) tagEl.textContent = item.category;
  if (descEl) descEl.textContent = item.desc || '';
  if (counterEl) counterEl.textContent = `${currentLightboxItemIndex + 1} / ${activeDesignsList.length}`;
}

window.nextDesignLightbox = function() {
  if (!activeDesignsList.length) return;
  currentLightboxItemIndex = (currentLightboxItemIndex + 1) % activeDesignsList.length;
  updateDesignLightboxContent();
};

window.prevDesignLightbox = function() {
  if (!activeDesignsList.length) return;
  currentLightboxItemIndex = (currentLightboxItemIndex - 1 + activeDesignsList.length) % activeDesignsList.length;
  updateDesignLightboxContent();
};

// Keyboard Arrow navigation for Lightbox
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('designModal');
  if (modal && modal.classList.contains('active')) {
    if (e.key === 'ArrowRight') nextDesignLightbox();
    if (e.key === 'ArrowLeft') prevDesignLightbox();
  }
});

(() => {
  const track = document.getElementById('designTrack');
  const prevBtn = document.getElementById('designCarouselPrev');
  const nextBtn = document.getElementById('designCarouselNext');
  const container = document.getElementById('designTrackContainer');
  const filterBtns = document.querySelectorAll('.design-filter-btn');

  if (!track || !container) return;

  let currentIndex = 0;
  let isHovered = false;
  let autoplayTimer = null;
  let currentFilter = 'all';

  function renderCards() {
    let items = CONFIG.graphicDesigns || [];
    if (currentFilter !== 'all') {
      items = items.filter(item => item.catKey === currentFilter);
    }

    if (items.length === 0) {
      track.innerHTML = `<div style="padding:40px; text-align:center; color:var(--text-muted);">No designs found in this category.</div>`;
      return;
    }

    // Duplicate cards if few items so carousel scrolls seamlessly
    let displayItems = [...items];
    if (displayItems.length < 5) {
      displayItems = [...displayItems, ...displayItems, ...displayItems];
    }

    track.innerHTML = displayItems.map((item) => `
      <div class="design-card" onclick="openDesignLightbox(${item.id})" role="button" tabindex="0" title="${item.title}">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <div class="design-card-overlay">
          <span class="design-tag">${item.category}</span>
          <h4>${item.title}</h4>
          <div class="design-card-preview-hint">
            <i class="fa-solid fa-expand"></i> Click to View Fullscreen
          </div>
        </div>
      </div>
    `).join('');

    currentIndex = 0;
    updateSlidePosition();
  }

  function getCardWidth() {
    const card = track.querySelector('.design-card');
    return card ? card.offsetWidth + 24 : 364; // card width + gap
  }

  function updateSlidePosition() {
    const maxIndex = Math.max(0, track.children.length - 1);
    if (currentIndex < 0) currentIndex = maxIndex;
    if (currentIndex > maxIndex) currentIndex = 0;

    const offset = -(currentIndex * getCardWidth());
    track.style.transform = `translateX(${offset}px)`;
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= track.children.length - 2) {
      currentIndex = 0;
    }
    updateSlidePosition();
  }

  function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = Math.max(0, track.children.length - 3);
    }
    updateSlidePosition();
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoplay(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoplay(); });

  // Filter button handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderCards();
      resetAutoplay();
    });
  });

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      if (!isHovered) nextSlide();
    }, 3500);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  container.addEventListener('mouseenter', () => { isHovered = true; });
  container.addEventListener('mouseleave', () => { isHovered = false; });

  // Touch / Drag Support
  let startX = 0, currentX = 0, isDragging = false;

  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    stopAutoplay();
  }, { passive: true });

  container.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
  }, { passive: true });

  container.addEventListener('touchend', () => {
    if (!isDragging) return;
    const diff = startX - currentX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    isDragging = false;
    startAutoplay();
  });

  window.addEventListener('resize', updateSlidePosition);

  // Initial render
  renderCards();
  startAutoplay();
})();


