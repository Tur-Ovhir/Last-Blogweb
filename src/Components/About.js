import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import Link from "next/link";
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
          <Link href="https://jstemplate.net/contact-us">
            <p className="hover:bg-blue-300 rounded-xl">
              Email : info@jstemplate.net
            </p>
          </Link>
          <Link href="https://navyugeducationmorbi.com/contact/">
            <p className="hover:bg-blue-300 rounded-xl">
              Phone : 880 123 456 789
            </p>
          </Link>
        </div>
        <div className="flex gap-5 text-[#696A75]">
          <Link href="/">
            <p className="hover:bg-blue-300 rounded-xl">Home</p>
          </Link>
          <Link href="/Blog">
            <p className="hover:bg-blue-300 rounded-xl">Blog</p>
          </Link>
          <Link href="/Contact">
            <p className="hover:bg-blue-300 rounded-xl">Contact</p>
          </Link>
        </div>
        <div className="flex gap-5 ">
          <Link
            className="hover:bg-blue-300 rounded-xl"
            href="https://www.facebook.com/"
          >
            <IoLogoFacebook />
          </Link>
          <Link className="hover:bg-blue-300 rounded-xl" href="https://x.com/">
            <IoLogoTwitter />
          </Link>
          <Link
            className="hover:bg-blue-300 rounded-xl"
            href="https://www.instagram.com/"
          >
            <IoLogoInstagram />
          </Link>
          <Link
            className="hover:bg-blue-300 rounded-xl"
            href="https://mn.linkedin.com/"
          >
            <IoLogoLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};
