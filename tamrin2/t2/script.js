


const imgbox = document.querySelector('.img-box');
const slides = imgbox.getElementsByTagName('img');
let i = 0;


function nextslide() {
    slides[i].classList.remove('active');
    i = (i + 1)% slides.length;
    slides[i].classList.add('active')

}


function prevslide() {
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active')

}