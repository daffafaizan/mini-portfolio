import { Blog } from "@/interfaces/blog";
import Link from "next/link";

export default async function BlogsMap() {
  const data = await getServerSideProps();

  const formattedDate = (createdAt: string) => {
    const date = new Date(createdAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return date;
  };

  return (
    <ul>
      {data.map((post: any) => (
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
    </ul>
  );
}

export async function getServerSideProps() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/posts`;
  const data = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  const sortedPosts = data.sort(
    (a: Blog, b: Blog) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return sortedPosts;
}
