//Banner scroll
const track = document.querySelector('.logo-track');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  track.style.transform = `translateX(${-scrollY * 0.4}px)`;
});

let lastScrollY = window.scrollY;
const menuBar = document.querySelector('.menu-bar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrollar ner -> göm menyn
        menuBar.style.transform = 'translateY(-120%)';
    } else {
        // Scrollar upp -> visa menyn
        menuBar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

// Preview pannel 
 const items = document.querySelectorAll('.portfolio-item');
const portfolioImage = document.getElementById('portfolio-image');

items.forEach(item => {
  const header = item.querySelector('.portfolio-header');

  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Stäng alla
    items.forEach(i => i.classList.remove('open'));

    if (!isOpen) {
      // Öppna den klickade
      item.classList.add('open');

      // Byt bild
      const newImage = item.dataset.image;
      if (newImage) {
        portfolioImage.src = newImage;
      }
    }
  });
});
