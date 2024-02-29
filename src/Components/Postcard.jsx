import React from "react";

const Postcard = ({postUrl, postTitle, postImageUrl, postImageAlt}) => {
  return (
    <a
      className="py-4 my-4 post-link rounded-xl w-full md:w-[45%] flex flex-col justify-center items-center h-60 relative"
      href={postUrl}
    >
      <span className="font-bold text-center bg-primary-200 h-1/3 absolute top-0 flex justify-center items-center px-2 rounded-t-xl w-full max-w-full">
        {postTitle}
      </span>
      <img
        src={postImageUrl}
        alt={postImageAlt}
        class="h-2/3 w-auto absolute bottom-0 rounded-b-xl max-w-full"
      />
    </a>
  );
};

export default Postcard;
