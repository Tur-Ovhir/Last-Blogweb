import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
export const About = () => {
  return (
    <div className="w-full h-[360px]   bg-[#F6F6F7]">
      <div className="w-[358px] h-[316px]  border-black mt-12 ml-3 flex gap-5 flex-col">
        <h1 className="text-2xl">About</h1>
        <p className="w-[280px] h-[120px] text-[#696A75]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>

        <div className="flex flex-col text-[#696A75]">
          <p>Email : info@jstemplate.net</p>
          <p>Phone : 880 123 456 789</p>
        </div>
        <div className="flex gap-5 text-[#696A75]">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex gap-5">
          <IoLogoFacebook />
          <IoLogoTwitter />
          <IoLogoInstagram />
          <IoLogoLinkedin />
        </div>
      </div>
    </div>
  );
};
