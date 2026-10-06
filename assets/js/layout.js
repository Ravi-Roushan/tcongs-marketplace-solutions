/* ============================================================
   TCONGS — layout.js  (v1.2)
   Injects shared header + footer into every page.
   Edit this ONE file to update header/footer site-wide.
   ============================================================ */

(function () {
  'use strict';

  /* ── Detect current page for active nav highlighting ─── */
  function currentPage() {
    const p = window.location.pathname.toLowerCase();
    return p.split('/').pop() || 'index.html';
  }

  function navLink(href, label, extra) {
    const active = currentPage() === href ? ' class="active"' : '';
    return `<li><a href="${href}"${active}${extra || ''}>${label}</a></li>`;
  }

  /* ── HEADER HTML ─────────────────────────────────────── */
  const HEADER_HTML = `
  <!-- ===================== NAVBAR ===================== -->
  <nav class="navbar" id="navbar">
    <div class="container">
      <a href="index.html" class="nav-logo">
        <img src="assets/images/tcongs-marketplace-solutions.webp" alt="TCONGS Marketplace Solutions Logo" class="nav-logo-img">
      </a>
      <ul class="nav-links">
        ${navLink('index.html', 'Home')}
        <li class="nav-item-services">
          <a href="services.html">Services <span class="nav-arrow">&#9660;</span></a>
          <div class="mega-menu">
            <div class="mega-inner">
              <div class="mega-left">
                <div class="mega-col-title">Marketplace Management</div>
                <div class="mega-list">
                  <a href="amazon.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/amazon.webp" alt="Amazon"></div>
                    <div><div class="mega-item-text">Amazon</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="flipkart.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/flipkart.webp" alt="Flipkart"></div>
                    <div><div class="mega-item-text">Flipkart</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="ajio.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/ajio.webp" alt="Ajio"></div>
                    <div><div class="mega-item-text">Ajio</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="myntra.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/myntra.webp" alt="Myntra"></div>
                    <div><div class="mega-item-text">Myntra</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="nykaa.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/nykaa.webp" alt="Nykaa"></div>
                    <div><div class="mega-item-text">Nykaa</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="firstcry.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/firstcry.webp" alt="FirstCry"></div>
                    <div><div class="mega-item-text">FirstCry</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="meesho.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/meesho.webp" alt="Meesho"></div>
                    <div><div class="mega-item-text">Meesho</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="jiomart.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/jiomart.webp" alt="JioMart"></div>
                    <div><div class="mega-item-text">JioMart</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="snapdeal.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/snapdeal.webp" alt="Snapdeal"></div>
                    <div><div class="mega-item-text">Snapdeal</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="tatacliq.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/TataCLiQ.webp" alt="Tata CLiQ"></div>
                    <div><div class="mega-item-text">Tata CLiQ</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                </div>
              </div>
              <div class="mega-right">
                <div class="mega-promo">
                  <div class="mega-promo-tag">Why TCONGS?</div>
                  <h3>Grow Faster On<br><span>Marketplaces</span></h3>
                  <p>Unlock the full potential of your business with our expert marketplace management services.</p>
                  <div class="mega-stats-grid">
                    <div class="mega-stat-item">&#128737; <strong>Account Support</strong><span>Marketplace operations</span></div>
                    <div class="mega-stat-item">&#128101; <strong>Listing Support</strong><span>Catalog &amp; content</span></div>
                    <div class="mega-stat-item">&#128230; <strong>Catalog Operations</strong><span>SKU &amp; marketplace workflows</span></div>
                    <div class="mega-stat-item">&#11088; <strong>Growth Strategy</strong><span>Practical marketplace planning</span></div>
                  </div>
                </div>
                <div class="mega-footer-links">
                  <a href="services.html" class="mega-footer-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                    All Services
                  </a>
                  <a href="https://wa.me/919321087099" class="mega-footer-link" target="_blank">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    WhatsApp Expert
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
        ${navLink('about.html', 'About Us')}
        ${navLink('contact.html', 'Contact Us')}
      </ul>
      <div class="nav-actions-group">
        <a href="contact.html" class="nav-cta-btn" id="openPopupBtn">
          Get Free Consultation
          <span class="nav-cta-arrow">➜</span>
        </a>
        <a href="tel:+919321087099" class="nav-phone-badge" aria-label="Call Support">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Toggle navigation menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- ── Mobile Menu ── -->
  <div class="mobile-menu" id="mobileMenu">
    <a href="index.html"${currentPage() === 'index.html' ? ' class="active"' : ''}>Home</a>
    <div class="mobile-services-group">
      <button type="button" class="mobile-services-toggle" id="mobileServicesToggle" aria-expanded="false">
        <span class="mobile-services-toggle-label">Services</span>
        <span class="mobile-services-chevron" aria-hidden="true">⌄</span>
      </button>
      <div class="mobile-services-submenu" id="mobileServicesSubmenu">
        <a href="services.html"><span class="mobile-service-icon all">▦</span><span>All Services</span></a>
        <a href="amazon.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/amazon.webp" alt=""></span><span>Amazon</span></a>
        <a href="flipkart.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/flipkart.webp" alt=""></span><span>Flipkart</span></a>
        <a href="meesho.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/meesho.webp" alt=""></span><span>Meesho</span></a>
        <a href="myntra.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/myntra.webp" alt=""></span><span>Myntra</span></a>
        <a href="ajio.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/ajio.webp" alt=""></span><span>AJIO</span></a>
        <a href="nykaa.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/nykaa.webp" alt=""></span><span>Nykaa</span></a>
        <a href="jiomart.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/jiomart.webp" alt=""></span><span>JioMart</span></a>
        <a href="tatacliq.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/TataCLiQ.webp" alt=""></span><span>Tata CLiQ</span></a>
        <a href="snapdeal.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/snapdeal.webp" alt=""></span><span>Snapdeal</span></a>
        <a href="firstcry.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/firstcry.webp" alt=""></span><span>FirstCry</span></a>
      </div>
    </div>
    <a href="about.html"${currentPage() === 'about.html' ? ' class="active"' : ''}>About Us</a>
    <a href="contact.html"${currentPage() === 'contact.html' ? ' class="active"' : ''}>Contact Us</a>
    <div class="mobile-menu-actions">
      <a href="contact.html" class="nav-cta-btn" id="mobilePopupBtn">Get Free Consultation ➜</a>
      <a href="tel:+919321087099" class="mobile-phone-link">📞 +91 93210 87099</a>
    </div>
  </div>`;

  /* ── FOOTER HTML ─────────────────────────────────────── */
  const FOOTER_HTML = `
  <footer class="footer-corporate">
    <div class="container">
      <!-- 2 LEFT + CENTER BRAND + 2 RIGHT -->
      <!-- TCONGS TRUST STRIP v2 -->
      <section class="footer-trust-strip" aria-label="Why Businesses Trust TCONGS">
        <h2 class="footer-trust-title">WHY BUSINESSES TRUST TCONGS</h2>
        <div class="footer-trust-items">
          <div class="footer-trust-item">
            <span class="trust-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L12 3z"/></svg></span>
            <span><strong>500+</strong><small>Marketplace Listings Managed</small></span>
          </div>
          <div class="footer-trust-item">
            <span class="trust-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10l9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10z"/><path d="M8 21v-7h8v7"/></svg></span>
            <span><strong>Multi-Marketplace</strong><small>Expertise</small></span>
          </div>
          <div class="footer-trust-item">
            <span class="trust-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c.5-3.2 2.5-5 6-5s5.5 1.8 6 5"/><path d="M14 15c3.2-.2 5.4 1.4 6 4.5"/></svg></span>
            <span><strong>Dedicated</strong><small>Account Managers</small></span>
          </div>
          <div class="footer-trust-item">
            <span class="trust-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 20V10M12 20V4M19 20v-7"/><path d="M3 20h18"/></svg></span>
            <span><strong>Transparent</strong><small>Reporting</small></span>
          </div>
          <div class="footer-trust-item">
            <span class="trust-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg></span>
            <span><strong>Data Privacy</strong><small>Protected</small></span>
          </div>
        </div>
      </section>

      <div class="footer-main-grid">

        <!-- LEFT 2: COMPANY — all existing links preserved -->
        <div class="footer-links-column">
          <button type="button" class="footer-column-title footer-accordion-toggle" aria-expanded="false">COMPANY <span class="footer-accordion-icon">+</span></button>
          <ul class="footer-list-items">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="index.html#comp-services">Marketplaces</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>


        <!-- LEFT 1: SERVICES — all existing links preserved -->
        <div class="footer-links-column">
          <button type="button" class="footer-column-title footer-accordion-toggle" aria-expanded="false">OUR SERVICES <span class="footer-accordion-icon">+</span></button>
          <ul class="footer-list-items">
            <li><a href="amazon.html">Amazon Seller Management</a></li>
            <li><a href="flipkart.html">Flipkart Seller Management</a></li>
            <li><a href="meesho.html">Meesho Seller Management</a></li>
            <li><a href="myntra.html">Myntra Seller Management</a></li>
            <li><a href="ajio.html">AJIO Seller Management</a></li>
            <li><a href="nykaa.html">Nykaa Seller Management</a></li>
            <li><a href="jiomart.html">JioMart Seller Management</a></li>
            <li><a href="tatacliq.html">Tata CLiQ Seller Management</a></li>
            <li><a href="snapdeal.html">Snapdeal Seller Management</a></li>
            <li><a href="services.html">See more</a></li>
          </ul>
        </div>


        <!-- CENTER: BRAND -->
        <div class="footer-brand-column">
          <a href="index.html" class="footer-brand-link">
            <img src="assets/images/tcongs-marketplace-solutions.webp" alt="TCONGS Marketplace Solutions Logo" class="footer-brand-logo">
          </a>
          <p class="footer-brand-tagline">Your trusted partner for marketplace growth and eCommerce success. We help businesses scale across leading marketplaces with expert solutions.</p>
        </div>


        <!-- RIGHT 1: POLICIES — all existing links preserved -->
        <div class="footer-links-column">
          <button type="button" class="footer-column-title footer-accordion-toggle" aria-expanded="false">POLICIES &amp; LEGAL <span class="footer-accordion-icon">+</span></button>
          <ul class="footer-list-items">
            <li><a href="privacy-policy.html">Privacy Policy</a></li>
            <li><a href="terms-conditions.html">Terms &amp; Conditions</a></li>
            <li><a href="disclaimer.html">Disclaimer</a></li>
            <li><a href="refund-cancellation.html">Refund &amp; Cancellation Policy</a></li>
            <li><a href="cookie-policy.html">Cookie Policy</a></li>
            <li><a href="sitemap.html">Sitemap</a></li>
            <li><a href="gdpr-compliance.html">GDPR Compliance</a></li>
            <li><a href="accessibility-statement.html">Accessibility Statement</a></li>
          </ul>
        </div>


        <!-- RIGHT 2: CONTACT — all existing contact information preserved -->
        <div class="footer-links-column footer-contact-column">
          <button type="button" class="footer-column-title footer-accordion-toggle" aria-expanded="false">CONTACT INFORMATION <span class="footer-accordion-icon">+</span></button>
          <ul class="footer-contact-details">
            <li class="contact-detail-item">
              <span class="contact-item-icon">📍</span>
              <p>Ashish Building No. 24, Office No. 12,<br>First Floor, Ratan Nagar Ln, Gharkul Society,<br>Manish Nagar, Andheri West, Mumbai, 400053</p>
            </li>
            <li class="contact-detail-item"><span class="contact-item-icon">☎</span><a href="tel:+919321087099">+91 93210 87099</a></li>
            <li class="contact-detail-item"><span class="contact-item-icon">✉</span><a href="mailto:tcongsmarketplacesolutions@gmail.com">tcongsmarketplacesolutions@gmail.com</a></li>
            <li class="contact-detail-item"><span class="contact-item-icon">🌐</span><a href="https://tcongsmarketplacesolutions.in" target="_blank" rel="noopener">tcongsmarketplacesolutions.in</a></li>
            <li class="contact-detail-item"><span class="contact-item-icon">◷</span><span>Mon - Sat : 10:00 AM - 7:00 PM</span></li>
          </ul>
        </div>

      </div>

      <!-- Keep the legal/disclaimer content; only compact the spacing -->
      <div class="footer-legal-note">
        <p>TCONGS Marketplace Solutions provides marketplace account management, product listing optimization, catalog management, advertising support, account reinstatement, and eCommerce consulting services across Amazon, Flipkart, Meesho, Myntra, AJIO, Nykaa, JioMart, Tata CLiQ, and other leading marketplaces in India.</p>
        <p>TCONGS Marketplace Solutions is an independent eCommerce consulting company and is not affiliated with Amazon, Flipkart, Myntra, AJIO, Nykaa, Meesho, JioMart, Tata CLiQ, FirstCry, Snapdeal, or any marketplace mentioned on this website. All trademarks belong to their respective owners.</p>
      </div>
    </div>

    <div class="footer-copyright-strip">
      <div class="container footer-strip-flex">
        <p class="copyright-text">&copy; 2026 TCONGS Marketplace Solutions. All Rights Reserved.</p>
        <p class="copyright-text">Developed &amp; Managed by <a href="https://tcongsinfotech.com/index.html" target="_blank" rel="noopener noreferrer">Tcongs Infotech</a></p>
      </div>
    </div>
  </footer>


  <!-- ── TCONGS AI CHAT ASSISTANT ───────────────────────── -->
  <div class="tcongs-ai-widget" id="tcongsAiWidget">
    <button class="tcongs-ai-launcher" id="tcongsAiLauncher" aria-label="Open Tcongs Assistant" aria-expanded="false">
      <span class="tcongs-ai-robot" aria-hidden="true"><img src="assets/images/tcongs-ai-professional.svg" alt=""></span>
      <span class="tcongs-ai-launcher-status" aria-hidden="true"></span>
    </button>

    <div class="tcongs-ai-panel" id="tcongsAiPanel" role="dialog" aria-label="TCONGS AI Assistant" aria-modal="false">
      <div class="tcongs-ai-header">
        <div class="tcongs-ai-brand">
          <span class="tcongs-ai-header-logo"><img src="assets/images/tcongs-assistant-logo-white.webp" alt="TCONGS"></span>
          <div class="tcongs-ai-title-wrap">
            <strong>Tcongs Assistant</strong>
            <span class="tcongs-ai-online"><i></i> <span id="tcongsAiStatus">Online</span></span>
          </div>
        </div>
        <button type="button" class="tcongs-ai-close" id="tcongsAiClose" aria-label="Close AI Assistant">×</button>
      </div>

      <div class="tcongs-ai-messages" id="tcongsAiMessages">
        <div class="tcongs-ai-message bot">Hello! Welcome to Tcongs Assistant. I can help with services, marketplaces, contact details, pricing guidance, account support and project enquiries.</div>
      </div>

      <div class="tcongs-ai-quick" id="tcongsAiQuick">
        <button type="button" data-question="What services do you provide?">Services</button>
        <button type="button" data-question="Which marketplaces do you support?">Marketplaces</button>
        <button type="button" data-question="What is your contact number?">Contact</button>
        <button type="button" data-question="Where is your office?">Location</button>
      </div>

      <form class="tcongs-ai-form" id="tcongsAiForm">
        <input id="tcongsAiInput" type="text" autocomplete="off" placeholder="Type your question..." aria-label="Type your question">
        <button type="submit" aria-label="Send message">➜</button>
      </form>
    </div>
  </div>`;

  /* ── Inject on DOM ready ─────────────────────────────── */
  function inject() {
    const headerEl = document.getElementById('site-header');
    const footerEl = document.getElementById('site-footer');

    if (headerEl && !headerEl.innerHTML.trim()) headerEl.innerHTML = HEADER_HTML;
    if (footerEl && !footerEl.innerHTML.trim()) footerEl.innerHTML = FOOTER_HTML;


    /* GLOBAL CHATBOT HEADER LOGO — latest uploaded asset */
    document.querySelectorAll('.tcongs-ai-header-logo img').forEach((img) => {
      img.src = 'assets/images/tcongs-assistant-logo-white.webp';
      img.alt = 'TCONGS';
    });

    /* TCONGS CHATBOT LOAD VISIBILITY FIX v1 */
    if (!document.getElementById('tcongsChatbotLoadFix')) {
      const chatbotLoadStyle = document.createElement('style');
      chatbotLoadStyle.id = 'tcongsChatbotLoadFix';
      chatbotLoadStyle.textContent = `
        html:not(.tcongs-chatbot-ready) .tcongs-ai-widget {
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        html.tcongs-chatbot-ready .tcongs-ai-widget {
          visibility: visible;
          opacity: 1;
          transition: opacity .18s ease;
        }
      `;
      document.head.appendChild(chatbotLoadStyle);
    }

    /* ── Hamburger / Mobile Menu ──────────────────────────────── */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
      });

      // Close menu when any link is clicked
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('open');
          mobileMenu.classList.remove('open');
        });
      });
    }

    /* ── Mobile Services dropdown ─────────────────────────────── */
    const mobileServicesToggle = document.getElementById('mobileServicesToggle');
    const mobileServicesSubmenu = document.getElementById('mobileServicesSubmenu');
    if (mobileServicesToggle && mobileServicesSubmenu) {
      mobileServicesToggle.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = mobileServicesSubmenu.classList.toggle('open');
        mobileServicesToggle.classList.toggle('open', isOpen);
        mobileServicesToggle.setAttribute('aria-expanded', String(isOpen));
      });
      mobileServicesSubmenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger?.classList.remove('open');
          mobileMenu?.classList.remove('open');
        });
      });
    }

    /* ── Mobile footer accordions ─────────────────────────────── */
    document.querySelectorAll('.footer-accordion-toggle').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const column = toggle.closest('.footer-links-column');
        if (!column) return;
        const willOpen = !column.classList.contains('footer-column-open');
        document.querySelectorAll('.footer-links-column.footer-column-open').forEach(openColumn => {
          if (openColumn !== column) {
            openColumn.classList.remove('footer-column-open');
            openColumn.querySelector('.footer-accordion-toggle')?.setAttribute('aria-expanded', 'false');
          }
        });
        column.classList.toggle('footer-column-open', willOpen);
        toggle.setAttribute('aria-expanded', String(willOpen));
      });
    });

    /* ── Navbar — scroll state ────────────────────────────────── */
    const navbar = document.getElementById('navbar');
    if (navbar) {
      const handleNavbarScroll = () => {
        if (window.scrollY > 20) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
      };
      window.addEventListener('scroll', handleNavbarScroll);
      handleNavbarScroll();
    }

    /* ── TCONGS AI ASSISTANT — PROFESSIONAL KNOWLEDGE ASSISTANT ── */
    const aiLauncher = document.getElementById('tcongsAiLauncher');
    const aiPanel = document.getElementById('tcongsAiPanel');
    const aiClose = document.getElementById('tcongsAiClose');
    const aiForm = document.getElementById('tcongsAiForm');
    const aiInput = document.getElementById('tcongsAiInput');
    const aiMessages = document.getElementById('tcongsAiMessages');
    const aiQuick = document.getElementById('tcongsAiQuick');
    const aiStatus = document.getElementById('tcongsAiStatus');

    const TCONGS_KB = {
      company: 'TCONGS Marketplace Solutions is an eCommerce and marketplace consulting company focused on helping brands launch, manage and grow across leading online marketplaces in India.',
      services: 'TCONGS provides marketplace account management, seller account setup, product listing and SEO optimization, catalog management, marketplace advertising/PPC, account-health support, brand registry support, consulting and marketplace growth strategy.',
      marketplaces: 'TCONGS supports Amazon, Flipkart, Meesho, Myntra, AJIO, Nykaa, JioMart, Tata CLiQ, FirstCry and Snapdeal, along with other marketplace requirements where applicable.',
      contact: 'TCONGS contact details:\n• Mobile: +91 93210 87099\n• Email: tcongsmarketplacesolutions@gmail.com\n• Website: tcongsmarketplacesolutions.in',
      address: 'TCONGS office:\nAshish Building No. 24, Office No. 12, First Floor, Ratan Nagar Ln, Gharkul Society, Manish Nagar, Four Bungalows, Andheri West, Mumbai, Maharashtra 400053.',
      hours: 'Team availability is Monday to Saturday, 10:00 AM to 7:00 PM. The website assistant can respond outside these hours, while team follow-up is handled during working hours.',
      pricing: 'TCONGS does not publish a single fixed price because the scope varies by marketplace, account size, catalog volume, advertising requirements and support needs. Share your requirements through the consultation form for a suitable plan.',
      listing: 'Listing support can cover keyword-aligned titles, bullet points, descriptions, A+ / Enhanced Brand Content guidance, image guidance, category and attribute mapping, and bulk listing workflows.',
      catalog: 'Catalog management can include product data, images, variants, attributes, category mapping, size-chart setup and consistency across supported marketplaces.',
      advertising: 'Marketplace advertising support includes campaign setup and management, Sponsored Products/Brands where supported, keyword strategy, ACoS monitoring and performance reporting.',
      account: 'Account management can include onboarding, verification support, routine account monitoring, marketplace operations, issue escalation and performance reporting.',
      health: 'Account-health support includes reviewing warnings and performance signals, identifying likely root causes, recommending corrective actions and helping prepare compliant responses or documentation where appropriate.',
      brand: 'Brand support can include marketplace brand enrollment/registry guidance, storefront support, A+ content and brand-protection workflows, subject to each marketplace’s eligibility and policies.',
      growth: 'Marketplace growth strategy can cover platform selection, pricing and competition analysis, advertising planning, seasonal preparation, brand building, expansion planning and KPI reporting.',
      consulting: 'Yes. TCONGS can provide one-time consulting for marketplace setup, listing reviews, account issues, strategy and specific eCommerce challenges.',
      careers: 'For career-related enquiries, please use the Contact / consultation page so the TCONGS team can review your request.',
      privacy: 'Please do not share passwords, OTPs, payment-card details or other sensitive credentials in the chatbot. Use official TCONGS contact channels for confidential account information.',
      fallback: 'I can help with TCONGS services, marketplaces, account management, listings, catalog, advertising, account health, pricing guidance, contact details, office location, working hours and project enquiries. If your question is outside this information, I can still guide you to the right TCONGS contact option.'
    };

    const MARKETPLACE_DATA = {
      amazon: 'Amazon support can include seller account management, product listing optimization, catalog operations, advertising/PPC, account-health support and marketplace growth planning.',
      flipkart: 'Flipkart support can include seller account support, catalog and listing optimization, advertising support and marketplace operations.',
      meesho: 'Meesho support can include catalog/listing support, seller operations, advertising support and marketplace growth guidance.',
      myntra: 'Myntra support can include marketplace operations, catalog/listing coordination and growth support based on the brand and marketplace requirements.',
      ajio: 'AJIO support can include marketplace operations, catalog/listing coordination and growth support based on the brand and marketplace requirements.',
      nykaa: 'Nykaa support can include marketplace operations, catalog/listing coordination and growth support based on the brand and marketplace requirements.',
      jiomart: 'JioMart support can include marketplace operations, catalog/listing coordination and growth support based on the brand and marketplace requirements.',
      tatacliq: 'Tata CLiQ support can include marketplace operations, catalog/listing coordination and growth support based on the brand and marketplace requirements.',
      firstcry: 'FirstCry is one of the marketplaces listed as supported by TCONGS. Requirements can be discussed with the team based on the account and category.',
      snapdeal: 'Snapdeal is one of the marketplaces listed as supported by TCONGS. Requirements can be discussed with the team based on the account and category.'
    };

    const LANGUAGE_RESPONSES = {
      en: { greeting: 'Hello! Welcome to Tcongs Assistant. How can I help you today?', thanks: 'You’re welcome. If you need anything else, I can help with TCONGS services, marketplaces or contact details.', fallback: TCONGS_KB.fallback },
      hi: { greeting: 'नमस्ते! Tcongs Assistant में आपका स्वागत है। मैं आपकी किस तरह मदद कर सकता हूँ?', thanks: 'आपका स्वागत है। अगर आपको TCONGS की services, marketplaces या contact details चाहिए, मैं मदद कर सकता हूँ।', fallback: 'मैं TCONGS की services, marketplaces, account management, listing, catalog, advertising, account health, pricing, contact details, office location और enquiry से जुड़ी जानकारी दे सकता हूँ।' },
      hinglish: { greeting: 'Namaste! Tcongs Assistant mein welcome hai. Aap kya jaanna chahte hain?', thanks: 'You’re welcome! TCONGS ki services, marketplaces, contact ya enquiry ke baare mein pooch sakte hain.', fallback: 'Main TCONGS ki services, marketplaces, account management, listing, catalog, advertising, account health, pricing, contact, location aur enquiry ke baare mein help kar sakta hoon.' },
      bn: { greeting: 'নমস্কার! Tcongs Assistant-এ স্বাগতম। কীভাবে সাহায্য করতে পারি?', fallback: 'আমি TCONGS-এর services, marketplace, contact এবং enquiry সম্পর্কিত তথ্য দিতে পারি।' },
      mr: { greeting: 'नमस्कार! Tcongs Assistant मध्ये स्वागत आहे. मी तुमची कशी मदत करू शकतो?', fallback: 'मी TCONGS च्या services, marketplaces, contact आणि enquiry बद्दल माहिती देऊ शकतो.' },
      gu: { greeting: 'નમસ્તે! Tcongs Assistant માં આપનું સ્વાગત છે. હું તમારી કેવી રીતે મદદ કરી શકું?', fallback: 'હું TCONGS ની services, marketplaces, contact અને enquiry વિશે માહિતી આપી શકું છું.' },
      ta: { greeting: 'வணக்கம்! Tcongs Assistant-க்கு வரவேற்கிறோம். நான் எப்படி உதவலாம்?', fallback: 'TCONGS services, marketplaces, contact மற்றும் enquiry தொடர்பான தகவல்களை வழங்க முடியும்.' },
      te: { greeting: 'నమస్కారం! Tcongs Assistant కు స్వాగతం. నేను ఎలా సహాయం చేయగలను?', fallback: 'TCONGS services, marketplaces, contact మరియు enquiry గురించి సమాచారం ఇవ్వగలను.' },
      kn: { greeting: 'ನಮಸ್ಕಾರ! Tcongs Assistant ಗೆ ಸ್ವಾಗತ. ನಾನು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?', fallback: 'TCONGS services, marketplaces, contact ಮತ್ತು enquiry ಬಗ್ಗೆ ಮಾಹಿತಿ ನೀಡಬಹುದು.' },
      ml: { greeting: 'നമസ്കാരം! Tcongs Assistant-ലേക്ക് സ്വാഗതം. എങ്ങനെ സഹായിക്കാം?', fallback: 'TCONGS services, marketplaces, contact, enquiry എന്നിവയെക്കുറിച്ചുള്ള വിവരങ്ങൾ നൽകാം.' },
      pa: { greeting: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ! Tcongs Assistant ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ। ਮੈਂ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?', fallback: 'ਮੈਂ TCONGS ਦੀਆਂ services, marketplaces, contact ਅਤੇ enquiry ਬਾਰੇ ਜਾਣਕਾਰੀ ਦੇ ਸਕਦਾ ਹਾਂ.' }
    };

    function detectLanguage(text) {
      const s = String(text || '');
      for (const ch of s) {
        const cp = ch.codePointAt(0);
        if (cp >= 0x0980 && cp <= 0x09FF) return 'bn';
        if (cp >= 0x0900 && cp <= 0x097F) return 'hi';
        if (cp >= 0x0A80 && cp <= 0x0AFF) return 'gu';
        if (cp >= 0x0A00 && cp <= 0x0A7F) return 'pa';
        if (cp >= 0x0B80 && cp <= 0x0BFF) return 'ta';
        if (cp >= 0x0C00 && cp <= 0x0C7F) return 'te';
        if (cp >= 0x0C80 && cp <= 0x0CFF) return 'kn';
        if (cp >= 0x0D00 && cp <= 0x0D7F) return 'ml';
      }
      const q = s.toLowerCase();
      const hindiWords = ['kya','kaise','kaisa','chahiye','batao','btao','mujhe','aap','apka','hamara','hai','hain','kar','karo','kare','number','mobile','phone'];
      const hit = hindiWords.filter(w => new RegExp('(^|\\s)' + w + '(\\s|$)').test(q)).length;
      return hit >= 2 ? 'hinglish' : 'en';
    }

    function normalize(text) {
      return String(text || '').toLowerCase().replace(/[^\p{L}\p{N}@.+#\s-]/gu, ' ').replace(/\s+/g, ' ').trim();
    }

    function hasAny(q, words) { return words.some(w => q.includes(w)); }

    function aiReply(text) {
      const q = normalize(text);
      const lang = detectLanguage(text);
      if (!q) return { text: LANGUAGE_RESPONSES[lang]?.greeting || LANGUAGE_RESPONSES.en.greeting, lang };
      if (hasAny(q, ['hello','hi','hey','namaste','good morning','good evening','good afternoon','नमस्ते'])) return { text: LANGUAGE_RESPONSES[lang]?.greeting || LANGUAGE_RESPONSES.en.greeting, lang };
      if (hasAny(q, ['thank','thanks','धन्यवाद','shukriya','thx'])) return { text: LANGUAGE_RESPONSES[lang]?.thanks || LANGUAGE_RESPONSES.en.thanks, lang };
      if (hasAny(q, ['who are you','what are you','tum kaun','aap kaun','about tcongs','what is tcongs','tcongs kya'])) return { text: TCONGS_KB.company, lang };
      if (hasAny(q, ['contact','phone','mobile','number','call','email','mail','reach','connect','whatsapp','whats app','फोन','मोबाइल','नंबर'])) return { text: TCONGS_KB.contact + '\n\nWhatsApp: +91 93210 87099', lang };
      if (hasAny(q, ['address','office','location','where are you','where is tcongs','mumbai office','map','पता','ऑफिस','लोकेशन'])) return { text: TCONGS_KB.address, lang };
      if (hasAny(q, ['hour','timing','time','open','working','when available','समय','टाइम'])) return { text: TCONGS_KB.hours, lang };
      if (hasAny(q, ['price','pricing','cost','charge','fee','fees','budget','rate','how much','कितना','कीमत','फीस'])) return { text: TCONGS_KB.pricing, lang };
      if (hasAny(q, ['career','job','jobs','vacancy','hiring','work with tcongs'])) return { text: TCONGS_KB.careers, lang };
      if (hasAny(q, ['password','otp','card','payment details','sensitive','privacy','security'])) return { text: TCONGS_KB.privacy, lang };
      if (hasAny(q, ['service','services','offer','help','what do you do','काम','सेवा'])) return { text: TCONGS_KB.services, lang };
      if (hasAny(q, ['marketplace','platform','platforms','which marketplaces','supported marketplace','marketplaces'])) return { text: TCONGS_KB.marketplaces, lang };

      const marketplaceKeys = Object.keys(MARKETPLACE_DATA);
      for (const key of marketplaceKeys) if (q.includes(key)) return { text: MARKETPLACE_DATA[key], lang };
      if (q.includes('tata') && q.includes('cliq')) return { text: MARKETPLACE_DATA.tatacliq, lang };
      if (hasAny(q, ['listing','product listing','title','bullet point','description','a+','ebc','seo listing','keyword'])) return { text: TCONGS_KB.listing, lang };
      if (hasAny(q, ['catalog','catalogue','sku','variant','attribute','size chart'])) return { text: TCONGS_KB.catalog, lang };
      if (hasAny(q, ['advertising','advertisement','ads','ppc','sponsored','acos','campaign'])) return { text: TCONGS_KB.advertising, lang };
      if (hasAny(q, ['account management','seller account','account setup','onboarding','registration','gst'])) return { text: TCONGS_KB.account, lang };
      if (hasAny(q, ['account health','suspension','suspended','warning','policy violation','poa','reinstatement'])) return { text: TCONGS_KB.health, lang };
      if (hasAny(q, ['brand registry','brand registration','storefront','a+ content','brand protection'])) return { text: TCONGS_KB.brand, lang };
      if (hasAny(q, ['growth','strategy','scale','scaling','revenue','expansion'])) return { text: TCONGS_KB.growth, lang };
      if (hasAny(q, ['consulting','consultation','one time','one-time','advice'])) return { text: TCONGS_KB.consulting, lang };
      if (hasAny(q, ['website','web','online'])) return { text: 'For TCONGS website or online marketplace requirements, the team can guide you based on your business and marketplace needs. Use the consultation form for a project-specific discussion.', lang };
      if (hasAny(q, ['bye','goodbye','see you','later'])) return { text: 'Thank you for visiting Tcongs Assistant. Have a great day!', lang };
      return { text: LANGUAGE_RESPONSES[lang]?.fallback || TCONGS_KB.fallback, lang };
    }

    function escapeHtml(value) {
      return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
    }

    function renderAiText(text) {
      let safe = escapeHtml(text);
      safe = safe.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
      safe = safe.replace(/(\+91\s?\d{5}\s?\d{5}|\+91\s?\d{10})/g, '<a href="tel:+919321087099">$1</a>');
      safe = safe.replace(/([\w.+-]+@[\w.-]+\.[A-Za-z]{2,})/g, '<a href="mailto:$1">$1</a>');
      return safe;
    }

    function addAiMessage(text, type, meta) {
      if (!aiMessages) return null;
      const msg = document.createElement('div');
      msg.className = 'tcongs-ai-message ' + type;
      if (type === 'bot') msg.innerHTML = renderAiText(text);
      else msg.textContent = text;
      if (meta) msg.dataset.meta = meta;
      aiMessages.appendChild(msg);
      aiMessages.scrollTop = aiMessages.scrollHeight;
      return msg;
    }

    function addThinking() {
      if (!aiMessages) return null;
      const wrap = document.createElement('div');
      wrap.className = 'tcongs-ai-message bot tcongs-ai-thinking';
      wrap.setAttribute('aria-label', 'Tcongs Assistant is thinking');
      wrap.innerHTML = '<span>Thinking</span><i></i><i></i><i></i>';
      aiMessages.appendChild(wrap);
      aiMessages.scrollTop = aiMessages.scrollHeight;
      return wrap;
    }

    function setAiBusy(busy) {
      if (aiForm) aiForm.classList.toggle('is-busy', busy);
      if (aiInput) aiInput.disabled = busy;
      const send = aiForm?.querySelector('button[type="submit"]');
      if (send) send.disabled = busy;
      if (aiStatus) aiStatus.textContent = busy ? 'Thinking…' : 'Online';
    }

    function openAi() {
      if (!aiPanel || !aiLauncher) return;
      aiPanel.classList.add('open');
      aiLauncher.setAttribute('aria-expanded', 'true');
      window.setTimeout(() => aiInput?.focus(), 120);
    }

    function closeAi() {
      if (!aiPanel || !aiLauncher) return;
      aiPanel.classList.remove('open');
      aiLauncher.setAttribute('aria-expanded', 'false');
    }

    aiLauncher?.addEventListener('click', () => aiPanel?.classList.contains('open') ? closeAi() : openAi());
    aiClose?.addEventListener('click', closeAi);

    let aiBusy = false;
    function sendAiMessage(text) {
      const value = String(text || '').trim();
      if (!value || aiBusy) return;
      addAiMessage(value, 'user');
      if (aiQuick) aiQuick.style.display = 'none';
      aiBusy = true;
      setAiBusy(true);
      const thinking = addThinking();
      const result = aiReply(value);
      const delay = Math.min(1250, Math.max(620, 520 + value.length * 8));
      window.setTimeout(() => {
        thinking?.remove();
        addAiMessage(result.text, 'bot', result.lang);
        aiBusy = false;
        setAiBusy(false);
        aiInput?.focus();
      }, delay);
    }

    aiForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = aiInput?.value || '';
      if (aiInput) aiInput.value = '';
      sendAiMessage(value);
    });

    function addAiOptions(title, items) {
      if (!aiMessages) return;
      const wrap = document.createElement('div');
      wrap.className = 'tcongs-ai-submenu';
      wrap.innerHTML = '<div class="tcongs-ai-submenu-title"></div><div class="tcongs-ai-submenu-grid"></div>';
      wrap.querySelector('.tcongs-ai-submenu-title').textContent = title;
      const grid = wrap.querySelector('.tcongs-ai-submenu-grid');
      items.forEach(item => {
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.label;
        if (item.external) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
        grid.appendChild(a);
      });
      aiMessages.appendChild(wrap);
      aiMessages.scrollTop = aiMessages.scrollHeight;
    }

    function showContextOptions(question) {
      const q = normalize(question);
      if (q.includes('service')) {
        addAiOptions('Explore TCONGS services', [
          {label:'Account Management', href:'services.html#account-health-management'},
          {label:'Product Listing', href:'services.html#listing-optimization'},
          {label:'Catalog Management', href:'services.html#consulting-issue-resolution'},
          {label:'Advertising / PPC', href:'services.html#ecommerce-strategy'},
          {label:'Marketplace Growth', href:'marketplace-growth.html'}
        ]);
      } else if (q.includes('marketplace')) {
        addAiOptions('Explore marketplaces', [
          {label:'Amazon', href:'amazon.html'}, {label:'Flipkart', href:'flipkart.html'},
          {label:'Meesho', href:'meesho.html'}, {label:'Myntra', href:'myntra.html'},
          {label:'AJIO', href:'ajio.html'}, {label:'Nykaa', href:'nykaa.html'},
          {label:'JioMart', href:'jiomart.html'}, {label:'Tata CLiQ', href:'tatacliq.html'}
        ]);
      } else if (hasAny(q, ['contact','phone','mobile','number','email','call','whatsapp'])) {
        addAiOptions('Contact TCONGS', [
          {label:'Call +91 93210 87099', href:'tel:+919321087099'},
          {label:'WhatsApp', href:'https://wa.me/919321087099', external:true},
          {label:'Email TCONGS', href:'mailto:tcongsmarketplacesolutions@gmail.com'},
          {label:'Contact Page', href:'contact.html'}
        ]);
      }
    }

    aiQuick?.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const question = btn.dataset.question || '';
        sendAiMessage(question);
        window.setTimeout(() => showContextOptions(question), 1500);
      });
    });

    /* Re-wire popup open buttons injected via header */
    document.querySelectorAll('#openPopupBtn, #mobilePopupBtn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        if (typeof openConsultationPopup === 'function') {
          e.preventDefault();
          openConsultationPopup();
          return;
        }
        const o = document.getElementById('popupOverlay');
        if (!o) return;
        e.preventDefault();
        o.classList.add('popup-visible');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        const l = document.getElementById('popupCaptchaLabel');
        if (l) {
          const a = Math.floor(Math.random() * 9) + 1;
          const b = Math.floor(Math.random() * 9) + 1;
          window._tcCaptchaAns = a + b;
          l.textContent = 'Human Verification: ' + a + ' + ' + b + ' =';
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

  /* TCONGS CHATBOT — reveal only after the page preloader is finished */
  function revealChatbotAfterPageLoad() {
    const preloader = document.getElementById('preloader');
    const delay = preloader ? 420 : 80;

    window.setTimeout(() => {
      document.documentElement.classList.add('tcongs-chatbot-ready');
    }, delay);
  }

  if (document.readyState === 'complete') {
    revealChatbotAfterPageLoad();
  } else {
    window.addEventListener('load', revealChatbotAfterPageLoad, { once: true });
  }

})();


