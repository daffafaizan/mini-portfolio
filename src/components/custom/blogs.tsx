import { tags } from "@/data/blog-tags";
import { Blog } from "@/interfaces/blog";
import Link from "next/link";

export default async function BlogsMap() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/posts`;
  const data = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  const groupedByTag = new Map<string, Blog[]>();

  const sortedPosts = data.sort(
    (a: Blog, b: Blog) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  for (const tag of tags) {
    groupedByTag.set(tag, []);
  }

  for (const post of sortedPosts) {
    for (const tag of post.tags) {
      if (!groupedByTag.has(tag)) groupedByTag.set(tag, []);
      groupedByTag.get(tag)!.push(post);
    }
  }

  const formattedDate = (createdAt: string) => {
    const date = new Date(createdAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return date;
  };

  return (
    <>
      {Array.from(groupedByTag.entries()).map(([tag, posts]) => (
        <div key={tag} className="flex flex-col gap-4">
          <span className="font-semibold text-xl">{tag}</span>
          {posts.length > 0 ? (
            <ul className="list-inside list-disc">
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
            </ul>
          ) : (
            <ul>
              <li className="text-gray-500 text-sm italic">No posts yet.</li>
            </ul>
          )}
        </div>
      ))}
    </>
  );
}
