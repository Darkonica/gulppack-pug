let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', hamburgerToggle);

function hamburgerToggle() {
  this.classList.toggle('is-active');
  document.querySelector('.mobile-nav').classList.toggle('is-active');
}