import { Trending } from "@/Components/Trending";
import { Navbar } from "../Components/Navbar";
import { Technology } from "../Components/Technology";
import { AllBlogPost } from "@/Components/AllBlogPost";
import { About } from "@/Components/About";
import { MetaBlog } from "@/Assets/MetaBlog";
import { MetalBlog } from "@/Components/MetalBlog";
import { Carausel } from "@/Components/Carausel";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Technology />
      <Trending />
      <AllBlogPost />
      <About />
      <MetalBlog />
      <Carausel />
    </div>
  );
}
