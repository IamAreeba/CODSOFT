



const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slideNumber = 0;




nextBtn.onclick = () => {
    // 4
    slides.forEach((slide) => {
         slide.classList.remove('active');
    });

    // 1
    slideNumber++;

    // 2
    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    // 3
    slides[slideNumber].classList.add('active');

}

prevBtn.onclick = () => {

    // 4
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })


    // 1
    slideNumber--;

    // 2
    if(slideNumber < 0){
        slideNumber = numberOfSlides -1;
    }

    // 3
    slides[slideNumber].classList.add('active');
}