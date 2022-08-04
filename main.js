const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamMenuIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamMenuIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleMenuCartIcon);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}

function toggleMenuCartIcon() {
    const isMobileMenuOpen = mobileMenu.classList.contains('inactive');
    const isAsideOpen = aside.classList.contains('inactive');
    
    aside.classList.toggle('inactive');

    if (mobileMenu.classList.contains('inactive'))
}