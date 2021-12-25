const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
var element = document.getElementById("myElement");

function show_now() {
  search.classList.toggle('active')
  element.classList.toggle('active')
}

function menuToggle() {
  const toggleMenu = document.querySelector('.menu');
  toggleMenu.classList.toggle('active')
}