import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-black to-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your vision. Our execution. Ready to launch.
          </h1>

          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            <Link
              href="/launchops"
              className="font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-white"
            >
              LaunchOps →
            </Link>{' '}
            Our proprietary toolkit built to accelerate the development of AI applications. We empower high-potential teams to move faster, build smarter, and ship sooner.
          </p>

          {/* CTAs */}
          <div className="space-x-4">
            <Link
              href="/launchops"
              className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-neutral-100 transition-colors duration-200 text-lg"
            >
              Explore LaunchOps
            </Link>
            
            <a
              href="#features"
              className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors duration-200 text-lg"
            >
              Reduce Time to Launch
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors duration-200 text-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

