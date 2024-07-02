import { CiSquareChevRight } from "react-icons/ci";
import { CiSquareChevLeft } from "react-icons/ci";
export const Technology = () => {
  return (
    <div>
      <div className="w-full flex relative ">
        <img className=" flex " src="/Image.png" />
        <img className="absolute    bottom-1  left-0" src="ContentGrid.jpg" />
      </div>
      <div className="flex w-full   justify-center">
        <CiSquareChevLeft className="w-[40px] h-[40px]" />
        <CiSquareChevRight className="w-[40px] h-[40px] " />
      </div>
    </div>
  );
};
