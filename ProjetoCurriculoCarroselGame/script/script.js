function openNav() {
  const sidebar = document.getElementById("mySidebar").style.width = "256px";
  const main = document.getElementById("body").style.marginLeft = "256px";
}

// Controla fechar menu lateral
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("body").style.marginLeft = "0";
}

// --- CONTROLE DO CARROSSEL ---
let currentIndex = 2; 

window.addEventListener('DOMContentLoaded', () => {
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > items.length - 1) {
        currentIndex = items.length - 1;
    }

    updateCarousel();
}

function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    const items = document.querySelectorAll('.carousel-item');
    
    if (!track || items.length === 0) return;

    items.forEach(item => item.classList.remove('active'));
    items[currentIndex].classList.add('active');

    const itemWidth = items[0].getBoundingClientRect().width + 15; 
    const viewWidth = track.parentElement.getBoundingClientRect().width;
    const centerOffset = (viewWidth / 2) - (itemWidth / 2);

    const amountToMove = -(currentIndex * itemWidth) + centerOffset;
    track.style.transform = `translateX(${amountToMove}px)`;
}