/* =================== SHOW MENU =================== */
const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close')

    /* ==== Menu show ====*/
    /* Validate if constant exist */
    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

        /* ==== Menu hidden ====*/   
         /* Validate if constant exist */
    if(navClose){
        navClose.addEventListener('click', ()=> {
            navMenu.classList.remove('show-menu')
        })
    }

/* =================== REMOVE MENU MOBILE=================== */
    const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav_menu')
    //when we click on each link, it remove show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach( n => n.addEventListener('click', linkAction))
/* =================== CHANgE BACKGROUND HEADER =================== */
function scrollHeader () {
    const header = document.getElementById('header')

    //when scroll is greater than 50 viewpoint height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)