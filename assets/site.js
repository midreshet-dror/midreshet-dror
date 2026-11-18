// Shared header behaviour: mark the current page, open the seminars menu, and the phone menu.
(function () {
  var page = location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.dr-nav a, .dr-mobile a').forEach(function (a) {
    if (a.getAttribute('href') === page) a.setAttribute('aria-current', 'page');
  });
  document.querySelectorAll('.dr-nav__group').forEach(function (group) {
    if (group.querySelector('a[aria-current="page"]')) group.classList.add('is-current');
    var toggle = group.querySelector('.dr-nav__toggle');
    function setOpen(open) {
      group.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    toggle.addEventListener('click', function () { setOpen(!group.classList.contains('is-open')); });
    document.addEventListener('click', function (e) { if (!group.contains(e.target)) setOpen(false); });
    group.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { setOpen(false); toggle.focus(); }
    });
  });

  // Hide the header while scrolling down, show it again when scrolling up.
  // It stays visible near the top of the page, while a menu is open, and when it holds keyboard focus.
  var header = document.querySelector('.dr-header');
  if (header) {
    var lastY = window.scrollY, ticking = false;
    function menuOpen() {
      var m = document.getElementById('mobile-menu');
      return (m && !m.hidden) || !!header.querySelector('.dr-nav__group.is-open');
    }
    function onScroll() {
      var y = Math.max(window.scrollY, 0);
      var delta = y - lastY;
      header.classList.toggle('is-scrolled', y > 4);
      if (y <= header.offsetHeight || menuOpen() || header.contains(document.activeElement)) {
        header.classList.remove('is-hidden');
      } else if (delta > 6) {
        header.classList.add('is-hidden');
      } else if (delta < -6) {
        header.classList.remove('is-hidden');
      }
      if (Math.abs(delta) > 6) lastY = y;
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
    }, { passive: true });
    header.addEventListener('focusin', function () { header.classList.remove('is-hidden'); });
  }

  var btn = document.getElementById('mobile-menu-btn');
  var menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  var icon = btn.querySelector('span');
  function setMenu(open) {
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    icon.textContent = open ? 'close' : 'menu';
  }
  btn.addEventListener('click', function () { setMenu(menu.hidden); });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
})();
