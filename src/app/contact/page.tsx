import type { Metadata } from 'next'
import Icon from '@/components/Icon'
import ContactForm from '@/components/ContactForm'
import SectionHeading from '@/components/SectionHeading'
import { contactInfo } from '@/content/physioSiteContent'

export const metadata: Metadata = {
  title: 'Book an Appointment – Parramatta Physio & Rehab',
  description:
    'Book a physiotherapy appointment at Parramatta Physio & Rehab. Fictional demo form — no real appointments accepted.',
}

const contactDetails = [
  {
    icon: 'phone' as const,
    label: 'Phone',
    value: contactInfo.phone,
    note: '(placeholder)',
    detail: 'Monday – Friday, 7am – 7pm',
  },
  {
    icon: 'email' as const,
    label: 'Email',
    value: contactInfo.email,
    note: '(placeholder)',
    detail: 'We aim to respond within one business day',
  },
  {
    icon: 'map-pin' as const,
    label: 'Address',
    value: contactInfo.address,
    note: '(placeholder)',
    detail: 'Accessible by train and bus from Parramatta station',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-physio-warm py-14 md:py-20 border-b border-physio-border">
        <div className="container-pad">
          <div className="max-w-2xl">
            <span className="inline-block text-physio-clay-dark text-sm font-semibold tracking-wide uppercase mb-3">
              Get in touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-physio-text leading-tight mb-4">
              Book an Appointment
            </h1>
            <p className="text-lg text-physio-mid leading-relaxed">
              Use the form below to request an appointment or ask a question.
              In a real clinic, the team would get back to you within one
              business day to confirm a time.
            </p>
            <div className="mt-4 inline-flex items-start gap-2 bg-physio-sand border border-physio-border rounded-xl px-4 py-2.5">
              <Icon
                name="message"
                className="w-4 h-4 text-physio-clay-dark flex-shrink-0 mt-0.5"
              />
              <p className="text-physio-mid text-sm">
                <strong className="font-semibold">Demo notice:</strong> This is
                a fictional concept website. No real appointments can be booked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-[1.4fr,1fr] gap-12 items-start">
            {/* Form */}
            <div>
              <SectionHeading
                badge="Appointment request"
                heading="Send us a message"
                subheading="Fill in your details and we'll be in touch. Fields marked with * are required."
                align="left"
                headingSize="lg"
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact details */}
              <div className="bg-physio-warm rounded-2xl border border-physio-border p-6">
                <p className="font-bold text-physio-text mb-5">
                  Contact details
                </p>
                <div className="space-y-5">
                  {contactDetails.map((item) => (
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
                        <p className="text-physio-text text-sm font-medium">
                          {item.value}{' '}
                          <span className="text-physio-muted font-normal">
                            {item.note}
                          </span>
                        </p>
                        <p className="text-physio-muted text-xs mt-0.5">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="bg-physio-warm rounded-2xl border border-physio-border p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="clock" className="w-5 h-5 text-physio-clay-dark" />
                  <p className="font-bold text-physio-text">Opening hours</p>
                </div>
                <ul className="space-y-2">
                  {contactInfo.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between gap-4 text-sm"
                    >
                      <span className="text-physio-mid">{h.day}</span>
                      <span
                        className={`font-medium ${
                          h.hours === 'Closed'
                            ? 'text-physio-muted'
                            : 'text-physio-text'
                        }`}
                      >
                        {h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-physio-muted mt-3">
                  Placeholder hours — demo site only
                </p>
              </div>

              {/* What to bring */}
              <div className="bg-physio-sand rounded-2xl border border-physio-border p-6">
                <p className="font-bold text-physio-text mb-3">
                  What to bring to your first appointment
                </p>
                <ul className="space-y-2">
                  {[
                    'Any relevant imaging or medical reports',
                    'Your private health insurance card',
                    'Comfortable clothing for movement assessment',
                    'A list of current medications if relevant',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-physio-mid"
                    >
                      <Icon
                        name="check"
                        className="w-4 h-4 text-physio-clay flex-shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl bg-physio-sand border border-physio-border h-40 flex items-center justify-center">
                <div className="text-center">
                  <Icon
                    name="map-pin"
                    className="w-8 h-8 text-physio-clay mx-auto mb-2"
                  />
                  <p className="text-physio-mid text-sm font-medium">
                    Parramatta, NSW 2150
                  </p>
                  <p className="text-physio-muted text-xs mt-0.5">
                    Map — demo placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
