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
