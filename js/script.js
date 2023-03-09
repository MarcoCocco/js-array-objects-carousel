/* 
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay. 
*/

const images = [

    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }

];

let upArrowEl = document.querySelector('.fa-circle-chevron-up');
let downArrowEl = document.querySelector('.fa-circle-chevron-down');
let mainCarouselImgEl = document.getElementById('mainCarouselImg');
let listImgContainerEl = document.querySelector('.listImgContainer');
let imgElements = document.querySelectorAll('.previewContainer');

let startEl = document.getElementById('start');
let stopEl = document.getElementById('stop');
let reverseEl = document.getElementById('reverse');

let index = 0;

mainCarouselImgEl.src = images[0].image;

imgElements[index].classList.add('active');

let titleEl = document.getElementById('title');
let textEl = document.getElementById('text');

titleEl.textContent = images[index].title;
textEl.textContent = images[index].text;

let autoplayInterval;
let reverseInterval;

downArrowEl.addEventListener('click', function () {

    stopAutoplay()

    imgElements[index].classList.remove('active');

    index++;

    if (index > images.length - 1) {

        index = 0;

    }

    mainCarouselImgEl.src = images[index].image;

    titleEl.textContent = images[index].title;
    textEl.textContent = images[index].text;

    imgElements[index].classList.add('active');

});

upArrowEl.addEventListener('click', function () {

    stopAutoplay()

    imgElements[index].classList.remove('active');

    index--;

    if (index < 0) {

        index = images.length - 1;

    }

    mainCarouselImgEl.src = images[index].image;

    titleEl.textContent = images[index].title;
    textEl.textContent = images[index].text;

    imgElements[index].classList.add('active');

});

/* 
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva. 
*/

function startAutoplay() {

    autoplayInterval = setInterval(() => {

        imgElements[index].classList.remove('active');
        index = (index + 1) % images.length;
        mainCarouselImgEl.src = images[index].image;
        titleEl.textContent = images[index].title;
        textEl.textContent = images[index].text;
        imgElements[index].classList.add('active');

    }, 3000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

/* 
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.  
*/

// Quando l'autoplay viene startato, se il reverse autoplay è attivo viene fermato e viceversa, così da non far sovrapporre il funzionamento delle due funzioni.
startEl.addEventListener('click', () => {

    stopReverseAutoplay();
    startAutoplay();
    
});

stopEl.addEventListener('click', () => {

    stopAutoplay();
    stopReverseAutoplay();

});

reverseEl.addEventListener('click', () => {
    
    stopAutoplay();
    reverseAutoplay();


});

function reverseAutoplay() {

    reverseInterval = setInterval(() => {

        imgElements[index].classList.remove('active');
        index = (index - 1 + images.length) % images.length;
        mainCarouselImgEl.src = images[index].image;
        titleEl.textContent = images[index].title;
        textEl.textContent = images[index].text;
        imgElements[index].classList.add('active');

    }, 3000);
}

function stopReverseAutoplay() {
    clearInterval(reverseInterval);
}



