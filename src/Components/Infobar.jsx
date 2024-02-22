const Infobar = ({allPosts}) => {

  
  return (
    <section className='hidden lg:block lg:fixed lg:top-8 lg:bottom-8 lg:right-16 lg:z-50 lg:h-9/10 lg:border-l-[1px] lg:border-l-solid lg:border-l-white lg:max-w-48 xl:max-w-56 2xl:max-w-64 lg:p-4 xl:right-20 2xl:right-60'>
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
