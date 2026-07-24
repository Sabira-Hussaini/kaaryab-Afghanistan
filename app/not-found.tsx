import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl font-bold text-blue-600">404</h1>

      <h2 className="mt-4 text-3xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        The page you are looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </main>
  );
}