import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
      <p className="text-7xl sm:text-8xl font-black gradient-text mb-4">404</p>
      <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground mb-3">
        Page not found
      </h1>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/en"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-7 h-12 text-[#1f1300] font-bold shadow-brand hover:bg-amber-600 transition-colors"
      >
        Back to home
      </Link>
    </main>
  );
}
