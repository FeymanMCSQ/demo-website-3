'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Icon from './Icon'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Sports Injuries', href: '/sports-injuries' },
  { label: 'Back & Neck Pain', href: '/back-neck-pain' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-physio-border">
      <div className="container-pad">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            aria-label="Parramatta Physio & Rehab — home"
          >
            <span className="font-bold text-physio-text text-base leading-tight group-hover:text-physio-clay-dark transition-colors">
              Parramatta
            </span>
            <span className="text-physio-clay text-sm font-medium leading-tight">
              Physio &amp; Rehab
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'text-physio-clay-dark bg-physio-sand'
                      : 'text-physio-mid hover:text-physio-clay-dark hover:bg-physio-sand'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-physio-clay-dark hover:bg-physio-clay-hover text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-sm"
          >
            Book Appointment
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-physio-text hover:bg-physio-sand transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4 border-t border-physio-border mt-0">
            <nav className="flex flex-col gap-1 pt-3" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const active =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-2.5 rounded-lg font-medium transition-colors ${
                      active
                        ? 'text-physio-clay-dark bg-physio-sand'
                        : 'text-physio-mid hover:text-physio-clay-dark hover:bg-physio-sand'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="pt-3 px-0">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block w-full bg-physio-clay-dark hover:bg-physio-clay-hover text-white px-5 py-3 rounded-xl text-sm font-semibold text-center transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Mobile sticky CTA bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white border-t border-physio-border">
        <Link
          href="/contact"
          className="block w-full bg-physio-clay-dark hover:bg-physio-clay-hover text-white py-3 rounded-xl text-sm font-semibold text-center transition-colors shadow-md"
        >
          Book an Appointment
        </Link>
      </div>
    </header>
  )
}
