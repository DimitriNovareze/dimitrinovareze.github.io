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


document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burger-btn");
  const burgerDropdown = document.getElementById("burger-dropdown");

  burgerBtn.addEventListener("click", () => {
    const isOpen = burgerDropdown.style.display === "flex";
    burgerDropdown.style.display = isOpen ? "none" : "flex";
  });
});