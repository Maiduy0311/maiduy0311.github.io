// REMOVE MENU 
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// CHANGE BACKGROUND HEADER
$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Front-end Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // SHOW MENU
    $('.menu__btn').click(function() {
        $('.navbar__menu').toggleClass("active");
    })
});

// SHOW SCROLL TOP
// function scrollTop() {
//     const scrollTop = document.getElementById('scroll-top')
//     if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
//     else scrollTop.classList.remove('show-scroll')
// }
// window.addEventListener('scroll', scrollTop)