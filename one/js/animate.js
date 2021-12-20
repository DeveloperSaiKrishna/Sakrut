
// function animation(){
//     var animate_fadeInleft = document.querySelector('.animate_fadeInleft')
//     var itemPosition = animate_fadeInleft.getBoundingClientRect().top;
//     var windowHeight = window.innerHeight / 1.2;

//     if(itemPosition < windowHeight){
//         animate_fadeInleft.classList.add('active')
//         console.log()
//     }
// }

function animation(){
    var animate_fades = document.querySelectorAll('.animate_fade')
    animate_fades.forEach(animate_fade => {
        var itemPosition = animate_fade.getBoundingClientRect().top;
        var windowHeight = window.innerHeight / 1.4;

        if(itemPosition <= windowHeight){
            animate_fade.classList.add('active')
        }else{
            animate_fade.classList.remove('active')
        }
    });
}

window.addEventListener('scroll', animation);

// Click Sound
audio = document.querySelector('audio');
cutSound = audio.duration = 0.2
console.log(cutSound)

document.body.addEventListener('click', () => {
    audio.play();
})
