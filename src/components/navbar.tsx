import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      <Link href="/" className="hover:underline">
        home
      </Link>
      <Link href="/blogs" className="hover:underline">
        blogs
      </Link>
      <Link href="/reads" className="hover:underline">
        reads
      </Link>
      <Link href="/projects" className="hover:underline">
        projects
      </Link>
      <Link href="/now" className="hover:underline">
        now
      </Link>
      <Link href="/thoughts" className="hover:underline">
        thoughts
      </Link>
    </div>
  );
}
