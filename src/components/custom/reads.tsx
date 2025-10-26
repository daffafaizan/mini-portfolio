import { categories } from "@/data/read-categories";
import { reads } from "@/data/reads";
import { Read } from "@/interfaces/read";

export default async function ReadsMap() {
  const groupedByCategories = new Map<string, Read[]>();

  for (const category of categories) {
    groupedByCategories.set(category, []);
  }

  for (const read of reads) {
    if (!groupedByCategories.has(read.category))
      groupedByCategories.set(read.category, []);
    groupedByCategories.get(read.category)!.push(read);
  }

  return (
    <>
      {Array.from(groupedByCategories.entries()).map(([category, reads]) => (
        <div key={category} className="flex flex-col gap-4">
          <span className="font-semibold text-xl">{category}</span>
          {reads.length > 0 ? (
            <ul className="list-inside list-disc">
              {reads.map((read) => (
                <li key={read.id} className="grid grid-cols-2 mb-2 gap-8">
                  <a
                    target="_blank"
                    href={read.url}
                    rel="noopener noreferrer"
                    className="hover:underline text-[#0000EE]"
                  >
                    {read.title}
                  </a>
                  <span>{read.author}</span>
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              <li className="text-gray-500 text-sm italic">No posts yet.</li>
            </ul>
          )}
        </div>
      ))}
    </>
  );
}
