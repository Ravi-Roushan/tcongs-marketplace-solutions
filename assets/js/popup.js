/* ============================================================
   TCONGS — popup.js (Fixed Layout & Secure Local PHP Mailer)
   Lead Capture Popup: Strict Close Button Only, Background Scroll Locked
   ============================================================ */

(function () {
  'use strict';

  const SESSION_KEY = 'tcongs_popup_shown';

  /* ── Services list ────────────────────────────────────── */
  const SERVICES = [
    'Amazon Account Management',
    'Flipkart Account Management',
    'Meesho Account Management',
    'Myntra Account Management',
    'Product Listing Optimization',
    'E-Commerce Strategy & Visibility',
    'Marketplace Account Health',
    'Brand Store Setup',
    'Advertising & PPC Management',
    'Other / Not Listed',
  ];

  /* ── WhatsApp number ──────────────────────────────────── */
  const WA_NUMBER = '919321087099';

  /* ── CAPTCHA: random a+b ──────────────────────────────── */
  let captchaAnswer = 0;

  function generateCaptcha() {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    captchaAnswer = a + b;
    const label = document.getElementById('popupCaptchaLabel');
    if (label) label.textContent = `Human Verification: ${a} + ${b} =`;
  }

  /* ── Build popup HTML ─────────────────────────────────── */
  function buildPopup() {
    if (document.getElementById('popupOverlay')) return; // already built
    const serviceOptions = SERVICES.map(
      (s) => `<option value="${s}">${s}</option>`
    ).join('');

    const html = `
    <div id="popupOverlay" role="dialog" aria-modal="true" aria-labelledby="popupTitle">
      <div class="popup-scroll-wrap">
      <div class="popup-card">

        <button class="popup-close" id="popupClose" aria-label="Close popup">&#x2715;</button>

        <div class="popup-header">
          <h2 id="popupTitle">Let's Talk</h2>
          <p>Tell us a bit about your project and we'll reach out shortly.</p>
        </div>

        <div class="popup-success" id="popupSuccess">
          <div class="popup-success-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="#74b640" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3>Thank You!</h3>
          <p>Your inquiry has been received.<br>We typically reply within a few minutes.</p>
        </div>

        <form id="popupLeadForm" novalidate autocomplete="off">

          <div class="popup-form-group">
            <label for="popupName">Full Name</label>
            <input type="text" id="popupName" class="popup-input" placeholder="Full Name*" maxlength="80" />
            <span class="popup-field-error" id="popupNameErr">Please enter your full name.</span>
          </div>

          <div class="popup-form-group">
            <label for="popupEmail">Email Address <span style="font-weight:400;color:#999;">(optional – for confirmation email)</span></label>
            <input type="email" id="popupEmail" class="popup-input" placeholder="Your Email Address" maxlength="120" />
            <span class="popup-field-error" id="popupEmailErr">Please enter a valid email.</span>
          </div>

          <div class="popup-form-group">
            <label for="popupPhone">Phone Number</label>
            <div class="popup-phone-row" id="popupPhoneRow">
              <div class="popup-phone-flag">
                <span>🇮🇳</span>
                <span class="popup-phone-code">+91</span>
              </div>
              <input type="tel" id="popupPhone" class="popup-input" placeholder="Phone Number*" maxlength="10" inputmode="numeric" />
            </div>
            <span class="popup-field-error" id="popupPhoneErr">Please enter a valid 10-digit number.</span>
          </div>

          <div class="popup-form-group">
            <label for="popupService">Select Services</label>
            <select id="popupService" class="popup-select">
              <option value="" disabled selected>Select Services*</option>
              ${serviceOptions}
            </select>
            <span class="popup-field-error" id="popupServiceErr">Please select a service.</span>
          </div>



          <div class="popup-form-group">
            <div class="popup-captcha-label" id="popupCaptchaLabel">Human Verification: ? + ? =</div>
            <input type="text" id="popupCaptcha" class="popup-input" placeholder="Enter Sum*" maxlength="3" inputmode="numeric" />
            <span class="popup-field-error" id="popupCaptchaErr">Incorrect answer. Please try again.</span>
          </div>

          <div class="popup-actions">
            <button type="submit" class="popup-btn-submit" id="popupSubmitBtn">Submit Inquiry</button>
            <a href="https://wa.me/919321087099" class="popup-btn-whatsapp" id="popupWhatsapp" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          <div class="popup-footer-note">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
            We typically reply within a few minutes.
          </div>

        </form>
      </div>
      </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', html);
  }

  /* ── Helpers ──────────────────────────────────────────── */
  function show(el) { el && el.classList.add('show'); }
  function hide(el) { el && el.classList.remove('show'); }
  function setError(inputEl, rowEl, errEl) {
    (rowEl || inputEl).classList.add('input-error');
    show(errEl);
  }
  function clearError(inputEl, rowEl, errEl) {
    (rowEl || inputEl).classList.remove('input-error');
    hide(errEl);
  }

  /* ── Prevent Mobile Touch Dragging Back Scroll ─────────── */
  function blockTouch(e) { e.preventDefault(); }

  /* ── Validate ─────────────────────────────────────────── */
  function validate() {
    let ok = true;
    const name      = document.getElementById('popupName');
    const phone     = document.getElementById('popupPhone');
    const phoneRow  = document.getElementById('popupPhoneRow');
    const service   = document.getElementById('popupService');
    const captcha   = document.getElementById('popupCaptcha');
    const nameErr    = document.getElementById('popupNameErr');
    const phoneErr   = document.getElementById('popupPhoneErr');
    const serviceErr = document.getElementById('popupServiceErr');
    const captchaErr = document.getElementById('popupCaptchaErr');

    if (!name.value.trim() || name.value.trim().length < 2) {
      setError(name, null, nameErr); ok = false;
    } else { clearError(name, null, nameErr); }

    const ph = phone.value.replace(/\D/g, '');
    if (ph.length !== 10) {
      setError(phone, phoneRow, phoneErr); ok = false;
    } else { clearError(phone, phoneRow, phoneErr); }

    if (!service.value) {
      setError(service, null, serviceErr); ok = false;
    } else { clearError(service, null, serviceErr); }



    const expectedAnswer = (typeof window._tcCaptchaAns !== 'undefined') ? window._tcCaptchaAns : captchaAnswer;
    if (parseInt(captcha.value.trim(), 10) !== expectedAnswer) {
      setError(captcha, null, captchaErr); ok = false;
    } else { clearError(captcha, null, captchaErr); }

    return ok;
  }

  /* ── Open / Close popup ───────────────────────────────── */
  function openPopup() {
    const overlay = document.getElementById('popupOverlay');
    if (!overlay) return;
    overlay.classList.add('popup-visible');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    overlay.addEventListener('touchmove', blockTouch, { passive: false });
    generateCaptcha();
  }

  /* Expose globally so inline onclick on any page can call it */
  window.openConsultationPopup = openPopup;

  function closePopup() {
    const overlay = document.getElementById('popupOverlay');
    if (!overlay) return;
    overlay.classList.remove('popup-visible');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    overlay.removeEventListener('touchmove', blockTouch);
    sessionStorage.setItem(SESSION_KEY, '1');
    window._tcCaptchaAns = undefined;
  }

  /* ── Build WhatsApp message ───────────────────────────── */
  function buildWaMessage() {
    const name    = (document.getElementById('popupName')?.value.trim())    || '';
    const phone   = (document.getElementById('popupPhone')?.value.trim())   || '';
    const service = (document.getElementById('popupService')?.value)        || '';
    const msg = `Hi TCONGS! I'm interested in your services.\n\nName: ${name}\nPhone: +91 ${phone}\nService: ${service}`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  }

  /* ── Wire up events after DOM ready ──────────────────── */
  function initEvents() {
    const closeBtn  = document.getElementById('popupClose');
    const form      = document.getElementById('popupLeadForm');
    const submitBtn = document.getElementById('popupSubmitBtn');
    const waBtn     = document.getElementById('popupWhatsapp');
    const service   = document.getElementById('popupService');
    const phone     = document.getElementById('popupPhone');

    closeBtn?.addEventListener('click', closePopup);

    // Bind all buttons with ID openPopupBtn or class nav-cta-btn or that trigger popupOverlay
    document.querySelectorAll('#openPopupBtn, .nav-cta-btn, [onclick*="popupOverlay"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openPopup();
      });
      btn.removeAttribute('onclick');
    });

    service?.addEventListener('change', () => {
      service.classList.toggle('selected', !!service.value);
    });

    phone?.addEventListener('input', () => {
      phone.value = phone.value.replace(/\D/g, '').slice(0, 10);
    });

    waBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(buildWaMessage(), '_blank', 'noopener,noreferrer');
      closePopup();
    });

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validate()) return;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
      const emailVal = document.getElementById('popupEmail')?.value.trim() || '';
      const payload = {
        name:    document.getElementById('popupName').value.trim(),
        email:   emailVal,
        phone:   '+91 ' + document.getElementById('popupPhone').value.trim(),
        service: document.getElementById('popupService').value,
        message: ''
      };
      fetch('send_mail.php', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            showSuccess();
          } else {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Inquiry';
            alert('Error: ' + data.message);
          }
        })
        .catch(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Submit Inquiry';
          alert('Request failed. Please check your server is running.');
        });
    });
  }

  function showSuccess() {
    const form    = document.getElementById('popupLeadForm');
    const success = document.getElementById('popupSuccess');
    if (form)    form.style.display = 'none';
    if (success) success.classList.add('show');
    setTimeout(closePopup, 3000);
  }

  /* ── Init on DOMContentLoaded ─────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    buildPopup();   // always build the popup HTML in the page
    initEvents();   // always wire form events

    // Check if we are on the homepage
    const pathname = window.location.pathname.toLowerCase();
    const isHomepage = pathname === '/' || 
                       pathname.endsWith('/index.html') || 
                       pathname.endsWith('/index.php') ||
                       pathname === '' ||
                       pathname.split('/').pop() === '';

    // Clear sessionStorage flag if page is refreshed or reloaded
    const isReload = window.performance && (
      performance.navigation.type === 1 ||
      (performance.getEntriesByType && 
       performance.getEntriesByType('navigation')[0] && 
       performance.getEntriesByType('navigation')[0].type === 'reload')
    );
    if (isReload) {
      sessionStorage.removeItem(SESSION_KEY);
    }

    // Auto-open after 5s ONLY on homepage and ONLY once per session
    if (isHomepage && !sessionStorage.getItem(SESSION_KEY)) {
      setTimeout(() => {
        openPopup();
        sessionStorage.setItem(SESSION_KEY, '1');
      }, 5000);
    }
  });

})();