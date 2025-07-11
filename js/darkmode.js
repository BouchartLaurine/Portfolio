 const toggle = document.getElementById('darkmode-toggle');
  const icon = document.getElementById('darkmode-icon');

  toggle.addEventListener('click', function(e) {
    e.preventDefault(); // Évite le comportement du lien

    document.body.classList.toggle('dark');

    // Vérifie si le mode sombre est actif
    if (document.body.classList.contains('dark')) {
      icon.src = './img/soleil.png'; // Icône soleil pour mode sombre
    } else {
      icon.src = './img/lunes.png';  // Icône lune pour mode clair
    }
  });

