import { notFound } from "next/navigation";
import { opportunities } from "@/data/opportunities";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OpportunityDetailsPage({ params }: Props) {
  const { id } = await params;

  const opportunity = opportunities.find((item) => item.id === id);

  if (!opportunity) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200">
        {opportunity.category}
      </span>

      <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
        {opportunity.title}
      </h1>

      <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
        {opportunity.organization}
      </p>

      <div className="mt-6 grid gap-4 rounded-xl border border-slate-200 p-6 dark:border-slate-700 dark:bg-slate-800 md:grid-cols-2">
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">
            Location
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            {opportunity.location}
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-900 dark:text-white">
            Type
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            {opportunity.type}
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-900 dark:text-white">
            Deadline
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            {opportunity.deadline}
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-900 dark:text-white">
            Organization
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            {opportunity.organization}
          </p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
          Description
        </h2>
        <p className="text-slate-700 dark:text-slate-300">
          {opportunity.description}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
          Requirements
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-300">
          {opportunity.requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <a
        href={opportunity.applyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Apply Now
      </a>
    </main>
  );
}