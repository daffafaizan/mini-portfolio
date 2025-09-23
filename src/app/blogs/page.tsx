import BlogsMap from "@/components/custom/blogs";
import Navbar from "@/components/navbar";

export default function Blogs() {
  return (
    <div className="w-full h-screen flex flex-col items-start p-8 sm:p-12 gap-8">
      <title>Blogs</title>
      <Navbar />
      <div className="max-w-[490px] flex flex-col gap-4 pb-12">
        <span className="font-semibold text-3xl">Blogs</span>
        <BlogsMap />
      </div>
    </div>
  );
}
