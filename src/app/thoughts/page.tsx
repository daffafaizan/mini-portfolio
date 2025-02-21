import Navbar from "@/components/navbar";

export default function Thoughts() {
  return (
    <div className="w-full h-screen flex flex-col items-start p-8 sm:p-12 gap-8">
      <Navbar />
      <div className="max-w-[490px] flex flex-col gap-4">
        <span className="font-semibold text-3xl">Thoughts</span>
        <div className="flex flex-col gap-2 mb-4">
          <span className="font-semibold text-xl">Visions</span>
          <span>
            These visions, ideas, and passions{" "}
            <span className="font-semibold">ignite</span> a fire in me, driving
            me forward with determination and a constant desire to improve.
          </span>
          <ul className="list-inside list-decimal">
            <li>Increasing academic competence in Indonesia.</li>
            <li>Making a scientific breakthrough.</li>
            <li>Developing a globally useful software or application.</li>
            <li>Putting Indonesia on the map.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <span className="font-semibold text-xl">Questions</span>
          <span>
            There are several questions constantly revolving in my mind that I{" "}
            <span className="font-semibold">desperately</span> need answers to.
          </span>
          <ul className="list-inside list-decimal">
            <li>How do you transform a nation?</li>
            <li>Is time travel possible?</li>
            <li>How do you find love?</li>
          </ul>
        </div>
        <span>
          If you have share my vision, have answers, want to share resources, or
          if you&apos;re intersted ;&#41; please shoot me an email at daffamfzn
          at gmail dot com.
        </span>
      </div>
    </div>
  );
}
