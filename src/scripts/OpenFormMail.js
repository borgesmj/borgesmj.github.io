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
