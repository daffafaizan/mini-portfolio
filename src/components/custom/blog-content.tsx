/* eslint-disable @typescript-eslint/no-explicit-any */
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface BlogContentProps {
  slug: string;
}

export default async function BlogContent({ slug }: BlogContentProps) {
  const getUrl = `${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`;
  const data = await fetch(getUrl)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  const formattedDate = (createdAt: string) => {
    const date = new Date(createdAt).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return date;
  };

  return (
    <div className="max-w-[500px] flex flex-col gap-6 pb-12 overflow-x-scroll">
      <title>{data.title}</title>
      <div className="flex flex-col gap-0">
        <span className="font-semibold text-xl">{data.title}</span>
        <span>
          {data.postAuthor} | {formattedDate(data.createdAt)}
        </span>
      </div>
      <hr className="my-2" />
      <div className="prose max-w-none prose-pre:p-0 prose-pre:m-0">
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code(props) {
              const { children, className, ...rest } = props as any;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <div className="overflow-x-auto max-w-full">
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    language={match[1]}
                    style={dark}
                    customStyle={{
                      margin: 0,
                      borderRadius: "0.375rem",
                      maxWidth: "100%",
                    }}
                    codeTagProps={{
                      style: {
                        fontSize: "0.875rem",
                        lineHeight: "1.5",
                      },
                    }}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code {...rest} className="break-words">
                  {children}
                </code>
              );
            },
          }}
        >
          {data.aiContent ? data.aiContent : data.content}
        </Markdown>
      </div>
    </div>
  );
}
