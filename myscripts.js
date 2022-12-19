var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//! Scroll to top button
const scrollTopButton = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
    scrollTopButton.classList.toggle("active", window.scrollY > 500);
});

scrollTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//! add scroll and online

//! Portfolio Section - dokumanimizdan 3 adet element sectik
const portfolioModels = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

//! portfolioIn fonks olusturdum. tiklandiginda imgCard elementine active class'ini ekliyor. boylece gorunur oluyor.
var portfolioIn = function (index) {
    portfolioModels[index].classList.add("active");
};

//! forEach(1value, 2index, 3array)metodu kullanar eslesme yaptik.
imgCards.forEach((imgCard, i) => {
    // imgCards[i]=imgCard - bu ikisi de ayni anlma gelir.
    imgCard.addEventListener("click", () => {
        portfolioIn(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModels.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

//! Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

//! Scroll reveal animations
//!common reveal options to create reveal animations
ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 2500,
    delay: 100,
});

//!target elements, and specify options to create reveal animations
ScrollReveal().reveal(".home .info h2, .section-title-01, .section-title-02", { delay: 80, origin: "left" });
ScrollReveal().reveal(".home .info h3, .home .info p, .about-info ", { delay: 80, origin: "right" });
ScrollReveal().reveal(".home .info .btn", { delay: 80, origin: "bottom" });
ScrollReveal().reveal(".media-icons i, .contact-left li ", { delay: 80, origin: "left", interval: 80 });
ScrollReveal().reveal(".home-img, .about-img", { delay: 80, origin: "left" });
ScrollReveal().reveal(".about .description , .contact-right", { delay: 80, origin: "right" });
ScrollReveal().reveal(".about .professional-list li", { delay: 80, origin: "right", interval: 80 });
ScrollReveal().reveal(".skills-description, .services-description, .contact-card, .contact-left h2", {
    delay: 80,
    origin: "left",
});
ScrollReveal().reveal(".experience-card, .service-card, .education, .portfolio .img-card", {
    delay: 80,
    origin: "right",
    interval: 80,
});
ScrollReveal().reveal(".footer, .group", { delay: 80, origin: "top", interval: 80 });

// Navigation bar effects on scroll
// window.addEventListener("scroll", function(){
//     const header = document.querySelector("header");
//     header.classList.toogle("sticky", window.scrollY > 0);
// });

// Services section - Modal
// const serviceModals = document.querySelectorAll(".service-modal");
// const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
// const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

// var modal = function(modalClick){
//     serviceModals[modalClick].classList.add("active");
// }

// learnmoreBtns.forEach((learnmoreBtn, i)=>{
//     learnmoreBtn.addEventListener("click", ()=>{
//         modal(i);
//     })
// })

// modalCloseBtns.forEach((modalCloseBtn)=>{
//     modalCloseBtn.addEventListener("click", ()=>{
//         serviceModals.forEach((modalView)=>{
//             modalView.classList.remove("active");
//         });
//     });
// })
