import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'
import SectionHeading from '@/components/SectionHeading'
import Icon from '@/components/Icon'
import { sportsInjuriesFaqs } from '@/content/physioSiteContent'

export const metadata: Metadata = {
  title: 'Sports Injuries – Parramatta Physio & Rehab',
  description:
    'Physiotherapy support for sports injuries including sprains, strains, running pain, and return-to-sport planning. Fictional demo site.',
}

const whoItHelps = [
  'Runners with knee, hip, ankle, or foot concerns',
  'Gym-goers with shoulder, wrist, or lower back pain',
  'Field sport athletes recovering from sprains or strains',
  'Cyclists and triathletes managing overuse issues',
  'People returning to exercise after time off',
  'Anyone experiencing pain during or after sport',
]

const commonConcerns = [
  { label: 'Ankle sprains', icon: 'activity' as const },
  { label: 'Hamstring strains', icon: 'activity' as const },
  { label: "Runner's knee", icon: 'sports' as const },
  { label: 'Shin splints', icon: 'sports' as const },
  { label: 'Shoulder impingement', icon: 'rehab' as const },
  { label: 'Lower back pain from sport', icon: 'back' as const },
  { label: "Tennis / golfer's elbow", icon: 'work' as const },
  { label: 'IT band syndrome', icon: 'mobility' as const },
]

const processSteps = [
  {
    title: 'Movement assessment',
    description:
      'We assess the injury, how you move, and what factors may be contributing — not just the site of pain.',
  },
  {
    title: 'Honest explanation',
    description:
      'We explain what we found and what it means for your training and recovery in plain language.',
  },
  {
    title: 'Practical treatment plan',
    description:
      'A personalised plan with exercises, load guidance, and realistic expectations for return to activity.',
  },
  {
    title: 'Progress and return to sport',
    description:
      'We track your progress and adjust the plan as you build back to the level of activity you want.',
  },
]

export default function SportsInjuriesPage() {
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
                Sports Injuries
              </h1>
              <p className="text-xl text-physio-mid leading-relaxed mb-6">
                Return to training with a clearer recovery plan. Support for
                runners, gym-goers, field sport athletes, and active people
                managing sprains, strains, overuse injuries, and return-to-sport
                concerns.
              </p>
              <p className="text-physio-mid leading-relaxed mb-8">
                Assessment starts by understanding the injury, how you move, and
                what you want to get back to. From there, a practical plan is
                built around your specific situation and goals.
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

            {/* Side info card */}
            <div className="bg-white rounded-2xl border border-physio-border p-6 shadow-sm">
              <p className="font-semibold text-physio-text mb-4">
                Common concerns we see:
              </p>
              <ul className="space-y-2.5">
                {commonConcerns.map((concern) => (
                  <li
                    key={concern.label}
                    className="flex items-center gap-3 text-sm text-physio-mid"
                  >
                    <span className="w-6 h-6 rounded-full bg-physio-clay-light flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={concern.icon}
                        className="w-3.5 h-3.5 text-physio-clay-dark"
                      />
                    </span>
                    {concern.label}
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-physio-border">
                <p className="text-xs text-physio-muted">
                  Don&apos;t see your concern listed? Book an assessment — we
                  can help identify what&apos;s going on.
                </p>
              </div>
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
              heading="Active people at any level"
              subheading="You don't need to be a professional athlete. Sports injury support is for anyone who moves and wants to stay moving — from casual runners to competitive athletes."
              align="left"
            />
            <ul className="grid grid-cols-1 gap-3">
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

      {/* Process */}
      <section className="section-pad bg-physio-sand">
        <div className="container-pad">
          <SectionHeading
            badge="The process"
            heading="How sports injury treatment works here"
            subheading="A four-step approach focused on understanding the injury, building a practical plan, and getting you back to what you want to do."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((item, i) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-physio-border p-6 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-physio-clay-dark text-white font-bold text-sm flex items-center justify-center mb-4">
                  {i + 1}
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

      {/* Disclaimer */}
      <section className="bg-physio-sand border-t border-physio-border py-8">
        <div className="container-pad">
          <p className="text-physio-mid text-sm leading-relaxed max-w-3xl mx-auto text-center">
            <strong className="font-semibold">Important note:</strong> The
            information on this page is general in nature and is not a
            substitute for professional medical advice. Injury recovery
            timelines and outcomes vary between individuals. This is a fictional
            demo website and does not represent a real clinic or real clinical
            advice.
          </p>
        </div>
      </section>

      <FAQAccordion
        items={sportsInjuriesFaqs}
        heading="Sports injury questions"
        subheading="Common questions about sports injury assessment and treatment."
      />

      <CTASection
        heading="Ready to get back to training?"
        subheading="Book a sports injury assessment and start with a clear picture of what's going on."
        primaryLabel="Book an Appointment"
        secondaryLabel="View all services"
      />
    </>
  )
}
