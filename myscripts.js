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
const scrollTopButton = document.querySelector('.scrollToTop-btn');

window.addEventListener("scroll", function(){
    scrollTopButton.classList.toggle("active",window.scrollY > 500);
});

scrollTopButton.addEventListener("click",() =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//! add scroll and online



//! Portfolio Section - dokumanimizdan 3 adet element sectik
const portfolioModels = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

//! portfolioIn fonks olusturdum. tiklandiginda imgCard elementine active class'ini ekliyor. boylece gorunur oluyor.
var portfolioIn = function(index){
    portfolioModels[index].classList.add("active");
}

//! forEach(1value, 2index, 3array)metodu kullanar eslesme yaptik.
imgCards.forEach((imgCard, i)=>{
    // imgCards[i]=imgCard - bu ikisi de ayni anlma gelir.
    imgCard.addEventListener("click", () => {
        portfolioIn(i);
    })
})

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", ()=>{
        portfolioModels.forEach((portfolioModalView)=>{
            portfolioModalView.classList.remove("active");
        });
    });
})

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

