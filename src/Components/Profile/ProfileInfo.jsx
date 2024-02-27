import {MapPin} from "../../Icons/Icons"

const ProfileInfo = ({location, bio}) => {
  return (
    <div className='w-dvw absolute top-[14rem] p-4 md:top-[16rem] md:p-8 md:w-[65%] lg:top-[17rem] lg:w-[45%] lg:p-4 xl:w-1/2 xl:top-[19rem] 2xl:w-2/5 2xl:top-[22rem]'>
      <h2 className='font-bold text-xl md:text-[1.5rem] '>Miguel José</h2>
      <h3><a href="https://github.com/borgesmj" target='_blank' className='font-bold border-b-[1px] border-b-white border-b-solid'>@Borgesmj</a> on Github</h3>
      <p className='text-[1rem]'>{bio}</p>
      <p className='text-[0.8rem] flex flex-row items-center'><MapPin/> {location}</p>
    </div>
  )
}

export default ProfileInfo
