/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCallback, useEffect, useState } from "react";
import { Blog } from "@/interfaces/blog"
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Navbar from "@/components/navbar";

const initialPostData: Blog = {
  _id: "",
  title: "",
  slug: "",
  summary: "",
  content: "",
  aiContent: "",
  createdAt: "",
  postAuthor: "",
  tags: [],
  comments: null,
};

export default function BlogSlug({ params }: { params: { slug: string } }) {
  const getUrl = `${process.env.NEXT_PUBLIC_API_URL}/posts/${params.slug}`;
  const [isLoading, setIsLoading] = useState(true);
  const [loadingDots, setLoadingDots] = useState(".");
  const [data, setData] = useState<Blog>(initialPostData);
  const formattedDate = (createdAt: string) => {
    const date = new Date(createdAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return date;
  };
  const getData = useCallback(async () => {
    await fetch(getUrl)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      });
  }, [getUrl]);
  useEffect(() => {
    getData();
  }, [getData]);
  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setLoadingDots((prev) => (prev === "..." ? "." : prev + "."));
    }, 200);

    return () => clearInterval(interval);
  }, [isLoading]);
  return (
    <div className="w-full h-screen flex flex-col items-start p-8 sm:p-12 gap-8">
      <Navbar />
      <div className="w-full flex justify-center">
        {isLoading ? (
          <span>{loadingDots}</span>
        ) : (
          <div className="max-w-[500px] flex flex-col gap-6 pb-12">
            <title>{data.title}</title>
            <div className="flex flex-col gap-0">
              <span className="font-semibold text-xl">{data.title}</span>
              <span>{formattedDate(data.createdAt)}</span>
            </div>
            <hr className="my-2" />
            <Markdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                code(props) {
                  const { children, className, ...rest } = props as any;
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter
                      {...rest}
                      PreTag="div"
                      language={match[1]}
                      style={dark}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code {...rest}>{children}</code>
                  );
                },
              }}
            >
              {data.aiContent ? data.aiContent : data.content}
            </Markdown>
          </div>
        )}
      </div>
    </div>
  );
}
