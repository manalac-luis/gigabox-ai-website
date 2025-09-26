export default function Features() {
  const devFeatures = [
    "Quickstart: helm/kustomize on your K8s or Cloud Run",
    "SDKs/APIs: Python & HTTP; MCP-style tool interfaces",
    "Policy engine: pre/post rules, redaction, approvals",
    "Receipts & audit: traceable runs (inputs, evidence, costs)",
    "ChatBlocks UI: markdown / table / chart / job streaming",
    "Multi-LLM router: cost/latency/compliance aware with failover",
  ];

  const appTemplates = [
    { title: "RevOps App Template", desc: "Lead discovery, enrichment, CRM sync, dashboards. Start here and customize." },
    { title: "Data Analytics App Template", desc: "Sheets→SQL ingestion, governed queries, and charts with receipts." },
    { title: "Finance Ops App Template", desc: "QuickBooks→SQL→Metabase sync, cost tracking, reconciliation helpers." },
    { title: "Compliance/Research Template", desc: "Web-first answers with citations, golden-set evals, policy approvals." },
    { title: "Leasing/Field Ops Template", desc: "Deterministic playbooks with explainable decisions and audit." },
    { title: "Education/Health Template", desc: "Task-specific copilots with Decision · Rationale · Citations outputs." },
  ];

  const idpBullets = [
    "GitHub Actions → GHCR → Cloud Run/K8s (Argo CD) with GitOps",
    "Observability: Prometheus/Grafana, structured logs, tracing",
    "Secrets & config via cloud secret manager; per-env promotion",
    "Security: SSO/SAML, least-privilege, egress allowlists, CSP",
    "Reliability: budgets, rate limits, circuit breakers, health checks",
    "Backups/DR and incident runbooks with p95/p99 SLOs",
  ];

  return (
    <>
      {/* For Developers */}
      <section id="developers" className="py-20 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">For Developers</h2>
            <p className="mt-4 text-lg text-gray-600">
              Build internal AI apps in your cloud with your toolchain—skip the AI plumbing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {devFeatures.map((f) => (
              <div key={f} className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-800 text-sm">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Templates (examples) */}
      <section id="templates" className="py-20 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">App Templates (examples)</h2>
            <p className="mt-4 text-lg text-gray-600">
              Use these as starting points—tailor them to your team’s workflow and policies.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {appTemplates.map((t) => (
              <div key={t.title} className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold">{t.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDP (Internal Developer Platform) */}
      <section id="idp" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Internal Developer Platform (IDP)</h2>
            <p className="mt-4 text-lg text-gray-600">
              An example use case is to use OneUI as the basis of an <span className="font-semibold">IDP</span> for
              DevOps, Platform Engineering, and SRE—so your team ships faster without rebuilding AI plumbing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {idpBullets.map((b) => (
              <div key={b} className="bg-white p-6 rounded-lg shadow-sm border">
                <p className="text-gray-800 text-sm">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="/oneui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-blue-600 text-white px-5 py-3 text-sm font-semibold hover:bg-blue-700"
            >
              See how OneUI powers your IDP ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// export default function Features() {
//   const features = [
//     {
//       title: 'Multi-Cloud Deployment',
//       description: 'Deploy seamlessly across AWS, Azure, and GCP with automated infrastructure provisioning powered by Terraform.',
//       icon: '☁️'
//     },
//     {
//       title: 'Kubernetes Orchestration',
//       description: 'Manage containerized applications effortlessly with automated Kubernetes cluster setup and management.',
//       icon: '🚀'
//     },
//     {
//       title: 'SecDevOps Automation',
//       description: 'Implement robust security practices and compliance measures automatically from day one.',
//       icon: '🔒'
//     },
//     {
//       title: 'Cost Optimization',
//       description: 'Maximize efficiency and reduce cloud spending with intelligent resource management and optimization.',
//       icon: '💰'
//     },
//     {
//       title: 'SOC 2 Compliance',
//       description: 'Gather evidence for SOC 2 compliance with automated security controls and documentation.',
//       icon: '✓'
//     }
//   ];

//   return (
//     <section id="features" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-900">Infrastructure Made Simple</h2>
//           <p className="mt-4 text-xl text-gray-600">Say goodbye to infrastructure headaches and hello to accelerated innovation</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <div className="text-4xl mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// } 