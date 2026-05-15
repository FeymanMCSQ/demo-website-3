import Link from 'next/link'
import Icon from './Icon'

const highlights = [
  'Sprains and strains',
  'Running-related pain',
  'Gym and strength injuries',
  'Return-to-sport planning',
  'Overuse and overload injuries',
]

export default function SportsTease() {
  return (
    <section className="bg-physio-clay-dark section-pad overflow-hidden relative">
      {/* Subtle motion arcs — warm, directional */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M-100,450 C250,100 750,350 1300,50"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          opacity="0.07"
        />
        <path
          d="M0,500 C350,180 800,400 1400,100"
          fill="none"
          stroke="white"
          strokeWidth="60"
          opacity="0.04"
        />
      </svg>

      <div className="container-pad relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <span className="inline-block text-physio-clay-light text-sm font-semibold tracking-wide uppercase mb-4 opacity-90">
              Featured service
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Return to training with a clearer recovery plan.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Support for sprains, strains, running injuries, gym-related
              concerns, and return-to-sport planning — with a focus on practical
              next steps, not guesswork.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/sports-injuries"
                className="inline-flex items-center gap-2 bg-white hover:bg-physio-warm text-physio-clay-dark px-6 py-3.5 rounded-xl font-semibold transition-colors shadow-sm"
              >
                Explore Sports Injuries
                <Icon name="arrow-right" className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white px-6 py-3.5 rounded-xl font-semibold transition-colors"
              >
                Book an Appointment
              </Link>
            </div>
          </div>

          {/* Right: highlights card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-7">
            <p className="text-white font-semibold mb-5">Common concerns:</p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="check" className="w-3.5 h-3.5 text-white" />
                  </span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-white/20">
              <p className="text-white/60 text-sm">
                Not sure if this is the right service?{' '}
                <Link
                  href="/contact"
                  className="text-white underline hover:no-underline"
                >
                  Book an assessment
                </Link>{' '}
                and we&apos;ll help you figure it out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
