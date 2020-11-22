const translate = document.querySelectorAll(".translate");
const cover = document.querySelector(".cover");
const bg = document.querySelector(".bg-bc");
const angles = document.querySelector(".angles");
const abouttext = document.querySelector(".about-text");
const aboutme = document.querySelector(".aboutme-page");
const me = document.querySelector(".me");
const opacity = document.querySelectorAll(".opacity");

let bg_height = bg.offsetHeight;
let aboutme_height = aboutme.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let aboutmeY = aboutme.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (aboutmeY.top + aboutme_height);
    })

    cover.style.opacity = - scroll / (bg_height / 2) + 1;
    angles.style.height = `${scroll * 0.5 + 300}px`;

    abouttext.style.transform = `translateY(${scroll / (aboutme_height + aboutmeY.top) * -50 + 50}px)`;
    me.style.transform = `translateY(${scroll / (aboutme_height + aboutmeY.top) * -50 + 50}px)`;
}) 