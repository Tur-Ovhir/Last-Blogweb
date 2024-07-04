import { MetaBlog } from "@/Assets/MetaBlog";
export const MetalBlog = () => {
  return (
    <div className="bg-[#F6F6F7]">
      <div className="w-[231px] h-[54px] ml-3 ">
        <MetaBlog width={"231px"} height={"54px"} />
        <p className="text-xs  ml-5">© All Rights Reserved.</p>
      </div>
      <div className="ml-3  mt-10 flex flex-col gap-5 ">
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
      </div>
    </div>
  );
};
