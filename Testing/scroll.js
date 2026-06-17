// Banner scroll
const track = document.querySelector('.logo-track');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    track.style.transform = `translateX(${-scrollY * 0.4}px)`;
});

let lastScrollY = window.scrollY;
const menuBar = document.querySelector('.menu-bar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        menuBar.style.transform = 'translateY(-120%)';
    } else {
        menuBar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

// Karusell
const allSlides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const tabs = document.querySelectorAll(".tab");

let currentCategory = "email";
let current = 0;

function getVisibleSlides() {
    return [...allSlides].filter(s => s.dataset.category === currentCategory);
}

function showSlide(index) {
    const visible = getVisibleSlides();
    allSlides.forEach(s => s.classList.remove("active"));
    if (visible[index]) {
        visible[index].classList.add("active");
    }
}

nextBtn.addEventListener("click", () => {
    const visible = getVisibleSlides();
    current++;
    if (current >= visible.length) current = 0;
    showSlide(current);
});

prevBtn.addEventListener("click", () => {
    const visible = getVisibleSlides();
    current--;
    if (current < 0) current = visible.length - 1;
    showSlide(current);
});

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        currentCategory = tab.dataset.category;
        current = 0;
        showSlide(current);
    });
});

showSlide(current);
tabs.forEach(tab => {
    const category = tab.dataset.category;
    const count = [...allSlides].filter(s => s.dataset.category === category).length;
    tab.innerHTML = `${tab.textContent} <span style="opacity: 0.5; font-size: 13px;">${count}</span>`;
});

const showcase = document.querySelector('.showcase');

//  Meny försvinner vid eget projekt
window.addEventListener('scroll', () => {
    const showcaseTop = showcase.getBoundingClientRect().top;
    const showcaseBottom = showcase.getBoundingClientRect().bottom;

    if (showcaseTop < 200 && showcaseBottom > 0) {
        menuBar.style.opacity = '0';
        menuBar.style.pointerEvents = 'none';
    } else {
        menuBar.style.opacity = '1';
        menuBar.style.pointerEvents = 'auto';
    }
});

  // Lyssna på när muspekaren rör sig över skärmen
  document.addEventListener('mousemove', function(e) {
    // Skapa ett nytt div-element för denna punkt i spåret
    const dot = document.createElement('div');
    dot.className = 'trail-dot';
    
    // Placera punkten exakt där muspekaren befinner sig
    // Vi drar av 3 pixlar (hälften av bredden/höjden på 6px) för att centrera den under pennspetsen
    dot.style.left = (e.clientX - 3) + 'px';
    dot.style.top = (e.clientY - 3) + 'px';
    
    // Lägg till punkten på hemsidan
    document.body.appendChild(dot);
    
    // Ta bort elementet helt från koden efter 2500ms (2.5 sekunder) 
    // så att hemsidan inte blir seg av för mycket gammal kod
    setTimeout(() => {
      dot.remove();
    }, 2500);
  });
