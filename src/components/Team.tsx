import Image from 'next/image'
import Link from 'next/link'

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM4.5 9h3v12h-3V9Zm7 0h2.86v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-5.4c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.06 1.39-2.06 2.83V21h-3V9Z"/>
    </svg>
  )
}

const team = [
  { name: 'Luis',   photo: '/team2/Luis.jpg',   title: ['Senior Architect,', 'AI & Cloud Systems Engineer'], linkedin: 'https://www.linkedin.com/in/luis-manalac-300843106/' },
  { name: 'Eric',   photo: '/team2/Eric.jpg',   title: ['AI Researcher', '&  Full-Stack Engineer'], linkedin: '#' },
  { name: 'Victor', photo: '/team2/Victor.jpg', title: [ 'AI & Data Systems Engineer'], linkedin: '#' },
  { name: 'Nikki',  photo: '/team2/Nikki.jpg',  title: ['Head of Business Development,', 'Partnerships'], linkedin: 'https://www.linkedin.com/in/nikkibreedveld/' },
  { name: 'Hannah', photo: '/team2/Hannah.jpg', title: ['Product Designer,','UI/UX Researcher'], linkedin: 'https://www.linkedin.com/in/hannahhallbrown/' },
] as const

export default function Team() {
  return (
    <section id="team" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          OUR TEAM
        </h2>
        <p className="mt-3 text-center text-foreground/70 text-lg">Researchers and engineers building the future of AI agents.</p>

        <div className="mt-14 grid items-stretch gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((m) => (
            <div key={m.name} className="flex h-full flex-col items-center text-center">
              <div className="relative mx-auto h-24 w-24 md:h-28 md:w-28">
                <Image
                  src={m.photo}
                  alt={`${m.name} headshot`}
                  fill
                  sizes="112px"
                  className="rounded-full object-cover ring-1 ring-foreground/10 shadow-sm"
                  priority={m.name === 'Luis'}
                />
              </div>
              <div className="mt-4 font-semibold text-lg text-foreground">{m.name}</div>
              <div className="mt-2 text-sm text-foreground/70 leading-relaxed min-h-[3.75rem]">
                {m.title.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
              <Link
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center w-9 h-9 rounded bg-accent text-white hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/60"
                aria-label={`LinkedIn profile for ${m.name}`}
              >
                <LinkedInIcon className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
