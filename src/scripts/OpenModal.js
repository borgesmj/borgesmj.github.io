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
    <span><strong>Since:</strong> ${filteredWorkExperience.startDate}</span>
    <span><strong>Until:</strong> ${filteredWorkExperience.endDate}</span>
    <span class="flex flex-row"
      ><Icon name="map-pin" color="black" /> ${filteredWorkExperience.location}</span
    >
    <p><strong>Responsabilities:</strong></p>
    <ul class="list-disc pl-10 text-[15px]">
      ${
        filteredWorkExperience.responsibilities.map((responsibility) => {
          return `<li>${responsibility}</li>`
        }).join('')
      }
    </ul>
    <p><strong>Technologies:</strong></p>
    <p class="flex flex-wrap flex-row justify-start items-center gap-[5px] md:justify-around w-full">
      ${
        filteredWorkExperience.technologies.map((tech) => {
          return `<span class="p-[5px] rounded-[50px] border-solid border-[1px] border-[#FF9932]">${tech}</span>`
        }).join('')
      }
    </p>
    `;

    setTimeout(() => {
      modal.classList.remove("scale-in-center");
    }, 200);
  });
});
