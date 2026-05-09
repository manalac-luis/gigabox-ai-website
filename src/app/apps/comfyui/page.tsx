import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'ComfyUI | AI image & video generation on your own subdomain',
  description:
    'Your own ComfyUI instance with fal.ai cloud inference, node-based workflow editor, and zero GPU to manage. Generate images and video from your browser.',
};

const features = [
  {
    title: 'Node-Based Workflow Editor',
    description:
      'Build complex image and video generation pipelines by connecting nodes. Chain models, controlnets, upscalers, and post-processing steps visually.',
  },
  {
    title: 'fal.ai Cloud Inference',
    description:
      'Run Flux, SDXL, Kling, and more through fal.ai API nodes. No local GPU needed — inference runs on cloud hardware and results stream back to your workspace.',
  },
  {
    title: 'No GPU Required',
    description:
      'ComfyUI runs in CPU-only mode on the server. All heavy computation is offloaded to fal.ai, so your instance stays lightweight and responsive.',
  },
  {
    title: 'Persistent Workflows',
    description:
      'Your workflows, outputs, and uploaded inputs are saved to your own data directory. Everything persists across restarts and sessions.',
  },
  {
    title: 'Subdomain Isolation',
    description:
      'Each instance runs on its own subdomain with wildcard SSL, a separate systemd process, and its own data directory. Fully isolated from other tenants.',
  },
  {
    title: 'Real-Time Progress',
    description:
      'WebSocket support streams generation progress, queue status, and previews directly to the editor. Watch your images render in real time.',
  },
];

const stack = [
  { label: 'Runtime', value: 'ComfyUI \u00b7 Python 3.12 \u00b7 PyTorch (CPU)' },
  { label: 'Inference', value: 'fal.ai cloud (Flux, SDXL, Kling, etc.)' },
  { label: 'Auth', value: 'nginx basic_auth (per-instance credentials)' },
  { label: 'Proxy', value: 'nginx \u00b7 wildcard SSL \u00b7 WebSocket' },
  { label: 'Isolation', value: 'systemd \u00b7 512MB MemoryMax \u00b7 per-process' },
  { label: 'Infra', value: 'GCE \u00b7 acme.sh DNS-01 \u00b7 ZeroSSL' },
];

export default function ComfyUILandingPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-accent uppercase tracking-wider">
              Gigabox Apps &middot; ComfyUI
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-green-100 text-green-800 border border-green-200">
              Live
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            AI image generation on your own subdomain.
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mb-8 leading-relaxed">
            Get a managed ComfyUI instance with cloud-powered inference via fal.ai.
            Build node-based workflows for image and video generation — no GPU, no
            Docker, no infrastructure to manage.
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <Link
              href="/apps/comfyui/request"
              className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Request an instance
            </Link>
            <a
              href="mailto:info@gigabox.ai?subject=ComfyUI%20access%20request"
              className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
            >
              Contact us
            </a>
          </div>

          <div className="text-sm text-foreground/50 mb-12">
            <span className="font-mono">comfyui.gigabox.ai</span>
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
            A full ComfyUI instance on your own subdomain — cloud inference, persistent storage, and real-time previews out of the box.
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
            Each instance is a ComfyUI process running in CPU-only mode, fronted by nginx with wildcard SSL. All inference is offloaded to fal.ai cloud.
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
            Why managed ComfyUI
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Running ComfyUI locally means a beefy GPU, Python dependency management,
              model downloads, and port forwarding. Running it in the cloud means Docker,
              GPU instances, and billing complexity. Most people just want to build workflows.
            </p>
            <p>
              With Gigabox ComfyUI, you get a dedicated instance on your own subdomain
              in minutes. Inference runs on fal.ai cloud hardware, so your instance
              needs no GPU at all. We handle the proxy, the SSL, the process management,
              and the custom node installation. You open your browser and start creating.
            </p>
            <p>
              Each instance is fully isolated — its own systemd process with memory
              limits, its own data directory for workflows and outputs, its own
              credentials. The platform was built and deployed by AI, from the
              provisioning scripts to the fleet management CLI.
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
