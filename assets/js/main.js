/*=============== MENU VARIABLES ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*=============== SHOW MENU ===============*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*=============== HIDE MENU ===============*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    navMenu.classList.remove('show-menu');
};

navLink.forEach(l => l.addEventListener('click', linkAction));


/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header');
};

window.addEventListener('scroll', shadowHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('','','','');
}

contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
