const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 56){
        nav.classList.add('navbar-scrolled');
    }
    else if (window.scrollY < 56){
        nav.classList.remove('navbar-scrolled');
    }
});