'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white fixed w-full z-50 top-0 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              gigabox.ai
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#developers" className="hover:text-blue-600">Developers</a>
            <a href="#templates" className="hover:text-blue-600">App Templates</a>
            <a href="#idp" className="hover:text-blue-600">IDP</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a
              href="https://oneui.gigabox.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700"
            >
              See OneUI ↗
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// 'use client';

// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-white fixed w-full z-50 top-0 border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link href="/" className="text-2xl font-bold text-blue-600">
//               gigabox.ai
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// } 