document.querySelectorAll('.side-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 40,   // 少し上に余白
      behavior: 'smooth'
    });
  });
});
