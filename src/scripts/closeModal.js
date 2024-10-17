const closeModalBtn = document.getElementById("close-modal-btn");
closeModalBtn.addEventListener("click", () => {
  const modal = document.getElementById("modal-container");
  const htmlDocument = document.getElementsByTagName("html");
  htmlDocument[0].classList.remove("no-scroll");
  modal.classList.add("scale-out-center");
  setTimeout(() => {
    modal.classList.remove("scale-out-center");
    modal.classList.add("hidden");
  }, 500);
});
