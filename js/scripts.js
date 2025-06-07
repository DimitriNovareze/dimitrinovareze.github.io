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


document.querySelectorAll('.nav-link').forEach(link => {
  // On exclut le lien dont l'id est 'contact-nav-link'
  if (link.id !== 'contact-nav-link') {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetID = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});


// Gestion unifiée de l'animation au scroll pour plusieurs sections
const sections = ['education', 'experience', 'projects'].map(id => document.getElementById(id));

function handleScroll() {
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  sections.forEach(section => {
    if (!section) return;
    const rect = section.getBoundingClientRect();

    if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // pour appliquer au chargement aussi
