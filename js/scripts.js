// Script prêt pour extensions futures
console.log("Page chargée");


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

// Pour l'instant, on bloque la soumission du formulaire (car pas de backend)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Merci pour votre message, je vous recontacterai bientôt !');
  form.reset();
  modal.style.display = 'none';
});
