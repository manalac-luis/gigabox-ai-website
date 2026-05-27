import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Fathom | Fleet tactical simulator with realistic physics',
  description:
    'Multi-platform, multi-domain naval combat simulator. Surface combatants, maritime patrol aircraft, and submarines with accurate physics, AI-driven crews, and real geographic contexts.',
};

const audiences = {
  enthusiasts: {
    title: 'Naval professionals and enthusiasts',
    description:
      'Realistic naval combat at the operational level. Surface, subsurface, and air platforms with accurate physics. Operational areas based on real geography. Wargame scenarios where stakes plus uncertainty produce replayable engagements.',
    items: [
      'Serious naval wargamers',
      'Military history enthusiasts',
      'Defense analysts',
      'Simulation community',
      'Harpoon / Dangerous Waters alumni',
      'Armchair admirals',
    ],
  },
  training: {
    title: 'Naval training and education',
    description:
      'Same engine, configurable as institutional training simulator. Human operators replace AI crew stations. Tactical decisions in realistic conditions at a fraction of defense contractor training system costs.',
    items: [
      'Naval academies',
      'Professional military education',
      'Defense training programs',
      'ROTC programs',
      'Operational analysis groups',
      'Defense contractors',
    ],
  },
};

const features = [
  {
    title: 'Multi-Platform, Multi-Domain',
    description:
      'Surface combatants (FFG-7 Oliver Hazard Perry-class), maritime patrol aircraft (P-3C Orion), and submarines (Kilo-class SSK). Each platform with realistic sensors, weapons, crew composition, and flight or depth models.',
  },
  {
    title: 'Real Geographic Context',
    description:
      'Five operational areas with Natural Earth-derived coastlines and curated naval features. West Philippine Sea, Persian Gulf, North Atlantic, South Atlantic, Western Pacific. 56 named features across straits, ports, and islands.',
  },
  {
    title: 'AI-Driven Autonomous Crews',
    description:
      'Each platform operates with a full crew template. TAO, sonar, radar, weapons, communications. Autonomous mode under ROE constraints. Named officers with distinct voices and operational personalities.',
  },
  {
    title: 'Multi-Platform Coordination',
    description:
      'Link Data sharing across friendly platforms. Tasking protocols for operational coordination. Over-the-horizon targeting via helicopter data link. Multi-ship patrol scenarios with coordinated defense.',
  },
  {
    title: 'Realistic Physics Throughout',
    description:
      'Sonar with thermocline modeling and environmental absorption. Radar with atmospheric ducting. Weapons with real kinematics and range-dependent Pk. Damage modeling per compartment. Sea state and weather affect every sensor.',
  },
  {
    title: 'Structured Wargame Scenarios',
    description:
      '35+ scenarios across 7 categories from tutorial to saturation attack. Delayed contact spawning, seed variation, and stochastic adversary plans mean different outcomes each play. YAML-defined and editable.',
  },
];

const steps = [
  {
    step: '1',
    title: 'Select a scenario',
    description:
      'Browse the library by category and difficulty. Cold War North Atlantic ASW. Modern Persian Gulf operations. West Philippine Sea patrols. Saturation attacks. Submarine hunts. Or build your own in the visual editor.',
  },
  {
    step: '2',
    title: 'Operate or observe',
    description:
      'Play as TAO of a frigate, TACCO of a patrol aircraft, or CO of a submarine. Issue natural-language commands to your crew. Or set autonomous mode and watch AI crews execute under ROE constraints.',
  },
  {
    step: '3',
    title: 'See what unfolds',
    description:
      'Adversary plans are stochastic. Sensors are environmental. Decisions matter. Post-engagement analytics show layered defense effectiveness, magazine pressure, and teaching points. Counterfactual analysis suggests alternate outcomes.',
  },
];

const aiCapabilities = [
  {
    title: 'Autonomous crew operations under ROE',
    metric: '10 CIC stations per platform',
    description:
      'AI crews make tactical decisions under realistic rules of engagement. Three ROE levels (Weapons Hold, Weapons Tight, Weapons Free). TAO orchestrates the operational picture. Each station operates within its responsibilities.',
  },
  {
    title: 'Natural-language CIC commands',
    metric: '39 command types',
    description:
      'Type plain English orders. The LLM translates to structured commands, routes to the correct crew station, and the officer acknowledges in character before executing.',
  },
  {
    title: 'Proactive tactical callouts',
    metric: 'Watchlist-driven',
    description:
      'TAO registers conditions during command execution. When a track enters the engagement envelope or a contact reaches FIRM quality, the TAO calls it out without being asked.',
  },
  {
    title: 'Crew voice synthesis',
    metric: '11 distinct voices',
    description:
      'Each station officer has a distinct Kokoro TTS voice. Sequential playback after command execution. Mute toggle for silent operation. Server-side synthesis, no client-side model.',
  },
];

const simulationStack = [
  { label: 'Platforms', value: 'FFG-7 \u00b7 P-3C Orion \u00b7 Kilo-class SSK' },
  { label: 'Domains', value: 'Surface \u00b7 Air \u00b7 Subsurface' },
  { label: 'Weapons', value: 'SM-2MR \u00b7 Harpoon \u00b7 Mk-46 \u00b7 Type 53-65 \u00b7 Mk-75 \u00b7 CIWS' },
  { label: 'Sensors', value: 'SPS-49 \u00b7 SQS-56 \u00b7 SQR-19 \u00b7 APS-137 \u00b7 SLQ-32 \u00b7 MAD' },
  { label: 'Geography', value: '5 operational areas \u00b7 37 coastlines \u00b7 56 features' },
  { label: 'Scenarios', value: '35+ scenarios \u00b7 7 categories \u00b7 YAML-defined' },
];

