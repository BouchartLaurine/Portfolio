const toggle = document.getElementById('darkmode-toggle');
const icon = document.getElementById('darkmode-icon');

// Vérifie le localStorage au chargement
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  icon.src = './img/soleil.png';
} else {
  document.body.classList.remove('dark');
  icon.src = './img/lunes.png';
}

// Mets à jour les images au chargement
const switchImages = document.querySelectorAll('.switch-darkmode');
switchImages.forEach(img => {
  const lightSrc = img.getAttribute('data-light');
  const darkSrc = img.getAttribute('data-dark');

  if (document.body.classList.contains('dark')) {
    img.setAttribute('src', darkSrc);
  } else {
    img.setAttribute('src', lightSrc);
  }
});

// Quand on clique :
toggle.addEventListener('click', function(e) {
  e.preventDefault();

  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    icon.src = './img/soleil.png';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.src = './img/lunes.png';
    localStorage.setItem('theme', 'light');
  }

  // Mettre à jour les images tout de suite
  switchImages.forEach(img => {
    const lightSrc = img.getAttribute('data-light');
    const darkSrc = img.getAttribute('data-dark');

    if (document.body.classList.contains('dark')) {
      img.setAttribute('src', darkSrc);
    } else {
      img.setAttribute('src', lightSrc);
    }
  });
});
