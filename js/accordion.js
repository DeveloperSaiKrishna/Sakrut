accordionBtns = document.querySelectorAll('.accordion-btn')

accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        

        if( btn.nextElementSibling.className === 'accordion-panel' & btn.className === 'accordion-btn'){
            accordionBtns.forEach(btn => {
                btn.nextElementSibling.classList.remove('showPanel')
                btn.classList.remove('active')
            });
            btn.nextElementSibling.classList.add('showPanel')
            btn.classList.add('active')
        }else{
            btn.nextElementSibling.className = 'accordion-panel';
            btn.className = 'accordion-btn';
        }
    })
});