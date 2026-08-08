document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll('.media-container');
  const tabs = document.querySelectorAll('.tab-button');
  const descs = document.querySelectorAll('.desc-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const index = tab.dataset.index;

      // ▼ メディア切り替え
      containers.forEach(c => c.classList.remove('active'));
      containers[index].classList.add('active');

      // ▼ タブの見た目
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // ▼ 説明文切り替え
      descs.forEach(d => d.classList.remove('active'));
      descs[index].classList.add('active');
    });
  });

  // ▼ スクショ クリックで等倍表示（ライトボックス）
  const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
  const lightboxOverlay = document.getElementById('lightbox-overlay');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightboxTriggers.length && lightboxOverlay && lightboxImage) {
    const openLightbox = (src, alt) => {
      lightboxImage.src = src;
      lightboxImage.alt = alt || '';
      lightboxOverlay.classList.add('active');
    };

    const closeLightbox = () => {
      lightboxOverlay.classList.remove('active');
      lightboxImage.src = '';
    };

    lightboxTriggers.forEach(img => {
      img.addEventListener('click', () => openLightbox(img.src, img.alt));
    });

    lightboxOverlay.addEventListener('click', closeLightbox);
    if (lightboxClose) {
      lightboxClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeLightbox();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }
});
