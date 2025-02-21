"use client";

import Navbar from "@/components/navbar";
import { Blog } from "@/interfaces/blog";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

export default function Blogs() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/posts`;
  const [posts, setPosts] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingDots, setLoadingDots] = useState(".");
  const getPosts = useCallback(async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        const sortedPosts = data.sort(
          (a: Blog, b: Blog) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setPosts(sortedPosts);
      });
  }, [url]);
  useEffect(() => {
    setIsLoading(true);
    getPosts();
  }, [getPosts]);
  const formattedDate = (createdAt: string) => {
    const date = new Date(createdAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return date;
  };
  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setLoadingDots((prev) => (prev === "..." ? "." : prev + "."));
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div className="w-full h-screen flex flex-col items-start p-8 sm:p-12 gap-8">
      <title>Blogs</title>
      <Navbar />
      <div className="max-w-[490px] flex flex-col gap-4">
        <span className="font-semibold text-3xl">Blogs</span>
        <ul>
          {isLoading ? (
            <span>{loadingDots}</span>
          ) : (
            <>
              {posts.map((post) => (
                <li key={post._id} className="grid grid-cols-2 mb-2">
                  <span>{formattedDate(post.createdAt)}</span>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="hover:underline text-[#0000EE]"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
