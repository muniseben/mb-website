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

  // Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toogle("sticky", window.scrollY > 0);
});

// Services section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i)=>{
    learnmoreBtn.addEventListener("click", ()=>{
        modal(i);
    })
})

modalCloseBtns.forEach((modalCloseBtn)=>{
    modalCloseBtn.addEventListener("click", ()=>{
        serviceModals.forEach((modalView)=>{
            modalView.classList.remove("active");
        });
    });
})

// Portfolio Section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i)=>{
    imgCard.addEventListener("click", ()=>{
        portfolioModal(i);
    })
})

portfolioCloseBtns.forEach((portfolioCloseBtn)=>{
    portfolioCloseBtn.addEventListener("click", ()=>{
        portfolioModals.forEach((portfolioModalView)=>{
            portfolioModalView.classList.remove("active");
        });
    });
})









