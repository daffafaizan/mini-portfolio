import Navbar from "@/components/navbar";

export default function Now() {
  return (
    <div className="w-full h-screen flex flex-col items-start p-8 sm:p-12 gap-8">
      <title>Now</title>
      <Navbar />
      <div className="max-w-[490px] flex flex-col gap-4">
        <span className="font-semibold text-3xl">What I&apos; doing now</span>
        <span>I&apos;m just trying to finish my degree man :&#40;</span>
        <span>
          My current workload is quite heavy. As a final-year student, my
          schedule is pretty packed with finishing my thesis (which I&apos;m
          super interested in, by the way). I&apos;d love to talk about it with
          anyone! It&apos;s about{" "}
          <span className="font-semibold">Zero-Knowledge Proofs</span>. If
          you&apos;re interested, don&apos;t hesitate to send me an email!
          Besides that, I&apos;m working on a few exciting projects with some
          friends. Stay tuned ;&#41;
        </span>
      </div>
      <span>
        Last updated on{" "}
        <span className="font-semibold">Friday, 21 February 2025</span>.
      </span>
    </div>
  );
}
