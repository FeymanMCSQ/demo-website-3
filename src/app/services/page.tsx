import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/content/physioServices'
import ServiceCard from '@/components/ServiceCard'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import Icon from '@/components/Icon'

export const metadata: Metadata = {
  title: 'Services – Parramatta Physio & Rehab',
  description:
    'Physiotherapy and rehabilitation services including sports injuries, back pain, posture, rehab programs, and more. Fictional demo site.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-physio-warm py-16 md:py-20 border-b border-physio-border">
        <div className="container-pad">
          <div className="max-w-2xl">
            <span className="inline-block text-physio-clay-dark text-sm font-semibold tracking-wide uppercase mb-3">
              What we offer
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-physio-text leading-tight mb-5">
              Services
            </h1>
            <p className="text-lg text-physio-mid leading-relaxed mb-8">
              Assessment and hands-on physiotherapy support across a range of
              everyday and active concerns — from back pain to sports recovery
              to posture-related discomfort.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-physio-clay-dark hover:bg-physio-clay-hover text-white px-6 py-3.5 rounded-xl font-semibold transition-colors shadow-sm"
            >
              Book an Appointment
              <Icon name="arrow-right" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* All services */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeading
            badge="All services"
            heading="Find the support you need"
            subheading="Not sure which service fits? Book an initial assessment and we'll help you figure out the right plan."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} variant="full" />
            ))}
          </div>
        </div>
      </section>

      {/* Not sure section */}
      <section className="bg-physio-sand section-pad border-y border-physio-border">
        <div className="container-pad">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-physio-text mb-4">
              Not sure which service is right for you?
            </h2>
            <p className="text-physio-mid leading-relaxed mb-6">
              Book an initial assessment. The assessment is the starting point
              regardless of your concern — we&apos;ll take the time to
              understand what you need and build a plan from there.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-physio-clay-dark hover:bg-physio-clay-hover text-white px-6 py-3.5 rounded-xl font-semibold transition-colors shadow-sm"
              >
                Book an Assessment
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white hover:bg-physio-warm text-physio-text border border-physio-border px-6 py-3.5 rounded-xl font-semibold transition-colors"
              >
                About our approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to book?"
        subheading="Book an appointment today and start with a thorough assessment."
        primaryLabel="Book an Appointment"
        secondaryLabel="Learn about our process"
      />
    </>
  )
}
