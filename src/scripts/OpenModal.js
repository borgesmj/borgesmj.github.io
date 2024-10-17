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
    const filteredWorkExperience = workExperience[experienceId - 1];
    document.getElementById("modal-content").innerHTML = `
    
    <h2 id="work-title" class="text-[30px] font-[600] lg:text-[40px]">${filteredWorkExperience.position}</h2>
    <p id="work-company" class="text-[30px]">${filteredWorkExperience.company}</p>
    <span>Since: <strong>${filteredWorkExperience.startDate}</strong></span>
    <span>Until: ${filteredWorkExperience.endDate}</span>
    <span class="flex flex-row"
      ><Icon name="map-pin" color="black" /> ${filteredWorkExperience.location}</span
    >
    <p>Responsabilities:</p>
    <ul class="list-disc pl-10">
      ${
        filteredWorkExperience.responsibilities.map((responsibility) => {
          return `<li>${responsibility}</li>`
        }).join('')
      }
    </ul>
    <p>Technologies:</p>
    <p class="flex flex-wrap flex-row justify-center gap-4">
      ${
        filteredWorkExperience.technologies.map((tech) => {
          return `<span>${tech}</span>`
        }).join('')
      }
    </p>
    `;

    setTimeout(() => {
      modal.classList.remove("scale-in-center");
    }, 200);
  });
});
