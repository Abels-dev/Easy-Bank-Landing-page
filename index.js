const openBtn = document.querySelector(".openBtn");
const openBtnIcon = document.querySelector(".openBtn-icon");
const navEl = document.getElementById("nav-El");
const heroImage = document.querySelector(".hero-image");
const heroSection = document.querySelector(".hero-section");
openBtn.addEventListener("click", () => {
   navEl.classList.toggle("showNav");
   heroSection.classList.toggle("shadow-overlay");
   if(openBtnIcon.getAttribute("src") === "images/icon-hamburger.svg"){
      openBtnIcon.setAttribute("src", "images/icon-close.svg");
      heroImage.style.visibility = "hidden";
   }else{
      openBtnIcon.setAttribute("src", "images/icon-hamburger.svg");
      heroImage.style.visibility = "visible";
   }
});
