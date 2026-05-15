import Link from 'next/link'
import Icon from './Icon'

interface CTASectionProps {
  heading?: string
  subheading?: string
  primaryLabel?: string
  secondaryLabel?: string
}

export default function CTASection({
  heading = 'Ready to get moving again?',
  subheading = 'Book an appointment and start with a clear assessment — no jargon, no uncertainty, just a practical next step.',
  primaryLabel = 'Book an Appointment',
  secondaryLabel = 'View Services',
}: CTASectionProps) {
  return (
    <section className="bg-physio-text section-pad overflow-hidden relative">
      {/* Subtle motion arcs on dark background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M-200,480 C200,150 700,380 1300,80"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          opacity="0.04"
        />
        <path
          d="M100,520 C400,200 850,420 1400,150"
          fill="none"
          stroke="#C96F4A"
          strokeWidth="60"
          opacity="0.05"
        />
      </svg>

      <div className="container-pad relative z-10 text-center">
        <span className="inline-block text-physio-clay text-sm font-semibold tracking-wide uppercase mb-4">
          Get started
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
          {heading}
        </h2>
        <p className="mt-5 text-lg text-white/65 max-w-xl mx-auto leading-relaxed">
          {subheading}
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-physio-clay-dark hover:bg-physio-clay-hover text-white px-7 py-4 rounded-xl font-bold text-lg transition-colors shadow-md"
          >
            {primaryLabel}
            <Icon name="arrow-right" className="w-5 h-5" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/8 text-white px-7 py-4 rounded-xl font-semibold text-lg transition-colors"
          >
            {secondaryLabel}
          </Link>
        </div>

        <p className="mt-6 text-white/35 text-xs max-w-sm mx-auto">
          This is a fictional demo website. Not a real clinic and not accepting
          real appointments.
        </p>
      </div>
    </section>
  )
}
