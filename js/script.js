let carouselImages = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

// ottieni un riferimento all'elemento HTML che mostra l'immagine principale del carosello
let mainCarouselImgEl = document.getElementById('mainCarouselImg');
let listImgContainerEl = document.querySelector('.listImgContainer');

// ottieni i riferimenti agli elementi HTML che rappresentano le frecce del carosello
let upArrowEl = document.querySelector('.fa-circle-chevron-up');
let downArrowEl = document.querySelector('.fa-circle-chevron-down');


let index = 0;

mainCarouselImgEl.src = carouselImages[index];

let imgElements = document.querySelectorAll('.previewContainer');

imgElements[index].classList.add('active');

downArrowEl.addEventListener('click', function () {

    imgElements[index].classList.remove('active');

    index++;

    if (index > carouselImages.length -1) {

        index = 0;

    } 
    
    mainCarouselImgEl.src = carouselImages[index];

    imgElements[index].classList.add('active');
    

});

upArrowEl.addEventListener('click', function () {

    imgElements[index].classList.remove('active');
    
    index--;
 
    if (index < 0) {

        index = carouselImages.length - 1;

    }

    mainCarouselImgEl.src = carouselImages[index];

    imgElements[index].classList.add('active');
    
    
});