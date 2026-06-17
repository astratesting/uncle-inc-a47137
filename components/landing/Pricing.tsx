import Link from "next/link";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For solo founders exploring their first idea.",
    features: [
      "1 project",
      "AI prototype generation",
      "Basic analytics",
      "Community testing panel",
      "3 tester seats",
    ],
    cta: "Start Building Free",
    href: "/sign-up",
    highlighted: false,
  },
  {
    name: "Founder Launch",
    price: "$49",
    period: "/month",
    description: "For serious founders validating multiple concepts.",
    features: [
      "5 projects",
      "Advanced AI prototyping",
      "Full analytics suite",
      "Priority testing panel",
      "25 tester seats",
      "Sprint planning tools",
      "Email support",
    ],
    cta: "Start Free Trial",
    href: "/sign-up",
    highlighted: true,
  },
  {
    name: "Studio",
    price: "$99",
    period: "/month",
    description: "For teams and agencies shipping multiple MVPs.",
    features: [
      "Unlimited projects",
      "Premium AI prototyping",
      "Advanced analytics & exports",
      "VIP testing panel access",
      "Unlimited tester seats",
      "Advanced sprint planning",
      "Priority support",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    href: "/sign-up",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Start free and upgrade as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              glow={plan.highlighted ? "indigo" : "none"}
              className={`relative flex flex-col ${
                plan.highlighted
                  ? "border-indigo/40 ring-1 ring-indigo/20"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-indigo text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-text-secondary text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-text-muted ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-teal flex-shrink-0" />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-indigo hover:bg-indigo-light text-white shadow-lg shadow-indigo/20"
                    : "border border-ink-border text-text-primary hover:bg-ink-card"
                }`}
              >
                {plan.cta}
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}