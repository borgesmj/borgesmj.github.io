

const Tech_section = () => {

  const iconos = [
    "HTML", "CSS", "JavaScript", "TailwindCss", "ReactJs", "NextJs", "NodeJs", "AstroJs"
  ]
  console.log(iconos)
  return(
    <div className='my-2 py-2 w-full grid grid-cols-1 md:grid-cols-4 justify-items-center '>
        {iconos.map((item, index) => (
          <img key={`icono_${index}`} src={`/${item}.webp`} alt={`${item}_icono`} className="w-16 p-2 md:w-24 md:p-4 md:mx-2 lg:w-20 lg:p-2" />
        ) )}
    </div>
  )
}

export default Tech_section
