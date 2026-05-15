import { whoWeHelpItems } from '@/content/physioSiteContent'
import SectionHeading from './SectionHeading'

export default function WhoWeHelp() {
  return (
    <section className="section-pad bg-physio-warm">
      <div className="container-pad">
        <SectionHeading
          badge="Who we help"
          heading="Recognise yourself here?"
          subheading="Physiotherapy support for a range of everyday situations — from desk workers to active athletes to people just wanting to move better."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {whoWeHelpItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-physio-border p-5 text-center hover:shadow-md transition-shadow"
            >
              <span className="text-3xl block mb-3" aria-hidden="true">
                {item.emoji}
              </span>
              <h3 className="font-semibold text-physio-text text-sm mb-1.5">
                {item.title}
              </h3>
              <p className="text-physio-muted text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
