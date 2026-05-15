'use client'

import { useState } from 'react'
import { serviceTypeOptions } from '@/content/physioSiteContent'
import DisclaimerNote from './DisclaimerNote'

type FormState = {
  name: string
  email: string
  phone: string
  serviceType: string
  preferredTime: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  serviceType: '',
  preferredTime: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-physio-sand rounded-2xl border border-physio-border p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-physio-clay-light border border-physio-border flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-7 h-7 text-physio-clay-dark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="font-bold text-physio-text text-xl mb-2">
          Message received
        </h3>
        <p className="text-physio-mid mb-4">
          In a real clinic, someone would be in touch soon to confirm your
          appointment.
        </p>
        <p className="text-physio-muted text-sm bg-physio-warm rounded-lg p-3 border border-physio-border">
          This is a demo form. No data has been sent or stored.
        </p>
        <button
          onClick={() => {
            setForm(initialState)
            setSubmitted(false)
          }}
          className="mt-5 text-physio-clay-dark text-sm font-semibold hover:text-physio-clay-hover transition-colors"
        >
          Reset form
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <DisclaimerNote variant="inline" />

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-physio-text mb-1.5"
          >
            Name <span className="text-physio-clay">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl border border-physio-border bg-white text-physio-text placeholder:text-physio-muted focus:outline-none focus:border-physio-clay-dark focus:ring-1 focus:ring-physio-clay-dark transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-physio-text mb-1.5"
          >
            Email <span className="text-physio-clay">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl border border-physio-border bg-white text-physio-text placeholder:text-physio-muted focus:outline-none focus:border-physio-clay-dark focus:ring-1 focus:ring-physio-clay-dark transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-physio-text mb-1.5"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(02) 0000 0000"
            className="w-full px-4 py-3 rounded-xl border border-physio-border bg-white text-physio-text placeholder:text-physio-muted focus:outline-none focus:border-physio-clay-dark focus:ring-1 focus:ring-physio-clay-dark transition-colors"
          />
        </div>

        {/* Service type */}
        <div>
          <label
            htmlFor="serviceType"
            className="block text-sm font-semibold text-physio-text mb-1.5"
          >
            Service type
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-physio-border bg-white text-physio-text focus:outline-none focus:border-physio-clay-dark focus:ring-1 focus:ring-physio-clay-dark transition-colors"
          >
            <option value="">Select a service type</option>
            {serviceTypeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Preferred time */}
      <div>
        <label
          htmlFor="preferredTime"
          className="block text-sm font-semibold text-physio-text mb-1.5"
        >
          Preferred appointment time
        </label>
        <input
          id="preferredTime"
          name="preferredTime"
          type="text"
          value={form.preferredTime}
          onChange={handleChange}
          placeholder="e.g. Mornings, Tuesday afternoons, flexible…"
          className="w-full px-4 py-3 rounded-xl border border-physio-border bg-white text-physio-text placeholder:text-physio-muted focus:outline-none focus:border-physio-clay-dark focus:ring-1 focus:ring-physio-clay-dark transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-physio-text mb-1.5"
        >
          Brief message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Briefly describe what you'd like help with (optional)"
          className="w-full px-4 py-3 rounded-xl border border-physio-border bg-white text-physio-text placeholder:text-physio-muted focus:outline-none focus:border-physio-clay-dark focus:ring-1 focus:ring-physio-clay-dark transition-colors resize-none"
        />
        <p className="text-xs text-physio-muted mt-1.5">
          Do not include private medical information in this demo form.
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-physio-clay-dark hover:bg-physio-clay-hover text-white py-4 rounded-xl font-bold text-base transition-colors shadow-sm"
      >
        Send Appointment Request
      </button>
    </form>
  )
}
