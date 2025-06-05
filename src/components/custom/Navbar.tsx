import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Strategies", href: "#strategies" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-mono font-semibold">
              TangentX Labs
            </a>
          </div>

          {/* Desktop menu (hidden on small screens) */}
          <div className="hidden md:flex md:space-x-8 md:items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.label}
              </a>
            ))}

            <Button className="ml-4 bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-black">
              Invest
            </Button>
            <Button className="ml-2 bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-black">
              Careers
            </Button>
          </div>

          {/* Mobile hamburger (shown on small screens) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-bg-gray-100"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 py-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#invest"
              className="block px-3 py-2 mt-2 rounded-md text-base font-medium text-white bg-black hover:bg-gray-800"
            >
              Invest
            </a>
            <a
              href="#careers"
              className="block px-3 py-2 mt-2 rounded-md text-base font-medium text-white bg-black hover:bg-gray-800"
            >
              Careers
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
