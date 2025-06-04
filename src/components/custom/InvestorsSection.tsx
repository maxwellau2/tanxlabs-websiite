// src/components/InvestorsSection.tsx
import { Button } from "../ui/button"; // adjust path if your Shadcn Button is elsewhere
import { ArrowRight } from "lucide-react";

export default function InvestorsSection() {
  return (
    <section className="py-16">
      {/* Center the content and cap its width */}
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Main title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8">
          Investors
        </h2>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-8">
          Get boosted return today
        </p>

        {/* CTAs: a primary button and a text link */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary “Get started” button */}
          <Button className="bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-black">
            Get started
          </Button>

          {/* Secondary “Learn more →” link */}
          <a
            href="#learn-more"
            className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Learn more
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
