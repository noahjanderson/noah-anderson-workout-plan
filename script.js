// Highlight today's day and open its card.
(function () {
  var today = new Date().getDay(); // 0 = Sunday ... 6 = Saturday

  document.querySelectorAll('[data-day="' + today + '"]').forEach(function (el) {
    el.classList.add('is-today');
    if (el.matches('a')) el.setAttribute('aria-current', 'date');
  });

  var card = document.querySelector('.day.is-today');
  if (card) {
    var details = card.querySelector('details');
    if (details) details.open = true;
    var id = card.id;
    var jump = document.querySelector('.jump a[href="#' + id + '"]');
    if (jump) jump.classList.add('is-today');
  }

  // Opening a day from any link (hero buttons, mini-nav) expands its card.
  function openFromHash() {
    var target = location.hash && document.getElementById(location.hash.slice(1));
    if (target && target.classList.contains('day')) {
      target.querySelector('details').open = true;
    }
  }
  window.addEventListener('hashchange', openFromHash);
  openFromHash();
})();
