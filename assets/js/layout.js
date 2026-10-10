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
            <li class="contact-detail-item"><span class="contact-item-icon">✉</span><a href="mailto:info@tcongsmarketplacesolutions.in">info@tcongsmarketplacesolutions.in</a></li>
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
      <span class="tcongs-ai-robot" aria-hidden="true"><img src="assets/images/tcongs-ai-robot-premium.svg" alt=""></span>
      <span class="tcongs-ai-launcher-status" aria-hidden="true"></span>
    </button>

    <div class="tcongs-ai-panel" id="tcongsAiPanel" role="dialog" aria-label="Tcongs AI Assistant" aria-modal="false">
      <div class="tcongs-ai-header">
        <div class="tcongs-ai-brand">
          <span class="tcongs-ai-header-logo"><img src="assets/images/tcongs-favicon-round.webp" alt="Tcongs"></span>
          <div class="tcongs-ai-title-wrap">
            <strong>Tcongs Assistant</strong>
            <span class="tcongs-ai-online"><i></i> <span id="tcongsAiStatus">Online</span></span>
          </div>
        </div>
        <div class="tcongs-ai-header-actions">
          <label class="tcongs-ai-language" aria-label="Choose language">
            <span class="tcongs-ai-language-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.6 2.5 4 5.5 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.5-4-9s1.4-6.5 4-9Z"></path></svg></span>
            <select id="tcongsAiLanguage" aria-label="Choose language">
              <option value="auto">Auto</option>
              <option value="en">English</option>
              <option value="hinglish">Hinglish</option>
              <option value="hi">हिन्दी</option>
              <option value="bn">বাংলা</option>
              <option value="mr">मराठी</option>
              <option value="gu">ગુજરાતી</option>
              <option value="ta">தமிழ்</option>
              <option value="te">తెలుగు</option>
              <option value="kn">ಕನ್ನಡ</option>
              <option value="ml">മലയാളം</option>
              <option value="pa">ਪੰਜਾਬੀ</option>
            </select>
          </label>
          <button type="button" class="tcongs-ai-close" id="tcongsAiClose" aria-label="Minimize AI Assistant"><span class="tcongs-ai-close-arrow" aria-hidden="true"></span></button>
        </div>
      </div>

      <div class="tcongs-ai-messages" id="tcongsAiMessages">
        <div class="tcongs-ai-message bot">Hi! 👋 Welcome to Tcongs Assistant.
