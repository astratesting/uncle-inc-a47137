import { Brain, Users, BarChart3, ListTodo } from "lucide-react";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: Brain,
    title: "AI Prototyping",
    description:
      "Describe your idea in plain language and watch as our AI generates a functional prototype complete with UI, logic, and data models.",
    color: "text-indigo-light",
  },
  {
    icon: Users,
    title: "User Testing Panels",
    description:
      "Get real feedback from our vetted community of testers. Embedded testing panels let you validate assumptions before you build.",
    color: "text-cyan",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Behavioral data auto-translates into insights. See exactly how users interact with your prototype and what needs improvement.",
    color: "text-teal",
  },
  {
    icon: ListTodo,
    title: "Sprint Planning",
    description:
      "Feedback is automatically converted into prioritized sprint tasks so you always know what to build next to achieve product-market fit.",
    color: "text-indigo-light",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Launch</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            An integrated platform that takes you from napkin sketch to
            validated product — without writing a single line of code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} glow="indigo" className="group">
              <feature.icon
                className={`w-10 h-10 mb-4 ${feature.color} group-hover:scale-110 transition-transform`}
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}