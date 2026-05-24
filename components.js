document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // 1. INJECT THE NAVBAR
  const globalHeader = document.getElementById("global-header");
  if (globalHeader) {
    globalHeader.innerHTML = `
      <header id="navbar" class="fixed top-0 left-0 w-full z-50 transition-all duration-500">
        <div class="max-w-7xl mx-auto px-6 lg:px-10">
          <div id="navbarInner" class="mt-5 rounded-full px-6 lg:px-8 py-4 lg:py-5 flex items-center justify-between bg-white/10 backdrop-blur-xl border border-white/20 transition-all duration-500">
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
                <div class="nav-dropdown-panel absolute left-0 top-full hidden min-w-[240px] bg-white/98 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-100/80 z-50 py-2 mt-2">
                  <a href="dairyproduct.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">Milk</a>
                  <a href="productDetails.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">Desi Ghee</a>
                  <a href="dairyproduct.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">Dahi</a>
                  <a href="dairyproduct.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">Paneer</a>
                  <a href="dairyproduct.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">Butter</a>
                </div>
              </div>

              <!-- Frozen Products Dropdown -->
              <div class="group relative inline-flex">
                <button type="button" class="nav-link text-white hover:text-primary inline-flex items-center gap-1 pb-1 border-b-2 border-transparent hover:border-primary">
                  Frozen Products
                  <i class="ri-arrow-down-s-line"></i>
                </button>
                <div class="nav-dropdown-panel absolute left-0 top-full hidden min-w-[260px] bg-white/98 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-100/80 z-50 py-2 mt-2 max-h-[70vh] overflow-y-auto">
                  <a href="dairyproduct.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">Frozen Green Peas</a>
                  <a href="dairyproduct.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">Frozen Mix Vegetable</a>
                  <a href="dairyproduct.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">Frozen Sweet Corn</a>
                  <a href="dairyproduct.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">Frozen Baby Corn</a>
                  <a href="dairyproduct.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">Frozen French Fries</a>
                  <a href="dairyproduct.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">Frozen Jackfruit</a>
                  <a href="dairyproduct.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">Frozen Matar Paneer</a>
                  <a href="dairyproduct.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">Frozen Soya Chaap</a>
                </div>
              </div>

              <!-- About Us Dropdown -->
              <div class="group relative inline-flex">
                <button type="button" class="nav-link text-white hover:text-primary inline-flex items-center gap-1 pb-1 border-b-2 border-transparent hover:border-primary">
                  About Us
                  <i class="ri-arrow-down-s-line"></i>
                </button>
                <div class="nav-dropdown-panel absolute left-0 top-full hidden min-w-[240px] bg-white/98 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-100/80 z-50 py-2 mt-2">
                  <a href="companyOverview.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">Company Overview</a>
                  <a href="aboutUs.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">Leadership</a>
                  <a href="client.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">Clients</a>
                  <a href="aboutUs.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">CSR</a>
                  <a href="legacy.html" class="block pl-8 pr-6 py-3 text-gray-700 hover:bg-red-50/80 hover:text-primary transition font-medium">Milestone</a>
                </div>
              </div>
              <a href="recipes.html" data-page="recipes.html" class="nav-link text-white hover:text-primary pb-1 border-b-2 border-transparent hover:border-primary">Recipes</a>
              <a href="blog.html" data-page="blog.html" class="nav-link text-white hover:text-primary pb-1 border-b-2 border-transparent hover:border-primary">Blogs</a>
              <a href="career.html" data-page="career.html" class="nav-link text-white hover:text-primary pb-1 border-b-2 border-transparent hover:border-primary">Careers </a>
            </nav>

            <!-- CTA BUTTON & MOBILE TOGGLE -->
            <div class="flex items-center gap-4">
              <a href="contactUs.html" id="contactBtn" class="hidden lg:inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3 rounded-full font-semibold transition-all">
                Contact Us <i class="ri-arrow-right-up-line text-lg"></i>
              </a>
              
              <!-- Mobile Hamburger Menu Button -->
              <button id="menuToggle" type="button" class="lg:hidden text-white text-3xl focus:outline-none transition-colors">
                <i class="ri-menu-line" id="menuIcon"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- MOBILE MENU OVERLAY DRAWER -->
        <div id="mobileMenu" class="fixed inset-y-0 right-0 w-80 bg-white/95 backdrop-blur-2xl border-l border-gray-100 shadow-sm z-50 transform translate-x-full transition-transform duration-500 ease-out py-8 px-6 overflow-y-auto lg:hidden">
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

            <!-- Mobile About Us Toggle -->
            <div>
              <button type="button" class="mobile-dropdown-btn w-full text-left flex justify-between items-center py-2 border-b border-gray-50 hover:text-primary">
                About Us
                <i class="ri-arrow-down-s-line transition-transform duration-300"></i>
              </button>
              <div class="mobile-dropdown-content hidden pl-4 mt-2 space-y-3 text-base font-medium text-gray-600 border-l border-red-100 ml-1">
                <a href="companyOverview.html" class="block py-1 hover:text-primary">Company Overview</a>
                <a href="aboutUs.html" class="block py-1 hover:text-primary">Leadership</a>
                <a href="client.html" class="block py-1 hover:text-primary">Clients</a>
                <a href="aboutUs.html" class="block py-1 hover:text-primary">CSR</a>
                <a href="legacy.html" class="block py-1 hover:text-primary">Milestone</a>
              </div>
            </div>

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

  // Hero sections are now hardcoded in HTML files
  if (currentPath === "index.html") {
    document.body.classList.add("home-page");
  } else {
    document.body.classList.add("inner-page");
  }

  // 1b. ALL-PAGES PREMIUM DESIGN ENHANCEMENTS
  const enhancePageDesign = () => {
    document.querySelectorAll(".bg-yellow-400.rounded-full, .w-5.h-5.rounded-full.bg-yellow-400").forEach((dot) => {
      const bullet = document.createElement("span");
      bullet.className = "premium-bullet";
      bullet.innerHTML = '<i class="ri-check-line"></i>';
      dot.replaceWith(bullet);
    });

    document.querySelectorAll("button.bg-black, a.bg-black").forEach((btn) => {
      if (btn.closest("header, footer, #navbar")) return;
      btn.classList.add("premium-button");
      btn.classList.remove("hover:bg-yellow-400", "hover:text-black");
    });

    document.querySelectorAll("body.inner-page > section, body.inner-page .page-main > section").forEach((section) => {
      if (!section.classList.contains("premium-section")) {
        section.classList.add("premium-section");
      }
    });

    document.querySelectorAll("section").forEach((section) => {
      section.querySelectorAll("p.uppercase, span.uppercase").forEach((el) => {
        if (el.closest("header, footer, .nav-dropdown-panel, #mobileMenu")) return;
        const cn = el.className;
        if (cn.includes("tracking") || cn.includes("text-yellow") || cn.includes("E14F58") || cn.includes("E21E23")) {
          el.classList.add("section-tag");
        }
      });

      section.querySelectorAll(".text-yellow-500").forEach((el) => {
        if (!el.closest("header, footer")) el.classList.add("section-tag");
      });
    });

    document.querySelectorAll("body.inner-page h2").forEach((h2) => {
      if (h2.closest("header, footer, article .p-10")) return;
      const cn = h2.className;
      if (/text-(4xl|5xl|6xl|7xl)/.test(cn) || h2.closest(".text-center")) {
        h2.classList.add("section-title");
      }
    });

    document.querySelectorAll(
      'a[class*="rounded-full"], button[class*="rounded-full"], button[class*="rounded-2xl"], a[class*="bg-[#E14F58]"], button[class*="bg-[#E14F58]"]'
    ).forEach((btn) => {
      if (btn.closest("header, footer, #navbar, #contactBtn, .blog-pagination")) return;
      const cn = btn.className;
      if (cn.includes("border") && !cn.match(/bg-\[#E|bg-primary|bg-black/)) return;
      if (cn.match(/bg-\[#E|bg-primary|bg-black/) || (cn.includes("rounded-full") && cn.includes("font-semibold") && cn.includes("text-white"))) {
        btn.classList.add("premium-button");
      }
    });

    document.querySelectorAll("section .group, section article, .policy-card, .recipe-card").forEach((card) => {
      if (!card.classList.contains("premium-ui-card") && card.closest("section")) {
        card.classList.add("premium-ui-card");
      }
    });

    document.querySelectorAll(
      ".client-card, .media-card, .infrastructure-card, .recipe-card, .policy-card, .partner-card, .leader-card, .step-card, .custom-card, .glass-card"
    ).forEach((card) => {
      card.classList.add("premium-ui-card");
      if (card.classList.contains("glass-card")) card.classList.add("glass-premium");
    });


    document.querySelectorAll("section .swiper").forEach((s) => s.classList.add("premium-swiper"));

    document.querySelectorAll("section .grid").forEach((grid) => {
      grid.querySelectorAll(":scope > div").forEach((cell) => {
        if (cell.classList.contains("premium-ui-card")) return;
        if (cell.querySelector("img") && (cell.className.includes("rounded") || cell.className.includes("shadow"))) {
          cell.classList.add("premium-ui-card");
        }
      });
    });

    document.querySelectorAll(".gradient-text").forEach((el) => el.classList.add("premium-gradient-text"));
    document.querySelectorAll("section .heading-font, section .heading").forEach((el) => {
      el.classList.add("heading-font");
    });

    document.querySelectorAll("#featured .group, #featured article, .blog-card").forEach((card) => {
      card.classList.add("premium-ui-card");
    });

    document.querySelectorAll("table").forEach((t) => t.closest("div")?.classList.add("premium-ui-card"));

    document.querySelectorAll("section ul li").forEach((li) => {
      const parent = li.parentElement;
      if (parent && parent.children.length > 2 && li.querySelector("i")) {
        li.classList.add("flex", "items-start", "gap-3");
      }
    });
  };

  enhancePageDesign();

  // 2. INJECT THE FOOTER
  const globalFooter = document.getElementById("global-footer");
  if (globalFooter) {
    globalFooter.innerHTML = `
      <footer class="premium-footer bg-primary-color text-white pt-24 pb-12 relative z-10">
        <div class="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-16 border-b border-white/10 pb-16">
            <div class="space-y-6 lg:col-span-1">
              <a href="index.html">
                <img src="./images/logo.png" alt="Madhusudan" class="w-36 bg-white/10 p-3 rounded-2xl border border-white/10" />
              </a>
              <p class="text-white/65 leading-relaxed text-[0.95rem] max-w-xs">
                Premium dairy and food products — purity, trust, and innovation for modern Indian families.
              </p>
            </div>

            <div>
              <h4 class="text-xl font-bold mb-6 pb-3">Company</h4>
              <ul class="space-y-3.5 text-white/55 text-[0.95rem] font-medium">
                <li><a href="aboutUs.html" class="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">About Us</a></li>
                <li><a href="legacy.html" class="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Our Legacy</a></li>
                <li><a href="infrastructure.html" class="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Infrastructure</a></li>
                <li><a href="media.html" class="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Media & Events</a></li>
              </ul>
            </div>

            <div>
              <h4 class="text-xl font-bold mb-6 pb-3">Resources</h4>
              <ul class="space-y-3.5 text-white/55 text-[0.95rem] font-medium">
                <li><a href="career.html" class="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Careers</a></li>
                <li><a href="client.html" class="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Our Clients</a></li>
                <li><a href="recipes.html" class="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Recipes</a></li>
                <li><a href="privacyPolicy.html" class="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 class="text-xl font-bold mb-6 pb-3">Contact</h4>
              <ul class="space-y-4 text-white/55 text-[0.95rem] font-medium">
                <li class="flex items-center gap-3">
                  <span class="footer-social-pill !w-10 !h-10 text-base"><i class="ri-mail-send-line"></i></span>
                  <a href="mailto:info@madhusudan.com" class="hover:text-white transition">info@madhusudan.com</a>
                </li>
                <li class="flex items-center gap-3">
                  <span class="footer-social-pill !w-10 !h-10 text-base"><i class="ri-phone-line"></i></span>
                  <a href="tel:+919876543210" class="hover:text-white transition">+91 9876543210</a>
                </li>
                <li class="flex items-start gap-3">
                  <span class="footer-social-pill !w-10 !h-10 text-base shrink-0"><i class="ri-map-pin-2-line"></i></span>
                  <span>New Delhi, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-between items-center pt-10 gap-6">
            <p class="text-white/45 text-sm font-medium tracking-wide">
              © 2026 Madhusudan Group. All rights reserved.
            </p>
            <div class="flex items-center gap-3">
              <a href="#" aria-label="Facebook" class="footer-social-pill"><i class="ri-facebook-circle-line text-xl"></i></a>
              <a href="#" aria-label="Instagram" class="footer-social-pill"><i class="ri-instagram-line text-xl"></i></a>
              <a href="#" aria-label="LinkedIn" class="footer-social-pill"><i class="ri-linkedin-box-line text-xl"></i></a>
              <a href="#" aria-label="YouTube" class="footer-social-pill"><i class="ri-youtube-line text-xl"></i></a>
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

  // 7. CONSISTENT PREMIUM ICONS
  const setIcon = (box, iconClass) => {
    if (!box) return;
    box.classList.add("premium-icon-tile");
    box.innerHTML = `<i class="${iconClass}"></i>`;
  };

  const getFirstIconBox = (scope) => {
    if (!scope) return null;
    return scope.querySelector(".w-20.h-20, .w-16.h-16, .w-14.h-14, .w-12.h-12");
  };

  const chooseIconForText = (text) => {
    const value = text.toLowerCase();
    if (value.includes("office") || value.includes("location") || value.includes("address")) return "ri-map-pin-2-line";
    if (value.includes("email") || value.includes("mail")) return "ri-mail-send-line";
    if (value.includes("phone") || value.includes("call")) return "ri-phone-line";
    if (value.includes("response") || value.includes("support") || value.includes("care")) return "ri-customer-service-2-line";
    if (value.includes("sales")) return "ri-hand-coin-line";
    if (value.includes("marketing")) return "ri-megaphone-line";
    if (value.includes("production") || value.includes("manufacturing") || value.includes("plant")) return "ri-building-4-line";
    if (value.includes("business") || value.includes("dealer") || value.includes("distributor")) return "ri-briefcase-4-line";
    if (value.includes("nutrition") || value.includes("healthy") || value.includes("wellness")) return "ri-heart-pulse-line";
    if (value.includes("recipe") || value.includes("cooking") || value.includes("kitchen") || value.includes("taste")) return "ri-restaurant-2-line";
    if (value.includes("pure") || value.includes("milk") || value.includes("dairy")) return "ri-goblet-line";
    if (value.includes("farmer") || value.includes("agri") || value.includes("village")) return "ri-seedling-line";
    if (value.includes("technology") || value.includes("digital") || value.includes("automation")) return "ri-settings-3-line";
    if (value.includes("quality") || value.includes("standard") || value.includes("trusted") || value.includes("security")) return "ri-shield-check-line";
    if (value.includes("retail") || value.includes("store") || value.includes("distribution")) return "ri-store-2-line";
    if (value.includes("government") || value.includes("certification") || value.includes("fssai") || value.includes("bis")) return "ri-bank-line";
    if (value.includes("logistics") || value.includes("cold") || value.includes("chain")) return "ri-truck-line";
    if (value.includes("privacy") || value.includes("data")) return "ri-database-2-line";
    if (value.includes("trademark") || value.includes("copyright")) return "ri-copyright-line";
    if (value.includes("registration") || value.includes("password") || value.includes("account")) return "ri-lock-password-line";
    if (value.includes("disclaimer") || value.includes("warning")) return "ri-error-warning-line";
    if (value.includes("sharing") || value.includes("partner")) return "ri-team-line";
    if (value.includes("fresh")) return "ri-snowflake-line";
    if (value.includes("family") || value.includes("home")) return "ri-home-heart-line";
    return "ri-apps-2-line";
  };

  document.querySelectorAll("#contact-section .grid > .group").forEach((card) => {
    const title = card.querySelector("h3")?.textContent || "";
    setIcon(getFirstIconBox(card), chooseIconForText(title));
    card.classList.add("premium-ui-card");
  });

  document.querySelectorAll("section  #location .overflow-hidden").forEach((item) => {
    item.classList.add("premium-ui-card");
  });

  document.querySelectorAll(".mt-10.space-y-6 > .flex").forEach((row) => {
    const title = row.querySelector("h4")?.textContent || "";
    setIcon(row.querySelector(".w-14.h-14"), chooseIconForText(title));
  });

  const policyIcons = {
    "trademarks": "ri-copyright-line",
    "registration": "ri-lock-password-line",
    "disclaimer": "ri-error-warning-line",
    "collecting": "ri-database-2-line",
    "sharing": "ri-team-line"
  };

  document.querySelectorAll(".policy-card").forEach((card) => {
    const heading = card.querySelector("h3")?.textContent.toLowerCase() || "";
    const iconKey = Object.keys(policyIcons).find((key) => heading.includes(key));
    if (iconKey) {
      setIcon(getFirstIconBox(card), policyIcons[iconKey]);
    }
    card.classList.add("premium-ui-card");
  });

  document.querySelectorAll(".policy-card span").forEach((span) => {
    if (span.textContent.trim().length <= 4 && /[^\w\s]/.test(span.textContent)) {
      span.innerHTML = '<i class="ri-check-line"></i>';
      span.classList.add("text-white", "text-xl", "mt-1");
    }
  });

  const blogCategoryIcons = {
    "nutrition": "ri-heart-pulse-line",
    "recipes": "ri-restaurant-2-line",
    "lifestyle": "ri-leaf-line",
    "quality": "ri-shield-check-line",
    "freshness": "ri-sparkling-2-line",
    "family": "ri-home-heart-line"
  };

  document.querySelectorAll("#blogs .group").forEach((card) => {
    card.classList.add("premium-ui-card");
    const badge = card.querySelector("span");
    if (badge) {
      const label = badge.textContent.trim().toLowerCase();
      const icon = blogCategoryIcons[label] || "ri-article-line";
      badge.classList.add("premium-badge");
      if (!badge.querySelector("i")) {
        badge.innerHTML = `<i class="${icon}"></i><span>${badge.textContent.trim()}</span>`;
      }
    }
    const link = card.querySelector("a");
    if (link) {
      link.className = "premium-read-link";
      link.innerHTML = 'Read More <i class="ri-arrow-right-line"></i>';
    }
  });

  document.querySelectorAll(".w-20.h-20, .w-16.h-16, .w-14.h-14, .w-12.h-12").forEach((box) => {
    const text = box.textContent.trim();
    if (!box.querySelector("i") && /[^\x00-\x7F]/.test(text)) {
      const contextText = box.closest(".group, .policy-card, .partner-card, .leader-card, [class*='rounded'], section")?.textContent || "";
      setIcon(box, chooseIconForText(contextText));
    }
  });

  document.querySelectorAll("section .bg-white.border:not(.no-premium), section article:not(.no-premium), section form:not(#contactForm):not(.no-premium)").forEach((card) => {
    if (card.querySelector('#contactForm')) return;
    card.classList.add("premium-ui-card");
  });

  // 7. PREMIUM PAGE MOTION
  document.querySelectorAll("body:not(.home-page) section > div:not(.no-premium), .premium-card, .custom-card, article:not(.no-premium), form:not(#contactForm):not(.no-premium)").forEach((el, index) => {
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

  if (window.Swiper && document.querySelector(".milkSwiper")) {
    new Swiper(".milkSwiper", {
      loop: true,
      speed: 900,
      autoplay: { delay: 4000, disableOnInteraction: false },
      pagination: { el: ".milkSwiper .swiper-pagination", clickable: true }
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
