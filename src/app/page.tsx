import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-start p-8 sm:p-12 gap-8">
      <div className="flex flex-row flex-wrap gap-6">
        <Link href="" className="hover:underline">
          home
        </Link>
        <Link href="/blogs" className="hover:underline">
          blogs
        </Link>
        <Link href="/projects" className="hover:underline">
          projects
        </Link>
        <Link href="/now" className="hover:underline">
          now
        </Link>
        <Link href="/questions" className="hover:underline">
          questions
        </Link>
      </div>
      <div className="max-w-[490px] flex flex-col gap-4">
        <span className="font-semibold text-3xl">Daffa Muhammad Faizan</span>
        <span>
          I&apos;m studying{" "}
          <a
            href="https://cs.ui.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            CS
          </a>{" "}
          at the{" "}
          <a
            href="https://www.ui.ac.id/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            University of Indonesia
          </a>
          .
        </span>
        <span>
          I have 2+ years of experience building products + projects, mostly
          solutions to problems that I encounter in my daily life. I&apos;m
          interested in distributed computing, software engineering, and
          blockchain technology. I&apos;m currently doing my thesis, focusing on
          Zero-Knowledge Proofs and it&apos;s implementation on data exchange
          marketplaces.
        </span>
        <span>
          Connect with me on{" "}
          <a
            href="https://github.com/daffafaizan"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            github
          </a>
          ,{" "}
          <a
            href="https://linkedin.com/in/daffafaizan"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            linkedin
          </a>
          ,{" "}
          <a
            href="https://instagram.com/daffaizan"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            instagram
          </a>
          , or contact daffamfzn at gmail dot com.
        </span>
      </div>
      <span>
        <span>BWMIM</span> (Built With Minimalism In Mind)
      </span>
    </div>
  );
}
