import Navbar from "@/components/navbar";
import BlogContent from "@/components/custom/blog-content";

export default function BlogSlug({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full h-screen flex flex-col items-start p-8 sm:p-12 gap-8">
      <Navbar />
      <div className="w-full flex justify-center">
        <BlogContent slug={params.slug} />
      </div>
    </div>
  );
}
