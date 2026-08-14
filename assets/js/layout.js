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
        <img src="assets/images/1.png" alt="TCONGS Marketplace Solutions Logo" class="nav-logo-img">
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
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/amazon.png" alt="Amazon"></div>
                    <div><div class="mega-item-text">Amazon</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="flipkart.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/flipkart.png" alt="Flipkart"></div>
                    <div><div class="mega-item-text">Flipkart</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="ajio.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/ajio.png" alt="Ajio"></div>
                    <div><div class="mega-item-text">Ajio</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="myntra.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/myntra.png" alt="Myntra"></div>
                    <div><div class="mega-item-text">Myntra</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="nykaa.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/nykaa.png" alt="Nykaa"></div>
                    <div><div class="mega-item-text">Nykaa</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="firstcry.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/firstcry.png" alt="FirstCry"></div>
                    <div><div class="mega-item-text">FirstCry</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="meesho.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/meesho.png" alt="Meesho"></div>
                    <div><div class="mega-item-text">Meesho</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="jiomart.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/jiomart.png" alt="JioMart"></div>
                    <div><div class="mega-item-text">JioMart</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="snapdeal.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/snapdeal.png" alt="Snapdeal"></div>
                    <div><div class="mega-item-text">Snapdeal</div><div class="mega-item-sub">Seller Management</div></div>
                  </a>
                  <a href="tatacliq.html" class="mega-item">
                    <div class="mega-item-icon"><img src="assets/images/marketplaces/TataCLiQ.png" alt="Tata CLiQ"></div>
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
        <a href="amazon.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/amazon.png" alt=""></span><span>Amazon</span></a>
        <a href="flipkart.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/flipkart.png" alt=""></span><span>Flipkart</span></a>
        <a href="meesho.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/meesho.png" alt=""></span><span>Meesho</span></a>
        <a href="myntra.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/myntra.png" alt=""></span><span>Myntra</span></a>
        <a href="ajio.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/ajio.png" alt=""></span><span>AJIO</span></a>
        <a href="nykaa.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/nykaa.png" alt=""></span><span>Nykaa</span></a>
        <a href="jiomart.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/jiomart.png" alt=""></span><span>JioMart</span></a>
        <a href="tatacliq.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/TataCLiQ.png" alt=""></span><span>Tata CLiQ</span></a>
        <a href="snapdeal.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/snapdeal.png" alt=""></span><span>Snapdeal</span></a>
        <a href="firstcry.html"><span class="mobile-service-icon"><img src="assets/images/marketplaces/firstcry.png" alt=""></span><span>FirstCry</span></a>
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
            <li><a href="index.html#blog">Blog</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="careers.html">Careers</a></li>
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
            <img src="assets/images/1.png" alt="TCONGS Marketplace Solutions Logo" class="footer-brand-logo">
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
        <p class="copyright-text">🛡️ Secure | Trusted | Professional</p>
        <p class="copyright-text">Let's Grow Your Business Together! 🚀</p>
        <p class="copyright-text">Developed &amp; Managed by <a href="https://tcongsinfotech.com/index.html" target="_blank" rel="noopener noreferrer">Tcongs Infotech</a></p>
      </div>
    </div>
  </footer>


  <!-- ── TCONGS AI CHAT ASSISTANT ───────────────────────── -->
  <div class="tcongs-ai-widget" id="tcongsAiWidget">
    <button class="tcongs-ai-launcher" id="tcongsAiLauncher" aria-label="Open TCONGS AI" aria-expanded="false">
      <span class="tcongs-ai-launcher-icon" aria-hidden="true"><img src="assets/images/tcongs-mark.png" alt=""></span>
      <span class="tcongs-ai-launcher-text">TCONGS AI</span>
      <span class="tcongs-ai-launcher-dot" aria-hidden="true"></span>
    </button>

    <div class="tcongs-ai-panel" id="tcongsAiPanel" role="dialog" aria-label="TCONGS AI Assistant" aria-modal="false">
      <div class="tcongs-ai-header">
        <div class="tcongs-ai-brand">
          <span class="tcongs-ai-header-logo"><img src="assets/images/tcongs-mark.png" alt="TCONGS"></span>
          <div class="tcongs-ai-title-wrap">
            <strong>TCONGS Assistant</strong>
            <span class="tcongs-ai-online"><i></i> Online</span>
          </div>
        </div>
        <button type="button" class="tcongs-ai-close" id="tcongsAiClose" aria-label="Close AI Assistant">×</button>
      </div>

      <div class="tcongs-ai-messages" id="tcongsAiMessages">
        <div class="tcongs-ai-message bot">Hi! 👋 I'm your TCONGS AI Assistant. Ask me about marketplaces, services, or getting started.</div>
      </div>

      <div class="tcongs-ai-quick" id="tcongsAiQuick">
        <button type="button" data-question="What services do you provide?">Services</button>
        <button type="button" data-question="Which marketplaces do you support?">Marketplaces</button>
        <button type="button" data-question="How can I contact TCONGS?">Contact</button>
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

    if (headerEl) headerEl.innerHTML = HEADER_HTML;
    if (footerEl) footerEl.innerHTML = FOOTER_HTML;


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

    /* ── TCONGS AI ASSISTANT ───────────────────────────────── */
    const aiLauncher = document.getElementById('tcongsAiLauncher');
    const aiPanel = document.getElementById('tcongsAiPanel');
    const aiClose = document.getElementById('tcongsAiClose');
    const aiForm = document.getElementById('tcongsAiForm');
    const aiInput = document.getElementById('tcongsAiInput');
    const aiMessages = document.getElementById('tcongsAiMessages');
    const aiQuick = document.getElementById('tcongsAiQuick');

    const aiAnswers = {
      services: 'We support marketplace account management, product listing optimization, catalog management, advertising/PPC support, account health, brand store setup and eCommerce strategy.',
      marketplaces: 'TCONGS supports Amazon, Flipkart, Meesho, Myntra, AJIO, Nykaa, JioMart, Tata CLiQ, Snapdeal and other major marketplaces listed on our website.',
      contact: 'You can call +91 93210 87099, email tcongsmarketplacesolutions@gmail.com, or use the Get Free Consultation form.',
      pricing: 'Pricing depends on your marketplace, account requirements and scope of work. Use Get Free Consultation and our team can discuss the right plan.',
      amazon: 'For Amazon, we provide seller account management, listing optimization, account health support, advertising and marketplace growth services.',
      flipkart: 'For Flipkart, we provide seller account management, catalog/listing optimization and marketplace support.',
      default: 'I can help with TCONGS services, supported marketplaces, account management, listing optimization, pricing guidance and contact details. Try one of the quick options below.'
    };

    function aiReply(text) {
      const q = text.toLowerCase();
      if (q.includes('service') || q.includes('offer') || q.includes('help')) return aiAnswers.services;
      if (q.includes('marketplace') || q.includes('amazon') || q.includes('flipkart') || q.includes('meesho') || q.includes('myntra')) {
        if (q.includes('amazon')) return aiAnswers.amazon;
        if (q.includes('flipkart')) return aiAnswers.flipkart;
        return aiAnswers.marketplaces;
      }
      if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('reach')) return aiAnswers.contact;
      if (q.includes('price') || q.includes('cost') || q.includes('charge')) return aiAnswers.pricing;
      return aiAnswers.default;
    }

    function addAiMessage(text, type) {
      if (!aiMessages) return;
      const msg = document.createElement('div');
      msg.className = 'tcongs-ai-message ' + type;
      msg.textContent = text;
      aiMessages.appendChild(msg);
      aiMessages.scrollTop = aiMessages.scrollHeight;
    }

    function openAi() {
      if (!aiPanel || !aiLauncher) return;
      aiPanel.classList.add('open');
      aiLauncher.setAttribute('aria-expanded', 'true');
      setTimeout(() => aiInput?.focus(), 120);
    }

    function closeAi() {
      if (!aiPanel || !aiLauncher) return;
      aiPanel.classList.remove('open');
      aiLauncher.setAttribute('aria-expanded', 'false');
    }

    aiLauncher?.addEventListener('click', () => {
      aiPanel?.classList.contains('open') ? closeAi() : openAi();
    });
    aiClose?.addEventListener('click', closeAi);

    function sendAiMessage(text) {
      const value = text.trim();
      if (!value) return;
      addAiMessage(value, 'user');
      if (aiQuick) aiQuick.style.display = 'none';
      setTimeout(() => addAiMessage(aiReply(value), 'bot'), 280);
    }

    aiForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = aiInput?.value || '';
      if (aiInput) aiInput.value = '';
      sendAiMessage(value);
    });

    aiQuick?.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => sendAiMessage(btn.dataset.question || ''));
    });

    /* Re-wire popup open buttons injected via header */
    document.querySelectorAll('#openPopupBtn, #mobilePopupBtn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        if (typeof openConsultationPopup === 'function') {
          openConsultationPopup();
        } else {
          /* Fallback: directly toggle overlay */
          const o = document.getElementById('popupOverlay');
          if (o) {
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
          }
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
    const delay = preloader ? 2500 : 80;

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
