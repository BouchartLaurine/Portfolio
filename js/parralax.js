// JS pour parallax mascotte chat
const mascotte = document.getElementById('mascotte-chat');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  // Décalage calculé - plus petit pour un effet subtil
  const offset = scrollY * 0.2; // Ajuste le 0.3 selon l’effet voulu
  
  // Appliquer une translation verticale
  mascotte.style.transform = `translateY(${offset}px)`;
});
