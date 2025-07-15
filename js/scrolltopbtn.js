
  // Récupère le bouton
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Affiche le bouton quand on scrolle vers le bas de 200px
  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  // Quand on clique, on remonte tout en haut
  scrollTopBtn.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

