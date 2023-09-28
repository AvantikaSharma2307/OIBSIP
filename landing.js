const navbarToggle = document.getElementById('navbarToggle');
const navbarLinks = document.getElementById('navbarLinks');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

window.addEventListener("scroll", function() {
    var header = document.querySelector("navbar");
    if (window.pageYOffset > 100) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });