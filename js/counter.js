counters = document.querySelectorAll('.counter')
speed = 2000;

//Counter Section
counterSection = document.querySelector('.counter-section');
counterPosition = counterSection.offsetTop - counterSection.scrollTop + counterSection.clientTop - 300
console.log(counterPosition)

// CounterDist = window.pageYOffset + counterSection.getBoundingClientRect().top;
// console.log(CounterDist)

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > counterPosition || document.documentElement.scrollTop > counterPosition) {

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-counter-target');
                const count = +counter.innerText;
        
                const inc = target / speed;
        
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 200)
                }else{
                    count.innerText = target;
                }
            }
        
        updateCount();
        });
        
    }//if condition
})