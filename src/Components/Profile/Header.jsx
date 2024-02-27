import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-20'>
      <img src="/blog-images/post-1.webp" alt="" className='aspect-video w-dvw h-40 md:h-48 md:w-full xl:h-[14rem] 2xl:h-[15rem]' />
      <img src="https://avatars.githubusercontent.com/u/121818423?v=4" alt="" className='h-24 w-auto rounded-full border-solid border-accent-200 border-[2px] -mt-10 z-50 ml-4 absolute md:h-32 md:-mt-14' />
    </div>
  )
}

export default Header
