import { whyChooseUsItems } from '@/content/physioSiteContent'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import type { ComponentProps } from 'react'

type IconName = ComponentProps<typeof Icon>['name']

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <div className="grid lg:grid-cols-[1fr,1.4fr] gap-16 items-start">
          {/* Left: heading + intro */}
          <div>
            <SectionHeading
              badge="Our approach"
              heading="A calmer, clearer appointment experience"
              subheading="We focus on what you actually need to understand and improve — not overwhelming you with complexity."
              align="left"
            />

            <div className="mt-8 bg-physio-sand rounded-2xl border border-physio-border p-6">
              <p className="text-physio-mid text-sm leading-relaxed">
                The information on this demo site is general and not a
                substitute for professional medical advice. Always consult a
                qualified health practitioner for your individual situation.
              </p>
            </div>
          </div>

          {/* Right: feature list */}
          <div className="space-y-4">
            {whyChooseUsItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-physio-warm rounded-2xl border border-physio-border p-5 hover:shadow-sm transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-physio-clay-light flex items-center justify-center flex-shrink-0">
                  <Icon
                    name={item.icon as IconName}
                    className="w-5 h-5 text-physio-clay-dark"
                  />
                </div>
                <div>
                  <p className="font-semibold text-physio-text mb-1">
                    {item.title}
                  </p>
                  <p className="text-physio-mid text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
