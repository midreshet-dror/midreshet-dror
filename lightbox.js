// Pop-up box for links marked with data-lightbox: shows the image (or PDF) on the page
// instead of opening a new tab. Closes with the X button, Esc, or a click outside the box.
// Without JavaScript the links still work as normal links.
(function () {
  var links = document.querySelectorAll('a[data-lightbox]');
  if (!links.length || typeof HTMLDialogElement === 'undefined') return;

  var css = document.createElement('style');
  css.textContent =
    'dialog.lb{padding:0;border:0;border-radius:16px;width:min(1000px,94vw);max-width:94vw;max-height:92vh;overflow:hidden;background:#faf9f6;box-shadow:0 20px 60px rgba(0,0,0,.35)}' +
    'dialog.lb[open]{display:flex;flex-direction:column}' +
    'dialog.lb::backdrop{background:rgba(20,30,25,.65)}' +
    '.lb-bar{display:flex;align-items:center;gap:12px;padding:10px 12px 10px 16px;border-bottom:1px solid rgba(0,0,0,.08);background:#fff}' +
    '.lb-title{flex:1;font-weight:700;font-size:18px;color:#2f4a3c}' +
    '.lb-open{font-size:14px;color:#2f6b4f;text-decoration:underline;white-space:nowrap}' +
    '.lb-close{flex:0 0 auto;width:44px;height:44px;border-radius:999px;border:0;background:#eef3ef;color:#2f4a3c;font-size:28px;line-height:1;cursor:pointer}' +
    '.lb-close:hover{background:#dfe9e2}' +
    '.lb-close:focus-visible{outline:3px solid #2f6b4f;outline-offset:2px}' +
    '.lb-body{overflow:auto;-webkit-overflow-scrolling:touch}' +
    '.lb-body img{display:block;width:100%;height:auto}' +
    '.lb-body iframe{display:block;width:100%;height:calc(92vh - 66px);border:0;background:#fff}' +
    'html.lb-lock{overflow:hidden}' +
    '.lb-hint{display:none;padding:6px 16px;font-size:13px;color:#5b6b61;background:#f3f6f3;border-bottom:1px solid rgba(0,0,0,.06)}' +
    // on phones, wide tables are shown bigger and scroll sideways so the text stays readable
    '@media (max-width:700px){dialog.lb.lb-wide .lb-body img{width:900px;max-width:none}dialog.lb.lb-wide .lb-hint{display:block}}';
  document.head.appendChild(css);

  var dlg = document.createElement('dialog');
  dlg.className = 'lb';
  dlg.setAttribute('aria-labelledby', 'lb-title');
  dlg.innerHTML =
    '<div class="lb-bar">' +
    '<span class="lb-title" id="lb-title"></span>' +
    '<a class="lb-open" target="_blank" rel="noopener">פתיחה בחלון חדש</a>' +
    '<button type="button" class="lb-close" aria-label="סגירה">&times;</button>' +
    '</div><div class="lb-hint">אפשר לגלול הצידה כדי לראות את כל הטבלה</div><div class="lb-body"></div>';
  document.body.appendChild(dlg);

  var title = dlg.querySelector('.lb-title');
  var openLink = dlg.querySelector('.lb-open');
  var body = dlg.querySelector('.lb-body');

  function open(a) {
    var href = a.getAttribute('href');
    var name = a.textContent.trim();
    title.textContent = name;
    openLink.href = href;
    body.innerHTML = '';
    dlg.classList.remove('lb-wide');
    if (/\.pdf($|[?#])/i.test(href)) {
      var frame = document.createElement('iframe');
      frame.src = href;
      frame.title = name;
      body.appendChild(frame);
    } else {
      var img = document.createElement('img');
      img.alt = name;
      img.onload = function () {
        dlg.classList.toggle('lb-wide', img.naturalWidth > img.naturalHeight * 1.2);
      };
      img.src = href;
      body.appendChild(img);
    }
    document.documentElement.classList.add('lb-lock');
    dlg.showModal();
    body.scrollTop = 0;
  }

  // Clean up here instead of relying on the dialog's 'close' event, which some browsers don't fire reliably.
  function cleanup() {
    document.documentElement.classList.remove('lb-lock');
    body.innerHTML = '';
  }
  function closeBox() {
    if (dlg.open) dlg.close();
    cleanup();
  }

  dlg.querySelector('.lb-close').addEventListener('click', closeBox);
  // a click on the dark area around the box lands on the dialog element itself
  dlg.addEventListener('click', function (e) { if (e.target === dlg) closeBox(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && dlg.open) { e.preventDefault(); closeBox(); }
  });
  dlg.addEventListener('close', cleanup);

  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) return; // let people open a tab on purpose
      // phones can't show a PDF inside a page reliably: open it the normal way there
      var isPdf = /\.pdf($|[?#])/i.test(a.getAttribute('href'));
      if (isPdf && (!navigator.pdfViewerEnabled || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent))) return;
      e.preventDefault();
      open(a);
    });
  });
})();
