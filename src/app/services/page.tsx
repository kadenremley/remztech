import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Container, Section } from '@/components/layout/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal'
import { services, Service } from '@/lib/services'
import { Icon } from '@/lib/icons'
import { contactInfo } from '@/lib/constants'
import { whatsappUrl } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Services',
  description: 'RemzTech services: Software Development, IT Consulting, Cybersecurity, Cloud Solutions, Managed Services, Custom Apps. Handbuilt solutions for restaurants, barbers, and healthcare.',
}

export default function ServicesPage() {
  const whatsappHref = whatsappUrl(contactInfo.whatsapp, 'Hi! I\'m interested in your services. Can we discuss my project?')

  return (
    <>
      <ServicesHero whatsappHref={whatsappHref} />
      <ServicesGrid services={services} />
      <ServicesCTA whatsappHref={whatsappHref} />
    </>
  )
}

function ServicesHero({ whatsappHref }: { whatsappHref: string }) {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-remz-white via-remz-muted-light/50 to-remz-white">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto">
          <Badge variant="primary" className="mb-6">Our Services</Badge>
          <h1 className="heading-1 mb-6 text-balance">
            Six Services.<br />
            <span className="gradient-text">One Partner.</span>
          </h1>
          <p className="body-lg text-remz-secondary/70 mb-10 max-w-2xl mx-auto">
            No packages. No upsells. Just the right solution for your problem — built directly by your engineer.
          </p>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-8 py-4 text-fluid-lg">
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
            <span>Discuss Your Project on WhatsApp</span>
          </a>
        </ScrollReveal>
      </Container>
    </section>
  )
}

function ServicesGrid({ services }: { services: readonly Service[] }) {
  return (
    <Section id="services">
      <Container>
        <StaggerContainer staggerDelay={0.1} className="grid-auto-fit">
          {services.map((service, index) => (
            <StaggerItem key={service.slug} delay={index * 0.1}>
              <Link href={`/services/${service.slug}`}>
                <Card variant="hover-lift" className="h-full group">
                  <CardContent className="flex flex-col h-full p-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-remz-primary-light text-remz-primary mb-6 group-hover:scale-110 transition-transform duration-fluid-normal">
                      <Icon name={service.icon} className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <h3 className="heading-4 mb-3 group-hover:text-remz-primary transition-colors">{service.title}</h3>
                    <p className="body text-remz-secondary/60 mb-6 flex-1">{service.shortDesc}</p>
                    <ul className="space-y-3 mb-8" role="list">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-fluid-base text-remz-secondary/70">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-remz-primary mt-0.5" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-remz-primary font-medium group-hover:gap-3 transition-all duration-fluid-fast">
                      <span>{service.ctaText}</span>
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </div>
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

function ServicesCTA({ whatsappHref }: { whatsappHref: string }) {
  return (
    <Section className="bg-remz-secondary text-remz-white">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto">
          <h2 className="heading-2 mb-6">Not Sure What You Need?</h2>
          <p className="body-lg text-remz-white/70 mb-10">
            Most clients don't. Let's talk about your problem and I'll recommend the right approach.
          </p>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-8 py-4 text-fluid-lg">
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
            <span>Get Free Advice on WhatsApp</span>
          </a>
        </ScrollReveal>
      </Container>
    </Section>
  )
}