I can help you explore our services, marketplace solutions, pricing, or connect you with our team.
How can I help you today?</div>
      </div>

      <div class="tcongs-ai-quick" id="tcongsAiQuick">
        <button type="button" data-question="services">Services</button>
        <button type="button" data-question="marketplace">Marketplace</button>
        <button type="button" data-question="price">Pricing</button>
        <button type="button" data-question="contact">Contact</button>
        
      </div>

      <form class="tcongs-ai-form" id="tcongsAiForm">
        <a class="tcongs-ai-whatsapp" href="https://wa.me/919321087099?text=Hi%20TCONGS%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" aria-label="Message Tcongs on WhatsApp">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3.5 20l1.1-4.1A8.5 8.5 0 1 1 20.5 11.5Z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8.4 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c.5 1 1.3 1.8 2.3 2.3l.6-.5c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.6.1-2.6-.8-4.6-2.8-5.7-5.1-5.7-1.1-.3-1.2 0-1.6Z" fill="currentColor"/></svg>
        </a>
        <input id="tcongsAiInput" type="text" autocomplete="off" placeholder="Message Tcongs Assistant" aria-label="Type your question">
        <button type="submit" aria-label="Send message">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 3.3 10.2 14.7m10.9-11.2-4.1 16.1a1 1 0 0 1-1.9.1l-4.9-5-6.3-2.2a1 1 0 0 1 .1-1.9L20.2 2.7a1 1 0 0 1 1.4.6Z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
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
      img.src = 'assets/images/tcongs-mark.webp';
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

    /* ── TCONGS AI ASSISTANT — NEW PREMIUM ROBOT UI ── */
    const chatbotWidget = document.getElementById('tcongsAiWidget');
    if (chatbotWidget) {
      chatbotWidget.outerHTML = `
      <div class="tcongs-ai-widget" id="tcongsAiWidget">
        <button class="tcongs-ai-launcher" id="tcongsAiLauncher" aria-label="Open Tcongs Assistant" aria-expanded="false">
          <span class="tcongs-ai-robot" aria-hidden="true"><img src="assets/images/tcongs-ai-robot-premium.svg" alt=""></span>
          <span class="tcongs-ai-launcher-status" aria-hidden="true"></span>
        </button>
        <div class="tcongs-ai-panel" id="tcongsAiPanel" role="dialog" aria-label="Tcongs Assistant" aria-modal="false">
          <div class="tcongs-ai-header">
            <div class="tcongs-ai-brand">
              <span class="tcongs-ai-header-logo"><img src="assets/images/tcongs-favicon-round.webp" alt="Tcongs"></span>
              <div class="tcongs-ai-title-wrap"><strong>Tcongs Assistant</strong><span class="tcongs-ai-online"><i></i> <span id="tcongsAiStatus">Online</span></span></div>
            </div>
            <div class="tcongs-ai-header-actions">
              <label class="tcongs-ai-language" aria-label="Choose language"><span class="tcongs-ai-language-icon" aria-hidden="true">🌐</span><select id="tcongsAiLanguage" aria-label="Choose language"><option value="auto">Auto</option><option value="en">English</option><option value="hinglish">Hinglish</option><option value="hi">हिन्दी</option><option value="bn">বাংলা</option><option value="mr">मराठी</option><option value="gu">ગુજરાતી</option><option value="ta">தமிழ்</option><option value="te">తెలుగు</option><option value="kn">ಕನ್ನಡ</option><option value="ml">മലയാളം</option><option value="pa">ਪੰਜਾਬੀ</option></select></label>
              <button type="button" class="tcongs-ai-close" id="tcongsAiClose" aria-label="Minimize Tcongs Assistant"><span class="tcongs-ai-close-arrow" aria-hidden="true"></span></button>
            </div>
          </div>
          <div class="tcongs-ai-messages" id="tcongsAiMessages"><div class="tcongs-ai-message bot">Hi! 👋 Welcome to Tcongs Assistant.
I can help you explore our services, marketplace solutions, pricing, or connect you with our team.
How can I help you today?</div></div>
          <div class="tcongs-ai-quick" id="tcongsAiQuick"><button type="button" data-question="services">Services</button><button type="button" data-question="marketplace">Marketplace</button><button type="button" data-question="price">Pricing</button><button type="button" data-question="contact">Contact</button></div>
          <form class="tcongs-ai-form" id="tcongsAiForm"><a class="tcongs-ai-whatsapp" href="https://wa.me/919321087099?text=Hi%20TCONGS%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" aria-label="Message Tcongs on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3.5 20l1.1-4.1A8.5 8.5 0 1 1 20.5 11.5Z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8.4 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c.5 1 1.3 1.8 2.3 2.3l.6-.5c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.6.1-2.6-.8-4.6-2.8-5.7-5.1-.3-.7-.2-1.2 0-1.6Z" fill="currentColor"/></svg></a><input id="tcongsAiInput" type="text" autocomplete="off" placeholder="Message Tcongs Assistant" aria-label="Type your question"><button type="submit" aria-label="Send message"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 3.3 10.2 14.7m10.9-11.2-4.1 16.1a1 1 0 0 1-1.9.1l-4.9-5-6.3-2.2a1 1 0 0 1 .1-1.9L20.2 2.7a1 1 0 0 1 1.4.6Z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg></button></form>
        </div>
      </div>`;
    }
    
    /* =========================================================
       TCONGS AI — MOBILE BOTTOM-RIGHT FORCE
       Desktop layout is left untouched.
       Inline !important wins over all legacy/mobile CSS rules.
       ========================================================= */
    const finalChatbotWidget = document.getElementById('tcongsAiWidget');

    if (finalChatbotWidget) {
      document.body.appendChild(finalChatbotWidget);

      const applyAiMobilePosition = () => {
        const widget = document.getElementById('tcongsAiWidget');
        const launcher = document.getElementById('tcongsAiLauncher');
        const panel = document.getElementById('tcongsAiPanel');

        if (!widget) return;

        if (window.innerWidth <= 600) {
          widget.style.setProperty('position','fixed','important');
          widget.style.setProperty('left','auto','important');
          widget.style.setProperty('right','12px','important');
          widget.style.setProperty('top','auto','important');
          widget.style.setProperty('bottom','12px','important');
          widget.style.setProperty('width','60px','important');
          widget.style.setProperty('height','60px','important');
          widget.style.setProperty('max-width','60px','important');
          widget.style.setProperty('max-height','60px','important');
          widget.style.setProperty('margin','0','important');
          widget.style.setProperty('padding','0','important');
          widget.style.setProperty('display','block','important');
          widget.style.setProperty('transform','none','important');
          widget.style.setProperty('box-sizing','border-box','important');
          widget.style.setProperty('z-index','2147483647','important');

          if (launcher) {
            launcher.style.setProperty('position','absolute','important');
            launcher.style.setProperty('left','0','important');
            launcher.style.setProperty('right','auto','important');
            launcher.style.setProperty('top','0','important');
            launcher.style.setProperty('bottom','auto','important');
            launcher.style.setProperty('width','60px','important');
            launcher.style.setProperty('height','60px','important');
            launcher.style.setProperty('min-width','60px','important');
            launcher.style.setProperty('min-height','60px','important');
            launcher.style.setProperty('margin','0','important');
            launcher.style.setProperty('padding','0','important');
            launcher.style.setProperty('display','flex','important');
            launcher.style.setProperty('align-items','center','important');
            launcher.style.setProperty('justify-content','center','important');
            launcher.style.setProperty('transform','none','important');
          }

          if (panel) {
            panel.style.setProperty('position','absolute','important');
            panel.style.setProperty('left','auto','important');
            panel.style.setProperty('right','0','important');
            panel.style.setProperty('top','auto','important');
            panel.style.setProperty('bottom','68px','important');
            panel.style.setProperty('width','min(315px, calc(100vw - 20px))','important');
            panel.style.setProperty('max-width','calc(100vw - 20px)','important');
            panel.style.setProperty('transform-origin','bottom right','important');
          }
        } else {
          /* Remove only our mobile inline overrides on desktop. */
          [
            'position','left','right','top','bottom','width','height',
            'max-width','max-height','margin','padding','display',
            'transform','box-sizing','z-index'
          ].forEach(p => widget.style.removeProperty(p));

          if (launcher) [
            'position','left','right','top','bottom','width','height',
            'min-width','min-height','margin','padding','display',
            'align-items','justify-content','transform'
          ].forEach(p => launcher.style.removeProperty(p));

          if (panel) [
            'position','left','right','top','bottom','width','max-width',
            'transform-origin'
          ].forEach(p => panel.style.removeProperty(p));
        }
      };

      applyAiMobilePosition();
      window.addEventListener('resize', applyAiMobilePosition);
    }

    const aiLauncher = document.getElementById('tcongsAiLauncher');
    const aiPanel = document.getElementById('tcongsAiPanel');
    const aiClose = document.getElementById('tcongsAiClose');
    const aiForm = document.getElementById('tcongsAiForm');
    const aiInput = document.getElementById('tcongsAiInput');
    const aiMessages = document.getElementById('tcongsAiMessages');
    const aiQuick = document.getElementById('tcongsAiQuick');
    const aiStatus = document.getElementById('tcongsAiStatus');
    const aiLanguage = document.getElementById('tcongsAiLanguage');
    let aiBusy = false;

    const TCONGS_KB = {
      company: 'TCONGS Marketplace Solutions is an eCommerce and marketplace consulting company focused on helping brands launch, manage and grow across leading online marketplaces in India.',
      services: 'TCONGS provides marketplace account management, seller account setup, product listing and SEO optimization, catalog management, marketplace advertising/PPC, account-health support, brand registry support, consulting and marketplace growth strategy.',
      marketplaces: 'TCONGS supports Amazon, Flipkart, Meesho, Myntra, AJIO, Nykaa, JioMart, Tata CLiQ, FirstCry and Snapdeal, along with other marketplace requirements where applicable.',
      contact: 'TCONGS contact details:\n• Mobile: +91 93210 87099\n• Email: info@tcongsmarketplacesolutions.in\n• Website: tcongsmarketplacesolutions.in',
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
      en: { greeting: 'Hi! 👋 Welcome to Tcongs Assistant.\nI can help you explore our services, marketplace solutions, pricing, or connect you with our team.\nHow can I help you today?', thanks: 'You’re welcome! 😊 If you need anything else, just tell me what you’re looking for.', fallback: TCONGS_KB.fallback },
      hi: { greeting: 'नमस्ते! Tcongs Assistant में आपका स्वागत है। मैं आपकी किस तरह मदद कर सकता हूँ?', thanks: 'आपका स्वागत है। अगर आपको TCONGS की services, marketplaces या contact details चाहिए, मैं मदद कर सकता हूँ।', fallback: 'मैं TCONGS की services, marketplaces, account management, listing, catalog, advertising, account health, pricing, contact details, office location और enquiry से जुड़ी जानकारी दे सकता हूँ।' },
      hinglish: { greeting: 'Hi! 👋 Welcome to Tcongs Assistant.\nMain services, marketplace solutions, pricing ya team se connect karne mein help kar sakta hoon.\nAapko kis cheez mein help chahiye?', thanks: 'You’re welcome! TCONGS ki services, marketplaces, contact ya enquiry ke baare mein pooch sakte hain.', fallback: 'Main TCONGS ki services, marketplaces, account management, listing, catalog, advertising, account health, pricing, contact, location aur enquiry ke baare mein help kar sakta hoon.' },
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
      const selected = aiLanguage?.value || 'auto';
      if (selected && selected !== 'auto') return selected;
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

    function localizeAnswer(text, lang, key) {
      if (!text || !lang || lang === 'en' || lang === 'hinglish') return text;
      const common = {
        hi: {
          company:'TCONGS Marketplace Solutions भारत में brands को online marketplaces पर launch, manage और grow करने में मदद करने वाली eCommerce consulting company है।',
          services:'TCONGS marketplace account management, seller setup, product listing और SEO optimization, catalog management, marketplace advertising/PPC, account-health support, brand support, consulting और growth strategy देता है।',
          marketplaces:'TCONGS Amazon, Flipkart, Meesho, Myntra, AJIO, Nykaa, JioMart, Tata CLiQ, FirstCry और Snapdeal जैसे marketplaces को support करता है।',
          contact:'TCONGS contact details:\n• Mobile: +91 93210 87099\n• Email: info@tcongsmarketplacesolutions.in\n• Website: tcongsmarketplacesolutions.in',
          address:'TCONGS office:\nAshish Building No. 24, Office No. 12, First Floor, Ratan Nagar Ln, Gharkul Society, Manish Nagar, Four Bungalows, Andheri West, Mumbai, Maharashtra 400053.',
          pricing:'TCONGS की कोई एक fixed price नहीं है। Scope marketplace, account size, catalog volume, advertising और support requirements पर depend करता है। Consultation form के जरिए अपनी requirement share करें।',
          fallback:'मैं TCONGS की services, marketplaces, account management, listing, catalog, advertising, account health, pricing, contact details, office location और enquiries में मदद कर सकता हूँ।'
        },
        bn:{
          company:'TCONGS Marketplace Solutions একটি eCommerce consulting company, যা ভারতে brands-কে online marketplaces-এ launch, manage এবং grow করতে সাহায্য করে।',
          services:'TCONGS marketplace account management, seller setup, product listing ও SEO optimization, catalog management, advertising/PPC, account-health support, brand support, consulting এবং growth strategy প্রদান করে।',
          marketplaces:'TCONGS Amazon, Flipkart, Meesho, Myntra, AJIO, Nykaa, JioMart, Tata CLiQ, FirstCry এবং Snapdeal-এর মতো marketplaces support করে।',
          contact:'TCONGS contact details:\n• Mobile: +91 93210 87099\n• Email: info@tcongsmarketplacesolutions.in\n• Website: tcongsmarketplacesolutions.in',
          address:'TCONGS office:\nAshish Building No. 24, Office No. 12, First Floor, Ratan Nagar Ln, Gharkul Society, Manish Nagar, Four Bungalows, Andheri West, Mumbai, Maharashtra 400053.',
          pricing:'TCONGS-এর একটি fixed price নেই। Scope marketplace, account size, catalog volume, advertising এবং support requirements-এর উপর নির্ভর করে। Consultation form-এ requirement পাঠান।',
          fallback:'আমি TCONGS-এর services, marketplaces, account management, listing, catalog, advertising, account health, pricing, contact details, office location এবং enquiry বিষয়ে সাহায্য করতে পারি।'
        },
        gu:{
          company:'TCONGS Marketplace Solutions એક eCommerce consulting company છે, જે ભારતમાં brands ને online marketplaces પર launch, manage અને grow કરવામાં મદદ કરે છે।',
          services:'TCONGS marketplace account management, seller setup, product listing અને SEO optimization, catalog management, advertising/PPC, account-health support, brand support, consulting અને growth strategy આપે છે।',
          marketplaces:'TCONGS Amazon, Flipkart, Meesho, Myntra, AJIO, Nykaa, JioMart, Tata CLiQ, FirstCry અને Snapdeal જેવા marketplaces support કરે છે।',
          contact:'TCONGS contact details:\n• Mobile: +91 93210 87099\n• Email: info@tcongsmarketplacesolutions.in\n• Website: tcongsmarketplacesolutions.in',
          address:'TCONGS office:\nAshish Building No. 24, Office No. 12, First Floor, Ratan Nagar Ln, Gharkul Society, Manish Nagar, Four Bungalows, Andheri West, Mumbai, Maharashtra 400053.',
          pricing:'TCONGS ની કોઈ એક fixed price નથી. Scope marketplace, account size, catalog volume, advertising અને support requirements પર આધાર રાખે છે. Consultation form માં requirement મોકલો।',
          fallback:'હું TCONGS ની services, marketplaces, account management, listing, catalog, advertising, account health, pricing, contact details, office location અને enquiry માં મદદ કરી શકું છું.'
        }
      };
      return common[lang]?.[key] || text;
    }

    function aiReply(text) {
      const q = normalize(text);
      const lang = detectLanguage(text);
      if (!q) return { text: LANGUAGE_RESPONSES[lang]?.greeting || LANGUAGE_RESPONSES.en.greeting, lang };
      if (hasAny(q, ['hello','hi','hey','namaste','good morning','good evening','good afternoon','नमस्ते'])) return { text: LANGUAGE_RESPONSES[lang]?.greeting || LANGUAGE_RESPONSES.en.greeting, lang };
      if (hasAny(q, ['thank','thanks','धन्यवाद','shukriya','thx'])) return { text: LANGUAGE_RESPONSES[lang]?.thanks || LANGUAGE_RESPONSES.en.thanks, lang };
      if (hasAny(q, ['who are you','what are you','tum kaun','aap kaun','about tcongs','what is tcongs','tcongs kya'])) return { text: localizeAnswer(TCONGS_KB.company, lang, 'company'), lang };
      if (hasAny(q, ['contact','phone','mobile','number','call','email','mail','reach','connect','whatsapp','whats app','फोन','मोबाइल','नंबर'])) return { text: localizeAnswer(TCONGS_KB.contact, lang, 'contact') + '\n\nWhatsApp: +91 93210 87099', lang };
      if (hasAny(q, ['address','office','location','where are you','where is tcongs','mumbai office','map','पता','ऑफिस','लोकेशन'])) return { text: localizeAnswer(TCONGS_KB.address, lang, 'address'), lang };
      if (hasAny(q, ['hour','timing','time','open','working','when available','समय','टाइम'])) return { text: TCONGS_KB.hours, lang };
      if (hasAny(q, ['career','job','jobs','vacancy','hiring','work with tcongs'])) return { text: TCONGS_KB.careers, lang };
      if (hasAny(q, ['password','otp','card','payment details','sensitive','privacy','security'])) return { text: TCONGS_KB.privacy, lang };
      if (hasAny(q, ['service','services','offer','help','what do you do','काम','सेवा'])) return { text: localizeAnswer(TCONGS_KB.services, lang, 'services'), lang };
      if (hasAny(q, ['marketplace','platform','platforms','which marketplaces','supported marketplace','marketplaces'])) return { text: localizeAnswer(TCONGS_KB.marketplaces, lang, 'marketplaces'), lang };
      if (/^(hi|hii|hiii|hey|hello|helo|heyy)$/.test(q)) return { text: lang === 'hinglish' ? 'Hey! 👋 Nice to meet you. How can I help you today?' : (LANGUAGE_RESPONSES[lang]?.greeting || LANGUAGE_RESPONSES.en.greeting), lang };
      if (hasAny(q, ['website banwani hai','website banani hai','website banana hai','website chahiye','web site banwani hai','website banwana hai'])) {
        const answer = lang === 'hinglish' ? 'Bilkul! 👍 Agar aapko business website, e-commerce website, marketplace ya custom website banwani hai, main aapko right option choose karne mein help kar sakta hoon. Aap kis type ki website chahte hain?' : 'Absolutely! 👍 If you need a business website, e-commerce website, marketplace or custom website, I can help you choose the right option. What type of website are you looking for?';
        return { text: answer, lang };
      }
      if (hasAny(q, ['price','pricing','cost','charge','fee','fees','budget','rate','how much','कितना','कीमत','फीस'])) {
        const answer = lang === 'hinglish' ? 'Price project ke type aur requirements par depend karega. Main random price nahi batana chahta. Aap batao — business website, e-commerce, marketplace ya koi custom project?' : localizeAnswer(TCONGS_KB.pricing, lang, 'pricing');
        return { text: answer, lang };
      }

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
      if (hasAny(q, ['website','web','online'])) { const answer = lang === 'hinglish' ? 'Haan, website requirement ke liye bhi help kar sakte hain. Aap business website, e-commerce, marketplace ya custom website mein se kya banana chahte hain?' : 'Yes, I can help you with website requirements too. Are you looking for a business website, e-commerce site, marketplace or a custom website?'; return { text: answer, lang }; }
      if (hasAny(q, ['bye','goodbye','see you','later'])) return { text: 'Thank you for visiting Tcongs Assistant. Have a great day!', lang };
      return { text: localizeAnswer(LANGUAGE_RESPONSES[lang]?.fallback || TCONGS_KB.fallback, lang, 'fallback'), lang };
    }

    function escapeHtml(value) {
      return String(value).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
    }

    function normalizeBotBrandCase(value) {
      return String(value ?? '').replace(/\btcongs\b/gi, 'Tcongs');
    }

    function renderAiText(text) {
      let safe = escapeHtml(normalizeBotBrandCase(text));
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
      wrap.innerHTML = '<span class="tcongs-thinking-avatar" aria-hidden="true"><img src="assets/images/tcongs-ai-robot-premium.svg" alt=""></span><span class="tcongs-thinking-dots" aria-hidden="true"><i></i><i></i><i></i></span>';
      aiMessages.appendChild(wrap);
      aiMessages.scrollTop = aiMessages.scrollHeight;
      return wrap;
    }

    function setAiBusy(busy) {
      aiBusy = Boolean(busy);
      if (aiForm) aiForm.classList.toggle('is-busy', aiBusy);
      if (aiInput) aiInput.disabled = aiBusy;
      const send = aiForm?.querySelector('button[type="submit"]');
      if (send) send.disabled = aiBusy;
      if (aiStatus) aiStatus.textContent = 'Online';
    }

    /* =========================================================
       SMART CHAT SAFETY — GENUINE VS SPAM / GIBBERISH
       Keeps the assistant helpful without pretending random text
       is a real business enquiry.
       ========================================================= */
    const AI_SPAM_PATTERNS = [
      /^(x+y+z+|x+z+|xyz+|abc+d*|abcd+|asdf+|asdfgh+|qwerty+|qwert+|zxcv+|poiuy+|lkjh+|hjkl+)$/i,
      /^(test+|testing+|random+|blah+|lol+|aaa+|bbb+|ccc+|xxx+|yyy+|zzz+)$/i,
      /^(1{2,}|2{2,}|3{2,}|1234+|12345+|0000+|9999+)$/,
      /^(.)\1{3,}$/i
    ];

    const AI_SPAM_BUSINESS_WORDS = [
      'amazon','flipkart','meesho','myntra','ajio','nykaa','jiomart','tatacliq',
      'firstcry','snapdeal','marketplace','seller','listing','catalog','catalogue',
      'product','ads','advertising','ppc','account','sales','growth','service',
      'pricing','price','cost','website','ecommerce','business','brand','contact',
      'consultation','consulting','help','order','issue','problem','suspended',
      'suspension','gst','sku','campaign','seo','tcongs'
    ];

    function isLikelySpamText(value) {
      const q = normalize(value);
      if (!q) return false;
      if (AI_SPAM_BUSINESS_WORDS.some(word => q.includes(word))) return false;

      const compact = q.replace(/[\s_-]+/g, '');
      if (AI_SPAM_PATTERNS.some(rx => rx.test(compact))) return true;

      /* Very short alphabet-only gibberish such as "xkqz", "qzpm" etc. */
      if (/^[a-z]+$/i.test(compact) && compact.length >= 3 && compact.length <= 12) {
        const vowels = (compact.match(/[aeiou]/gi) || []).length;
        const consonants = compact.length - vowels;
        if (consonants >= 4 && vowels <= 1) return true;
      }

      return false;
    }

    function getSpamResponse(value) {
      const key = 'tcongs-ai-spam-state';
      let state = { total: 0, last: '', repeat: 0 };

      try {
        state = JSON.parse(sessionStorage.getItem(key) || JSON.stringify(state));
      } catch (_) {}

      const normalized = normalize(value);
      const same = normalized === state.last;
      state.repeat = same ? state.repeat + 1 : 1;
      state.last = normalized;
      state.total += 1;

      try { sessionStorage.setItem(key, JSON.stringify(state)); } catch (_) {}

      if (state.repeat >= 3 || state.total >= 5) {
        return {
          text: 'I’m here to help with genuine Tcongs enquiries, but I won’t keep responding to repeated or spam-style messages. 🙂\n\nIf you need help, please tell me what you actually need — for example Amazon/Flipkart support, product listing, advertising, account management, marketplace growth, pricing, or a website requirement.',
          lang: 'en',
          spam: true
        };
      }

      if (state.repeat === 2) {
        return {
          text: 'I noticed the same random/spam-style message was sent again. 🙂\n\nIf you’re testing the chat, no problem — but I’ll be much more useful if you share a real requirement. What are you looking for help with?',
          lang: 'en',
          spam: true
        };
      }

      return {
        text: 'I’m not sure that message contains a clear requirement. 🙂\n\nYou can ask me something specific, such as “I need help with my Amazon listing”, “How does marketplace management work?”, “I need advertising support”, or “I want to contact the Tcongs team”.',
        lang: 'en',
        spam: true
      };
    }

    /* Reliable local assistant send flow. Keeps the UI responsive and guarantees
       the submit button actually produces a reply even without an external API. */
    async function sendAiMessage(rawValue) {
      const value = String(rawValue || '').trim();
      if (!value || aiBusy) return;

      addAiMessage(value, 'user');
      setAiBusy(true);
      const thinking = addThinking();

      const reply = isLikelySpamText(value)
        ? getSpamResponse(value)
        : aiReply(value);

      // Natural thinking animation.
      await new Promise(resolve => window.setTimeout(resolve, 1800));

      if (thinking && thinking.parentNode) thinking.remove();
      addAiMessage(reply.text, 'bot', reply.lang);
      setAiBusy(false);

      /* Do not add service/navigation chips for junk messages. */
      if (!reply.spam) {
        window.setTimeout(() => showContextOptions(value), 80);
      }
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
    if (aiLanguage) {
      const savedLanguage = localStorage.getItem('tcongs-ai-language');
      if (savedLanguage && aiLanguage.querySelector(`option[value="${savedLanguage}"]`)) aiLanguage.value = savedLanguage;
      aiLanguage.addEventListener('change', () => {
        localStorage.setItem('tcongs-ai-language', aiLanguage.value);
        if (aiStatus && !aiBusy) aiStatus.textContent = 'Online';
      });
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
      wrap.querySelector('.tcongs-ai-submenu-title').textContent = normalizeBotBrandCase(title);
      const grid = wrap.querySelector('.tcongs-ai-submenu-grid');
      items.forEach(item => {
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = normalizeBotBrandCase(item.label);
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
      } else if (hasAny(q, ['price','pricing'])) {
        addAiOptions('Let’s discuss your requirement', [
          {label:'Enquire Now', href:'contact.html'},
          {label:'Marketplace Growth', href:'marketplace-growth.html'},
          {label:'Talk to Team', href:'contact.html'}
        ]);
      } else if (hasAny(q, ['website','web'])) {
        addAiOptions('Choose your website type', [
          {label:'Business Website', href:'services.html'},
          {label:'E-commerce', href:'services.html'},
          {label:'Marketplace', href:'marketplace-growth.html'},
          {label:'Custom Website', href:'contact.html'}
        ]);
      } else if (hasAny(q, ['location','address','office'])) {
        addAiOptions('Find TCONGS', [
          {label:'Mumbai Office', href:'contact.html'},
          {label:'Contact Page', href:'contact.html'}
        ]);
      } else if (hasAny(q, ['contact','phone','mobile','number','email','call','whatsapp'])) {
        addAiOptions('Connect with TCONGS', [
          {label:'Call +91 93210 87099', href:'tel:+919321087099'},
          {label:'WhatsApp', href:'https://wa.me/919321087099', external:true},
          {label:'Email TCONGS', href:'mailto:info@tcongsmarketplacesolutions.in'},
          {label:'Enquire Now', href:'contact.html'}
        ]);
      }
    }

    aiQuick?.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const question = btn.dataset.question || '';
        sendAiMessage(question);
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

  /* Fresh V30 chatbot markup is injected above; no legacy chatbot normalization needed. */

  /* TCONGS CHATBOT — premium assistant reveal after page preloader is finished */
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


