import Image from "next/image";
export const Trending = () => {
  return (
    <div className="lg.w-[1216px] w-full h-[390px] flex flex-col mt-10">
      <div className="">
        <h1 className="flex text-2xl italic ml-3">Trending</h1>
      </div>
      <div className="flex gap-10 overflow-hidden overflow-x-scroll ml-3">
        <Image
          className="w-[289px] h-[320px]"
          src="Rectangle 38Trending1.jpg "
          alt="imgtag"
        />
        <Image
          className="w-[289px] h-[320px]"
          src="Rectangle 38Trending2.jpg"
          alt="img1"
        />
        <Image
          className="w-[289px] h-[320px]"
          src="Rectangle 38Trending3.jpg"
          alt="img2"
        />
        <Image
          className="w-[289px] h-[320px]"
          src="Rectangle 38Trending4.jpg"
          alt="img3"
        />
      </div>
    </div>
  );
};
