"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  const ongoing = projects.filter((project) => project.status == "ONGOING");
  const finished = projects.filter((project) => project.status == "FINISHED");
  return (
    <div className="w-full h-screen flex flex-col items-start p-8 sm:p-12 gap-8">
      <title>Projects</title>
      <Navbar />
      <div className="max-w-[490px] flex flex-col gap-4 pb-12">
        <span className="font-semibold text-3xl">Projects</span>
        <span className="font-semibold text-xl">Ongoing</span>
        <ul className="list-inside list-disc">
          {ongoing.map((project) => (
            <li key={project.id} className="mb-2">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#0000EE]"
              >
                {project.title} - {project.description}
              </Link>
            </li>
          ))}
        </ul>
        <span className="font-semibold text-xl">Finished</span>
        <ul className="list-inside list-disc">
          {finished.map((project) => (
            <li key={project.id} className="mb-2">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#0000EE]"
              >
                {project.title} - {project.description}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
