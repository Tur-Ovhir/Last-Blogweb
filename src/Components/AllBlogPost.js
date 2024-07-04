export const AllBlogPost = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl italic ml-3">All Blog Post</h1>
      </div>
      <div className="flex gap-5 flex-wrap ml-3 text-[#495057]">
        <p className="text-[#D4A373]">All</p>
        <p>Design</p>
        <p>Travel</p>
        <p>Fashion</p>
        <p>Technology</p>
        <p>Branding</p>
      </div>
      <div className=" flex flex-wrap justify-center gap-5 ">
        <img
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  "
          src="m-post-card-gridBlog1.jpg"
        />
        <img
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
          src="m-post-card-gridBlog2.jpg"
        />
        <img
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
          src="m-post-card-gridBlog3.jpg"
        />
        <img
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
          src="m-post-card-gridBlog4.jpg"
        />
        <img
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
          src="m-post-card-gridBlog5.jpg"
        />
        <img
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
          src="m-post-card-gridBlog6.jpg"
        />
        <img
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
          src="m-post-card-gridBlog7.jpg"
        />
        <img
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
          src="m-post-card-gridBlog8.jpg"
        />
        <img
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
          src="m-post-card-gridBlog9.jpg"
        />
      </div>
      <button className=" w-[100px] py-2 bg-[#4B6BFB] text-white rounded-md m-auto flex text-center mt-2">
        <p className="ml-2">Load More</p>
      </button>
    </div>
  );
};
