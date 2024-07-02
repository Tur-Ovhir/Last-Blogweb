export const AllBlogPost = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl italic">All Blog Post</h1>
      </div>
      <div className="flex gap-5 flex-wrap">
        <p>All</p>
        <p>Design</p>
        <p>Travel</p>
        <p>Fashion</p>
        <p>Technology</p>
        <p>Branding</p>
      </div>
      <div className="grid grid-rows-3 grid-flow-col ">
        <img src="m-post-card-gridBlog1.jpg" />
        <img src="m-post-card-gridBlog2.jpg" />
        <img src="m-post-card-gridBlog3.jpg" />
        <img src="m-post-card-gridBlog4.jpg" />
        <img src="m-post-card-gridBlog5.jpg" />
        <img src="m-post-card-gridBlog6.jpg" />
        <img src="m-post-card-gridBlog7.jpg" />
        <img src="m-post-card-gridBlog8.jpg" />
        <img src="m-post-card-gridBlog9.jpg" />
      </div>
      <div>
        <button className="rounded-md bg-slate-400 text-center justify-center flex ">
          Load More
        </button>
      </div>
    </div>
  );
};
