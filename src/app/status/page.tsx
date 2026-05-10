import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Platform Status | Gigabox',
  description: 'Current status of all Gigabox platform systems.',
  robots: 'noindex, nofollow',
};

type System = {
  name: string;
  description: string;
  status: 'live' | 'beta' | 'deployed';
  url: string | null;
  details: string[];
};

const systems: System[] = [
  {
    name: 'Pulse',
    description: 'Multi-tenant business operating system. Sales pipeline, contact management, and AI intelligence — agent-first API, magic link auth.',
    status: 'live',
    url: 'https://pulse.gigabox.ai',
    details: [
      'FastAPI + uvicorn (Python 3.12)',
      'Per-instance Postgres DB on Cloud SQL',
      'viv-auth magic link authentication',
      'DeepSeek V4 Flash via Sovereign',
      'Agent-first REST API (Bearer token auth)',
      'nginx reverse proxy + wildcard SSL',
      'systemd per-instance isolation (512MB MemoryMax)',
      'VM: openclaw-prod (shared)',
    ],
  },
  {
    name: 'Sovereign',
    description: 'Self-hosted AI inference platform. GPU-first routing with transparent OpenRouter fallback.',
    status: 'live',
    url: 'https://sovereign.gigabox.ai',
    details: [
      'OpenAI-compatible proxy (FastAPI, port 8400)',
      'RunPod GPU on-demand (2x H200 SXM, not running)',
      'DeepSeek V4 Flash (284B MoE, vLLM)',
      'Transparent fallback to OpenRouter when GPU pod is off',
      'API key auth (sv- prefix) + usage tracking',
      'VM: openclaw-prod (shared)',
    ],
  },
  {
    name: 'Praxis (EHR)',
    description: 'Multi-tenant clinical practice management with AI-native EHR.',
    status: 'beta',
    url: 'https://praxis.gigabox.ai',
    details: [
      'Web + iOS (TestFlight)',
      'FastAPI backend, React frontend, Expo mobile',
      'Clerk auth (open signup)',
      'GKE Autopilot (praxis namespace)',
      'Cloud SQL (praxis DB on axiom-prod-postgres)',
      'Wildcard SSL via cert-manager + Let\'s Encrypt',
    ],
  },
  {
    name: 'OpenClaw Hosted',
    description: 'Managed multi-tenant AI assistant platform. Each customer gets their own subdomain.',
    status: 'live',
    url: 'https://openclaw.gigabox.ai',
    details: [
      'OpenClaw 2026.5.5 runtime (Node.js)',
      'FastAPI management backend (port 8200)',
      'Clerk auth with cross-subdomain session bridge',
      'nginx reverse proxy + auth_request',
      'systemd per-instance isolation',
      'DeepSeek V4 Flash via OpenRouter',
      'VM: openclaw-prod (e2-standard-2)',
    ],
  },
  {
    name: 'Hermes Hosted',
    description: 'Managed autonomous AI agents with persistent memory, skills, and self-improvement.',
    status: 'live',
    url: 'https://hermes.gigabox.ai',
    details: [
      'Hermes Agent v0.12.0 (Python)',
      'FastAPI management backend (port 8300)',
      'Clerk auth (shared with OpenClaw)',
      'nginx reverse proxy + SSE streaming',
      'systemd per-instance isolation',
      'DeepSeek V4 Flash via OpenRouter',
      'VM: openclaw-prod (shared with OpenClaw)',
    ],
  },
  {
    name: 'n8n Hosted',
    description: 'Managed multi-tenant workflow automation. Each customer gets their own subdomain with per-tenant Postgres.',
    status: 'live',
    url: 'https://n8n.gigabox.ai',
    details: [
      'n8n 2.19.5 (Node.js)',
      'Per-instance Postgres DB on Cloud SQL',
      'n8n built-in auth (email + password)',
      'nginx reverse proxy + WebSocket + wildcard SSL',
      'systemd per-instance isolation (512MB MemoryMax)',
      '400+ integrations + webhook triggers',
      'VM: openclaw-prod (shared)',
    ],
  },
  {
    name: 'ComfyUI Hosted',
    description: 'Managed multi-tenant AI image/video generation. Node-based workflows with fal.ai cloud inference.',
    status: 'live',
    url: 'https://comfyui.gigabox.ai',
    details: [
      'ComfyUI (Python 3.12, CPU-only PyTorch)',
      'fal.ai cloud inference (Flux, SDXL, Kling, etc.)',
      'nginx basic_auth (per-instance htpasswd)',
      'nginx reverse proxy + WebSocket + wildcard SSL',
      'systemd per-instance isolation (512MB MemoryMax)',
      'ComfyUI-fal-API custom nodes pre-installed',
      'VM: openclaw-prod (shared)',
    ],
  },
  {
    name: 'OpenMAIC Hosted',
    description: 'Managed multi-tenant interactive AI classrooms. AI-generated lessons with slides, quizzes, whiteboards, and simulations.',
    status: 'live',
    url: 'https://maic.gigabox.ai',
    details: [
      'OpenMAIC (Next.js 16, Node.js 22 standalone)',
      'DeepSeek V4 Flash via Sovereign',
      'Built-in access code auth (per-instance)',
      'nginx reverse proxy + WebSocket + wildcard SSL',
      'systemd per-instance isolation (768MB MemoryMax)',
      'File-based JSON storage (classrooms + jobs)',
      'VM: openclaw-prod (shared)',
    ],
  },
  {
    name: 'OpenClaw Bot',
    description: 'Multi-tenant Telegram bot with SQL conversation history and Clerk identity.',
    status: 'live',
    url: null,
    details: [
      'Telegram bot (python-telegram-bot)',
      'DeepSeek V4 Flash via OpenRouter',
      'Clerk-based unified identity via channel_links',
      'SQL conversation persistence (asyncpg)',
      '$5/day global spend cap',
      'Heartbeat monitoring (5min interval)',
      'VM: openclaw-prod',
    ],
  },
];

