// // src/components/Navbar.tsx
// import React from "react";
// import { Button } from "../ui/button";


// const NAV_ITEMS = ["About", "Strategies", "Team", "Contact"];
// const FOCUS_ITEMS = ["Invest", "Careers"];

// export default function Navbar() {
//   return (
//     <nav className="bg-white">
//       {/* 
//         1) max-w-7xl: caps the content at ~80rem wide (you can choose any max-width, e.g. max-w-5xl, max-w-6xl, max-w-screen-xl, etc.)
//         2) mx-auto: centers the container horizontally
//         3) px-6 py-4: vertical/horizontal padding inside the container
//       */}
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Left side: Logo + Links */}
//         <div className="flex items-center">
//           <span className="text-xl font-mono font-semibold">TangentX Labs</span>
//           <ul className="flex space-x-6 ml-10">
//             {NAV_ITEMS.map((label) => (
//               <li key={label}>
//                 <a
//                   href={`#${label.toLowerCase()}`}
//                   className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
//                 >
//                   {label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right side: “Invest” button */}
//         <div className="flex items-center space-x-4">
//           {FOCUS_ITEMS.map((label) => (
//             <Button key={label} className="bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-black">
//               {label}
//             </Button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

// src/components/Navbar.tsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Strategies", href: "#strategies" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
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
