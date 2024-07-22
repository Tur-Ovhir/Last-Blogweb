"use client";

import { Trending } from "@/Components/Trending";
import { Navbar } from "../Components/Navbar";
import { Technology } from "../Components/Technology";
import { AllBlogPost } from "@/Components/AllBlogPost";
import { About } from "@/Components/About";
import { MetaBlog } from "@/Assets/MetaBlog";
import { MetalBlog } from "@/Components/MetalBlog";
import { Carausel } from "@/Components/Carausel";
import { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState([]);
  console.log("hello", data);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`http://localhost:3001/`);
        const response = await res.json();
        console.log(response);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      <Technology />
      <Trending />
      <AllBlogPost />
      <About />
      <MetalBlog />
      <Carausel />
      <div>
        <p>hello</p>

        <div>
          {data.map((item) => (
            <div key={item.title}>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
