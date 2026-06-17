import { Compass } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Describe Your Idea",
    description:
      "Tell us about your startup concept, target audience, and core features in plain language. No technical knowledge required.",
  },
  {
    number: "02",
    title: "AI Generates Prototype",
    description:
      "Our AI engine builds a functional prototype with real UI, logic, and data — ready for testing within minutes, not weeks.",
  },
  {
    number: "03",
    title: "Test, Learn & Launch",
    description:
      "Share with testers, collect feedback, and iterate. Analytics and sprint planning keep you moving toward product-market fit.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-ink-black-light/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Compass className="w-6 h-6 text-teal" />
            <span className="text-sm font-mono text-teal uppercase tracking-wider">
              Your Compass to Launch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It{" "}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-text-secondary">
            Three simple steps from concept to validated product.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex gap-6 items-start group"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-indigo/10 border border-indigo/20 flex items-center justify-center font-mono text-2xl font-bold text-indigo-light group-hover:bg-indigo/20 transition-all">
                {step.number}
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block w-px h-full bg-ink-border absolute left-8 top-16" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}