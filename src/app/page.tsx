import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-start p-8 sm:p-12 mb-16 gap-8">
      <Navbar />
      <span className="max-w-[490px] font-semibold text-3xl">
        Daffa Muhammad Faizan
      </span>
      <span className="max-w-[490px] italic">
        &quot;Life&apos;s too short to be average.&quot;
      </span>
      <div className="max-w-[490px] flex flex-col gap-4 pb-12">
        <span>
          Currently a{" "}
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
          and a software engineer at{" "}
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
          I have 2+ years of experience building products + projects, mostly
          solutions to problems that I encounter in my daily life. I&apos;m
          interested in distributed computing, software engineering,
          cryptography, and blockchain technology. I&apos;m currently doing my
          thesis, focusing on Zero-Knowledge Proof protocols and it&apos;s
          implementation on data exchange marketplaces.
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
      <span className="max-w-[490px]">
        <span>BWMIM&trade;</span> (Built With Minimalism In Mind), inspired by{" "}
        <a
          href="https://mntruell.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          mntruell.com
        </a>
        ,{" "}
        <a
          href="https://arvid.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          arvid.xyz
        </a>
        , and{" "}
        <a
          href="https://bearblog.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          bearblog.dev
        </a>
        .
      </span>
      <span>
        Click{" "}
        <a
          href="https://daffafaizan-v2.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          here
        </a>{" "}
        for the GUI version.
      </span>
    </div>
  );
}
