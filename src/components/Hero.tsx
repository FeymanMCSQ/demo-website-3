import Link from 'next/link'
import Icon from './Icon'

const appointmentSteps = [
  'Initial movement assessment',
  'Your personalised treatment plan',
  'Clear goals and next steps',
]

const trustSignals = [
  'Parramatta-based',
  'Individual treatment plans',
  'Sports & everyday injuries',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-physio-warm py-20 md:py-28 lg:py-32">
      {/* Subtle motion arcs — suggest movement, not AI health blobs */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M-200,520 C150,220 680,420 1100,60"
          fill="none"
          stroke="#C96F4A"
          strokeWidth="1.5"
          opacity="0.10"
        />
        <path
          d="M-50,580 C250,300 720,460 1300,150"
          fill="none"
          stroke="#D4C9BA"
          strokeWidth="80"
          opacity="0.18"
        />
        <path
          d="M0,460 C320,100 850,320 1300,20"
          fill="none"
          stroke="#C96F4A"
          strokeWidth="0.8"
          opacity="0.06"
        />
      </svg>

      <div className="container-pad relative z-10">
        <div className="grid lg:grid-cols-[1.15fr,0.85fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <span className="inline-flex items-center gap-2 text-physio-clay-dark text-sm font-semibold bg-white px-4 py-1.5 rounded-full border border-physio-border mb-6 shadow-sm">
              <span
                className="w-2 h-2 rounded-full bg-physio-clay inline-block flex-shrink-0"
                aria-hidden="true"
              />
              Parramatta · Western Sydney
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-physio-text leading-tight">
              Physiotherapy for pain, recovery, and better movement.
            </h1>

            <p className="mt-6 text-lg text-physio-mid leading-relaxed max-w-xl">
              Parramatta Physio &amp; Rehab is a fictional clinic concept built
              around clear treatment pathways, practical rehabilitation, and a
              calmer appointment experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-physio-clay-dark hover:bg-physio-clay-hover text-white px-6 py-3.5 rounded-xl font-semibold transition-colors shadow-sm"
              >
                Book an Appointment
                <Icon name="arrow-right" className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white hover:bg-physio-sand text-physio-text border border-physio-border px-6 py-3.5 rounded-xl font-semibold transition-colors"
              >
                View Services
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {trustSignals.map((signal) => (
                <span
                  key={signal}
                  className="flex items-center gap-1.5 text-sm text-physio-mid"
                >
                  <Icon
                    name="check"
                    className="w-4 h-4 text-physio-clay flex-shrink-0"
                  />
                  {signal}
                </span>
              ))}
            </div>
          </div>

          {/* Right: intake card — desktop only */}
          <div className="hidden lg:block">
            <AppointmentCard />
          </div>
        </div>
      </div>
    </section>
  )
}

function AppointmentCard() {
  return (
    <div className="ml-4">
      <div
        className="bg-white rounded-2xl border border-physio-border p-8"
        style={{
          boxShadow:
            '0 8px 32px rgba(31,41,51,0.10), 0 2px 8px rgba(31,41,51,0.06)',
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 pb-5 mb-5 border-b border-physio-border">
          <div className="w-12 h-12 rounded-xl bg-physio-clay-light flex items-center justify-center flex-shrink-0">
            <Icon name="calendar" className="w-6 h-6 text-physio-clay-dark" />
          </div>
          <div>
            <p className="font-bold text-physio-text">Your First Appointment</p>
            <p className="text-sm text-physio-muted">What to expect</p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-6">
          {appointmentSteps.map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-physio-sand border border-physio-border text-physio-clay-dark text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <p className="text-physio-mid pt-0.5">{step}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-5 border-t border-physio-border">
          <Link
            href="/contact"
            className="block w-full bg-physio-clay-dark hover:bg-physio-clay-hover text-white py-3 px-4 rounded-xl text-sm font-semibold text-center transition-colors"
          >
            Book Appointment →
          </Link>
          <p className="text-xs text-physio-muted text-center mt-3">
            Parramatta · Placeholder availability
          </p>
        </div>
      </div>
    </div>
  )
}
