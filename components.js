document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // 1. INJECT THE NAVBAR
  const globalHeader = document.getElementById("global-header");
  if (globalHeader) {
    globalHeader.innerHTML = `
      <header id="navbar" class="fixed top-0 left-0 w-full z-50 transition-all duration-500">
        <div class="max-w-7xl mx-auto px-6 lg:px-10">
          <div id="navbarInner" class="mt-5 rounded-full px-8 py-5 flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-500">
            <!-- LOGO -->
            <div class="flex items-center gap-3">
              <a href="index.html">
                <img src="./images/logo.png" alt="Madhusudan Logo" class="w-32" id="logoText" />
              </a>
            </div>

            <!-- MENU (DESKTOP) -->
            <nav class="hidden lg:flex items-center gap-8 font-medium relative">
              <a href="index.html" data-page="index.html" class="nav-link text-white hover:text-primary pb-1 border-b-2 border-transparent hover:border-primary">Home</a>
              
              <!-- Dairy Products Dropdown -->
              <div class="group relative inline-flex">
                <button type="button" class="nav-link text-white hover:text-primary inline-flex items-center gap-1 pb-1 border-b-2 border-transparent hover:border-primary">
                  Dairy Products
                  <i class="ri-arrow-down-s-line"></i>
                </button>
                <div class="absolute left-0 top-full hidden group-hover:block min-w-[220px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-50 py-2">
                  <a href="dairyproduct.html" class="block px-6 py-3 text-gray-800 hover:bg-red-50 hover:text-primary transition font-medium">Milk</a>
                  <a href="productDetails.html" class="block px-6 py-3 text-gray-800 hover:bg-red-50 hover:text-primary transition font-medium">Desi Ghee</a>
                  <a href="dairyproduct.html" class="block px-6 py-3 text-gray-800 hover:bg-red-50 hover:text-primary transition font-medium">Dahi</a>
                  <a href="dairyproduct.html" class="block px-6 py-3 text-gray-800 hover:bg-red-50 hover:text-primary transition font-medium">Paneer</a>
                  <a href="dairyproduct.html" class="block px-6 py-3 text-gray-800 hover:bg-red-50 hover:text-primary transition font-medium">Butter</a>
                </div>
              </div>

              <!-- Frozen Products Dropdown -->
              <div class="group relative inline-flex">
                <button type="button" class="nav-link text-white hover:text-primary inline-flex items-center gap-1 pb-1 border-b-2 border-transparent hover:border-primary">
                  Frozen Products
                  <i class="ri-arrow-down-s-line"></i>
                </button>
                <div class="absolute left-0 top-full hidden group-hover:block min-w-[240px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 z-50 py-2">
                  <a href="dairyproduct.html" class="block px-6 py-3 text-gray-800 hover:bg-red-50 hover:text-primary transition font-medium">Frozen Green Peas</a>
                  <a href="dairyproduct.html" class="block px-6 py-3 text-gray-800 hover:bg-red-50 hover:text-primary transition font-medium">Frozen Mix Vegetable</a>
                  <a href="dairyproduct.html" class="block px-6 py-3 text-gray-800 hover:bg-red-50 hover:text-primary transition font-medium">Frozen Sweet Corn</a>
                  <a href="dairyproduct.html" class="block px-6 py-3 text-gray-800 hover:bg-red-50 hover:text-primary transition font-medium">Frozen Baby Corn</a>
                  <a href="dairyproduct.html" class="block px-6 py-3 text-gray-800 hover:bg-red-50 hover:text-primary transition font-medium">Frozen French Fries</a>
                  <a href="dairyproduct.html" class="block px-6 py-3 text-gray-800 hover:bg-red-50 hover:text-primary transition font-medium">Frozen Jackfruit</a>
                  <a href="dairyproduct.html" class="block px-6 py-3 text-gray-800 hover:bg-red-50 hover:text-primary transition font-medium">Frozen Matar Paneer</a>
                  <a href="dairyproduct.html" class="block px-6 py-3 text-gray-800 hover:bg-red-50 hover:text-primary transition font-medium">Frozen Soya Chaap</a>
                </div>
              </div>

              <a href="aboutUs.html" data-page="aboutUs.html" class="nav-link text-white hover:text-primary pb-1 border-b-2 border-transparent hover:border-primary">About Us</a>
              <a href="recipes.html" data-page="recipes.html" class="nav-link text-white hover:text-primary pb-1 border-b-2 border-transparent hover:border-primary">Recipes</a>
              <a href="blog.html" data-page="blog.html" class="nav-link text-white hover:text-primary pb-1 border-b-2 border-transparent hover:border-primary">Blogs</a>
              <a href="contactUs.html" data-page="contactUs.html" class="nav-link text-white hover:text-primary pb-1 border-b-2 border-transparent hover:border-primary">Contact Us</a>
            </nav>

            <!-- CTA BUTTON & MOBILE TOGGLE -->
            <div class="flex items-center gap-4">
              <a href="contactUs.html" id="contactBtn" class="hidden lg:inline-flex bg-primary hover:bg-primary-dark text-white px-7 py-3 rounded-full font-semibold transition-all">
                Contact Us
              </a>
              
              <!-- Mobile Hamburger Menu Button -->
              <button id="menuToggle" type="button" class="lg:hidden text-white text-3xl focus:outline-none transition-colors">
                <i class="ri-menu-line" id="menuIcon"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- MOBILE MENU OVERLAY DRAWER -->
        <div id="mobileMenu" class="fixed inset-y-0 right-0 w-80 bg-white/95 backdrop-blur-2xl border-l border-gray-100 shadow-2xl z-50 transform translate-x-full transition-transform duration-500 ease-out py-8 px-6 overflow-y-auto lg:hidden">
          <!-- Close Button -->
          <div class="flex items-center justify-between border-b border-gray-100 pb-5 mb-6">
            <img src="./images/logo.png" alt="Logo" class="w-28" />
            <button id="menuClose" class="text-gray-800 text-3xl hover:text-primary focus:outline-none">
              <i class="ri-close-line"></i>
            </button>
          </div>

          <!-- Menu Links -->
          <nav class="flex flex-col gap-6 text-lg font-semibold text-gray-800">
            <a href="index.html" data-page="index.html" class="mobile-link hover:text-primary py-2 border-b border-gray-50">Home</a>
            
            <!-- Mobile Dairy Products Toggle -->
            <div>
              <button type="button" class="mobile-dropdown-btn w-full text-left flex justify-between items-center py-2 border-b border-gray-50 hover:text-primary">
                Dairy Products
                <i class="ri-arrow-down-s-line transition-transform duration-300"></i>
              </button>
              <div class="mobile-dropdown-content hidden pl-4 mt-2 space-y-3 text-base font-medium text-gray-600 border-l border-red-100 ml-1">
                <a href="dairyproduct.html" class="block py-1 hover:text-primary">Milk</a>
                <a href="productDetails.html" class="block py-1 hover:text-primary">Desi Ghee</a>
                <a href="dairyproduct.html" class="block py-1 hover:text-primary">Dahi</a>
                <a href="dairyproduct.html" class="block py-1 hover:text-primary">Paneer</a>
                <a href="dairyproduct.html" class="block py-1 hover:text-primary">Butter</a>
              </div>
            </div>

            <!-- Mobile Frozen Products Toggle -->
            <div>
              <button type="button" class="mobile-dropdown-btn w-full text-left flex justify-between items-center py-2 border-b border-gray-50 hover:text-primary">
                Frozen Products
                <i class="ri-arrow-down-s-line transition-transform duration-300"></i>
              </button>
              <div class="mobile-dropdown-content hidden pl-4 mt-2 space-y-3 text-base font-medium text-gray-600 border-l border-red-100 ml-1">
                <a href="dairyproduct.html" class="block py-1 hover:text-primary">Frozen Green Peas</a>
                <a href="dairyproduct.html" class="block py-1 hover:text-primary">Frozen Mix Vegetable</a>
                <a href="dairyproduct.html" class="block py-1 hover:text-primary">Frozen Sweet Corn</a>
                <a href="dairyproduct.html" class="block py-1 hover:text-primary">Frozen Baby Corn</a>
                <a href="dairyproduct.html" class="block py-1 hover:text-primary">Frozen French Fries</a>
                <a href="dairyproduct.html" class="block py-1 hover:text-primary">Frozen Jackfruit</a>
                <a href="dairyproduct.html" class="block py-1 hover:text-primary">Frozen Matar Paneer</a>
                <a href="dairyproduct.html" class="block py-1 hover:text-primary">Frozen Soya Chaap</a>
              </div>
            </div>

            <a href="aboutUs.html" data-page="aboutUs.html" class="mobile-link hover:text-primary py-2 border-b border-gray-50">About Us</a>
            <a href="recipes.html" data-page="recipes.html" class="mobile-link hover:text-primary py-2 border-b border-gray-50">Recipes</a>
            <a href="blog.html" data-page="blog.html" class="mobile-link hover:text-primary py-2 border-b border-gray-50">Blogs</a>
            <a href="contactUs.html" data-page="contactUs.html" class="mobile-link hover:text-primary py-2 border-b border-gray-50">Contact Us</a>
          </nav>

          <div class="mt-10">
            <a href="contactUs.html" class="block text-center bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold shadow-lg transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
        
        <!-- BACKDROP FOR MOBILE MENU -->
        <div id="mobileBackdrop" class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 hidden lg:hidden"></div>
      </header>
    `;
  }

  const pageHeroes = {
    "aboutUs.html": {
      eyebrow: "Company / About Us",
      title: "A Legacy Of Purity, Trust & Modern Dairy Excellence",
      subtitle: "Discover the Madhusudan journey: farmer-first sourcing, uncompromising quality, and food products created for modern Indian families.",
      image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=1800&auto=format&fit=crop",
      chips: ["Since 1991", "ISO Led Quality", "Farmer Focused"]
    },
    "dairyproduct.html": {
      eyebrow: "Products / Dairy & Frozen",
      title: "Premium Everyday Products Crafted With Care",
      subtitle: "Explore fresh dairy and frozen essentials designed for consistent taste, purity, and professional-grade reliability.",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1800&auto=format&fit=crop",
      chips: ["Fresh Dairy", "Frozen Range", "Quality Checked"]
    },
    "productDetails.html": {
      eyebrow: "Product Detail",
      title: "Authentic Dairy Richness For Elevated Cooking",
      subtitle: "A closer look at premium Madhusudan products, their purity, usage, nutrition, and culinary versatility.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1800&auto=format&fit=crop",
      chips: ["Pure Taste", "Rich Aroma", "Trusted Source"]
    },
    "recipes.html": {
      eyebrow: "Kitchen / Recipes",
      title: "Inspired Recipes For Beautiful Everyday Meals",
      subtitle: "Bring Madhusudan goodness into your kitchen with refined recipes, simple methods, and memorable flavours.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1800&auto=format&fit=crop",
      chips: ["Family Favourites", "Dairy Rich", "Easy Cooking"]
    },
    "recipesDetails.html": {
      eyebrow: "Recipe Detail",
      title: "A Signature Dish, Finished With Premium Dairy",
      subtitle: "Step-by-step inspiration for creating a polished, flavourful dish using trusted Madhusudan ingredients.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1800&auto=format&fit=crop",
      chips: ["Chef Notes", "Simple Steps", "Rich Finish"]
    },
    "blog.html": {
      eyebrow: "Insights / Blogs",
      title: "Stories From Dairy, Food Innovation & Modern Living",
      subtitle: "Read perspectives on nutrition, farming, quality, and the evolving world of premium food products.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop",
      chips: ["Nutrition", "Innovation", "Brand Stories"]
    },
    "contactUs.html": {
      eyebrow: "Contact / Support",
      title: "Start A Conversation With Madhusudan",
      subtitle: "Connect with our team for business enquiries, distribution, product support, partnerships, and customer care.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1800&auto=format&fit=crop",
      chips: ["Business Enquiries", "Support", "Partnerships"]
    },
    "career.html": {
      eyebrow: "Careers / Join Us",
      title: "Build A Meaningful Career In Food Excellence",
      subtitle: "Join teams shaping quality, operations, innovation, and distribution for one of India's trusted food brands.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1800&auto=format&fit=crop",
      chips: ["Growth", "Purpose", "Team Culture"]
    },
    "client.html": {
      eyebrow: "Partners / Clients",
      title: "Trusted By Businesses, Retailers & Institutions",
      subtitle: "A premium partner network built on reliability, supply strength, food safety, and long-term trust.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1800&auto=format&fit=crop",
      chips: ["Retail", "Distribution", "Institutional"]
    },
    "infrastructure.html": {
      eyebrow: "Infrastructure",
      title: "Modern Facilities Built For Scale, Freshness & Safety",
      subtitle: "Explore the processing, logistics, cold-chain, and quality systems behind every Madhusudan product.",
      image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1800&auto=format&fit=crop",
      chips: ["Processing", "Cold Chain", "Quality Labs"]
    },
    "legacy.html": {
      eyebrow: "Legacy",
      title: "Decades Of Trust, Carried Forward With Vision",
      subtitle: "From humble beginnings to a modern food enterprise, our legacy is built on consistency and care.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1800&auto=format&fit=crop",
      chips: ["Heritage", "Integrity", "Progress"]
    },
    "media.html": {
      eyebrow: "Media / Events",
      title: "Moments, Milestones & Brand Stories In Focus",
      subtitle: "Explore launches, events, media highlights, and the visual world of Madhusudan.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1800&auto=format&fit=crop",
      chips: ["Events", "Gallery", "Announcements"]
    },
    "privacyPolicy.html": {
      eyebrow: "Privacy Policy",
      title: "Clear, Responsible & Transparent Data Practices",
      subtitle: "Understand how Madhusudan handles information with care, responsibility, and respect for your privacy.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1800&auto=format&fit=crop",
      chips: ["Transparency", "Security", "Trust"]
    },
    "demo.html": {
      eyebrow: "Preview",
      title: "Premium Madhusudan Digital Experience",
      subtitle: "A refined preview page aligned with the brand's visual language and modern interface direction.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1800&auto=format&fit=crop",
      chips: ["Premium UI", "Responsive", "Brand Led"]
    }
  };

  const hero = pageHeroes[currentPath];
  if (hero && !document.querySelector(".page-hero")) {
    document.body.classList.add("inner-page");
    const heroSection = document.createElement("section");
    heroSection.className = "page-hero";
    heroSection.style.setProperty("--hero-image", `url('${hero.image}')`);
    heroSection.innerHTML = `
      <div class="page-hero__content">
        <div data-reveal>
          <span class="page-hero__eyebrow">${hero.eyebrow}</span>
          <h1 class="page-hero__title">${hero.title}</h1>
          <p class="page-hero__subtitle">${hero.subtitle}</p>
          <div class="page-hero__meta">
            ${hero.chips.map(chip => `<span class="page-hero__chip">${chip}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
    if (globalHeader) {
      globalHeader.insertAdjacentElement("afterend", heroSection);
    } else {
      document.body.prepend(heroSection);
    }

    const pagesWithLegacyTopHeroes = new Set([
      "aboutUs.html",
      "blog.html",
      "career.html",
      "client.html",
      "contactUs.html",
      "infrastructure.html",
      "legacy.html",
      "media.html",
      "privacyPolicy.html",
      "productDetails.html",
      "recipes.html",
      "recipesDetails.html"
    ]);

    const legacyTopHero = heroSection.nextElementSibling;
    if (pagesWithLegacyTopHeroes.has(currentPath) && legacyTopHero && legacyTopHero.tagName === "SECTION") {
      legacyTopHero.classList.add("legacy-top-hero-hidden");
    }
  } else if (currentPath === "index.html") {
    document.body.classList.add("home-page");
  }

  // 2. INJECT THE FOOTER
  const globalFooter = document.getElementById("global-footer");
  if (globalFooter) {
    globalFooter.innerHTML = `
      <footer class="bg-primary-color text-white pt-24 pb-12">
        <div class="max-w-7xl mx-auto px-6 lg:px-10">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-white/10 pb-20">
            <!-- Col 1: About SMC -->
            <div class="space-y-6">
              <a href="index.html">
                <img src="./images/logo.png" alt="Madhusudan" class="w-36 bg-white/10 p-2 rounded-xl" />
              </a>
              <p class="text-white/70 leading-8 text-base">
                Delivering premium quality, authentic dairy and food products with trust and innovation since decades.
              </p>
            </div>

            <!-- Col 2: Company -->
            <div>
              <h4 class="text-2xl font-serif font-bold mb-8 relative pb-2 border-b border-white/10">
                Company
              </h4>
              <ul class="space-y-4 text-white/60 text-base font-medium">
                <li><a href="aboutUs.html" class="hover:text-white hover:pl-2 transition-all duration-300">About Us</a></li>
                <li><a href="legacy.html" class="hover:text-white hover:pl-2 transition-all duration-300">Our Legacy</a></li>
                <li><a href="infrastructure.html" class="hover:text-white hover:pl-2 transition-all duration-300">Infrastructure</a></li>
                <li><a href="media.html" class="hover:text-white hover:pl-2 transition-all duration-300">Media & Events</a></li>
              </ul>
            </div>

            <!-- Col 3: Resources -->
            <div>
              <h4 class="text-2xl font-serif font-bold mb-8 relative pb-2 border-b border-white/10">
                Resources
              </h4>
              <ul class="space-y-4 text-white/60 text-base font-medium">
                <li><a href="career.html" class="hover:text-white hover:pl-2 transition-all duration-300">Careers</a></li>
                <li><a href="client.html" class="hover:text-white hover:pl-2 transition-all duration-300">Our Clients</a></li>
                <li><a href="recipes.html" class="hover:text-white hover:pl-2 transition-all duration-300">Recipes Collection</a></li>
                <li><a href="privacyPolicy.html" class="hover:text-white hover:pl-2 transition-all duration-300">Privacy Policy</a></li>
              </ul>
            </div>

            <!-- Col 4: Contact -->
            <div>
              <h4 class="text-2xl font-serif font-bold mb-8 relative pb-2 border-b border-white/10">
                Contact
              </h4>
              <ul class="space-y-4 text-white/60 text-base font-medium">
                <li class="flex items-center gap-3">
                  <i class="ri-mail-line text-xl text-white"></i>
                  <a href="mailto:info@madhusudan.com" class="hover:text-white transition">info@madhusudan.com</a>
                </li>
                <li class="flex items-center gap-3">
                  <i class="ri-phone-line text-xl text-white"></i>
                  <a href="tel:+919876543210" class="hover:text-white transition">+91 9876543210</a>
                </li>
                <li class="flex items-start gap-3">
                  <i class="ri-map-pin-line text-xl text-white mt-1"></i>
                  <span>New Delhi, India</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Bottom Footer -->
          <div class="flex flex-col md:flex-row justify-between items-center pt-10 gap-5">
            <p class="text-white/50 text-sm font-medium">
              © 2026 Madhusudan Group. All rights reserved.
            </p>
            <div class="flex items-center gap-5 text-2xl">
              <a href="#" class="hover:text-primary transition hover:scale-110"><i class="ri-facebook-circle-line"></i></a>
              <a href="#" class="hover:text-primary transition hover:scale-110"><i class="ri-instagram-line"></i></a>
              <a href="#" class="hover:text-primary transition hover:scale-110"><i class="ri-linkedin-box-line"></i></a>
              <a href="#" class="hover:text-primary transition hover:scale-110"><i class="ri-youtube-line"></i></a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  // 3. NAV SCROLL EFFECTS
  const navbar = document.getElementById("navbarInner");
  const logoText = document.getElementById("logoText");
  const navLinks = document.querySelectorAll(".nav-link");
  const menuToggle = document.getElementById("menuToggle");

  function handleNavbarScroll() {
    if (navbar) {
      if (window.scrollY > 80) {
        navbar.classList.remove("bg-white/10", "border-white/20");
        navbar.classList.add("bg-white", "border-gray-200", "shadow-[0_15px_40px_rgba(0,0,0,0.08)]", "py-4");
        navbar.classList.remove("py-5");
        if (menuToggle) {
          menuToggle.classList.remove("text-white");
          menuToggle.classList.add("text-gray-800");
        }
        navLinks.forEach(link => {
          link.classList.remove("text-white");
          link.classList.add("text-gray-800");
        });
      } else {
        navbar.classList.remove("bg-white", "border-gray-200", "shadow-[0_15px_40px_rgba(0,0,0,0.08)]", "py-4");
        navbar.classList.add("bg-white/10", "border-white/20", "py-5");
        if (menuToggle) {
          menuToggle.classList.remove("text-gray-800");
          menuToggle.classList.add("text-white");
        }
        navLinks.forEach(link => {
          link.classList.remove("text-gray-800");
          link.classList.add("text-white");
        });
      }
    }
  }

  window.addEventListener("scroll", handleNavbarScroll);
  handleNavbarScroll(); // Run immediately in case user starts scrolled

  // 4. ACTIVE ROUTING HIGHLIGHT
  navLinks.forEach(link => {
    if (link.getAttribute("data-page") === currentPath) {
      link.classList.add("text-primary", "border-primary");
      link.classList.remove("border-transparent");
    }
  });

  const mobileLinks = document.querySelectorAll(".mobile-link");
  mobileLinks.forEach(link => {
    if (link.getAttribute("data-page") === currentPath) {
      link.classList.add("text-primary");
    }
  });

  // 5. MOBILE DRAWER NAVIGATION OPEN/CLOSE
  const mobileMenu = document.getElementById("mobileMenu");
  const menuClose = document.getElementById("menuClose");
  const mobileBackdrop = document.getElementById("mobileBackdrop");

  if (menuToggle && mobileMenu && menuClose && mobileBackdrop) {
    const openMobileMenu = () => {
      mobileMenu.classList.remove("translate-x-full");
      mobileBackdrop.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    };

    const closeMobileMenu = () => {
      mobileMenu.classList.add("translate-x-full");
      mobileBackdrop.classList.add("hidden");
      document.body.style.overflow = "";
    };

    menuToggle.addEventListener("click", openMobileMenu);
    menuClose.addEventListener("click", closeMobileMenu);
    mobileBackdrop.addEventListener("click", closeMobileMenu);
  }

  // 6. MOBILE DROPDOWN TOGGLES
  const dropdownButtons = document.querySelectorAll(".mobile-dropdown-btn");
  dropdownButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const arrow = btn.querySelector("i");
      if (content) {
        content.classList.toggle("hidden");
      }
      if (arrow) {
        arrow.classList.toggle("rotate-180");
      }
    });
  });

  // 7. PREMIUM PAGE MOTION
  document.querySelectorAll("body:not(.home-page) section:not(.page-hero) > div, .premium-card, .custom-card, article, form").forEach((el, index) => {
    if (!el.hasAttribute("data-reveal")) {
      el.setAttribute("data-reveal", "");
      el.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    }
  });

  const revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

  if (window.AOS) {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 80
    });
  }

  if (window.Swiper && document.querySelector(".heroSwiper")) {
    new Swiper(".heroSwiper", {
      loop: true,
      effect: "fade",
      speed: 1200,
      autoplay: {
        delay: 4800,
        disableOnInteraction: false
      }
    });
  }

  if (window.Swiper) {
    document.querySelectorAll(".swiper:not(.heroSwiper)").forEach((swiperEl) => {
      if (!swiperEl.swiper) {
        new Swiper(swiperEl, {
          loop: true,
          speed: 900,
          grabCursor: true,
          autoplay: {
            delay: 3600,
            disableOnInteraction: false
          }
        });
      }
    });
  }

  const blogGrid = document.querySelector("#blogs .grid");
  const blogPagination = document.getElementById("blogPagination");
  if (blogGrid && blogPagination) {
    const blogCards = Array.from(blogGrid.children).filter((card) => card.classList.contains("group"));
    const cardsPerPage = 3;
    const totalPages = Math.ceil(blogCards.length / cardsPerPage);
    let activePage = 1;

    const renderBlogPage = () => {
      blogCards.forEach((card, index) => {
        const pageNumber = Math.floor(index / cardsPerPage) + 1;
        card.style.display = pageNumber === activePage ? "" : "none";
      });

      blogPagination.innerHTML = "";
      if (totalPages <= 1) return;

      const previous = document.createElement("button");
      previous.type = "button";
      previous.innerHTML = '<i class="ri-arrow-left-s-line"></i>';
      previous.disabled = activePage === 1;
      previous.setAttribute("aria-label", "Previous blog page");
      blogPagination.appendChild(previous);

      for (let page = 1; page <= totalPages; page += 1) {
        const pageButton = document.createElement("button");
        pageButton.type = "button";
        pageButton.textContent = page;
        pageButton.classList.toggle("is-active", page === activePage);
        pageButton.setAttribute("aria-label", `Blog page ${page}`);
        pageButton.addEventListener("click", () => {
          activePage = page;
          renderBlogPage();
          document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        blogPagination.appendChild(pageButton);
      }

      const next = document.createElement("button");
      next.type = "button";
      next.innerHTML = '<i class="ri-arrow-right-s-line"></i>';
      next.disabled = activePage === totalPages;
      next.setAttribute("aria-label", "Next blog page");
      blogPagination.appendChild(next);

      previous.addEventListener("click", () => {
        if (activePage > 1) {
          activePage -= 1;
          renderBlogPage();
          document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });

      next.addEventListener("click", () => {
        if (activePage < totalPages) {
          activePage += 1;
          renderBlogPage();
          document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    };

    renderBlogPage();
  }
});
