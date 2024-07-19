import Image from "next/image";
import { MdOutlineFace6 } from "react-icons/md";
import { Navbar } from "@/Components/Navbar";
import { About } from "@/Components/About";
import { MetalBlog } from "@/Components/MetalBlog";
export default function Workplace() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="lg.w-[800px] w-full flex flex-col items-center">
        <div className="w-[800px]   ">
          <div className="text-2xl mt-10">
            <h1 className="w-full left-0">
              The Impact of Technology on the Workplace:
            </h1>
            <h1> How Technology is Changing</h1>
          </div>
          <div className="flex  mt-5 gap-2">
            <MdOutlineFace6 />
            <p className="left-1 ">Tracey Wilson</p>
            <p className="left-1">August 20, 2022</p>
          </div>
        </div>
        <div className="mt-10 w-[800px] h-[462px] ">
          <Image className="justify-center" src="/imagehot.jpg" alt="" />
        </div>
        <div className="w-[800px] mt-10">
          <p className="text-[#3b3c4a]">
            Traveling is an enriching experience that opens up new horizons,
            exposes us to different cultures, and creates memories that last a
            lifetime. However, traveling can also be stressful and overwhelming,
            especially if you do not plan and prepare adequately. In this blog
            article, will explore tips and tricks for a memorable journey and
            how to make the most of your travels.
          </p>

          <p className="mt-3 text-[#3b3c4a]">
            One of the most rewarding aspects of traveling is immersing yourself
            in the local culture and customs. This includes trying local
            cuisine, attending cultural events and festivals, and interacting
            with locals. Learning a few phrases in the local language can also
            go a long way in making connections and showing respect.
          </p>
        </div>
        <div className="w-[800px] mt-10 ">
          <h1 className="text-xl text-black">Research Your Destination</h1>
          <p className="mt-3 text-[#3b3c4a]">
            Before embarking on your journey, take the time to research your
            destination. This includes understanding the local culture, customs,
            and laws, as well as identifying top attractions, restaurants, and
            accommodations. Doing so will help you navigate your destination
            with confidence and avoid any cultural faux pas.
          </p>

          <p className="mt-3 text-[#3b3c4a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
            faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
            elementum nisi quis eleifend quam adipiscing vitae. Viverra
            adipiscing at in tellus.
          </p>
        </div>
        <div className="w-[800px] mt-5">
          <h1 className="text-xl text-black">Research Your Destination</h1>
          <p className="mt-3">
            Before embarking on your journey, take the time to research your
            destination. This includes understanding the local culture, customs,
            and laws, as well as identifying top attractions, restaurants, and
            accommodations. Doing so will help you navigate your destination
            with confidence and avoid any cultural faux pas.
          </p>

          <p className="mt-3 text-[#3b3c4a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
            faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
            elementum nisi quis eleifend quam adipiscing vitae. Viverra
            adipiscing at in tellusd
          </p>
        </div>
        <div>
          <About></About>
        </div>
      </div>
    </div>
  );
}
