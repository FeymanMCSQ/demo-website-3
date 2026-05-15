import { services } from '@/content/physioServices'
import ServiceCard from './ServiceCard'
import SectionHeading from './SectionHeading'

interface ServicesGridProps {
  variant?: 'compact' | 'full'
  limit?: number
}

export default function ServicesGrid({
  variant = 'compact',
  limit,
}: ServicesGridProps) {
  const displayed = limit ? services.slice(0, limit) : services

  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <SectionHeading
          badge="What we offer"
          heading="Services built around your movement goals"
          subheading="From acute sports injuries to desk-related discomfort, assessment and support across a range of everyday and active concerns."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((service) => (
            <ServiceCard key={service.id} service={service} variant={variant} />
          ))}
        </div>
      </div>
    </section>
  )
}
