// let i = 0;
// let images = [
//     "image/slide-1.jpg",
//     "image/slide-2.jpg",
//     "image/slide-3.jpg",
//     "image/slide-4.jpg",
// ];
// let time = 5000;
// let slide = document.querySelector(".slide__img");

// function changeImg() {
//     slide.src = images[i];
//     if(i < images.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }
//     setTimeout("changeImg()", time);
// }

// window.onload = changeImg;

// let modal = document.querySelector(".download-modal");
// let closedModalBtn = document.querySelector(".download-modal__btn_closed");
// let openModalBtn = document.querySelector(".about-item__btn");
// openModalBtn.onclick = function() {
//     modal.style.display="block";
//   };
//   closedModalBtn.onclick = function() {
//     modal.style.display="none";
//   };
// console.log(modal);

// // user modal
// let userOpenModal = document.querySelector(".start-btn");
// let userModal = document.querySelector(".user-modal");
// let userBtnClose = document.querySelector(".btn-back");
// userOpenModal.onclick = function() {
//   userModal.classList.add('active');
// }

// userBtnClose.onclick = function() {
//   userModal.classList.remove('active');
// }
// console.log(userOpenModal);

// // user form 
// let formBtn = document.querySelector(".user-form__btn");

//Date
let date = new Date().getFullYear();
document.querySelector(".copyright__year").innerHTML = `${date}.`;
