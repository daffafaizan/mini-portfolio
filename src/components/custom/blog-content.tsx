import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface BlogContentProps {
  slug: string;
}

export default async function BlogContent({ slug }: BlogContentProps) {
  const data = await getServerSideProps(slug);
  const formattedDate = (createdAt: string) => {
    const date = new Date(createdAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return date;
  };
  return (
    <div className="max-w-[500px] flex flex-col gap-6 pb-12">
      <title>{data.title}</title>
      <div className="flex flex-col gap-0">
        <span className="font-semibold text-xl">{data.title}</span>
        <span>
          {data.postAuthor} | {formattedDate(data.createdAt)}
        </span>
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
  );
}

export async function getServerSideProps(slug: string) {
  const getUrl = `${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`;
  const data = await fetch(getUrl)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return data;
}
