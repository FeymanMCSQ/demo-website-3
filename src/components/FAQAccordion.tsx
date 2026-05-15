'use client'

import { useState } from 'react'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  heading?: string
  subheading?: string
}

function FAQItem({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false)
  const id = `faq-${index}`

  return (
    <div className="border border-physio-border rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-physio-warm transition-colors"
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="font-semibold text-physio-text pr-4">
          {item.question}
        </span>
        <Icon
          name={open ? 'chevron-up' : 'chevron-down'}
          className="w-5 h-5 text-physio-clay flex-shrink-0"
        />
      </button>
      {open && (
        <div id={id} role="region">
          <div className="px-6 pb-5 pt-2 border-t border-physio-border">
            <p className="text-physio-mid leading-relaxed">{item.answer}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function FAQAccordion({
  items,
  heading = 'Common questions',
  subheading = 'Answers to things people often want to know before booking.',
}: FAQAccordionProps) {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <SectionHeading
          badge="FAQ"
          heading={heading}
          subheading={subheading}
        />

        <div className="mt-10 max-w-3xl mx-auto space-y-3">
          {items.map((item, index) => (
            <FAQItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
