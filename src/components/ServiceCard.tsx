import Link from 'next/link'
import Icon from './Icon'
import type { Service } from '@/content/physioServices'
import type { ComponentProps } from 'react'

type IconName = ComponentProps<typeof Icon>['name']

interface ServiceCardProps {
  service: Service
  variant?: 'compact' | 'full'
}

export default function ServiceCard({
  service,
  variant = 'compact',
}: ServiceCardProps) {
  const bgClass =
    service.accentColor === 'teal'
      ? 'bg-physio-clay-light text-physio-clay-dark'
      : 'bg-physio-sand text-physio-clay-dark'

  if (variant === 'full') {
    return (
      <article className="bg-white rounded-2xl border border-physio-border p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 mb-4 ${bgClass}`}
        >
          <Icon name={service.icon as IconName} className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-physio-text text-xl mb-2">
          {service.name}
        </h3>
        <p className="text-physio-mid leading-relaxed mb-4 flex-1">
          {service.fullDescription}
        </p>

        <div className="mb-5">
          <p className="text-sm font-semibold text-physio-text mb-2">
            Who this helps:
          </p>
          <ul className="space-y-1.5">
            {service.whoFor.map((who) => (
              <li
                key={who}
                className="flex items-start gap-2 text-sm text-physio-mid"
              >
                <Icon
                  name="check"
                  className="w-4 h-4 text-physio-clay flex-shrink-0 mt-0.5"
                />
                {who}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/contact"
          className="mt-auto block w-full text-center bg-physio-clay-dark hover:bg-physio-clay-hover text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
        >
          Book an Appointment
        </Link>
      </article>
    )
  }

  return (
    <article className="bg-white rounded-2xl border border-physio-border p-5 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mb-4 ${bgClass}`}
      >
        <Icon name={service.icon as IconName} className="w-5 h-5" />
      </div>
      <h3 className="font-bold text-physio-text text-base mb-1.5">
        {service.name}
      </h3>
      <p className="text-physio-mid text-sm leading-relaxed flex-1">
        {service.shortDescription}
      </p>
      <Link
        href={service.href}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-physio-clay-dark hover:text-physio-clay-hover transition-colors"
        aria-label={`Learn more about ${service.name}`}
      >
        Learn more
        <Icon name="arrow-right" className="w-3.5 h-3.5" />
      </Link>
    </article>
  )
}
