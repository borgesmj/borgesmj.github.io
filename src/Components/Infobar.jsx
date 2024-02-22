const Infobar = ({allPosts}) => {

  
  return (
    <section className='hidden lg:block lg:fixed lg:top-0 lg:bottom-0 lg:px-8 lg:py-4 lg:right-16 lg:z-50 lg:h-9/10 lg:bg-background-300 lg:border-l-white lg:w-[13rem] xl:max-w-56 2xl:max-w-64 xl:right-28 2xl:right-60 '>
      <div className="w-full">
        <h2>Last posts:</h2>
      <ul>
        {
          allPosts.slice(0,4).map((post) => (
            <li className="list-disc"><a href={post.url}>{post.frontmatter.title}</a></li>
          ))
        }
      </ul>
      </div>
    </section>
  )
}

export default Infobar
