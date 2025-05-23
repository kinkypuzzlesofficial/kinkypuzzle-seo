// This auto-loads header and footer from external files if you're using JS-includes
window.addEventListener('DOMContentLoaded', () => {
  fetch('/header.html')
    .then(res => res.text())
    .then(html => document.getElementById('header').innerHTML = html);

  fetch('/footer.html')
    .then(res => res.text())
    .then(html => document.getElementById('footer').innerHTML = html);
});
