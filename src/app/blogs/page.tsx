import BlogsMap from "@/components/custom/blogs";
import Navbar from "@/components/navbar";
import { PORTFOLIO_V2_LINK } from "@/data/links";

export default function Blogs() {
  return (
    <div className="w-full h-screen flex flex-col items-start p-8 sm:p-12 gap-8">
      <title>Blogs</title>
      <Navbar />
      <div className="max-w-[490px] flex flex-col gap-4 pb-12">
        <span className="font-semibold text-3xl">Blogs</span>
        <BlogsMap />
      </div>
      <span className="text-sm max-w-[490px] pb-16">
        To view the blogs with comments, or if you&apos;d like to leave a
        comment yourself, visit{" "}
        <a
          href={`${PORTFOLIO_V2_LINK}/blog`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          here
        </a>{" "}
      </span>
    </div>
  );
}
