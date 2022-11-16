//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector('header');
    header.classList.toogle("sticky", window.scrollY > 0);
});

//Services section - Modal
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


var x= 12;
var y= 13;

console.log(x+y)

// ! ogren
// ? ogrenildi
//TODO ADSAD
// * ALKDSLSAKD
// hjhjhhjhj