const infrastructure = [
  { resource: 'GKE Cluster', value: 'axiom-prod-cluster (Autopilot, us-central1)' },
  { resource: 'Cloud SQL', value: 'axiom-prod-postgres (PG16, db-custom-2-8192)' },
  { resource: 'VM', value: 'openclaw-prod (e2-standard-2, us-central1-a) — Pulse, OC, Hermes, n8n, ComfyUI, OpenMAIC, Sovereign, Bot' },
  { resource: 'K8s Namespaces', value: 'praxis, vye-demo' },
  { resource: 'Artifact Registry', value: 'us-central1-docker.pkg.dev/gigabox-dev/axiom-prod-containers/' },
  { resource: 'DNS', value: 'Cloud DNS zones: pulse, praxis, openclaw, hermes, n8n, comfyui, maic, sovereign' },
  { resource: 'Auth', value: 'Clerk (3 projects: EHR, Praxis, OpenClaw/Hermes) + viv-auth magic link (Pulse) + nginx basic_auth (ComfyUI) + n8n built-in + access code (OpenMAIC)' },
  { resource: 'GPU (RunPod)', value: 'On-demand H200 SXM pods for Sovereign (created as needed)' },
  { resource: 'AI Inference', value: 'DeepSeek V4 Flash — Sovereign (self-hosted) + OpenRouter (fallback) + fal.ai (ComfyUI)' },
];

const liveUrls = [
  { name: 'Pulse', url: 'https://pulse.gigabox.ai' },
  { name: 'Praxis (EHR)', url: 'https://praxis.gigabox.ai' },
  { name: 'OpenClaw Dashboard', url: 'https://openclaw.gigabox.ai' },
  { name: 'Hermes Dashboard', url: 'https://hermes.gigabox.ai' },
  { name: 'n8n Platform', url: 'https://n8n.gigabox.ai/health' },
  { name: 'ComfyUI Platform', url: 'https://comfyui.gigabox.ai/health' },
  { name: 'OpenMAIC Platform', url: 'https://maic.gigabox.ai/health' },
  { name: 'Sovereign API', url: 'https://sovereign.gigabox.ai/health' },
  { name: 'Gigabox Website', url: 'https://www.gigabox.ai' },
];

const statusBadge: Record<System['status'], { label: string; classes: string }> = {
  live: {
    label: 'Live',
    classes: 'bg-green-100 text-green-800 border-green-200',
  },
  beta: {
    label: 'Beta',
    classes: 'bg-blue-100 text-blue-800 border-blue-200',
  },
  deployed: {
    label: 'Deployed',
    classes: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
};

export default function StatusPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-accent uppercase tracking-wider mb-4">
            Platform Status
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What&apos;s running.
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl">
            A summary of every system built and operated by AI at Gigabox.
            This page is not linked from the main site — it exists for internal
            reference and anyone with the URL.
          </p>
        </div>
      </section>

      {/* Systems */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Systems</h2>
          <div className="space-y-6">
            {systems.map((system) => {
              const badge = statusBadge[system.status];
              return (
                <div
                  key={system.name}
                  className="p-6 bg-white border border-foreground/10 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {system.name}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 rounded border ${badge.classes}`}
                    >
                      {badge.label}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/70 mb-4">
                    {system.description}
                  </p>
                  {system.url && (
                    <a
                      href={system.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:text-accent/80 font-mono underline underline-offset-4 block mb-4"
                    >
                      {system.url}
                    </a>
                  )}
                  <ul className="grid gap-1.5 md:grid-cols-2 text-sm text-foreground/60">
                    {system.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="text-accent mt-1 flex-shrink-0">&#8226;</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shared Infrastructure */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Shared Infrastructure
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-foreground/10">
                  <th className="text-left py-3 pr-6 font-semibold text-foreground/60 uppercase tracking-wider text-xs">
                    Resource
                  </th>
                  <th className="text-left py-3 font-semibold text-foreground/60 uppercase tracking-wider text-xs">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {infrastructure.map((row) => (
                  <tr
                    key={row.resource}
                    className="border-b border-foreground/5"
                  >
                    <td className="py-3 pr-6 font-medium text-foreground whitespace-nowrap">
                      {row.resource}
                    </td>
                    <td className="py-3 text-foreground/70">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Live URLs */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Live URLs
          </h2>
          <div className="grid gap-3 md:grid-cols-2 max-w-4xl">
            {liveUrls.map((entry) => (
              <div
                key={entry.url}
                className="flex justify-between items-baseline p-4 bg-white border border-foreground/10 rounded-lg"
              >
                <span className="text-sm font-medium text-foreground">
                  {entry.name}
                </span>
                <a
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent font-mono hover:text-accent/80 underline underline-offset-4"
                >
                  {entry.url.replace('https://', '')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
