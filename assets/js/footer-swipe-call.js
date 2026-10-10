/* TCONGS footer swipe-to-call control */
(function () {
  function initSwipeCall() {
    document.querySelectorAll('.footer-swipe-track').forEach(function (track) {
      if (track.dataset.swipeReady === '1') return;
      track.dataset.swipeReady = '1';
      var handle = track.querySelector('.footer-swipe-handle');
      var progress = track.querySelector('.footer-swipe-progress');
      var startX = 0;
      var currentX = 0;
      var dragging = false;
      var completed = false;
      var maxTravel = function () {
        return Math.max(0, track.clientWidth - handle.offsetWidth - 8);
      };
      var setTravel = function (value) {
        currentX = Math.max(0, Math.min(value, maxTravel()));
        handle.style.transform = 'translateX(' + currentX + 'px)';
        if (progress) progress.style.width = (currentX + handle.offsetWidth + 4) + 'px';
      };
      var finish = function () {
        if (!dragging) return;
        dragging = false;
        var threshold = maxTravel() * 0.78;
        if (currentX >= threshold && !completed) {
          completed = true;
          track.classList.add('is-complete');
          var number = track.getAttribute('data-call-number') || '+919321087099';
          window.location.href = 'tel:' + number.replace(/[^\d+]/g, '');
          window.setTimeout(function () {
            completed = false;
            track.classList.remove('is-complete');
            setTravel(0);
          }, 1600);
        } else {
          setTravel(0);
        }
      };
      track.addEventListener('pointerdown', function (event) {
        if (completed) return;
        dragging = true;
        startX = event.clientX - currentX;
        track.setPointerCapture && track.setPointerCapture(event.pointerId);
        track.classList.add('is-dragging');
        event.preventDefault();
      });
      track.addEventListener('pointermove', function (event) {
        if (!dragging || completed) return;
        setTravel(event.clientX - startX);
      });
      track.addEventListener('pointerup', finish);
      track.addEventListener('pointercancel', finish);
      track.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          if (!completed) {
            completed = true;
            window.location.href = 'tel:' + (track.getAttribute('data-call-number') || '+919321087099');
          }
        }
      });
      track.addEventListener('click', function (event) {
        // Keyboard activation remains available; pointer clicks must swipe.
        if (event.detail === 0 && !completed) {
          window.location.href = 'tel:' + (track.getAttribute('data-call-number') || '+919321087099');
        }
      });
      track.addEventListener('pointerup', function () {
        track.classList.remove('is-dragging');
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSwipeCall);
  } else {
    initSwipeCall();
  }
})();
