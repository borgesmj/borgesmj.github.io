const setFunkoContainerHeight = () => {
  const heroHeight = document.getElementById("hero").offsetHeight;
  const aboutHeight = document.getElementById("about").offsetHeight;
  const totalHeight = heroHeight + aboutHeight;

  const funkoContainer = document.getElementById("funko-container");

  if (window.innerWidth >= 1024) {
    funkoContainer.classList.add("dynamic-height");
    funkoContainer.style.height = `${totalHeight}px`;
  } else {
    funkoContainer.classList.remove("dynamic-height");
    funkoContainer.style.height = "";
  }

  console.log("Altura total en pantallas grandes:", totalHeight);
};

window.addEventListener("DOMContentLoaded", setFunkoContainerHeight);
window.addEventListener("resize", setFunkoContainerHeight);

const openFormBtn = document.getElementById("open-form-btn");
openFormBtn.addEventListener("click", () => {
  const mailForm = document.getElementById("mail-form");
  const htmlDocument = document.getElementsByTagName("html");
  mailForm.classList.remove("slide-out-right");
  setTimeout(() => {
    mailForm.classList.remove("hidden");
    mailForm.classList.remove("-right-[100%]");
    mailForm.classList.add("slide-in-right");
    mailForm.classList.add("right-0");
    mailForm.classList.add("flex");
    htmlDocument[0].classList.add("no-scroll");
  }, 100);
});

const closeFormBtn = document.getElementById("close-form-btn");
closeFormBtn.addEventListener("click", () => {
  const mailForm = document.getElementById("mail-form");
  const htmlDocument = document.getElementsByTagName("html");
  mailForm.classList.add("slide-out-right");

  setTimeout(() => {
    mailForm.classList.remove("flex");
    mailForm.classList.remove("slide-in-right");
    mailForm.classList.remove("right-0");
    mailForm.classList.add("-right-[100%]");
    mailForm.classList.add("hidden");
    htmlDocument[0].classList.remove("no-scroll");
  }, 100);
});
