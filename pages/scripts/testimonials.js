const testimonialsContainer = document.querySelector(".testimonials-container");
const testitomialsSlider = document.querySelector(".testitomials-slider");
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

const sliderWidth = testitomialsSlider.clientWidth;

console.log(sliderWidth);

btnPrev.onclick =e=>{
    console.log("fired");
    slides[0].style.transform = `translateX(-${sliderWidth}px)`;
    slides[0].style.transition = `all 0.7s ease-in-out`;
    // slides.forEach(slide=>{
    //     console.log(slide);
    //     slide.style.transform = `translateX(-${sliderWidth}px)`;
    // });
};