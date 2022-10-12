import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

new Swiper('.blog-swiper', {
    loop: true,
    speed: 700,
    slidesPerView: 1,
    centeredSlides: true,
    /**autoplay: {
        delay: 4000,
    }, **/
    navigation: {
        nextEl: '.blog-swiper-button-next',
        prevEl: '.blog-swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}
);

new Swiper('.quotes__slider-block', {
    slidesPerView: 1.5,
    grabCursor: true,
    loop: true,
    watchSlideVisibility: true,
    /** autoplay: {
        delay: 2000,
    }, **/
    speed: 700,
    pagination: {
        el: '.quotes-slider-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        991: {
            slidesPerView: 1.5
        },
    }
}
);

const accordions = document.querySelectorAll('.accordion');
const accordionButtons = document.querySelectorAll(".accordion__tittle");
const accordionDataboxes = document.querySelectorAll(".accordion__content");

accordions.forEach(n => {
    const currentButton = n.querySelector(".accordion__tittle");
    const currentDatabox = n.querySelector(".accordion__content");

    const toggleActiveElements = () => {
        accordionButtons.forEach(v => {
            if (v !== currentButton) {
                v.classList.remove("open");
            }
        });

        accordionDataboxes.forEach(v => {
            if (v !== currentDatabox) {
                v.classList.remove("open");
                v.style.setProperty("--height", "0px");
            }
        });

        currentButton.classList.toggle("open");
        currentDatabox.classList.toggle("open");

        currentDatabox.classList.contains("open")
            ? currentDatabox.style.setProperty("--height", `${currentDatabox.scrollHeight}px`)
            : currentDatabox.style.setProperty("--height", "0px");
    };

    currentButton.addEventListener("click", toggleActiveElements);
});


const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
};

const iconMenu = document.querySelector('.header__burger-icon');
const menuBody = document.querySelector('.header__burger-menu');
iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
});

if (iconMenu.classList.contains('_active')) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('._active');
    menuBody.classList.remove('._active');
};



