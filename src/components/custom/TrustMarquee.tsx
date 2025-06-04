// src/components/TrustMarquee.tsx
import React from "react";
// Adjust this import path if your Magic UI marquee lives elsewhere.
import { Marquee } from "../magicui/marquee";

// Importing logos explicitly so Vite (or CRA) will bundle them.
import logo1 from "../../assets/companies-marquee/logo1.png";
import logo2 from "../../assets/companies-marquee/logo2.png";
import logo3 from "../../assets/companies-marquee/logo3.png";
import logo4 from "../../assets/companies-marquee/logo4.png";

// Array of imported logos; you can expand this as needed.
const COMPANY_LOGOS = [logo1, logo2, logo3, logo4];

export default function TrustMarquee() {
  return (
    <section className="relative bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading (optional) */}
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Our Partners
        </h2>

        {/* Create a wrapper that’s position: relative, so we can overlay gradients */}
        <div className="relative overflow-hidden">
          {/* Left fade overlay */}
          <div className="
    pointer-events-none
    absolute inset-y-0 left-0
    w-16
    bg-gradient-to-r from-gray-50 to-transparent
    z-10
  " />

          {/* Right fade overlay */}
          <div className="pointer-events-none
    absolute inset-y-0 right-0
    w-16
    bg-gradient-to-l from-gray-50 to-transparent
    z-10" />

          {/* Magic UI’s Marquee wrapper */}
          <Marquee pauseOnHover={false} className="overflow-hidden">
            <div className="flex items-center space-x-12 px-16">
              {COMPANY_LOGOS.map((src, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex items-center justify-center w-40 h-20"
                >
                  <img
                    src={src}
                    alt={`Company logo ${idx + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}

              {/* Duplicate the logos so the marquee appears infinite */}
              {COMPANY_LOGOS.map((src, idx) => (
                <div
                  key={`dup-${idx}`}
                  className="flex-shrink-0 flex items-center justify-center w-40 h-20"
                >
                  <img
                    src={src}
                    alt={`Company logo duplicate ${idx + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
