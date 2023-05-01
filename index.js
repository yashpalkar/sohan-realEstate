const navbarToggle = document.querySelector('.navbar-toggle-button');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggle.addEventListener('click', () => {
  navbarCollapse.classList.toggle('show');
});