// //Added navigation to the contact us form on Contact button click
// const contactBtn = document.getElementById("contactBtn");
// const contactSection = document.getElementById("contact");

// contactBtn.addEventListener("click", () => {
//   contactSection.scrollIntoView({
//     behavior: "smooth"
//   });
// });


// For Section-6 Image slider Button
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".arrow_img.right");
const prevBtn = document.querySelector(".arrow_img.left");

let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});


// For Section-5 Card slider Button

document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".apps-cards");
  const leftBtn = document.querySelector(".arrow-btn.left");
  const rightBtn = document.querySelector(".arrow-btn.right");

  leftBtn.addEventListener("click", () => {
    container.scrollBy({ left: -300, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    container.scrollBy({ left: 300, behavior: "smooth" });
  });

});
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");
  });
});