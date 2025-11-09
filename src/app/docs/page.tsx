import Link from "next/link";

export const metadata = {
  title: "Important OneUI Docs — Downloads",
  description:
    "Executive Summary, Technical Summary, Design Document, and License for OneUI.",
};

type Doc = {
  title: string;
  filename: string; // path under /public
  desc: string;
};

const docs: Doc[] = [
  {
    title: "OneUI — Comprehensive Executive Summary (2025/09/26)",
    filename: "/OneUI__Comprehensive_Executive_Summary_(20250926).pdf",
    desc: "What OneUI is, why it matters, core capabilities, live vs. mock, KPIs, and 30/60/90 roadmap.",
  },
  {
    title: "OneUI — Technical Summary (Beta, 2025/09/27)",
    filename: "/OneUI__Technical_Summary_(20250927).pdf",
    desc: "Developer-first overview: deterministic core + LLM orchestration, router/policy, memory, agents/MCP, deployment, and KPIs.",
  },
  {
    title: "OneUI — Comprehensive Design Document (2025/09/26)",
    filename: "/OneUI__Comprehensive_Design_Document_(20250926).pdf",
    desc: "Deep dive into architecture, components, data model, APIs, router/policy engine, MCP, deployment, observability, and roadmap.",
  },
  {
    title: "OneUI Permissive Commercial Source License (PCSL) v1.0 — Draft",
    filename:
      "/OneUI_Permissive_Commercial_Source_License_(PCSL)_v1.0%20(Draft).pdf",
    desc: "Perpetual, permissive commercial source license: use/modify/derive & ship SaaS/compiled apps; no open-sourcing or re-selling source.",
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-r from-black to-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Important OneUI Docs
          </h1>
          <p className="mt-3 text-white/90 max-w-3xl">
            Download the latest OneUI documents: Executive Summary, Technical Summary,
            Design Document, and License.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/oneui"
              className="rounded-2xl bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              OneUI Overview
            </Link>
            <Link
              href="/#contact"
              className="rounded-2xl border border-white px-5 py-2.5 text-sm font-semibold hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              Contact
            </Link>
            <Link
              href="/"
              className="rounded-2xl border border-white px-5 py-2.5 text-sm font-semibold hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {docs.map((d) => (
              <article
                key={d.title}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold">{d.title}</h2>
                <p className="mt-2 text-sm text-gray-700">{d.desc}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={d.filename}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-black text-white px-4 py-2 text-sm font-medium hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  >
                    View PDF
                  </a>
                  <a
                    href={d.filename}
                    download
                    className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
                  >
                    Download
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// import Link from "next/link";

// export const metadata = {
//   title: "Important OneUI Docs — Downloads",
//   description:
//     "Executive Summary, Technical Summary, Design Document, and License for OneUI.",
// };

// type Doc = {
//   title: string;
//   filename: string; // path under /public
//   desc: string;
// };

// const docs: Doc[] = [
//   {
//     title: "OneUI — Comprehensive Executive Summary (2025/09/26)",
//     filename: "/OneUI__Comprehensive_Executive_Summary_(20250926).pdf",
//     desc: "What OneUI is, why it matters, core capabilities, live vs. mock, KPIs, and 30/60/90 roadmap."
//   },
//   {
//     title: "OneUI — Technical Summary (Beta, 2025/09/27)",
//     filename: "/OneUI__Technical_Summary_(20250927).pdf",
//     desc: "Developer-first overview: deterministic core + LLM orchestration, router/policy, memory, agents/MCP, deployment, and KPIs."
//   },
//   {
//     title: "OneUI — Comprehensive Design Document (2025/09/26)",
//     filename: "/OneUI__Comprehensive_Design_Document_(20250926).pdf",
//     desc: "Deep dive into architecture, components, data model, APIs, router/policy engine, MCP, deployment, observability, and roadmap."
//   },
//   {
//     title: "OneUI Permissive Commercial Source License (PCSL) v1.0 — Draft",
//     filename: "/OneUI_Permissive_Commercial_Source_License_(PCSL)_v1.0%20(Draft).pdf",
//     desc: "Perpetual, permissive commercial source license: use/modify/derive & ship SaaS/compiled apps; no open-sourcing or re-selling source."
//   },
// ];

// export default function DocsPage() {
//   return (
//     <main className="min-h-screen bg-white text-gray-900">
//       <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
//           <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Important OneUI Docs</h1>
//           <p className="mt-3 text-blue-100 max-w-3xl">
//             Download the latest OneUI documents: Executive Summary, Technical Summary, Design Document, and License.
//           </p>
//           <div className="mt-6 flex flex-wrap gap-3">
//             <Link href="/oneui" className="rounded-2xl bg-white text-blue-700 px-5 py-2.5 text-sm font-semibold">
//               OneUI Overview
//             </Link>
//             <Link href="/#contact" className="rounded-2xl border border-white px-5 py-2.5 text-sm font-semibold">
//               Contact
//             </Link>
//             {/* NEW: Back to Home */}
//             <Link href="/" className="rounded-2xl border border-white px-5 py-2.5 text-sm font-semibold">
//               Back to Home
//             </Link>
//           </div>
//         </div>
//       </section>

//       <section className="py-14">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
//             {docs.map((d) => (
//               <article key={d.title} className="rounded-2xl border bg-white p-6 shadow-sm">
//                 <h2 className="text-lg font-semibold">{d.title}</h2>
//                 <p className="mt-2 text-sm text-gray-700">{d.desc}</p>
//                 <div className="mt-4 flex flex-wrap gap-3">
//                   <a
//                     href={d.filename}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center rounded-lg bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700"
//                   >
//                     View PDF
//                   </a>
//                   <a
//                     href={d.filename}
//                     download
//                     className="inline-flex items-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
//                   >
//                     Download
//                   </a>
//                 </div>
//               </article>
//             ))}
//           </div>

          
//         </div>
//       </section>
//     </main>
//   );
// }

