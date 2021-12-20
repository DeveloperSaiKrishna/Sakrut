mainHeader = document.querySelector('header')
header = document.querySelector('header .inner-header')
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('scrolled')
        mainHeader.classList.add('scrolled')
    }else{
        header.classList.remove('scrolled')
        mainHeader.classList.remove('scrolled')
    }
})

mobileNav = document.querySelector('header .inner-header nav ul');
menuIcon = document.querySelector('.menu-icon')

menuIcon.addEventListener('click', showNav)

navLinks = document.querySelectorAll('nav ul li');

for (let i = 0; i < navLinks.length; i++) {
    link = navLinks[i];
    navHeight = link.offsetHeight * navLinks.length
}

function showNav(){
    
    console.log(navHeight)

    mobileNav.classList.toggle('show')
    if (mobileNav.style.maxHeight == navHeight + "px") {
        mobileNav.style.maxHeight = 0;
    }else{
        mobileNav.style.maxHeight = navHeight + "px";
    }
}
