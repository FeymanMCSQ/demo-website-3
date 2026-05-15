import { processSteps } from '@/content/physioSiteContent'
import Link from 'next/link'
import SectionHeading from './SectionHeading'

export default function ProcessSteps() {
  return (
    <section className="section-pad bg-physio-sand">
      <div className="container-pad">
        <SectionHeading
          badge="How it works"
          heading="From first booking to feeling better"
          subheading="A clear, four-step process so you know exactly what to expect at every stage."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-physio-border z-0"
            aria-hidden="true"
          />

          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="relative z-10 bg-white rounded-2xl border border-physio-border p-6 text-center shadow-sm"
            >
              <div className="w-14 h-14 rounded-full bg-physio-clay-dark flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-bold text-physio-text mb-2">{step.title}</h3>
              <p className="text-physio-mid text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-physio-clay-dark hover:bg-physio-clay-hover text-white px-7 py-3.5 rounded-xl font-semibold transition-colors shadow-sm"
          >
            Start with step one — book now
          </Link>
        </div>
      </div>
    </section>
  )
}
