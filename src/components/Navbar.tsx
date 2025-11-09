'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white fixed w-full z-50 top-0 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-black hover:opacity-80">
              gigabox.ai
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-neutral-800">
            <Link href="/#developers" className="hover:text-black">Developers</Link>
            <Link href="/#templates" className="hover:text-black">App Templates</Link>
            <Link href="/#idp" className="hover:text-black">IDP</Link>
            <Link href="/#contact" className="hover:text-black">Contact</Link>

            {/* Important Docs */}
            {/* <Link
              href="/docs"
              className="inline-flex rounded-lg bg-black text-white px-4 py-2 font-medium hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Important Docs
            </Link> */}

            <Link
              href="/launchops"
              className="inline-flex rounded-lg bg-black text-white px-4 py-2 font-medium hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              LaunchOps
            </Link>
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
//           <div className="hidden md:flex items-center gap-6 text-sm">
//             <Link href="/#developers" className="hover:text-blue-600">Developers</Link>
//             <Link href="/#templates" className="hover:text-blue-600">App Templates</Link>
//             <Link href="/#idp" className="hover:text-blue-600">IDP</Link>
//             <Link href="/#contact" className="hover:text-blue-600">Contact</Link>

//             {/* NEW: Important Docs */}
//             <Link
//               href="/docs"
//               className="inline-flex rounded-lg bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700"
//             >
//               Important Docs
//             </Link>

//             <Link
//               href="/oneui"
//               className="inline-flex rounded-lg bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700"
//             >
//               See OneUI
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

