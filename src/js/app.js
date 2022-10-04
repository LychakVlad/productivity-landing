import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

new Swiper('.blog-swiper', {
    loop: true,
    speed: 700,
    autoplay: {
        delay: 4000,
    },
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
    autoplay: {
        delay: 2000,
    },
    speed: 700,
    pagination: {
        el: '.quotes-slider-pagination',
        clickable: true,
    },
}
);

document.addEventListener('DOMContentLoaded', () => {
    const acc = document.querySelectorAll('.accordion');

    acc.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.accordion__tittle');
            const content = self.querySelector('.accordion__content');

            content.classList.toggle('open');
            control.classList.toggle('open');

            if (content.classList.contains('open')) {

                content.style.maxHeight = content.scrollHeight + 'px';

            } else {
                content.style.maxHeight = null;
            };
        });
    });
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


