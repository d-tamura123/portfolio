document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll('.video-container');
  const tabs = document.querySelectorAll('.tab-button');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const index = tab.dataset.index;

      containers.forEach(c => c.classList.remove('active'));
      tabs.forEach(t => t.classList.remove('active'));

      containers[index].classList.add('active');
      tab.classList.add('active');
    });
  });
});
