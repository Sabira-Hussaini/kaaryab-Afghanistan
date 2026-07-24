import OpportunityForm from "@/components/opportunity/OpportunityForm";

export default function AddOpportunityPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-3 text-4xl font-bold text-slate-900 dark:text-white">
        Add Opportunity
      </h1>

      <p className="mb-10 text-slate-600 dark:text-slate-300">
        Share a new job, internship, scholarship, or training opportunity.
      </p>

      <OpportunityForm />
    </main>
  );
}