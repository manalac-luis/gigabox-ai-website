import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Sovereign | Self-hosted AI inference with transparent fallback',
  description:
    'Sovereign runs DeepSeek V4 Flash on your own GPUs with an OpenAI-compatible API. When GPUs are offline, requests fall back to OpenRouter transparently. Zero code changes for your apps.',
};

const features = [
  {
    title: 'GPU-First Routing',
    description:
      'Requests hit your self-hosted vLLM instance first. If the GPU pod is down or unreachable, the proxy falls back to OpenRouter automatically. Your apps see one endpoint.',
  },
  {
    title: 'OpenAI-Compatible API',
    description:
      'Drop-in replacement for OpenAI and OpenRouter. Apps swap one env var (base_url) and keep the same SDK calls, streaming, and tool use.',
  },
  {
    title: 'API Key Management',
    description:
      'Create scoped API keys with sv- prefix. Each key tracks usage independently — requests, tokens, cost, and fallback percentage.',
  },
  {
    title: 'Usage Tracking',
    description:
      'Every request is metered by source (GPU vs fallback), model, prompt tokens, and completion tokens. Usage is aggregated hourly and queryable via the management API.',
  },
  {
    title: 'Transparent Fallback',
    description:
      'When GPU pods are stopped or crash, the proxy routes to OpenRouter with the correct model mapping. Apps never see an error — just a different billing source.',
  },
  {
    title: 'Pod Lifecycle Control',
    description:
      'Start and stop RunPod GPU instances on demand. Volumes persist across stops so the model cache survives — restarts load from disk, not from HuggingFace.',
  },
];

const stack = [
  { label: 'Proxy', value: 'FastAPI + httpx (SSE streaming)' },
  { label: 'GPU', value: '2x NVIDIA H200 SXM on RunPod' },
  { label: 'Model', value: 'DeepSeek V4 Flash (284B MoE, FP4+FP8)' },
  { label: 'Serving', value: 'vLLM 0.20 (tensor parallel, enforce-eager)' },
  { label: 'Fallback', value: 'OpenRouter (same model, cloud pricing)' },
  { label: 'Infra', value: 'GCE + nginx + systemd + acme.sh SSL' },
];

export default function SovereignLandingPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-accent uppercase tracking-wider">
              Gigabox Apps &middot; Sovereign
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-green-100 text-green-800 border border-green-200">
              Live
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your own GPUs, one API endpoint.
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mb-8 leading-relaxed">
            Sovereign runs DeepSeek V4 Flash on self-hosted H200 GPUs and
            exposes an OpenAI-compatible API. When GPUs are offline, requests
            fall back to OpenRouter transparently. Apps swap one env var
            and never think about routing again.
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <a
              href="https://sovereign.gigabox.ai/health"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                />
              </svg>
              Check Health
            </a>
            <a
              href="mailto:info@gigabox.ai?subject=Sovereign%20API%20key%20request"
              className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
            >
              Request an API key
            </a>
          </div>

          <div className="text-sm text-foreground/50 mb-12">
            <span className="font-mono">sovereign.gigabox.ai/v1/chat/completions</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What you get
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            An OpenAI-compatible inference endpoint backed by your own GPUs, with automatic cloud fallback and full usage visibility.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-white border border-foreground/10 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it&apos;s built
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            A FastAPI proxy on the VM routes to vLLM on RunPod GPUs, with OpenRouter as the fallback layer.
          </p>

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            {stack.map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-baseline p-4 bg-white border border-foreground/10 rounded-lg"
              >
                <span className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-sm text-foreground/80 text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why we built it
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Every Gigabox app — EHR, OpenClaw, Hermes — routes LLM calls
              through OpenRouter. That works, but it means our entire
              intelligence layer depends on a single vendor. We wanted to
              own the inference path without forcing every app to handle
              failover logic.
            </p>
            <p>
              Sovereign is a proxy that sits between our apps and the
              models. It tries self-hosted GPUs first (RunPod H200 pods
              running vLLM with DeepSeek V4 Flash) and falls back to
              OpenRouter when GPUs are offline. Apps change one env var
              and get GPU-grade inference when available, cloud pricing
              when not.
            </p>
            <p>
              The entire platform — proxy, pod management, API key system,
              usage tracking, and deployment — was built and deployed by
              AI in a single session. DeepSeek V4 Flash serves at ~10 tokens
              per second per request on 2x H200 GPUs, scaling to ~36 tokens
              per second aggregate under concurrent load.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="mailto:info@gigabox.ai"
              className="text-accent hover:text-accent/80 underline underline-offset-4"
            >
              info@gigabox.ai
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
