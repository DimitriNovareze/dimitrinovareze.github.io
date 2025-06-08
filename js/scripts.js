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


// Gestion unifiée de l'animation au scroll pour plusieurs sections

function checkSections() {
  const sections = ['education', 'experience', 'projects'].map(id => document.getElementById(id));

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', checkSections);
window.addEventListener('load', checkSections); 
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // pour appliquer au chargement aussi