const useCases = [
  {
    title: 'Training and education',
    description:
      'Naval academies, professional military education, defense training programs. Same engine as the wargame, configured with human operators replacing AI crew. Tactical decisions in realistic conditions.',
  },
  {
    title: 'Operational analysis',
    description:
      'Test tactical concepts in realistic scenarios. Compare doctrines. Explore force structure questions. Post-engagement analytics with counterfactual what-if analysis.',
  },
  {
    title: 'Naval enthusiast wargaming',
    description:
      'For serious naval simulation enthusiasts who want realistic physics with structured gameplay. Multi-platform operations in real geographic contexts. In the tradition of Harpoon and Dangerous Waters.',
  },
];

const pricing = [
  {
    tier: 'Wargame Edition',
    price: 'TBD',
    target: 'Individual license',
    features: ['All platforms and scenarios', 'AI crew with TTS voices', 'Scenario editor', 'Post-engagement analytics'],
  },
  {
    tier: 'Training Edition',
    price: 'Custom',
    target: 'Institutional license',
    features: ['Everything in Wargame', 'Human operator stations', 'Custom scenario authoring', 'LMS integration hooks'],
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    target: 'Defense customers',
    features: ['Everything in Training', 'Custom platform models', 'Classified scenario support', 'On-premise deployment'],
  },
];

export default function FathomLandingPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-accent uppercase tracking-wider">
              Gigabox Apps &middot; Fathom
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200">
              Coming Soon
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight max-w-4xl">
            Fleet tactical simulator with realistic physics.
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mb-8 leading-relaxed">
            Multi-platform, multi-domain naval combat. Surface combatants,
            maritime patrol aircraft, and submarines with accurate sensor
            physics, AI-driven crews, and real geographic contexts. Built for
            wargaming. Configurable for training.
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            <Link
              href="/apps/fathom/request"
              className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Request a demo
            </Link>
            <a
              href="mailto:info@gigabox.ai?subject=Fathom%20inquiry"
              className="inline-flex items-center justify-center min-w-[220px] px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-all"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who it&apos;s for
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            Two audiences, one engine. The same physics and AI run both
            the wargame and the training simulator.
          </p>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
            {Object.values(audiences).map((audience) => (
              <div
                key={audience.title}
                className="p-6 bg-white border border-foreground/10 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {audience.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4">
                  {audience.description}
                </p>
                <ul className="space-y-1.5">
                  {audience.items.map((item) => (
                    <li key={item} className="text-sm text-foreground/60">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What you get
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            Three warfare domains, five operational areas, and AI crews
            that operate under realistic rules of engagement.
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

      {/* How It Works */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            Pick a scenario, take command, and see what unfolds. Every
            play is different.
          </p>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl">
            {steps.map((s) => (
              <div
                key={s.step}
                className="p-6 bg-white border border-foreground/10 rounded-lg"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-bold mb-4">
                  {s.step}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI capabilities
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            AI drives the crew, the adversary, and the tactical narration.
            Every capability has a concrete specification.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {aiCapabilities.map((ai) => (
              <div
                key={ai.title}
                className="p-6 bg-white border border-foreground/10 rounded-lg"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {ai.title}
                  </h3>
                  <span className="text-sm font-mono text-accent shrink-0 ml-4">
                    {ai.metric}
                  </span>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {ai.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulation Stack */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What&apos;s modeled
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            Specifications drawn from publicly available naval references
            and simulation industry standards. No arbitrary game-balancing
            values.
          </p>

          <div className="grid gap-4 md:grid-cols-2 max-w-4xl">
            {simulationStack.map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-baseline p-4 bg-white border border-foreground/10 rounded-lg"
              >
                <span className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">
                  {item.label}
                </span>
                <span className="text-sm text-foreground/80 text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Use cases
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            One engine, three contexts. The physics and AI don&apos;t
            change &mdash; the operator model does.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="p-6 bg-white border border-foreground/10 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {uc.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {uc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pricing
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mb-12">
            Three editions. Same physics engine. Different operator models
            and support levels.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.tier}
                className="flex flex-col p-6 bg-white border border-foreground/10 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {plan.tier}
                </h3>
                <p className="text-2xl font-bold text-foreground mb-1">
                  {plan.price}
                </p>
                <p className="text-sm text-foreground/50 mb-4">{plan.target}</p>
                <ul className="space-y-2 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-foreground/70">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 border-b border-foreground/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Fathom
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Fathom is built by Gigabox, an AI-native software factory
              operating from BGC, Manila. The same engineering team that
              builds multi-tenant SaaS platforms, autonomous agent runtimes,
              and self-hosted inference infrastructure built this simulator.
            </p>
            <p>
              Naval combat involves realistic physics across multiple domains,
              multi-platform coordination, and AI-driven autonomous
              decision-making under uncertainty. The architectural patterns
              developed for Fathom &mdash; tick-based simulation, pure-function
              physics, deterministic replay, structured scenario definitions
              &mdash; apply across the Gigabox product portfolio.
            </p>
            <p>
              The engine is 33 development phases deep. 1,500+ automated tests
              verify physics, protocol, crew behavior, and backward
              compatibility across every commit. Three playable platform types
              cover all three warfare domains. Five operational areas use
              real-world geography. The foundation is solid. What comes next
              depends on who wants to use it.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              href="/apps/fathom/request"
              className="text-accent hover:text-accent/80 underline underline-offset-4"
            >
              Request a demo
            </Link>
            <a
              href="mailto:info@gigabox.ai?subject=Fathom%20inquiry"
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
