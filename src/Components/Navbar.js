import { MetaBlog } from "@/Assets/MetaBlog";
import { Search } from "@/Assets/Search";
import { Menu } from "@/Assets/Menu";
import Link from "next/link";
export const Navbar = () => {
  return (
    <div className="NavbarBody w-full h-[72px] ">
      <div className="flex">
        <div className="w-full flex  justify-between ">
          <MetaBlog width={"135px"} height={"26px"} />
          <div className="gap-5 flex ">
            <Link href="/">
              <h1 className="hover:bg-blue-300 rounded-xl">Home</h1>
            </Link>
            <Link href="/Blog">
              <h1 className="hover:bg-blue-300 rounded-xl">Blog</h1>
            </Link>
            <Link href="/Contact">
              <h1 className="hover:bg-blue-300 rounded-xl">Contact</h1>
            </Link>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};
