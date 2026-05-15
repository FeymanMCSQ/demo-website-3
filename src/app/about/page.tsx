import type { Metadata } from 'next'
import Link from 'next/link'
import Icon from '@/components/Icon'
import CTASection from '@/components/CTASection'
import SectionHeading from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'About – Parramatta Physio & Rehab',
  description:
    'About Parramatta Physio & Rehab — a fictional physiotherapy clinic concept website built for portfolio purposes.',
}

const philosophyItems = [
  {
    icon: 'search' as const,
    title: 'Clear assessment first',
    description:
      "We start by genuinely understanding your movement, your history, and your goals — not jumping straight to treatment.",
  },
  {
    icon: 'list' as const,
    title: 'Practical rehabilitation',
    description:
      'Exercise plans that are realistic, appropriate for your current capacity, and explained so you know what to do and why.',
  },
  {
    icon: 'message' as const,
    title: 'Patient education',
    description:
      "You should leave each appointment with a clearer picture of what's happening with your body and what to do about it.",
  },
  {
    icon: 'trend' as const,
    title: 'Measurable progress',
    description:
      'Treatment goals are specific and trackable — so both you and your practitioner can see whether things are working.',
  },
  {
    icon: 'calendar' as const,
    title: 'A calmer appointment experience',
    description:
      'Appointments should feel supportive and clear — not rushed, not overwhelming. You have time to ask questions.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-physio-warm py-16 md:py-24 border-b border-physio-border">
        <div className="container-pad">
          <div className="max-w-3xl">
            <span className="inline-block text-physio-clay-dark text-sm font-semibold tracking-wide uppercase mb-3">
              About
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-physio-text leading-tight mb-5">
              Physiotherapy focused on clarity, practical rehab, and your
              long-term movement.
            </h1>
            <p className="text-xl text-physio-mid leading-relaxed">
              Parramatta Physio &amp; Rehab is a local clinic concept designed
              around a straightforward idea: people deserve clear assessments,
              honest explanations, and practical plans — not jargon or
              uncertainty.
            </p>
          </div>
        </div>
      </section>

      {/* Demo disclaimer — prominent */}
      <section className="bg-physio-sand border-b border-physio-border py-6">
        <div className="container-pad">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <div className="w-10 h-10 rounded-xl bg-physio-clay-light border border-physio-border flex items-center justify-center flex-shrink-0">
              <Icon name="message" className="w-5 h-5 text-physio-clay-dark" />
            </div>
            <div>
              <p className="font-semibold text-physio-text mb-1">
                About this website
              </p>
              <p className="text-physio-mid text-sm leading-relaxed">
                Parramatta Physio &amp; Rehab is a{' '}
                <strong>fictional concept website</strong> built for web design
                portfolio purposes. It is not a real clinic, does not represent
                real practitioners or staff, and cannot provide medical advice
                or accept real appointments. Any content about services,
                processes, or approaches is illustrative only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic philosophy */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeading
            badge="Our approach"
            heading="What we believe about good physiotherapy"
            subheading="These principles shape how this clinic concept is designed — and what a high-quality physiotherapy experience should feel like."
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {philosophyItems.map((item) => (
              <div
                key={item.title}
                className="bg-physio-warm rounded-2xl border border-physio-border p-6 hover:shadow-sm transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-physio-clay-light flex items-center justify-center mb-4">
                  <Icon
                    name={item.icon}
                    className="w-5 h-5 text-physio-clay-dark"
                  />
                </div>
                <h3 className="font-bold text-physio-text mb-2">{item.title}</h3>
                <p className="text-physio-mid text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder team section */}
      <section className="section-pad bg-physio-sand border-y border-physio-border">
        <div className="container-pad">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading
              badge="Team"
              heading="Our practitioners"
              subheading="In a real clinic, this section would introduce the physiotherapy team — their backgrounds, areas of interest, and approach to patient care."
            />

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {[
                {
                  name: 'Placeholder Practitioner',
                  role: 'Senior Physiotherapist',
                  note: 'This is a fictional placeholder. No real practitioner is represented here.',
                },
                {
                  name: 'Placeholder Practitioner',
                  role: 'Sports & Rehab Physiotherapist',
                  note: 'This is a fictional placeholder. No real practitioner is represented here.',
                },
              ].map((person, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-physio-border p-6 text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-physio-clay-light border-2 border-physio-border flex items-center justify-center mb-4">
                    <Icon
                      name="sports"
                      className="w-6 h-6 text-physio-clay-dark"
                    />
                  </div>
                  <p className="font-bold text-physio-text">{person.name}</p>
                  <p className="text-physio-clay-dark text-sm font-medium mb-3">
                    {person.role}
                  </p>
                  <p className="text-physio-muted text-xs leading-relaxed">
                    {person.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Location"
                heading="Based in Parramatta, serving Western Sydney"
                subheading="Conveniently located for residents across Western Sydney. Placeholder location details below."
                align="left"
              />
              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: 'map-pin' as const,
                    label: 'Address',
                    value: '123 Placeholder Street, Parramatta NSW 2150',
                  },
                  {
                    icon: 'phone' as const,
                    label: 'Phone',
                    value: '(02) 1234 5678 (placeholder)',
                  },
                  {
                    icon: 'email' as const,
                    label: 'Email',
                    value: 'hello@example-physio.com.au (placeholder)',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-physio-clay-light flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={item.icon}
                        className="w-4 h-4 text-physio-clay-dark"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-physio-muted font-medium uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="text-physio-mid text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl bg-physio-sand border border-physio-border h-64 flex items-center justify-center">
              <div className="text-center">
                <Icon
                  name="map-pin"
                  className="w-10 h-10 text-physio-clay mx-auto mb-3"
                />
                <p className="text-physio-mid font-medium">
                  Parramatta, NSW 2150
                </p>
                <p className="text-physio-muted text-sm mt-1">
                  Map placeholder — demo site
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Experience a clearer approach to physio."
        subheading="Book an appointment and see how a well-structured first assessment makes the difference."
        primaryLabel="Book an Appointment"
        secondaryLabel="View services"
      />
    </>
  )
}
