import Link from "next/link";
import { Compass, ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ink-border bg-ink-card mb-8">
          <Sparkles className="w-4 h-4 text-teal" />
          <span className="text-sm text-text-secondary">
            AI-Powered MVP Development Platform
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          From Idea to{" "}
          <span className="gradient-text">Validated MVP</span>
          <br />
          Faster Than Ever
        </h1>

        <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
          Describe your startup idea in plain language. Our AI generates a
          functional prototype, connects you with real user testers, and
          translates feedback into actionable sprint tasks — all in one
          platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo hover:bg-indigo-light text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-indigo/20"
          >
            Start Building Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 border border-ink-border text-text-primary font-semibold rounded-xl hover:bg-ink-card transition-all"
          >
            See How It Works
            <Compass className="w-5 h-5" />
          </Link>
        </div>

        <p className="mt-6 text-sm text-text-muted">
          No credit card required • Free tier includes 1 project
        </p>
      </div>
    </section>
  );
}