import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Now() {
  return (
    <div className="w-full h-screen flex flex-col items-start p-8 sm:p-12 gap-8">
      <title>Now</title>
      <Navbar />
      <div className="max-w-[490px] flex flex-col gap-4 ">
        <span className="font-semibold text-3xl">What I&apos;m doing now</span>
        <span>
          Graduated as a{" "}
          <a
            href="https://cs.ui.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            CS
          </a>{" "}
          undergrad at the{" "}
          <a
            href="https://www.ui.ac.id/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            University of Indonesia
          </a>{" "}
          and currently working as a software engineer at{" "}
          <a
            href="https://clevero.co"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Clevero
          </a>
          .
        </span>
        <span>
          My thesis was about{" "}
          <span className="font-semibold">Zero-Knowledge Proof</span> protocols
          and it&apos;s implementation on data exchange marketplaces.
        </span>
        <span>
          In my free time, I game, read, and build/study. I&apos;m a casual
          gamer who enjoys FPS and strategy games. You can find me on CS2,
          VALORANT, Age of Empires III, the Mass Effect series, Stellaris,
          Master of Orion, and some occasional Minecraft. I mainly read sci-fi
          stories and tech articles: you can check out some of my favorites{" "}
          <Link href={`/reads`} className="hover:underline text-[#0000EE]">
            here
          </Link>{" "}
          (and infer the tech I&apos;m currently learning too!). I grouped
          building and studying together because most of what I learn revolves
          around programming, and I’ve always believed in learning by doing.
          That&apos;s why I&apos;m always working on side projects.
        </span>
      </div>
      <span className="text-sm">
        Last updated on{" "}
        <span className="font-semibold">Saturday, 10 January 2026</span>.
      </span>
    </div>
  );
}
