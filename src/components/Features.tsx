import Link from 'next/link'
import Image from 'next/image'

export default function Features() {
  return (
    <section 
      id="features"
      className="relative scroll-mt-24 bg-black text-white overflow-hidden"
    >
      {/* subtle right-side vignette */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden md:block w-1/2">
        <div className="h-full bg-gradient-to-l from-neutral-800/70 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <header className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            gigabox.ai’s{' '}
            <Link href="/launchops" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
              LaunchOps
            </Link>
          </h2>
          <p className="mt-4 text-white/80 italic">
            Our proprietary toolkit built to accelerate the development of AI applications. We
            empower high-potential teams to move faster, build smarter, and ship sooner.
          </p>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Left column (copy) */}
          <div className="space-y-8 max-w-3xl">
            <div>
              <p className="font-semibold">The fastest way to get your AI product off the ground:</p>
              <p className="mt-2 text-white/90">
                You’ve got the vision. You know what needs to be built. But slow execution,
                scattered teams, and rising frustration are holding you back.
                <br />
                <Link href="/launchops" className="underline decoration-white/30 underline-offset-4 hover:decoration-white font-medium">
                  LaunchOps
                </Link>{' '}by gigabox.ai exists to fix that.
              </p>
            </div>

            <div>
              <p className="font-semibold">LaunchOps delivers the technical muscle to build and ship smarter:</p>
              <p className="mt-2 text-white/90">
                We accelerate development for early-stage AI startups using our proprietary
                <Link href="/launchops" className="ml-1 underline decoration-white/30 underline-offset-4 hover:decoration-white font-medium">
                  LaunchOps
                </Link>{' '}toolkits; purpose-built for LLMs, agent frameworks, and AMPC systems.
                You get focused execution, clear outcomes, and working code that drives value.
              </p>
            </div>

            <div>
              <p className="font-semibold">Not consultants. Not contractors. A launch-ready force:</p>
              <p className="mt-2 text-white/90">
                We embed with your team, stabilize your roadmap, and build exactly what you need →
                fast, clean, and with care. From MVPs to feature builds,
                <Link href="/launchops" className="ml-1 underline decoration-white/30 underline-offset-4 hover:decoration-white font-medium">
                  LaunchOps
                </Link>{' '}gets you to launch mode without the headaches.
              </p>
            </div>
          </div>

          {/* Right column with LaunchOps wave image */}
          <div className="hidden lg:block">
            <div className="relative h-full min-h-[320px] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-black">
              <Image
                src="/launchops-wave.svg"
                alt="LaunchOps wave — reduced time to launch"
                fill
                priority
                className="object-contain p-4"
                sizes="(min-width: 1024px) 520px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
