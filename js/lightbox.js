
  // Récupère le lightbox et l'image
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementsByClassName('close')[0];

  // Cible toutes les images de projet
  const projetImages = document.querySelectorAll('.projet img');

  projetImages.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
    });
  });

  // Fermer en cliquant sur le X
  closeBtn.onclick = function() {
    lightbox.style.display = "none";
  }

  // Fermer en cliquant à l'extérieur de l'image
  lightbox.onclick = function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  }

