const elemToggleFunc = function (elem) {elem.classList.toggle('active');}

const navbar = document.querySelector('[data-navbar]');
const navbarOpenBtn = document.querySelector('[data-nav-open-btn]');
const navbarCloseBtn = document.querySelector('[data-nav-close-btn]');

navbarOpenBtn.addEventListener('click', function () {
    elemToggleFunc(navbar);
});

navbarCloseBtn.addEventListener('click', function () {
    elemToggleFunc(navbar);
})

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function() {

    if(this.window.scrollY >= 400) {
        goTopBtn.classList.add('active');
    } else {
        goTopBtn.classList.remove('active');
    }
});

    