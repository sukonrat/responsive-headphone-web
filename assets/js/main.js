/* =================== SHOW MENU =================== */
const navMenu = document.getElementById("nav_menu"),
  navToggle = document.getElementById("nav_toggle"),
  navClose = document.getElementById("nav_close");

/* ==== Menu show ====*/
/* Validate if constant exist */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* ==== Menu hidden ====*/
/* Validate if constant exist */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* =================== REMOVE MENU MOBILE=================== */
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav_menu");
  //when we click on each link, it remove show-menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
/* =================== CHANgE BACKGROUND HEADER =================== */
function scrollHeader() {
  const header = document.getElementById("header");

  //when scroll is greater than 50 viewpoint height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);


/* =================== SHOW SCROLL UP =================== */
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up")

    //when scroll is higher han 200 viewpoint height, add the show-scroll class to the header tag
    if(this.scrollY >= 200 ) scrollUp.classList.add("show-scroll") ; else scrollUp.classList.remove("show-scroll")  
}

window.addEventListener("scroll", scrollUp);

/* ===================  SCROLL SCETIONS ACTIVE LINK =================== */
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
    const scrollY = window.pageYOffset


    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');

        }
    })
}

window.addEventListener("scroll",scrollActive)


/* ===================  SCROLL REVEAL =================== */
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
})

sr.reveal(`.home-header, .section-title`, {delay: 600})
sr.reveal(`.home-footer`,{delay: 700})
sr.reveal(`.home-img`, {delay: 900, origin: 'top'})

sr.reveal(`.sponsor-img, .products-card, .footer-logo, .footer-content, .footer-copy`, {origin: 'top', interval: 100})

sr.reveal(`.specs-data, .discount-animate`, {origin: 'left', interval: 100})
sr.reveal(`.specs-img, .discount-img`, {origin: 'right'})

sr.reveal(`.case-img`, {origin: 'top'})
sr.reveal(`.case-data`)