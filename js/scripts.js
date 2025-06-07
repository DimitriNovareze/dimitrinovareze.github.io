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
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetID = link.getAttribute('href').substring(1); // enlève le #
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});



// Ton code modal ici (inchangé) ...

// Animation apparition au scroll pour la section Education
document.addEventListener('DOMContentLoaded', () => {
  const educationSection = document.querySelector('.education-section');

  function revealOnScroll() {
    if (!educationSection) return; // sécurité si l'élément n'existe pas
    const rect = educationSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      educationSection.classList.add('visible');
      window.removeEventListener('scroll', revealOnScroll);
    }
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();  // check au chargement au cas où c'est déjà visible
});
