import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, MessageSquare, Mail } from 'lucide-react'
import { Container, Section } from '@/components/layout/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { getServiceBySlug, getAllServiceSlugs, type Service } from '@/lib/services'
import { Icon } from '@/lib/icons'
import { contactInfo } from '@/lib/constants'
import { whatsappUrl, mailtoUrl } from '@/lib/utils'

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const service = getServiceBySlug(resolvedParams.slug)
  if (!service) return { title: 'Service Not Found' }
  return { title: service.title, description: service.shortDesc }
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const resolvedParams = await params
  const service = getServiceBySlug(resolvedParams.slug)
  if (!service) notFound()

  const whatsappHref = whatsappUrl(contactInfo.whatsapp, `Hi! I'm interested in ${service.title}. Can we discuss my project?`)
  const emailHref = mailtoUrl(contactInfo.email, `${service.title} Enquiry`, `Hi!\n\nI'm interested in your ${service.title} service...`)

  return (
    <>
      <ServiceHero service={service} whatsappHref={whatsappHref} emailHref={emailHref} />
      <ServiceFeatures service={service} />
      <ServiceProcess />
      <ServiceIndustries />
      <ServiceCTA service={service} whatsappHref={whatsappHref} emailHref={emailHref} />
    </>
  )
}

function ServiceHero({ service, whatsappHref, emailHref }: { service: Service; whatsappHref: string; emailHref: string }) {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-remz-white via-remz-muted-light/50 to-remz-white">
      <Container>
        <ScrollReveal direction="up" className="max-w-3xl">
          <Badge variant="primary" className="mb-6">{service.title}</Badge>
          <h1 className="heading-1 mb-6 text-balance">{service.shortDesc}</h1>
          <div className="flex flex-wrap items-center justify-start gap-4">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageSquare className="h-5 w-5" aria-hidden="true" />
              <span>Discuss on WhatsApp</span>
            </a>
            <a href={emailHref} className="btn-outline">
              <Mail className="h-5 w-5" aria-hidden="true" />
              <span>Email Enquiry</span>
            </a>
            <Link href="/services" className="btn-ghost">
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              <span>All Services</span>
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2} className="mt-12">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-remz-primary-light text-remz-primary mx-auto lg:mx-0">
            <Icon name={service.icon} className="h-12 w-12" aria-hidden="true" />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
function ServiceFeatures({ service }: { service: Service }) {
  return (
    <Section id="features">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">What's Included</Badge>
          <h2 className="heading-2 mb-4">Everything You Need</h2>
          <p className="body-lg text-remz-secondary/70">No hidden extras. No "enterprise only" features. Just complete solutions.</p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {service.features.map((feature, index) => (
            <ScrollReveal key={feature} direction="up" delay={index * 0.1} className="text-center">
              <Card variant="bordered" className="p-6 h-full">
                <CardContent className="text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-remz-primary-light text-remz-primary mb-4 mx-auto">
                    <CheckCircle className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="heading-5 mb-2">{feature}</h3>
                  <p className="body-sm text-remz-secondary/60">Included as standard</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function ServiceProcess() {
  const steps = [
    { number: '01', title: 'Discovery Call', description: '15-30 min on WhatsApp/Call. Understand your problem, constraints, and goals.' },
    { number: '02', title: 'Proposal & Scope', description: 'Clear, fixed-price proposal with timeline. No vague estimates. You approve before we start.' },
    { number: '03', title: 'Build & Iterate', description: 'Weekly updates. Direct access for feedback. Changes welcome — it\'s your project.' },
    { number: '04', title: 'Launch & Support', description: 'Deploy to production. 30 days free support. Then optional managed services.' },
  ]

  return (
    <Section id="process" background="muted">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="accent" className="mb-4">How It Works</Badge>
          <h2 className="heading-2 mb-4">Simple, Transparent Process</h2>
          <p className="body-lg text-remz-secondary/70">No mystery. No surprises. Just clear steps from idea to running software.</p>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-remz-primary/30 -translate-x-1/2 hidden lg:block" aria-hidden="true" />
          <div className="space-y-12">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.15} className="relative flex gap-8 lg:gap-16">
                <div className="flex w-1/2 lg:w-1/2 items-center justify-center lg:justify-end pr-8 lg:pr-16">
                  <div className="relative z-10 flex w-full max-w-md flex-col items-end lg:items-start rounded-xl bg-remz-white p-6 shadow-remz-md border border-remz-muted/20">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="font-display font-bold text-2xl text-remz-primary">{step.number}</span>
                      <span className="flex h-4 w-4 rounded-full bg-remz-primary self-center" aria-hidden="true" />
                    </div>
                    <h3 className="heading-5 mb-2">{step.title}</h3>
                    <p className="body text-remz-secondary/70">{step.description}</p>
                  </div>
                </div>
                <div className="flex w-1/2 lg:w-1/2" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
function ServiceIndustries() {
  const industries = [
    { name: 'Restaurants & Hospitality', icon: 'UtensilsCrossed', description: 'POS, ordering, inventory, scheduling' },
    { name: 'Barber Shops & Salons', icon: 'Scissors', description: 'Booking, client management, POS, loyalty' },
    { name: 'Healthcare & Clinics', icon: 'HeartPulse', description: 'Patient portal, appointments, POPIA compliance' },
  ]

  return (
    <Section id="industries">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">Industry Applications</Badge>
          <h2 className="heading-2 mb-4">How This Service Helps Your Industry</h2>
          <p className="body-lg text-remz-secondary/70">Tailored solutions for your specific workflow challenges.</p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.name} direction="up" delay={index * 0.1}>
              <Card variant="hover-lift" className="p-6">
                <CardContent className="text-center">
                  <Icon name={industry.icon} className="h-12 w-12 text-remz-primary mb-4 mx-auto" aria-hidden="true" />
                  <h3 className="heading-5 mb-2">{industry.name}</h3>
                  <p className="body-sm text-remz-secondary/60">{industry.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function ServiceCTA({ service, whatsappHref, emailHref }: { service: Service; whatsappHref: string; emailHref: string }) {
  return (
    <Section className="bg-remz-secondary text-remz-white">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto">
          <h2 className="heading-2 mb-6">Ready to Start Your {service.title} Project?</h2>
          <p className="body-lg text-remz-white/70 mb-10">
            Let's discuss your requirements. Free consultation. No obligation. Direct to engineer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-8 py-4 text-fluid-lg w-full sm:w-auto">
              <MessageSquare className="h-6 w-6" aria-hidden="true" />
              <span>WhatsApp Me</span>
            </a>
            <a href={emailHref} className="btn-outline border-remz-white text-remz-white hover:bg-remz-white/10 px-8 py-4 text-fluid-lg w-full sm:w-auto">
              <Mail className="h-5 w-5" aria-hidden="true" />
              <span>Email Instead</span>
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}