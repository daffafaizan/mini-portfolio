import ReadsMap from "@/components/custom/reads";
import Navbar from "@/components/navbar";

export default function Reads() {
  return (
    <div className="w-full h-screen flex flex-col items-start p-8 sm:p-12 gap-8">
      <title>Reads</title>
      <Navbar />
      <div className="max-w-[490px] flex flex-col gap-4 pb-12">
        <span className="font-semibold text-3xl">Reads</span>
        <span className="text-md">
          A curated list of my personal favorite reads (and watches),{" "}
          <span className="text-red-500">*</span> indicates a read is a favorite
          + hover to see my favorite lines!
        </span>
        <ReadsMap />
      </div>
    </div>
  );
}
