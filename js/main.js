// @ts-nocheck

window.addEventListener("load", () => {
    
    /* 4- Preloader */
    const preloader = document.querySelector('.js-preloader')
    preloader.classList.add('fade-out')

    setTimeout(() => {
        preloader.style.display = "none"
        /* 3- Animate On Scroll */
        AOS.init();
    }, 600)

})

/* 1- HEADER BG RÉVÉLATION */
const headerBg = () => {
    const header = document.querySelector('.js-header')

    window.addEventListener('scroll', function() {
        if(this.scrollY > 0) {
            header.classList.add('bg-reveal')
        } else {
            header.classList.remove('bg-reveal')
        }
    })
}
headerBg()

/* 2- NAV */
const navigation = () => {
    const navToggler = document.querySelector('.js-nav-toggler');
    const nav = document.querySelector('.js-nav');
    const navItems = nav.querySelectorAll('li')

    const navToggle = () => {
        nav.classList.toggle('open')
        navToggler.classList.toggle('active')
    }

    navToggler.addEventListener('click', navToggle)

    // Pour faire disparaitre la nav au clic sur un lien
    navItems.forEach((li) => {
        li.querySelector('a').addEventListener('click', () => {
            if(window.innerWidth <= 767) {
                navToggle()
            }
        })
    })
}
navigation()