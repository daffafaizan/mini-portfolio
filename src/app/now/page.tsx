import Navbar from "@/components/navbar";

export default function Now() {
  return (
    <div className="w-full h-screen flex flex-col items-start p-8 sm:p-12 gap-8">
      <title>Now</title>
      <Navbar />
      <div className="max-w-[490px] flex flex-col gap-4 pb-12">
        <span className="font-semibold text-3xl">What I&apos;m doing now</span>
        <span>
          Glad to announce that I finished my thesis about{" "}
          <span className="font-semibold">Zero-Knowledge Proof Protocols</span>!
          Currently, I&apos;m working as a software engineer intern (soon
          full-time software engineer) @{" "}
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
      </div>
      <span>
        Last updated on{" "}
        <span className="font-semibold">Thursday, 9 July 2025</span>.
      </span>
    </div>
  );
}
