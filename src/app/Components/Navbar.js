import { MetaBlog } from "@/Assets/MetaBlog";
import { Search } from "@/Assets/Search";
import { Menu } from "@/Assets/Menu";
export const Navbar = () => {
  return (
    <div className="NavbarBody w-full h-[72px] ">
      <div className="flex ">
        <div className="flex gap-60 mt-5 ml-3">
          <MetaBlog />
          <Menu />
        </div>
      </div>
    </div>
  );
};
