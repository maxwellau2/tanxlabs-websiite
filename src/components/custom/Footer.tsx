// src/components/Footer.tsx
import React from "react";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      {/* Outer container: center it and add padding */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Column 1: Company Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-white transition-colors"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Social Icons */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/your‐page"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/your‐handle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/your‐profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright/notice line (optional) */}
        <div className="mt-12 border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} TangentX Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
