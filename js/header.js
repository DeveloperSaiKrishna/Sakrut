
/* FOr Mobile --------------------------------------------------------------------*/
//Hamberger
burger = document.getElementById('hamburger');
nav = document.getElementById('mobile-nav');
logo = document.getElementById('logo-img')
logoSection = document.getElementById('logo-section')
header = document.querySelector('header');
topHeader = document.querySelector('.top-header')

header.style.top = topHeader.offsetHeight + 'px'

burger.addEventListener('click', () => {
    nav.classList.toggle('active')
    logo.classList.toggle('active')
    logoSection.classList.toggle('active')
    header.classList.toggle('active')

    document.body.classList.toggle('overflow-hide')
})

/*Dropdown Buttons*/
dropBtns = document.querySelectorAll('.drop-btn');
dropContainer = document.querySelector('.dropdown-container')

/*Prevent Button Clicks*/
dropBtn = document.getElementsByClassName('drop-btn')[0];
dropBtn.addEventListener('click', ()=> {
    event.preventDefault();
    // dropContainer.classList.toggle('active')
})
dropBtn = document.getElementsByClassName('drop-btn')[1];
dropBtn.addEventListener('click', ()=> {
    event.preventDefault();
})

/*Dropdown*/
dropBtns.forEach(dropbtn => {
    dropbtn.addEventListener('click', () => {

        if(dropbtn.nextElementSibling.className === "dropdown-container"){
            // dropbtn.nextElementSibling.className = "dropdown-container active"
            dropBtns.forEach(dropbtn => {
                dropbtn.nextElementSibling.classList.remove('active')
                dropbtn.classList.remove('active')
            });
            dropbtn.nextElementSibling.classList.add('active')
            dropbtn.classList.add('active')
        }else{
            dropbtn.nextElementSibling.className = "dropdown-container";
            dropbtn.className = "drop-btn";
        }
    })
});


/* For PC ------------------------------------------------------------*/
header = document.querySelector('header')
firstSection = document.querySelector('.section-one')

body = document.body;
window.addEventListener('scroll', () => {
    // if(body.scrollTop > firstSection.offsetHeight || document.documentElement.scrollTop > firstSection.offsetHeight){
    //     header.classList.add('active')
    // }else{
    //     header.classList.remove('active')
    // }

    if(body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        header.classList.add('scrolling')
        header.style.top = 0 + 'px'
        topHeader.classList.add('scrolled')
    }else{
        header.classList.remove('scrolling')
        header.style.top = topHeader.offsetHeight + 'px'
        topHeader.classList.remove('scrolled')
    }
})

