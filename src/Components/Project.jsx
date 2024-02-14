import {Play_Icon, Code_Icon} from '../Icons/Icons'

const Project = () => {
    
  return (
    <div
      class="project border-accent-100 border-solid border-2 p-4 rounded-2xl flex flex-col items-center md:flex-row"
    >
      <img
        src="https://borgesmj.github.io/cloud-storage/Responsively-Screenshots/3enlinea.jpeg"
        alt="juego-3-en-linea"
        class="h-40 w-auto my-6 md:h-52 md:mx-2 rounded-xl"
      />
      <div>
        <p class="font-bold w-full text-center text-xl">
          30-Days-Of-JavaScript
        </p>
        <p class="w-full text-rigth my-4">
          30 days of JavaScript programming challenge is a step-by-step guide to
          learn JavaScript programming language in 30 days. This challenge may
          take more than 100 days, please just follow your own pace.
        </p>
        <div class="w-full flex flex-col justify-between items-center md:flex-row ">
          <a href="" class="text-center text-accent-100 text-md flex flex-row items-center justify-between border-solid border-[1px] border-accent-100 p-4 w-1/2 rounded-xl md:my-4 md:mx-2 md:p-2 lg:w-1/3 xl:w-1/5">Code <Code_Icon/></a>
          <a href="" class="text-center text-accent-100 text-md flex flex-row items-center justify-between border-solid border-[1px] border-accent-100 p-4 w-1/2 rounded-xl md:my-4 md:mx-2 md:p-2 lg:w-1/3 xl:w-1/5">Demo <Play_Icon color="#FF0000"/></a>
        </div>
      </div>
    </div> 
  )
}

export default Project
