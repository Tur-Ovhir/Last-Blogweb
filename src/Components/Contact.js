import { Input } from "postcss";
import { About } from "./About";
import { MetalBlog } from "./MetalBlog";
import Link from "next/link";
export const Contact = () => {
  return (
    <div className="w-895px h-895px flex flex-col justify-center ">
      <div>
        <h1 className="text-2xl">Contact us</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
      </div>
      <div className="flex mt-10 gap-20 justify-center ">
        <div className="w-294px h-133px flex flex-col  border rounded-xl hover:bg-blue-300">
          <Link href="https://www.google.com/maps/place/St.+Louis,+MO,+USA/@38.2635493,-89.4256672,9z/data=!4m6!3m5!1s0x87d8b4a9faed8ef9:0xbe39eaca22bbe05b!8m2!3d38.6270025!4d-90.1994042!16zL20vMDZ3eHc?entry=ttu">
            <h1 className="">Address</h1>
          </Link>
          <p className="flex">1328 Oak Ridge Drive, </p>
          <p>Saint Louis, Missouri</p>
        </div>
        <div className=" w-294px h-133px  border rounded-xl hover:bg-blue-300">
          <Link href="https://www.quora.com/How-do-I-create-an-email-with-info-mail-com">
            <h1>Contact</h1>
          </Link>
          <p>313-332-8662</p>
          <p> info@email.com</p>
        </div>
      </div>
      <div className=" border-2 w-full h-[440px] bg-[#f6f6f7] mt-10 flex flex-col rounded-xl">
        <div className="">
          <h1 className="text-xl">Leave a Message</h1>
        </div>
        <div className="w-[420px] h-[38px] flex gap-3 mt-10">
          <input
            className="w-[190px] h-[38px] rounded-xl border-2 hover:bg-blue-300"
            type="text"
            placeholder="Your name"
          />

          <div>
            <input
              className="w-[190px] h-[38px] bg-white flex rounded-xl border hover:bg-blue-300"
              type="text"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="">
          <input
            className="w-[420px] h-[35px] bg-white mt-5 rounded-xl border hover:bg-blue-300"
            type="text"
            placeholder="Subject"
          />
        </div>
        <div className="">
          <input
            className="w-[420px] h-[134px] bg-white mt-10 rounded-xl border hover:bg-blue-300 "
            type="text"
            placeholder="Write a Message"
          />
        </div>
        <div className="bg-[#4b6bfb] mt-10 w-[100px] h-[15x] flex rounded-xl hover:bg-blue-300">
          <button>Send message</button>
        </div>
      </div>
      <About></About>
    </div>
  );
};
