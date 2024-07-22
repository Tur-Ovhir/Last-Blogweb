import Image from "next/image";
import Link from "next/link";
import { CiSquareChevRight } from "react-icons/ci";
import { CiSquareChevLeft } from "react-icons/ci";
export const Technology = () => {
  const HeaderImages = [
    "https://s3-alpha-sig.figma.com/img/9cba/0115/47643788a57b79a4aa1d6c6db76208a5?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I6cGKmKHhHfk-L5evAftM-yw2sLEuYARGtNdHk8duyWszF0P3HJuxio-V3UhEFuMI71Tj-9jQBmXdzf-LHXzbeNt6MG7IMHvmib0PW1T",
    "https://s3-alpha-sig.figma.com/img/348e/c9c1/94d6445161ab63109e6e813699b61984?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=py8OMpbuxE3iDId2D09Tb7hLZ1WoM~7R0nNNA8~jkUxJndwFoxmmmd6CCs0HkdTbpJMapwgKaNyGvtTSFllDDqF8~CnnWU-bZLpeI2iC3r3CXINxzKFearKJMi-7NUpjLsoRby7YrROOraDD1AcI3VB~vEWFhN16ltCn3Fs~238FW~ljKkr3iG7Lm~bNC-DnvdHMqiNGWjA43zr2~vgb6miV5mBBWiH64FHUTu8lpPzaRFepaORlPk~pPvHTAS2hwYN4cja71j1K2P8RtPQ~5jUcdID3xBE7xait2qAYabv-j0PKD4IgJRAmo4ky3A9ryQPTfZbGHP~fgvpknyVPnA__",
    "https://s3-alpha-sig.figma.com/img/3abf/26dd/585632b9d05dcfd0daffacedd55842f5?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e4Mws2coOI5VEfjT7KNtreYEeMaDcoNOetCPZsNZ-1uJqVWKw~qF1OG9CJ0YBSsTZyS-3LIo7BWfP05LoxoO-RzbgkFODqlnj143nPgWHl-MgicSHELFN7zSqC0U7Lf8FUi-ArdMdJJ4jX8YXhtTxCa5vIhh7vcnYEf7N6xVE3r5wzEBezAW7O-jeQHh3PaKnFJewaKlviqOMGaTJ4jfkljBMXdnAdQ9P3J6ecoI~6SB4ZSqEW4hqCWE8mJ93rXO60He2o~6uE0OwKgAcZgbvkcYbxm0cyrVCPXGxw5r8WLvsA0WMNZESTVvY3LGMhNUAwpZOevk95TUCryH4Ugewg__",
  ];

  return (
    <div className=" lg.w-[1216px] w-full  lg.h-[600px] h-full">
      <div className="lg.w-full w-[1216px] flex relative ">
        <Image
          className=" flex "
          src="/Image.png"
          alt="ContentGrid.jpg"
          width={1216}
          height={600}
        />

        <Image
          className="absolute    bottom-1  left-0"
          src="/ContentGrid.jpg"
          alt="ContentGrid.jpg"
          width={500}
          height={500}
        />
      </div>
      <div className="flex w-full   justify-center">
        <CiSquareChevLeft className="w-[40px] h-[40px] hover:bg-blue-300 rounded-xl" />
        <CiSquareChevRight className="w-[40px] h-[40px] hover:bg-blue-300 rounded-xl" />
      </div>
    </div>
  );
};
