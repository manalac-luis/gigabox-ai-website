import Link from "next/link";

export const metadata = {
  title: "OneUI — Technical Overview",
  description:
    "OneUI is an AI Development Platform for software developers. Deterministic-first with LLM orchestration, policy, receipts, and audit. Deploy in your K8s or cloud.",
};

export default function OneUIPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Sticky Nav (local anchors) */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="font-semibold">OneUI</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#overview" className="hover:text-black/80">Overview</a>
            <a href="#capabilities" className="hover:text-black/80">Core Capabilities</a>
            <a href="#architecture" className="hover:text-black/80">Architecture</a>
            <a href="#surfaces" className="hover:text-black/80">Product Surfaces</a>
            <a href="#deployment" className="hover:text-black/80">Deployment</a>
            <a href="#security" className="hover:text-black/80">Security & Governance</a>
            <a href="#observability" className="hover:text-black/80">Observability</a>
            <a href="#roadmap" className="hover:text-black/80">Roadmap</a>
            <a href="#faq" className="hover:text-black/80">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/" className="rounded-xl bg-black text-white px-3 py-1.5 text-sm hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
              Back
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-black to-neutral-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1 text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-300" /> Available now
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">OneUI — the AI Development Platform for building enterprise AI apps</h1>
            <p className="mt-4 text-lg text-white/90">
              Deterministic tools and rules do the work; LLMs orchestrate, summarize, and explain. OneUI streams structured outputs (ChatBlocks) with policy, receipts, and audit built in. Deploy in your Kubernetes cluster or cloud.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#overview" className="rounded-2xl bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">Read Overview</a>
              <a href="#architecture" className="rounded-2xl border border-white px-5 py-2.5 text-sm font-semibold hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white/60">See Architecture</a>
              <a href="#contact" className="rounded-2xl border border-white px-5 py-2.5 text-sm font-semibold hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white/60">Start a Pilot</a>
            </div>
            <div className="mt-3 text-sm text-white/90">Particularly suitable for AI apps supporting <span className="font-medium">DevOps</span>, <span className="font-medium">Platform Engineering</span>, and <span className="font-medium">SRE</span> workflows (IDP, golden paths, observability, policy). Early‑adopter pricing available.</div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-semibold">What OneUI is</h2>
          <div className="mt-4 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 text-gray-700 leading-relaxed">
              <p>
                OneUI is an AI operating layer for work: a deterministic‑first platform that unifies chat, tools, agents, and enterprise systems behind a single interface. Typed tools, rules/DSL, and SQL routes handle critical tasks; LLMs plan and explain. The UI streams real‑time <span className="font-medium">ChatBlocks</span> (markdown/table/chart/job/form) and delivers web‑first answers with citations.
              </p>
              <p className="mt-4">
                By combining explainable workflows, governance (policies, approvals, audit), and multi‑tenant isolation, OneUI lets internal developers ship reliable AI apps quickly—without rebuilding the AI plumbing.
              </p>
            </div>
            <div className="lg:col-span-1 rounded-2xl border p-5 bg-gray-50">
              <div className="text-sm font-medium">Highlights</div>
              <ul className="mt-3 text-sm list-disc pl-5 text-gray-700 space-y-1">
                <li>Deterministic‑first, LLM‑orchestrated</li>
                <li>Web‑first answers with citations</li>
                <li>Policy engine + receipts per run</li>
                <li>Multi‑LLM routing (A/B, failover)</li>
                <li>Durable memory (Postgres + Kafka)</li>
                <li>Deploy in your K8s or cloud</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="capabilities" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-semibold">Core Capabilities</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { h: "Deterministic Core", p: "Typed tools, rules/DSL, and SQL routes; real‑time NDJSON streaming into ChatBlocks." },
              { h: "Multi‑LLM Router + Policy", p: "Route across providers (A/B, failover); pre/tool/post policy hooks (redaction, approvals, budgets)." },
              { h: "Durable Memory & Audit", p: "Postgres + object storage; Kafka topics; MemoryCards; receipts with stable trace_id." },
              { h: "Agents & MCP", p: "Deep Research agent with eval harness; MCP Host/Client to connect and control external tool servers." },
              { h: "Integrations & Data", p: "Google/Microsoft; Sheets→SQL; HubSpot/Proxycurl; QuickBooks→Cloud SQL→Metabase; n8n automations." },
              { h: "Tenancy & Governance", p: "Namespaced isolation; policy‑gated tools; SSO/SAML; PII tagging; egress allowlists; budgets/quotas." },
              { h: "Observability & Cost", p: "Langfuse traces, Prometheus/Grafana metrics, Elastic logs; per‑tenant budgets and usage reports." },
            ].map((x) => (
              <div key={x.h} className="rounded-2xl border bg-white p-6">
                <div className="font-medium">{x.h}</div>
                <div className="mt-2 text-sm text-gray-700">{x.p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-semibold">High‑Level Architecture</h2>
          <p className="mt-2 text-sm text-gray-600">Frontend streams NDJSON into ChatBlocks; FastAPI backend handles routes, policy, multi‑LLM routing, deterministic tools, and the MCP gateway; memory & retrieval backed by Postgres/pgvector + object storage and hybrid BM25+vector; Kafka topics for memory/jobs; workers for async tasks.</p>
          <pre className="mt-6 rounded-2xl bg-gray-900 text-gray-100 p-4 overflow-x-auto text-xs leading-relaxed">
{`+-------------------+      +----------------------+      +--------------------+
|  Frontend (Next)  |<---->|  FastAPI Backend     |<---->|  LLM Providers     |
|  ChatBlocks/Agents|      |  Policy / Router     |      |  (OpenAI/Anth/Gem) |
+---------+---------+      |  Deterministic Tools  |      +---------+----------+
          |                |  MCP Gateway         |                |
          v                +----------+-----------+                |
   Streaming (NDJSON)                 |                            |
                                      v                            v
                              +---------------+            +-------------+
                              | Memory & RAG  |<---------->|  Web & APIs |
                              | Postgres+Obj  |            +-------------+
                              | pgvector/BM25 |
                              +-------+-------+
                                      |
                                      v
                              +---------------+
                              | Kafka Topics  |
                              | memory/jobs   |
                              +-------+-------+
                                      |
                                      v
                              +---------------+
                              | Workers/Jobs  |
                              +---------------+`}
          </pre>
        </div>
      </section>

      {/* Product Surfaces */}
      <section id="surfaces" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-semibold">Current Product Surfaces</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { h: "Chat & Streaming", p: "Conversational UI returns markdown/table/chart/job/form ChatBlocks in real time with citations." },
              { h: "Agents", p: "Deep Research (multi‑step, tool calling, eval metrics); MCP Host/Client to register and call external servers." },
              { h: "Apps", p: "Gmail/Drive (New from Prompt), Sheets/SQL/BigQuery, HubSpot/Proxycurl, QuickBooks→Metabase." },
              { h: "IDP: GitHub Control Room", p: "Browse repos/refs/files today; PR assist mock; private flows via PAT/OAuth roadmap." },
              { h: "IDP: SRE Operations Cockpit", p: "Dashboards for logs/metrics/traces/errors/SLOs/usage (cloud adapters WIP)." },
              { h: "IDP: Runway Blueprints", p: "/api/runway/gemini/generate returns strict JSON IaC bundles; validation and Open‑PR on roadmap." },
            ].map((x) => (
              <div key={x.h} className="rounded-2xl border bg-white p-6">
                <div className="font-medium">{x.h}</div>
                <div className="mt-2 text-sm text-gray-700">{x.p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section id="deployment">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-semibold">Deployment Options</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <div className="font-medium">Cloud Run baseline</div>
              <p className="mt-2 text-sm text-gray-700">App + workers on Cloud Run; Cloud SQL; object storage; Secret Manager/KMS; Prometheus/Grafana.</p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="font-medium">Kubernetes path</div>
              <p className="mt-2 text-sm text-gray-700">GitOps via GitHub Actions → GHCR → Argo CD; per‑tenant namespaces; autoscaling workers; blue/green rollouts.</p>
            </div>
          </div>
          <div className="mt-6 text-sm text-gray-600">Tenant provisioning creates DB schema + storage prefix (and K8s namespace if applicable), then applies budgets, policy profile, and API keys. Secrets are stored via cloud Secret Manager/KMS.</div>
        </div>
      </section>

      {/* Security & Governance */}
      <section id="security" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-semibold">Security & Governance</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Namespaced multi‑tenant isolation (DB schemas, storage prefixes, optional K8s namespaces)",
              "Policy gates with approvals; egress allowlists; role‑based access",
              "SSO/SAML and OAuth2 patterns; PII tagging and redaction",
              "Budgets and quotas per tenant; rate limits; audit logs",
              "Receipts per run with trace_id; end‑to‑end lineage",
              "Encrypted at rest and in transit; least‑privilege credentials",
            ].map((f) => (
              <div key={f} className="rounded-2xl border bg-white p-6">
                <p className="text-sm text-gray-700">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Observability */}
      <section id="observability">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-semibold">Observability & Cost Controls</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Langfuse traces (prompts/tools/MCP spans) with cost accounting",
              "Prometheus/Grafana metrics; Elastic structured logs",
              "KPIs: TTFC 2s; p95 latency 12s (research); deterministic routes p95 ≤ 800ms",
              "Usage dashboards; per‑tenant budgets and model reports",
            ].map((f) => (
              <div key={f} className="rounded-2xl border bg-white p-6">
                <p className="text-sm text-gray-700">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-semibold">Near‑Term Roadmap</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6">
              <div className="font-medium">Next 30 days</div>
              <ul className="mt-2 text-sm list-disc pl-5 text-gray-700 space-y-1">
                <li>MCP SSE streaming; server registry/tags; per‑server auth vault; policy gates; Langfuse spans per call</li>
                <li>Eval golden sets; rubric scoring; red‑team checks; exportable reports</li>
                <li>Runway: validate‑bundle API; Open‑PR; starter marketplace</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <div className="font-medium">Next 60 days</div>
              <ul className="mt-2 text-sm list-disc pl-5 text-gray-700 space-y-1">
                <li>SRE adapters for CloudWatch/Cloud Logging and OpenTelemetry; runbooks; ChatOps actions with approvals</li>
                <li>Private GitHub flows; Issues/PR triage agent</li>
                <li>Cross‑agent memory and budget guardrails</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <div className="font-medium">Next 90 days</div>
              <ul className="mt-2 text-sm list-disc pl-5 text-gray-700 space-y-1">
                <li>Drift detection/auto‑remediation; meta‑agent reasoning</li>
                <li>Developer VMs orchestration; Unity/Blender MCP servers prod</li>
                <li>Customer onboarding: namespace provisioning, budgets, policy profiles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-6 grid gap-6">
            <div className="rounded-2xl border p-6">
              <div className="font-medium">How is OneUI different from a generic “chatbot”?</div>
              <p className="mt-2 text-sm text-gray-700">Deterministic tools and rules do the work; LLMs orchestrate and format. Every run has a receipt and trace_id. Web‑first answers ship with citations; RAG is a controlled fallback.</p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="font-medium">Can we deploy in our own cloud and keep data isolated?</div>
              <p className="mt-2 text-sm text-gray-700">Yes. Baseline on Cloud Run + Cloud SQL, or deploy to your Kubernetes cluster via GitOps. Tenants are namespaced end‑to‑end (DB, storage, optional K8s namespaces) with budgets and policy gates.</p>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="font-medium">What developer interfaces are available?</div>
              <p className="mt-2 text-sm text-gray-700">HTTP/JSON APIs, typed tools, and MCP interfaces. Streaming NDJSON returns ChatBlocks you can render directly in your UI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-gray-900 text-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid gap-6 md:grid-cols-3 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold">Start a pilot or request access</h2>
              <p className="mt-2 text-sm text-gray-300">We’ll help your team wire policy, receipts, and observability from day one. Early‑adopter pricing (up to 80% off) available.</p>
            </div>
            <div className="flex md:justify-end gap-3">
              {/* Optional CTA buttons can go here */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// import Link from "next/link";

// export const metadata = {
//    title: "OneUI — Technical Overview",
//    description:
//       "OneUI is an AI Development Platform for software developers. Deterministic-first with LLM orchestration, policy, receipts, and audit. Deploy in your K8s or cloud.",
// };

// export default function OneUIPage() {
//    return (
//       <main className="min-h-screen bg-white text-gray-900">
//          {/* Sticky Nav (local anchors) */}
//          <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
//                <div className="font-semibold">OneUI</div>
//                <nav className="hidden md:flex items-center gap-6 text-sm">
//                   <a href="#overview" className="hover:text-black/80">Overview</a>
//                   <a href="#capabilities" className="hover:text-black/80">Core Capabilities</a>
//                   <a href="#architecture" className="hover:text-black/80">Architecture</a>
//                   <a href="#surfaces" className="hover:text-black/80">Product Surfaces</a>
//                   <a href="#deployment" className="hover:text-black/80">Deployment</a>
//                   <a href="#security" className="hover:text-black/80">Security & Governance</a>
//                   <a href="#observability" className="hover:text-black/80">Observability</a>
//                   <a href="#roadmap" className="hover:text-black/80">Roadmap</a>
//                   <a href="#faq" className="hover:text-black/80">FAQ</a>
//                </nav>
//                <div className="flex items-center gap-2">

//                   <Link href="/" className="rounded-xl bg-black text-white px-3 py-1.5 text-sm hover:shadow-lg">Back</Link>
//                </div>
//             </div>
//          </header>

//          {/* Hero */}
//          <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
//                <div className="max-w-3xl">
//                   <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1 text-xs">
//                      <span className="h-2 w-2 rounded-full bg-emerald-300" /> Available now
//                   </div>
//                   <h1 className="text-4xl md:text-5xl font-semibold leading-tight">OneUI — the AI Development Platform for building enterprise AI apps</h1>
//                   <p className="mt-4 text-lg text-blue-100">
//                      Deterministic tools and rules do the work; LLMs orchestrate, summarize, and explain. OneUI streams structured outputs (ChatBlocks) with policy, receipts, and audit built in. Deploy in your Kubernetes cluster or cloud.
//                   </p>
//                   <div className="mt-6 flex flex-wrap gap-3">
//                      <a href="#overview" className="rounded-2xl bg-white text-blue-700 px-5 py-2.5 text-sm font-semibold">Read Overview</a>
//                      <a href="#architecture" className="rounded-2xl border border-white px-5 py-2.5 text-sm font-semibold">See Architecture</a>
//                      <a href="#contact" className="rounded-2xl border border-white px-5 py-2.5 text-sm font-semibold">Start a Pilot</a>
//                   </div>
//                   <div className="mt-3 text-sm text-blue-100/90">Particularly suitable for AI apps supporting <span className="font-medium">DevOps</span>, <span className="font-medium">Platform Engineering</span>, and <span className="font-medium">SRE</span> workflows (IDP, golden paths, observability, policy). Early‑adopter pricing available.</div>
//                </div>
//             </div>
//          </section>

//          {/* Overview */}
//          <section id="overview">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
//                <h2 className="text-2xl font-semibold">What OneUI is</h2>
//                <div className="mt-4 grid gap-6 lg:grid-cols-3">
//                   <div className="lg:col-span-2 text-gray-700 leading-relaxed">
//                      <p>
//                         OneUI is an AI operating layer for work: a deterministic‑first platform that unifies chat, tools, agents, and enterprise systems behind a single interface. Typed tools, rules/DSL, and SQL routes handle critical tasks; LLMs plan and explain. The UI streams real‑time <span className="font-medium">ChatBlocks</span> (markdown/table/chart/job/form) and delivers web‑first answers with citations.
//                      </p>
//                      <p className="mt-4">
//                         By combining explainable workflows, governance (policies, approvals, audit), and multi‑tenant isolation, OneUI lets internal developers ship reliable AI apps quickly—without rebuilding the AI plumbing.
//                      </p>
//                   </div>
//                   <div className="lg:col-span-1 rounded-2xl border p-5 bg-gray-50">
//                      <div className="text-sm font-medium">Highlights</div>
//                      <ul className="mt-3 text-sm list-disc pl-5 text-gray-700 space-y-1">
//                         <li>Deterministic‑first, LLM‑orchestrated</li>
//                         <li>Web‑first answers with citations</li>
//                         <li>Policy engine + receipts per run</li>
//                         <li>Multi‑LLM routing (A/B, failover)</li>
//                         <li>Durable memory (Postgres + Kafka)</li>
//                         <li>Deploy in your K8s or cloud</li>
//                      </ul>
//                   </div>
//                </div>
//             </div>
//          </section>

//          {/* Core Capabilities */}
//          <section id="capabilities" className="bg-gray-50">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
//                <h2 className="text-2xl font-semibold">Core Capabilities</h2>
//                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                   {[
//                      { h: "Deterministic Core", p: "Typed tools, rules/DSL, and SQL routes; real‑time NDJSON streaming into ChatBlocks." },
//                      { h: "Multi‑LLM Router + Policy", p: "Route across providers (A/B, failover); pre/tool/post policy hooks (redaction, approvals, budgets)." },
//                      { h: "Durable Memory & Audit", p: "Postgres + object storage; Kafka topics; MemoryCards; receipts with stable trace_id." },
//                      { h: "Agents & MCP", p: "Deep Research agent with eval harness; MCP Host/Client to connect and control external tool servers." },
//                      { h: "Integrations & Data", p: "Google/Microsoft; Sheets→SQL; HubSpot/Proxycurl; QuickBooks→Cloud SQL→Metabase; n8n automations." },
//                      { h: "Tenancy & Governance", p: "Namespaced isolation; policy‑gated tools; SSO/SAML; PII tagging; egress allowlists; budgets/quotas." },
//                      { h: "Observability & Cost", p: "Langfuse traces, Prometheus/Grafana metrics, Elastic logs; per‑tenant budgets and usage reports." },
//                   ].map((x) => (
//                      <div key={x.h} className="rounded-2xl border bg-white p-6">
//                         <div className="font-medium">{x.h}</div>
//                         <div className="mt-2 text-sm text-gray-700">{x.p}</div>
//                      </div>
//                   ))}
//                </div>
//             </div>
//          </section>

//          {/* Architecture */}
//          <section id="architecture">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
//                <h2 className="text-2xl font-semibold">High‑Level Architecture</h2>
//                <p className="mt-2 text-sm text-gray-600">Frontend streams NDJSON into ChatBlocks; FastAPI backend handles routes, policy, multi‑LLM routing, deterministic tools, and the MCP gateway; memory & retrieval backed by Postgres/pgvector + object storage and hybrid BM25+vector; Kafka topics for memory/jobs; workers for async tasks.</p>
//                <pre className="mt-6 rounded-2xl bg-gray-900 text-gray-100 p-4 overflow-x-auto text-xs leading-relaxed">
//                   {`+-------------------+      +----------------------+      +--------------------+
// |  Frontend (Next)  |<---->|  FastAPI Backend     |<---->|  LLM Providers     |
// |  ChatBlocks/Agents|      |  Policy / Router     |      |  (OpenAI/Anth/Gem) |
// +---------+---------+      |  Deterministic Tools  |      +---------+----------+
//           |                |  MCP Gateway         |                |
//           v                +----------+-----------+                |
//    Streaming (NDJSON)                 |                            |
//                                       v                            v
//                               +---------------+            +-------------+
//                               | Memory & RAG  |<---------->|  Web & APIs |
//                               | Postgres+Obj  |            +-------------+
//                               | pgvector/BM25 |
//                               +-------+-------+
//                                       |
//                                       v
//                               +---------------+
//                               | Kafka Topics  |
//                               | memory/jobs   |
//                               +-------+-------+
//                                       |
//                                       v
//                               +---------------+
//                               | Workers/Jobs  |
//                               +---------------+`}
//                </pre>
//             </div>
//          </section>

//          {/* Product Surfaces */}
//          <section id="surfaces" className="bg-gray-50">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
//                <h2 className="text-2xl font-semibold">Current Product Surfaces</h2>
//                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                   {[
//                      { h: "Chat & Streaming", p: "Conversational UI returns markdown/table/chart/job/form ChatBlocks in real time with citations." },
//                      { h: "Agents", p: "Deep Research (multi‑step, tool calling, eval metrics); MCP Host/Client to register and call external servers." },
//                      { h: "Apps", p: "Gmail/Drive (New from Prompt), Sheets/SQL/BigQuery, HubSpot/Proxycurl, QuickBooks→Metabase." },
//                      { h: "IDP: GitHub Control Room", p: "Browse repos/refs/files today; PR assist mock; private flows via PAT/OAuth roadmap." },
//                      { h: "IDP: SRE Operations Cockpit", p: "Dashboards for logs/metrics/traces/errors/SLOs/usage (cloud adapters WIP)." },
//                      { h: "IDP: Runway Blueprints", p: "/api/runway/gemini/generate returns strict JSON IaC bundles; validation and Open‑PR on roadmap." },
//                   ].map((x) => (
//                      <div key={x.h} className="rounded-2xl border bg-white p-6">
//                         <div className="font-medium">{x.h}</div>
//                         <div className="mt-2 text-sm text-gray-700">{x.p}</div>
//                      </div>
//                   ))}
//                </div>
//             </div>
//          </section>

//          {/* Deployment */}
//          <section id="deployment">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
//                <h2 className="text-2xl font-semibold">Deployment Options</h2>
//                <div className="mt-4 grid gap-6 md:grid-cols-2">
//                   <div className="rounded-2xl border p-6">
//                      <div className="font-medium">Cloud Run baseline</div>
//                      <p className="mt-2 text-sm text-gray-700">App + workers on Cloud Run; Cloud SQL; object storage; Secret Manager/KMS; Prometheus/Grafana.</p>
//                   </div>
//                   <div className="rounded-2xl border p-6">
//                      <div className="font-medium">Kubernetes path</div>
//                      <p className="mt-2 text-sm text-gray-700">GitOps via GitHub Actions → GHCR → Argo CD; per‑tenant namespaces; autoscaling workers; blue/green rollouts.</p>
//                   </div>
//                </div>
//                <div className="mt-6 text-sm text-gray-600">Tenant provisioning creates DB schema + storage prefix (and K8s namespace if applicable), then applies budgets, policy profile, and API keys. Secrets are stored via cloud Secret Manager/KMS.</div>
//             </div>
//          </section>

//          {/* Security & Governance */}
//          <section id="security" className="bg-gray-50">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
//                <h2 className="text-2xl font-semibold">Security & Governance</h2>
//                <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                   {[
//                      "Namespaced multi‑tenant isolation (DB schemas, storage prefixes, optional K8s namespaces)",
//                      "Policy gates with approvals; egress allowlists; role‑based access",
//                      "SSO/SAML and OAuth2 patterns; PII tagging and redaction",
//                      "Budgets and quotas per tenant; rate limits; audit logs",
//                      "Receipts per run with trace_id; end‑to‑end lineage",
//                      "Encrypted at rest and in transit; least‑privilege credentials",
//                   ].map((f) => (
//                      <div key={f} className="rounded-2xl border bg-white p-6">
//                         <p className="text-sm text-gray-700">{f}</p>
//                      </div>
//                   ))}
//                </div>
//             </div>
//          </section>

//          {/* Observability */}
//          <section id="observability">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
//                <h2 className="text-2xl font-semibold">Observability & Cost Controls</h2>
//                <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                   {[
//                      "Langfuse traces (prompts/tools/MCP spans) with cost accounting",
//                      "Prometheus/Grafana metrics; Elastic structured logs",
//                      "KPIs: TTFC 2s; p95 latency 12s (research); deterministic routes p95 ≤ 800ms",
//                      "Usage dashboards; per‑tenant budgets and model reports",
//                   ].map((f) => (
//                      <div key={f} className="rounded-2xl border bg-white p-6">
//                         <p className="text-sm text-gray-700">{f}</p>
//                      </div>
//                   ))}
//                </div>
//             </div>
//          </section>

//          {/* Roadmap */}
//          <section id="roadmap" className="bg-gray-50">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
//                <h2 className="text-2xl font-semibold">Near‑Term Roadmap</h2>
//                <div className="mt-6 grid gap-6 lg:grid-cols-3">
//                   <div className="rounded-2xl border bg-white p-6">
//                      <div className="font-medium">Next 30 days</div>
//                      <ul className="mt-2 text-sm list-disc pl-5 text-gray-700 space-y-1">
//                         <li>MCP SSE streaming; server registry/tags; per‑server auth vault; policy gates; Langfuse spans per call</li>
//                         <li>Eval golden sets; rubric scoring; red‑team checks; exportable reports</li>
//                         <li>Runway: validate‑bundle API; Open‑PR; starter marketplace</li>
//                      </ul>
//                   </div>
//                   <div className="rounded-2xl border bg-white p-6">
//                      <div className="font-medium">Next 60 days</div>
//                      <ul className="mt-2 text-sm list-disc pl-5 text-gray-700 space-y-1">
//                         <li>SRE adapters for CloudWatch/Cloud Logging and OpenTelemetry; runbooks; ChatOps actions with approvals</li>
//                         <li>Private GitHub flows; Issues/PR triage agent</li>
//                         <li>Cross‑agent memory and budget guardrails</li>
//                      </ul>
//                   </div>
//                   <div className="rounded-2xl border bg-white p-6">
//                      <div className="font-medium">Next 90 days</div>
//                      <ul className="mt-2 text-sm list-disc pl-5 text-gray-700 space-y-1">
//                         <li>Drift detection/auto‑remediation; meta‑agent reasoning</li>
//                         <li>Developer VMs orchestration; Unity/Blender MCP servers prod</li>
//                         <li>Customer onboarding: namespace provisioning, budgets, policy profiles</li>
//                      </ul>
//                   </div>
//                </div>
//             </div>
//          </section>

//          {/* FAQ */}
//          <section id="faq">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
//                <h2 className="text-2xl font-semibold">FAQ</h2>
//                <div className="mt-6 grid gap-6">
//                   <div className="rounded-2xl border p-6">
//                      <div className="font-medium">How is OneUI different from a generic “chatbot”?</div>
//                      <p className="mt-2 text-sm text-gray-700">Deterministic tools and rules do the work; LLMs orchestrate and format. Every run has a receipt and trace_id. Web‑first answers ship with citations; RAG is a controlled fallback.</p>
//                   </div>
//                   <div className="rounded-2xl border p-6">
//                      <div className="font-medium">Can we deploy in our own cloud and keep data isolated?</div>
//                      <p className="mt-2 text-sm text-gray-700">Yes. Baseline on Cloud Run + Cloud SQL, or deploy to your Kubernetes cluster via GitOps. Tenants are namespaced end‑to‑end (DB, storage, optional K8s namespaces) with budgets and policy gates.</p>
//                   </div>
//                   <div className="rounded-2xl border p-6">
//                      <div className="font-medium">What developer interfaces are available?</div>
//                      <p className="mt-2 text-sm text-gray-700">HTTP/JSON APIs, typed tools, and MCP interfaces. Streaming NDJSON returns ChatBlocks you can render directly in your UI.</p>
//                   </div>
//                </div>
//             </div>
//          </section>

//          {/* Contact CTA */}
//          <section id="contact" className="bg-gray-900 text-gray-100">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
//                <div className="grid gap-6 md:grid-cols-3 items-center">
//                   <div className="md:col-span-2">
//                      <h2 className="text-2xl font-semibold">Start a pilot or request access</h2>
//                      <p className="mt-2 text-sm text-gray-300">We’ll help your team wire policy, receipts, and observability from day one. Early‑adopter pricing (up to 80% off) available.</p>
//                   </div>
//                   <div className="flex md:justify-end gap-3">

                     
//                   </div>
//                </div>
//             </div>
//          </section>
//       </main>
//    );
// }
