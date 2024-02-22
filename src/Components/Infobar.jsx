import LastPosts from "./LastPosts"

const Infobar = ({allPosts}) => {

  
  return (
    <section className='hidden lg:block lg:fixed lg:top-0 lg:bottom-0 lg:pl-4 lg:pr-4 lg:pb-4 lg:pt-16 lg:right-16 lg:z-50 lg:h-9/10 lg:bg-background-300 lg:border-l-white lg:w-[13rem] xl:max-w-56 2xl:max-w-64 xl:right-28 2xl:right-60 '>
      <LastPosts allPosts = {allPosts}/>
    </section>
  )
}

export default Infobar
