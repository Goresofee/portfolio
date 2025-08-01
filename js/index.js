const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});


const previewBlock = document.getElementById("floating-image");
const previewImg = previewBlock.querySelector("img");

document.querySelectorAll(".hover-word").forEach(word => {
  word.addEventListener("mouseenter", () => {
    const imgSrc = word.dataset.img;
    previewImg.src = imgSrc;
    previewBlock.style.display = "block";
  });

  word.addEventListener("mouseleave", () => {
    previewBlock.style.display = "none";
    previewImg.src = "";
  });
});