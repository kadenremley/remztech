import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container, Section } from '@/components/layout/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal'
import { industries, getIndustryById } from '@/lib/industries'
import { Icon } from '@/lib/icons'
import { contactInfo } from '@/lib/constants'
import { whatsappUrl } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'My Journey',
  description: 'RemzTech portfolio - case studies for restaurants, barber shops, and healthcare.',
}

const caseStudies = [
  { id: 'pos-system-restaurant', title: 'Custom POS & Kitchen Display System', industry: 'restaurants', client: 'The Grill House', location: 'Durban North', featured: true },
  { id: 'booking-app-barber', title: 'Booking & Client Management App', industry: 'barbers', client: 'Fade Masters', location: 'Umhlanga', featured: true },
  { id: 'patient-portal-clinic', title: 'Patient Portal & Practice Management', industry: 'healthcare', client: 'Umhlanga Medical Centre', location: 'Umhlanga', featured: true },
  { id: 'inventory-restaurant-chain', title: 'Multi-Location Inventory System', industry: 'restaurants', client: 'Spice Route Group', location: 'Multiple KZN Locations', featured: false },
  { id: 'loyalty-barber-chain', title: 'Loyalty & Retail POS System', industry: 'barbers', client: 'Classic Cuts', location: '3 Locations - Durban', featured: false },
  { id: 'telehealth-platform', title: 'Integrated Telehealth Platform', industry: 'healthcare', client: 'KZN Specialist Network', location: 'Pietermaritzburg & Durban', featured: false },
]

export default function JourneyPage() {
  const whatsappHref = whatsappUrl(contactInfo.whatsapp, 'Hi! I saw your case studies and would like to discuss a similar project.')
  return <> <JourneyHero whatsappHref={whatsappHref} /> <IndustryFilters /> <CaseStudiesGrid caseStudies={caseStudies} /> <JourneyCTA whatsappHref={whatsappHref} /> </>
}

function JourneyHero({ whatsappHref }: { whatsappHref: string }) {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-remz-white via-remz-muted-light/50 to-remz-white">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto">
          <Badge variant="primary" className="mb-6">My Journey</Badge>
          <h1 className="heading-1 mb-6 text-balance">Real Projects.<br /><span className="gradient-text">Real Results.</span></h1>
          <p className="body-lg text-remz-secondary/70 mb-10 max-w-2xl mx-auto">Six case studies across three industries. Every project handbuilt, every client gets direct access.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-8 py-4 text-fluid-lg"><ArrowRight className="h-5 w-5" aria-hidden="true" /><span>Discuss Your Project</span></a>
            <Link href="/services" className="btn-outline px-8 py-4 text-fluid-lg">View Services<ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
function IndustryFilters() {
  return (
    <Section className="bg-remz-white border-y border-remz-muted/20 py-8">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-3" role="group" aria-label="Filter by industry">
          <Button variant="ghost" className="whitespace-nowrap" aria-pressed="true">All Projects</Button>
          {industries.map((industry) => (
            <Button key={industry.id} variant="ghost" className="whitespace-nowrap gap-2">
              <Icon name={industry.icon} className="h-4 w-4" aria-hidden="true" />
              {industry.label}
            </Button>
          ))}
        </div>
      </Container>
    </Section>
  )
}

interface CaseStudy {
  id: string
  title: string
  industry: string
  client: string
  location: string
  featured: boolean
}

function CaseStudiesGrid({ caseStudies }: { caseStudies: readonly CaseStudy[] }) {
  return (
    <Section id="case-studies">
      <Container>
        <StaggerContainer staggerDelay={0.1} className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <StaggerItem key={study.id} delay={index * 0.1}>
              <Link href={`/journey/${study.id}`} className="block">
                <Card variant="hover-lift" className="h-full overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-remz-primary/20 to-remz-accent/20">
                    <Icon name={study.industry === 'restaurants' ? 'UtensilsCrossed' : study.industry === 'barbers' ? 'Scissors' : 'HeartPulse'} className="absolute top-4 right-4 h-12 w-12 text-remz-primary/30" aria-hidden="true" />
                    {study.featured && <Badge variant="primary" className="absolute top-4 left-4">Featured</Badge>}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="capitalize">{getIndustryById(study.industry)?.label || study.industry}</Badge>
                      <span className="text-remz-secondary/50 text-fluid-sm">•</span>
                      <span className="text-remz-secondary/50 text-fluid-sm">{study.location}</span>
                    </div>
                    <h3 className="heading-4 mb-2 group-hover:text-remz-primary transition-colors">{study.title}</h3>
                    <p className="body text-remz-secondary/60 mb-4 line-clamp-2">Case study description</p>
                    <div className="flex items-center gap-2 text-remz-primary font-medium"><span>View Case Study</span><ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" /></div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}

function JourneyCTA({ whatsappHref }: { whatsappHref: string }) {
  return (
    <Section className="bg-remz-secondary text-remz-white">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto">
          <h2 className="heading-2 mb-6">Have a Similar Challenge?</h2>
          <p className="body-lg text-remz-white/70 mb-10">Every business is unique. Let's talk about your specific problem and design a solution that fits.</p>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-8 py-4 text-fluid-lg"><ArrowRight className="h-5 w-5" aria-hidden="true" /><span>Start a Conversation on WhatsApp</span></a>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
