import React from "react";

const LastPosts = ({allPosts}) => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="w-full text-center text-[16px] font-bold">Last posts on my blog:</h2>
      <ul className="mb-2">
        {allPosts.slice(0, 4).map((post, index) => (
          <li className="lg:p-0 lg:w-full lg:h-full lg:text-[14px] lg:flex lg:items-center m-0 mt-1 mb-1">
            <a className="lg:hover:underline" href={post.url}>
              {index + 1}. {post.frontmatter.title}
            </a>
          </li>
        ))}
      </ul>
      <a href="/blog" className="text-[10px] underline self-end">
        View all posts
      </a>
    </div>
  );
};

export default LastPosts;
