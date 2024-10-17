import { workExperience } from "../data/data";
const buttonsList = document.querySelectorAll("#experience-list li button");
buttonsList.forEach((button) => {
  button.addEventListener("click", () => {
    const experienceId = button
      .getAttribute("name")
      .replace("experience-card-", "");
    const modal = document.getElementById("modal-container");
    const htmlDocument = document.getElementsByTagName("html");
    htmlDocument[0].classList.add("no-scroll");
    modal.classList.add("scale-in-center");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    const selectdWorkExperience = workExperience[experienceId - 1];
    document.getElementById('modal-content').innerText = selectdWorkExperience.position

    setTimeout(() => {
      modal.classList.remove("scale-in-center");
    }, 200);
  });
});
