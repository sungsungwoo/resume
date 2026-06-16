(function () {
  var HEADER_HTML = [
    '<header class="header">',
    '  <a class="brand" href="index.html">',
    '    <span class="brand-mark"></span>',
    '    <span class="brand-name">성성우</span>',
    '    <span class="slash">/</span>',
    '    <span class="brand-role">SERVER-BACKEND DEVELOPER</span>',
    '  </a>',
    '  <nav class="nav">',
    '    <a href="index.html">ABOUT ME</a>',
    '    <a href="resume.html">RESUME</a>',
    '    <a href="projects.html">PROJECTS</a>',
    '    <a href="contact.html">CONTACT</a>',
    '  </nav>',
    '</header>'
  ].join('\n');

  var FOOTER_HTML = [
    '<footer class="footer">',
    '  <div class="footer-left">',
    '    &copy; 2026 by Sung SungWoo.<br />',
    '    Server / Backend Developer Portfolio',
    '  </div>',
    '  <div class="footer-right">',
    '    <div class="footer-block">',
    '      <strong>Contact</strong>',
    '      <span>010-3268-4211</span>',
    '    </div>',
    '    <div class="footer-block">',
    '      <strong>Email</strong>',
    '      <span>swsung73@gmail.com</span>',
    '    </div>',
    '    <div class="footer-block">',
    '      <strong>Links</strong>',
    '      <span>GitHub &middot; Wishket &middot; PDF</span>',
    '    </div>',
    '  </div>',
    '</footer>'
  ].join('\n');

  function setActiveNav() {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    if (page === '') page = 'index.html';
    document.querySelectorAll('.nav a').forEach(function (a) {
      if (a.getAttribute('href') === page) {
        a.classList.add('active');
      }
    });
  }

  function injectComponent(id, html) {
    var target = document.getElementById(id);
    if (!target) return;
    var temp = document.createElement('div');
    temp.innerHTML = html;
    var node = temp.firstElementChild;
    target.parentNode.replaceChild(node, target);
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectComponent('site-header', HEADER_HTML);
    injectComponent('site-footer', FOOTER_HTML);
    setActiveNav();
  });
})();
