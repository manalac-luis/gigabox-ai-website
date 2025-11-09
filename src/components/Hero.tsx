import Link from "next/link";

interface HeroProps {
  title?: string;
}

export default function Hero({
  title = "Ship governed AI apps in days, not months.",
}: HeroProps) {
  return (
    <div className="bg-gradient-to-r from-black to-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/40 px-3 py-1 text-xs text-white/90">
            For internal developers & platform teams
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto">
            For Python & TypeScript devs who need speed, safety, and auditability. Power of real code with the ship velocity of no-code.
          </p>
          <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto">
            <span className="font-semibold">OneUI</span> is an AI Development Platform for software developers building
            AI and AI-assisted apps. Deploy in your Kubernetes cluster or cloud, use your toolchain,
            and <span className="font-semibold">skip the AI plumbing</span>—with policies, receipts, and audit by default.
          </p>

          <p className="text-base md:text-lg mb-8 text-white/80 max-w-3xl mx-auto">
            Particularly suitable for AI apps that support <span className="font-semibold">DevOps</span>,{" "}
            <span className="font-semibold">Platform Engineering</span>, and <span className="font-semibold">SRE</span>{" "}
            workflows (IDPs, golden paths, observability, and policy).
          </p>

          {/* Availability & promo */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 px-3 py-1 text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-300" /> Available now
            </span>
            <span className="inline-flex items-center rounded-full bg-white/10 border border-white/30 px-3 py-1 text-xs">
              Early-adopter pricing
            </span>
          </div>

          <div className="space-x-4">
            {/* Internal links should use <Link/> */}
            <Link
              href="/oneui"
              className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-neutral-100 transition-colors duration-200 text-lg"
            >
              Explore OneUI
            </Link>

            {/* NEW: Important Docs */}
            <Link
              href="/docs"
              className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-neutral-100 transition-colors duration-200 text-lg"
            >
              Important Docs
            </Link>

            <a
              href="#developers"
              className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors duration-200 text-lg"
            >
              For Developers
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors duration-200 text-lg"
            >
              Contact
            </a>
          </div>

          <div className="mt-4 text-sm text-white/80">
            Contact us for <span className="font-semibold">80% discount early-adopter pricing</span>.
          </div>
        </div>
      </div>
    </div>
  );
}

// import Link from "next/link";

// interface HeroProps {
//   title?: string;
// }

// export default function Hero({
//   title = "Ship governed AI apps in days, not months.",
// }: HeroProps) {
//   return (
//     <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
//         <div className="text-center">
//           <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/40 px-3 py-1 text-xs text-blue-50">
//             For internal developers & platform teams
//           </div>

//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             {title}
//           </h1>
//           <p className="text-xl md:text-2xl mb-4 text-blue-100 max-w-3xl mx-auto">
//             For Python & TypeScript devs who need speed, safety, and auditability. Power of real code with the ship velocity of no-code.
//           </p>
//           <p className="text-xl md:text-2xl mb-4 text-blue-100 max-w-3xl mx-auto">
//             <span className="font-semibold">OneUI</span> is an AI Development Platform for software developers building
//             AI and AI-assisted apps. Deploy in your Kubernetes cluster or cloud, use your toolchain,
//             and <span className="font-semibold">skip the AI plumbing</span>—with policies, receipts, and audit by default.
//           </p>

//           <p className="text-base md:text-lg mb-8 text-blue-100/90 max-w-3xl mx-auto">
//             Particularly suitable for AI apps that support <span className="font-semibold">DevOps</span>,{" "}
//             <span className="font-semibold">Platform Engineering</span>, and <span className="font-semibold">SRE</span>
//             {" "}workflows (IDPs, golden paths, observability, and policy).
//           </p>

//           {/* Availability & promo */}
//           <div className="mb-6 flex items-center justify-center gap-2">
//             <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 px-3 py-1 text-xs">
//               <span className="h-2 w-2 rounded-full bg-emerald-300" /> Available now
//             </span>
//             <span className="inline-flex items-center rounded-full bg-white/10 border border-white/30 px-3 py-1 text-xs">
//               Early-adopter pricing
//             </span>
//           </div>

//           <div className="space-x-4">
//             {/* Internal links should use <Link/> */}
//             <Link
//               href="/oneui"
//               className="inline-block px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors duration-200 text-lg"
//             >
//               Explore OneUI
//             </Link>

//             {/* NEW: Important Docs */}
//             <Link
//               href="/docs"
//               className="inline-block px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-colors duration-200 text-lg"
//             >
//               Important Docs
//             </Link>

//             <a
//               href="#developers"
//               className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-700 transition-colors duration-200 text-lg"
//             >
//               For Developers
//             </a>
//             <a
//               href="#contact"
//               className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-700 transition-colors duration-200 text-lg"
//             >
//               Contact
//             </a>
//           </div>

//           <div className="mt-4 text-sm text-blue-100/80">
//             Contact us for <span className="font-semibold">80% discount early-adopter pricing</span>.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

