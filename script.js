const mobileMenu = document.querySelector(".mobile-menu img");
const navList = document.querySelector("nav");
const logo = document.querySelector(".logo");
const tabs = document.querySelectorAll(".tabs li");
const tabsContent = document.querySelectorAll(".tabs-content > div");
const faqHead = document.querySelectorAll(".faq-head");
const faqAnswer = document.querySelectorAll(".answer");
const faqIMG = document.querySelectorAll(".faq-head > svg");
const form = document.querySelector("form");
const email = document.querySelector("input[type='text']");
const spanError = document.querySelector(".email-error");
const formIcon = document.querySelector("form img");
mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("opened");
  navList.classList.toggle("active");
  logo.classList.toggle("active");
  mobileMenu.classList.contains("opened")
    ? (mobileMenu.src = "images/icon-close.svg")
    : (mobileMenu.src = "images/icon-hamburger.svg");
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
});
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabsContent.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    tabsContent[index].classList.add("active");
  });
});
faqHead.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqHead.forEach((item, i) => {
      if (item !== faq) {
        item.classList.remove("active");
        faqAnswer[i].classList.remove("active");
        faqIMG[i].classList.remove("active");
      } else {
        faq.classList.toggle("active");
        faqAnswer[i].classList.toggle("active");
        faqIMG[i].classList.toggle("active");
      }
    });
  });
});
function validateEmail() {
  let regEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.value.trim().match(regEx)) {
    spanError.classList.add("show");
    formIcon.classList.add("show");
    email.classList.add("show");
  } else {
    spanError.classList.remove("show");
    formIcon.classList.remove("show");
    email.classList.remove("show");
  }
}
