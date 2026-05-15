import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ServicesGrid from '@/components/ServicesGrid'
import WhoWeHelp from '@/components/WhoWeHelp'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProcessSteps from '@/components/ProcessSteps'
import SportsTease from '@/components/SportsTease'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'
import { homepageFaqs } from '@/content/physioSiteContent'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid variant="compact" limit={6} />
      <WhoWeHelp />
      <WhyChooseUs />
      <ProcessSteps />
      <SportsTease />
      <FAQAccordion items={homepageFaqs} />
      <CTASection />
    </>
  )
}
