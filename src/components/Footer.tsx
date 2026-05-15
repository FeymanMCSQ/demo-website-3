import Link from 'next/link'
import Icon from './Icon'
import { contactInfo } from '@/content/physioSiteContent'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Sports Injuries', href: '/sports-injuries' },
  { label: 'Back & Neck Pain', href: '/back-neck-pain' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const serviceLinks = [
  { label: 'Sports Injuries', href: '/sports-injuries' },
  { label: 'Back & Neck Pain', href: '/back-neck-pain' },
  { label: 'Posture & Desk Pain', href: '/services' },
  { label: 'Rehab & Strength', href: '/services' },
  { label: 'Work-Related Injuries', href: '/services' },
  { label: 'Mobility Assessments', href: '/services' },
]

export default function Footer() {
  return (
    <footer className="bg-physio-text text-white">
      <div className="container-pad py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <div className="mb-4">
              <p className="font-bold text-lg leading-tight">Parramatta</p>
              <p className="text-physio-clay text-sm font-medium leading-tight">
                Physio &amp; Rehab
              </p>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Physiotherapy and rehabilitation support for Parramatta and
              Western Sydney.
            </p>
            <p className="mt-3 text-white/30 text-xs leading-relaxed">
              Fictional concept website — not a real clinic.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-semibold text-sm mb-4 text-white/70 uppercase tracking-wide">
              Pages
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-sm mb-4 text-white/70 uppercase tracking-wide">
              Services
            </p>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-sm mb-4 text-white/70 uppercase tracking-wide">
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Icon
                  name="phone"
                  className="w-4 h-4 text-physio-clay flex-shrink-0 mt-0.5"
                />
                <span className="text-white/55 text-sm">
                  {contactInfo.phone}{' '}
                  {contactInfo.phonePlaceholder && (
                    <span className="text-white/25">(placeholder)</span>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon
                  name="email"
                  className="w-4 h-4 text-physio-clay flex-shrink-0 mt-0.5"
                />
                <span className="text-white/55 text-sm break-all">
                  {contactInfo.email}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon
                  name="map-pin"
                  className="w-4 h-4 text-physio-clay flex-shrink-0 mt-0.5"
                />
                <span className="text-white/55 text-sm">
                  {contactInfo.address}
                </span>
              </li>
            </ul>

            <div className="mt-5">
              <p className="text-white/40 text-xs font-medium uppercase tracking-wide mb-2">
                Hours
              </p>
              <ul className="space-y-1">
                {contactInfo.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between gap-4 text-xs text-white/40"
                  >
                    <span>{h.day}</span>
                    <span>{h.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/25 text-xs mt-1">(placeholder hours)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-pad py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            © {new Date().getFullYear()} Parramatta Physio &amp; Rehab. All
            content is fictional.
          </p>
          <p className="text-white/35 text-xs text-center sm:text-right">
            Concept demo website built for portfolio purposes. This is not a
            real clinic and does not provide medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
