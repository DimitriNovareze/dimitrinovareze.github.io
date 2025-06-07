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



const educationSection = document.getElementById('education');

window.addEventListener('scroll', () => {
  const rect = educationSection.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  // Si la section est visible dans la fenêtre (à ajuster selon le besoin)
  if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
    educationSection.classList.add('visible');
  } else {
    educationSection.classList.remove('visible');
  }
});



const experienceSection = document.getElementById('experience');

window.addEventListener('scroll', () => {
  const rect = experienceSection.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  // Si la section est visible dans la fenêtre (à ajuster selon le besoin)
  if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
    experienceSection.classList.add('visible');
  } else {
    experienceSection.classList.remove('visible');
  }
});



const projectsSection = document.getElementById('projects');

window.addEventListener('scroll', () => {
  const rect = projectsSection.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  // Si la section est visible dans la fenêtre (à ajuster selon le besoin)
  if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
    projectsSection.classList.add('visible');
  } else {
    projectsSection.classList.remove('visible');
  }
});


