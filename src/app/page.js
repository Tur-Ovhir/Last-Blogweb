import { Trending } from "@/Components/Trending";
import { Navbar } from "../Components/Navbar";
import { Technology } from "../Components/Technology";
import { AllBlogPost } from "@/Components/AllBlogPost";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Technology />
      <Trending />
      <AllBlogPost />
    </div>
  );
}
