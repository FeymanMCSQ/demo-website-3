import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'
import SectionHeading from '@/components/SectionHeading'
import Icon from '@/components/Icon'
import { backNeckFaqs } from '@/content/physioSiteContent'

export const metadata: Metadata = {
  title: 'Back & Neck Pain – Parramatta Physio & Rehab',
  description:
    'Physiotherapy assessment and support for back and neck pain, posture-related discomfort, and stiffness. Fictional demo site.',
}

const whoItHelps = [
  'People with persistent or recurring lower back pain',
  'Those experiencing neck stiffness, soreness, or restricted movement',
  'Office workers with desk-related back and neck discomfort',
  'People with headaches linked to neck tension',
  'Workers whose jobs place physical demands on the spine',
  "Anyone wanting to understand what's contributing to their back pain",
]

const commonCauses = [
  'Extended desk or computer work',
  'Sedentary lifestyle or reduced movement',
  'Lifting or carrying loads at work',
  'Poor workstation setup',
  'Sleep position and mattress quality',
  'Stress and muscle tension',
  'Previous injury or deconditioning',
  'Postural habits over time',
]

const processSteps = [
  {
    title: 'Movement and history assessment',
    description:
      'We review your movement, history, daily activities, and what makes your pain better or worse.',
  },
  {
    title: 'Understanding contributing factors',
    description:
      'We discuss what may be contributing to your pain in plain language — no jargon.',
  },
  {
    title: 'Personalised plan',
    description:
      'A practical plan including manual therapy guidance, exercises, and realistic activity advice.',
  },
  {
    title: 'Progress and long-term habits',
    description:
      'We track improvement and help you build movement habits that support your back beyond the clinic.',
  },
]

export default function BackNeckPainPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-physio-warm py-16 md:py-24 border-b border-physio-border">
        <div className="container-pad">
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-start">
            <div>
              <span className="inline-block text-physio-clay-dark text-sm font-semibold tracking-wide uppercase mb-3">
                Service
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-physio-text leading-tight mb-5">
                Back &amp; Neck Pain
              </h1>
              <p className="text-xl text-physio-mid leading-relaxed mb-6">
                Back and neck pain is one of the most common reasons people seek
                physiotherapy. Support is available for desk-related discomfort,
                postural concerns, stiffness, movement limitations, and general
                back or neck pain.
              </p>
              <p className="text-physio-mid leading-relaxed mb-8">
                Assessment aims to understand what&apos;s contributing to your
                pain — not just treat the symptom — and build a practical plan
                that helps you move better and feel more in control.
              </p>
              <div className="flex flex-wrap gap-4">
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
                  View all services
                </Link>
              </div>
            </div>

            {/* Common causes card */}
            <div className="bg-white rounded-2xl border border-physio-border p-6 shadow-sm">
              <p className="font-semibold text-physio-text mb-4">
                Common contributing factors:
              </p>
              <ul className="space-y-2">
                {commonCauses.map((cause) => (
                  <li
                    key={cause}
                    className="flex items-start gap-2.5 text-sm text-physio-mid"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-physio-clay flex-shrink-0 mt-1.5" />
                    {cause}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-physio-muted mt-4 pt-3 border-t border-physio-border">
                Identifying contributing factors is part of building a treatment
                plan that actually addresses the problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it helps */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SectionHeading
              badge="Who this is for"
              heading="Back and neck pain affects a wide range of people"
              subheading="Whether it's from sitting all day, a physical job, old injuries catching up, or no clear reason at all — physiotherapy can help identify what's going on and what to do about it."
              align="left"
            />
            <ul className="space-y-3">
              {whoItHelps.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 bg-physio-warm rounded-xl border border-physio-border p-4"
                >
                  <Icon
                    name="check"
                    className="w-5 h-5 text-physio-clay flex-shrink-0 mt-0.5"
                  />
                  <span className="text-physio-mid">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Desk pain callout — clay/terracotta contrast section */}
      <section className="bg-physio-clay-dark section-pad overflow-hidden relative">
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
            opacity="0.06"
          />
        </svg>
        <div className="container-pad relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-physio-clay-light text-sm font-semibold tracking-wide uppercase mb-4 opacity-90">
              Office workers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Desk pain is common, but it&apos;s not something you just have to
              live with.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              Hours at a screen, poor workstation setup, and reduced movement
              all contribute to neck, shoulder, and back discomfort. An
              assessment can help identify what&apos;s worth changing — in your
              movement, your setup, and your habits.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-physio-warm text-physio-clay-dark px-7 py-3.5 rounded-xl font-bold transition-colors shadow-sm"
            >
              Book an Assessment
              <Icon name="arrow-right" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-physio-sand">
        <div className="container-pad">
          <SectionHeading
            badge="How we work"
            heading="A practical approach to back and neck pain"
            subheading="Not every back pain is the same. Assessment is the starting point for building something that actually helps."
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {processSteps.map((item, i) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-physio-border p-6 shadow-sm flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-physio-clay-dark text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-physio-text mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-physio-mid text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-physio-sand border-t border-physio-border py-8">
        <div className="container-pad">
          <p className="text-physio-mid text-sm leading-relaxed max-w-3xl mx-auto text-center">
            <strong className="font-semibold">Important note:</strong> The
            information on this page is general and is not a substitute for
            professional medical advice. Back and neck pain can have many
            causes — always consult a qualified health professional for your
            individual situation. This is a fictional demo website and does not
            represent a real clinic.
          </p>
        </div>
      </section>

      <FAQAccordion
        items={backNeckFaqs}
        heading="Back & neck pain questions"
        subheading="Common questions about assessment and physiotherapy for back and neck concerns."
      />

      <CTASection
        heading="Take a step toward moving better."
        subheading="Book an assessment and start with a clear understanding of what's going on with your back or neck."
        primaryLabel="Book an Appointment"
        secondaryLabel="View all services"
      />
    </>
  )
}
