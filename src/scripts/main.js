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