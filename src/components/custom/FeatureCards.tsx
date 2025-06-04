// src/components/FeatureCards.tsx
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Leaf, Cpu, Shield, ArrowRight } from "lucide-react";
import { MagicCard } from "../magicui/magic-card";

const features = [
  {
    icon: Leaf,
    title: "Quantitative Research",
    description: "Sophisticated quantitative models, and large datasets",
    link: "#quant-research",
  },
  {
    icon: Cpu,
    title: "Technology",
    description: "Cutting-edge technology stack",
    link: "#technology",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Robust risk management and real time risk control",
    link: "#risk-management",
  },
];

export default function FeatureCards() {
  return (
      <section>
        <div className=" py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(
            ({ icon: Icon, title, description, link }) => (
                <Card
                  key={title}
                  className=" w-full sflex flex-col items-center text-center rounded-lg p-6 border-none shadow-none"
                >
                  <CardHeader className=" w-full
                  flex flex-col items-center text-center
                  rounded-lg p-6
                  border-none shadow-none">
                    <Icon className="w-12 h-12 text-gray-700" />
                    <CardTitle className="mt-4 text-lg font-semibold">
                      {title}
                    </CardTitle>
                  <CardDescription className="mt-2 text-gray-600">
                    {description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center p-0 mt-6">
                  <a
                    href={link}
                    className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </CardContent>
              </Card>
            )
        )}
        </div>
      </div>
      </div>
    </section>
  );
}
