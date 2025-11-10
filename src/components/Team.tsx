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
  { name: 'Luis',   photo: '/team/Luis.jpg',   title: ['Senior Architect,', 'AI & Cloud Systems Engineer'], linkedin: '#' },
  { name: 'Eric',   photo: '/team/Eric.jpg',   title: ['AI Researcher', '&  Full-Stack Engineer'], linkedin: '#' },
  { name: 'Victor', photo: '/team/Victor.jpg', title: [ 'AI & Data Systems Engineer'], linkedin: '#' },
  { name: 'Nikki',  photo: '/team/Nikki.jpg',  title: ['Head of Business Development,', 'Partnerships'], linkedin: '#' },
  { name: 'Hannah', photo: '/team/Hannah.jpg', title: ['Product Designer,','UI/UX Researcher'], linkedin: '#' },
] as const

export default function Team() {
  return (
    <section id="team" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <h2 className="text-center text-3xl md:text-5xl font-semibold tracking-tight">
          IT TAKES A TEAM TO LAUNCH THE FUTURE
        </h2>
        <p className="mt-3 text-center text-white/80 text-lg">Building AI with real human intelligence.</p>

        {/* items-stretch ensures equal card heights; mt-auto pins the LinkedIn row */}
        <div className="mt-14 grid items-stretch gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((m) => (
            <div key={m.name} className="flex h-full flex-col items-center text-center">
              <div className="relative mx-auto h-24 w-24 md:h-28 md:w-28">
                <Image
                  src={m.photo}
                  alt={`${m.name} headshot`}
                  fill
                  sizes="112px"
                  className="rounded-full object-cover ring-1 ring-white/20 shadow-inner"
                  priority={m.name === 'Luis'}
                />
              </div>
              <div className="mt-4 font-semibold text-lg">{m.name}</div>
              {/* Give the text area a tiny min-height so very short titles don't yank the link up */}
              <div className="mt-2 text-sm text-white/80 leading-relaxed min-h-[3.75rem]">
                {m.title.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
              <Link
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center w-9 h-9 rounded bg-white text-black hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white/60"
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
// import Image from 'next/image'
// import Link from 'next/link'

// // Simple LinkedIn icon (no external deps)
// function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
//       <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM4.5 9h3v12h-3V9Zm7 0h2.86v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-5.4c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.06 1.39-2.06 2.83V21h-3V9Z"/>
//     </svg>
//   )
// }

// // NOTE: Place images in /public/team with these exact filenames/casing
// // e.g. /public/team/Luis.jpg, /public/team/Eric.jpg, ...
// const team = [
//   { name: 'Luis',   photo: '/team/Luis.jpg',   title: ['Senior Architect,', 'AI & Cloud Systems Engineer'], linkedin: '#' },
//   { name: 'Eric',   photo: '/team/Eric.jpg',   title: ['AI Researcher,', 'Full-Stack Systems Engineer'], linkedin: '#' },
//   { name: 'Victor', photo: '/team/Victor.jpg', title: [ 'AI and Data Engineer'], linkedin: '#' },
//   { name: 'Nikki',  photo: '/team/Nikki.jpg',  title: ['Head of Business', 'Development &', 'Partnerships'], linkedin: '#' },
//   { name: 'Hannah', photo: '/team/Hannah.jpg', title: ['Product UI/UX Designer'], linkedin: '#' },
// ] as const

// export default function Team() {
//   return (
//     <section id="team" className="bg-black text-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
//         <h2 className="text-center text-3xl md:text-5xl font-semibold tracking-tight">
//           IT TAKES A TEAM TO LAUNCH THE FUTURE
//         </h2>
//         <p className="mt-3 text-center text-white/80 text-lg">Building AI with real human intelligence.</p>

//         <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
//           {team.map((m) => (
//             <div key={m.name} className="text-center">
//               <div className="relative mx-auto h-24 w-24 md:h-28 md:w-28">
//                 <Image
//                   src={m.photo}
//                   alt={`${m.name} headshot`}
//                   fill
//                   sizes="112px"
//                   className="rounded-full object-cover ring-1 ring-white/20 shadow-inner"
//                   priority={m.name === 'Luis'}
//                 />
//               </div>
//               <div className="mt-4 font-semibold text-lg">{m.name}</div>
//               <div className="mt-2 text-sm text-white/80 leading-relaxed">
//                 {m.title.map((line, i) => (
//                   <div key={i}>{line}</div>
//                 ))}
//               </div>
//               <Link
//                 href={m.linkedin}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="mt-4 inline-flex items-center justify-center w-9 h-9 rounded bg-white text-black hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white/60"
//                 aria-label={`LinkedIn profile for ${m.name}`}
//               >
//                 <LinkedInIcon className="w-4 h-4" />
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// import Image from 'next/image'
// import Link from 'next/link'

// // Simple LinkedIn icon (no external deps)
// function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
//       <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM4.5 9h3v12h-3V9Zm7 0h2.86v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-5.4c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.06 1.39-2.06 2.83V21h-3V9Z"/>
//     </svg>
//   )
// }

// // Decorative circle avatar (sky/land) without external images
// function PlaceholderAvatar() {
//   return (
//     <svg viewBox="0 0 100 100" className="h-24 w-24 md:h-28 md:w-28 rounded-full ring-1 ring-white/20 shadow-inner">
//       <defs>
//         <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor="#dff0ff"/>
//           <stop offset="100%" stopColor="#bfe2ff"/>
//         </linearGradient>
//         <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor="#bfe080"/>
//           <stop offset="100%" stopColor="#8bb34f"/>
//         </linearGradient>
//       </defs>
//       <rect width="100" height="100" fill="url(#sky)"/>
//       <path d="M0 70 C 25 60, 75 80, 100 70 L100 100 L0 100 Z" fill="url(#land)"/>
//       <circle cx="28" cy="25" r="7" fill="#fff"/>
//       <circle cx="42" cy="25" r="5" fill="#fff"/>
//     </svg>
//   )
// }

// export default function Team() {
//   const team = [
//     { name: 'Luis',   title: ['Senior Architect,', 'AI & Cloud Systems Engineer'], linkedin: 'https://www.linkedin.com/in/luis-manalac-300843106/' },
//     { name: 'Eric',   title: ['Lead AI Researcher', '&  Full-Stack Systems', 'Engineer'], linkedin: '#' },
//     { name: 'Victor', title: ['Lead Full-Stack &', 'Data Systems', 'Engineer'], linkedin: '#' },
//     { name: 'Nikki',  title: ['Head of Business', 'Development &', 'Partnerships'], linkedin: '#' },
//     { name: 'Hannah', title: ['Principal Product', 'Designer, UI/UX', 'Systems'], linkedin: '#' },
//   ] as const

//   return (
//     <section id="team" className="bg-black text-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
//         <h2 className="text-center text-3xl md:text-5xl font-semibold tracking-tight">
//           IT TAKES A TEAM TO LAUNCH THE FUTURE
//         </h2>
//         <p className="mt-3 text-center text-white/80 text-lg">Building AI with real human intelligence.</p>

//         <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
//           {team.map((m) => (
//             <div key={m.name} className="text-center">
//               <div className="mx-auto">
//                 <PlaceholderAvatar />
//               </div>
//               <div className="mt-4 font-semibold text-lg">{m.name}</div>
//               <div className="mt-2 text-sm text-white/80 leading-relaxed">
//                 {m.title.map((line, i) => (
//                   <div key={i}>{line}</div>
//                 ))}
//               </div>
//               <Link href={m.linkedin} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center justify-center w-9 h-9 rounded bg-white text-black hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white/60" aria-label={`LinkedIn profile for ${m.name}`}>
//                 <LinkedInIcon className="w-4 h-4" />
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
