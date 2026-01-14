const navLinks = document.querySelectorAll('.nav_menu_li');


navLinks.forEach(link => {
  link.addEventListener('click', function () {
   
    navLinks.forEach(nav => nav.classList.remove('active'));

    
    this.classList.add('active');
  });
});