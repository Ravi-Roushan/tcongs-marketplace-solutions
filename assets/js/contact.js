/* ============================================================
   TCONGS — contact.js
   Contact Page: Form Validation & Submission
   Sends to send_mail.php → tcongsmarketplacesolutions@gmail.com
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const form       = document.getElementById('consultationForm');
  const submitBtn  = document.getElementById('submitBtn');
  const successMsg = document.getElementById('formSuccess');

  if (!form) return;

  /* ── Helper: show/clear field error ── */
  function setError(input, show) {
    if (show) {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  }

  /* ── Validate form ── */
  function validateForm() {
    let valid = true;

    const fullName = form.querySelector('#fullName');
    const mobile   = form.querySelector('#mobile');
    const email    = form.querySelector('#email');

    // Full Name
    if (!fullName.value.trim()) {
      setError(fullName, true); valid = false;
    } else {
      setError(fullName, false);
    }

    // Mobile — 10 digit Indian number
    const mobileClean = mobile.value.trim().replace(/\s|-/g, '');
    if (!/^[6-9]\d{9}$/.test(mobileClean)) {
      setError(mobile, true); valid = false;
    } else {
      setError(mobile, false);
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      setError(email, true); valid = false;
    } else {
      setError(email, false);
    }

    return valid;
  }

  /* ── Clear error on input ── */
  form.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => setError(el, false));
  });

  /* ── Form Submit ── */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Collect all form data
    const selectedMarketplaces = [...form.querySelectorAll('input[name="marketplaces"]:checked')].map(c => c.value);
    const selectedServices     = [...form.querySelectorAll('input[name="services"]:checked')].map(c => c.value);

    const data = {
      name:         form.querySelector('#fullName').value.trim(),
      phone:        form.querySelector('#mobile').value.trim(),
      email:        form.querySelector('#email').value.trim(),
      businessName: form.querySelector('#businessName').value.trim(),
      website:      form.querySelector('#website').value.trim(),
      marketplaces: selectedMarketplaces,
      services:     selectedServices,
      message:      form.querySelector('#businessInfo').value.trim(),
      service:      [
        selectedMarketplaces.length ? 'Marketplaces: ' + selectedMarketplaces.join(', ') : '',
        selectedServices.length     ? 'Services: ' + selectedServices.join(', ')         : ''
      ].filter(Boolean).join(' | ') || 'General Enquiry',
      source:       'contact-page'
    };

    // Disable button and show loading state
    submitBtn.disabled    = true;
    submitBtn.textContent = 'SENDING...';

    fetch('send_mail.php', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          submitBtn.textContent      = 'SUBMITTED ✓';
          submitBtn.style.background = '#25a244';
          successMsg.classList.add('show');
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });

          // Reset after 5 seconds
          setTimeout(() => {
            form.reset();
            submitBtn.disabled         = false;
            submitBtn.textContent      = 'SUBMIT REQUEST';
            submitBtn.style.background = '';
            successMsg.classList.remove('show');
          }, 5000);

        } else {
          // Show error state
          submitBtn.disabled         = false;
          submitBtn.textContent      = 'TRY AGAIN';
          submitBtn.style.background = '#c0392b';
          setTimeout(() => {
            submitBtn.textContent      = 'SUBMIT REQUEST';
            submitBtn.style.background = '';
          }, 4000);
          alert('Sorry, there was an issue sending your message. Please try WhatsApp or call us directly.');
          console.error('Mail error:', result.message);
        }
      })
      .catch(err => {
        submitBtn.disabled         = false;
        submitBtn.textContent      = 'TRY AGAIN';
        submitBtn.style.background = '#c0392b';
        setTimeout(() => {
          submitBtn.textContent      = 'SUBMIT REQUEST';
          submitBtn.style.background = '';
        }, 4000);
        alert('Connection error. Please try WhatsApp or call us directly.');
        console.error('Fetch error:', err);
      });
  });

  /* ── Marketplace checkbox visual feedback ── */
  form.querySelectorAll('.checkbox-item').forEach(item => {
    item.addEventListener('change', () => {
      const input = item.querySelector('input[type="checkbox"]');
      item.style.opacity = input.checked ? '1' : '';
    });
  });

});
