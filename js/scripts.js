// Ouvrir/fermer le modal
const contactButton = document.getElementById('contact-button');
const modal = document.getElementById('contact-modal');
const closeBtn = document.querySelector('.close');

contactButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


// Clic sur le lien "Contact" de la navbar
const contactNavLink = document.getElementById('contact-nav-link');

contactNavLink.addEventListener('click', (e) => {
  e.preventDefault(); // Évite le scroll vers le bas
  modal.style.display = 'block';
});


function checkSections() {
  const sections = ['education', 'experience', 'projects'].map(id => document.getElementById(id));

  sections.forEach(section => {
    if (!section) return; // sécurité

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Si la section est visible dans la fenêtre (marge 150px pour déclencher tôt)
    if (rect.top <= windowHeight - 150 && rect.bottom >= 150) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

// On écoute scroll ET resize (pour s'adapter au redimensionnement écran)
window.addEventListener('scroll', checkSections);
window.addEventListener('resize', checkSections);
window.addEventListener('load', checkSections);
