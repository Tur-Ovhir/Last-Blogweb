import Image from "next/image";
import Link from "next/link";
export const AllBlogPost = () => {
  return (
    <div className="lg.w-[1216px] w-full">
      <div>
        <h1 className="text-2xl italic ml-3">All Blog Post</h1>
      </div>
      <div className="flex gap-5 flex-wrap ml-3 text-[#495057] mt-5">
        <p className="text-[#D4A373]">All</p>
        <Link href="https://www.design.com/">
          <p className="hover:bg-blue-300 rounded-xl">Design</p>
        </Link>
        <Link href="https://us.trip.com/?Allianceid=3877322&SID=22746913&trip_sub1=&trip_sub3=D479719&gad_source=1&gclid=EAIaIQobChMI9te9xN6vhwMV8WUPAh0sqA2xEAAYASAAEgIM7_D_BwE&locale=en-us">
          <p className="hover:bg-blue-300 rounded-xl">Travel</p>
        </Link>
        <Link href="https://www.vogue.com/fashion">
          <p className="hover:bg-blue-300 rounded-xl">Fashion</p>
        </Link>
        <Link href="https://en.wikipedia.org/wiki/Technology">
          <p className="hover:bg-blue-300 rounded-xl">Technology</p>
        </Link>
        <Link href="https://en.wikipedia.org/wiki/Brand">
          <p className="hover:bg-blue-300 rounded-xl">Branding</p>
        </Link>
      </div>
      <div className=" flex flex-wrap justify-center gap-5 ">
        <Link
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  "
          href="/Blog/2"
        >
          <Image
            src="/m-post-card-gridBlog1.jpg"
            alt="ContentGrid.jpg"
            width={500}
            height={500}
          />
        </Link>
        <Link
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  "
          href="/Blog/3"
        >
          <Image
            src="/m-post-card-gridBlog2.jpg"
            alt="ContentGrid.jpg"
            width={500}
            height={500}
          />
        </Link>
        <Link
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  "
          href="/Blog/4"
        >
          <Image
            src="/m-post-card-gridBlog3.jpg"
            alt="ContentGrid.jpg"
            width={500}
            height={500}
          />
        </Link>
        <Link
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  "
          href="/Blog/5"
        >
          <Image
            src="/m-post-card-gridBlog4.jpg"
            alt="ContentGrid.jpg"
            width={500}
            height={500}
          />
        </Link>
        <Link
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  "
          href="/Blog/6"
        >
          <Image
            src="/m-post-card-gridBlog5.jpg"
            alt="ContentGrid.jpg"
            width={500}
            height={500}
          />
        </Link>
        <Link
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  "
          href="/Blog/7"
        >
          <Image
            src="/m-post-card-gridBlog6.jpg"
            alt="ContentGrid.jpg"
            width={500}
            height={500}
          />
        </Link>
        <Link
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  "
          href="/Blog/8"
        >
          <Image
            src="/m-post-card-gridBlog7.jpg"
            alt="ContentGrid.jpg"
            width={500}
            height={500}
          />
        </Link>
        <Link
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  "
          href="/Blog/9"
        >
          <Image
            src="/m-post-card-gridBlog8.jpg"
            alt="ContentGrid.jpg"
            width={500}
            height={500}
          />
        </Link>
        <Link
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6  "
          href="/Blog/10"
        >
          <Image
            src="/m-post-card-gridBlog9.jpg"
            alt="ContentGrid.jpg"
            width={500}
            height={500}
          />
        </Link>
      </div>
      <button className=" w-[100px] py-2 bg-[#4B6BFB] text-white rounded-md m-auto flex text-center mt-2">
        <p className="ml-2 hover:bg-blue-300 rounded-xl">Load More</p>
      </button>
    </div>
  );
};
