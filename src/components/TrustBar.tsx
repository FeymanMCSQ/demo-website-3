import { trustBarItems } from '@/content/physioSiteContent'
import Icon from './Icon'
import type { ComponentProps } from 'react'

type IconName = ComponentProps<typeof Icon>['name']

export default function TrustBar() {
  return (
    <section className="bg-physio-sand border-y border-physio-border py-10">
      <div className="container-pad">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBarItems.map((item) => (
            <li key={item.title} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-physio-border flex items-center justify-center flex-shrink-0 shadow-sm">
                <Icon
                  name={item.icon as IconName}
                  className="w-5 h-5 text-physio-clay-dark"
                />
              </div>
              <div>
                <p className="font-semibold text-physio-text text-sm">
                  {item.title}
                </p>
                <p className="text-physio-muted text-sm mt-0.5">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
