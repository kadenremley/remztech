import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, MessageSquare, Mail, Zap } from 'lucide-react'
import { Container, Section } from '@/components/layout/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal'
import { trustSignals } from '@/lib/constants'
import { services, Service } from '@/lib/services'
import { Icon } from '@/lib/icons'
import { whatsappUrl } from '@/lib/utils'
import { contactInfo } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Handbuilt Software Solutions',
  description: 'RemzTech delivers custom software, IT consulting, cybersecurity, cloud solutions, managed services & custom apps. Direct access to your engineer. Based in Durban, South Africa.',
}

const serviceExamples = {
  'software-development': [
    { title: 'Customer Portal', desc: 'Self-service portal for your clients to view orders, invoices, and support tickets.' },
    { title: 'Internal Dashboard', desc: 'Real-time KPI tracking for your team — sales, operations, inventory in one view.' },
    { title: 'Mobile App', desc: 'Cross-platform app for your customers or field staff, built with React Native.' },
  ],
  'it-consulting': [
    { title: 'Architecture Review', desc: 'Assess your current stack, identify bottlenecks, and plan a scalable future state.' },
    { title: 'Cloud Migration Plan', desc: 'Step-by-step roadmap to move workloads to AWS/Azure with zero downtime.' },
    { title: 'Vendor Selection', desc: 'Unbiased evaluation of tools and platforms — we don\'t take commissions.' },
  ],
  'cybersecurity': [
    { title: 'Vulnerability Assessment', desc: 'Automated scanning + manual review to find security gaps before attackers do.' },
    { title: 'Staff Security Training', desc: 'Phishing simulations and awareness workshops tailored to your industry.' },
    { title: 'POPIA Compliance Audit', desc: 'Gap analysis and implementation plan for South African data protection law.' },
  ],
  'cloud-solutions': [
    { title: 'Serverless API', desc: 'Scalable, cost-effective APIs on AWS Lambda or Cloudflare Workers.' },
    { title: 'Container Platform', desc: 'Docker + Kubernetes setup with CI/CD, monitoring, and auto-scaling.' },
    { title: 'Cost Optimization', desc: 'Rightsizing, reserved instances, and serverless migration to cut cloud spend 30-50%.' },
  ],
  'managed-services': [
    { title: '24/7 Monitoring', desc: 'Infrastructure and application alerts routed directly to your engineer.' },
    { title: 'Automated Backups', desc: 'Encrypted, tested, off-site backups with documented recovery procedures.' },
    { title: 'Monthly Health Reports', desc: 'Performance trends, security patches applied, capacity planning insights.' },
  ],
  'custom-apps': [
    { title: 'Booking & Scheduling', desc: 'Industry-specific booking (restaurants, barbers, clinics) with WhatsApp reminders.' },
    { title: 'POS & Inventory', desc: 'Point of sale with real-time stock, multi-location transfers, and supplier integration.' },
    { title: 'Client Portal', desc: 'White-label portal for your customers — orders, invoices, support, analytics.' },
  ],
}

export default function HomePage() {
  const whatsappHref = whatsappUrl(contactInfo.whatsapp, 'Hi! I\'m interested in your services. Can we chat about my project?')

  return (
    <>
      <HeroSection whatsappHref={whatsappHref} />
      <VisionCapabilityTrust />
      <ServicesWithExamples services={services} />
      <CTASection whatsappHref={whatsappHref} />
    </>
  )
}
function HeroSection({ whatsappHref }: { whatsappHref: string }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-remz-white via-remz-muted-light/50 to-remz-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-remz-primary/5 via-transparent to-transparent" aria-hidden="true" />
      <Container>
        <ScrollReveal direction="up" delay={0.1} className="text-center max-w-4xl mx-auto px-4">
          <Badge variant="primary" className="mb-6 animate-in stagger-1">
            <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="animate-pulse rounded-full h-2 w-2 bg-remz-primary" />
            </span>
            Handbuilt in Durban, South Africa
          </Badge>
          <h1 className="heading-1 mb-6 animate-in stagger-2 text-balance">
            Handbuilt Software.{' '}
            <span className="gradient-text">Direct Access.</span>{' '}
            Smarter Futures.
          </h1>
          <p className="body-lg mb-10 animate-in stagger-3 max-w-2xl mx-auto text-remz-secondary/70">
            Custom software development, IT consulting, cybersecurity, cloud solutions & managed services.
            No templates. No middlemen. You work directly with the engineer — 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in stagger-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-8 py-4 text-fluid-lg"
            >
              <MessageSquare className="h-6 w-6" aria-hidden="true" />
              <span>Start a Project on WhatsApp</span>
            </a>
            <Link href="/services" className="btn-outline px-8 py-4 text-fluid-lg">
              View Services
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.6} className="mt-16">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-remz-secondary/60">
            {trustSignals.map((signal, index) => (
              <div key={signal.title} className="flex items-center gap-2 text-fluid-sm animate-in" style={{ animationDelay: `${index * 100}ms` }}>
                <span className="flex h-5 w-5 items-center justify-center text-remz-primary">
                  <CheckCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>{signal.title}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-remz-primary/10 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-remz-accent/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-5 h-24 w-24 rounded-full bg-remz-amber/10 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </section>
  )
}
function VisionCapabilityTrust() {
  return (
    <Section id="vct" background="muted">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="accent" className="mb-4">Our Foundation</Badge>
          <h2 className="heading-2 mb-4">Vision. Capability. Trust.</h2>
          <p className="body-lg text-remz-secondary/70">
            Three pillars that define every engagement. Not marketing — just how we work.
          </p>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.15} className="grid gap-6 md:grid-cols-3">
          {trustSignals.map((signal, index) => (
            <StaggerItem key={signal.title} delay={index * 0.15}>
              <Card variant="hover-lift" className="h-full text-center p-8 border-remz-primary/20">
                <CardContent>
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-remz-primary-light text-remz-primary mb-6 mx-auto">
                    <Icon name={signal.icon} className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="heading-4 mb-3">{signal.title}</h3>
                  <p className="body text-remz-secondary/70">{signal.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}

function ServicesWithExamples({ services }: { services: readonly Service[] }) {
  return (
    <Section id="services">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">Our Services</Badge>
          <h2 className="heading-2 mb-4">What We Can Build For You</h2>
          <p className="body-lg text-remz-secondary/70">
            Six core services. Each with concrete examples of what we can deliver for your business.
          </p>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.1} className="grid-auto-fit">
          {services.map((service, index) => (
            <StaggerItem key={service.slug} delay={index * 0.1}>
              <Link href={`/services/${service.slug}`}>
                <Card variant="hover-lift" className="h-full group border-remz-primary/20">
                  <CardContent className="flex flex-col h-full p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-remz-primary-light text-remz-primary mb-4 group-hover:scale-110 transition-transform duration-fluid-normal">
                      <Icon name={service.icon} className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="heading-5 mb-2 group-hover:text-remz-primary transition-colors">{service.title}</h3>
                    <p className="body text-remz-secondary/60 mb-4 flex-1">{service.shortDesc}</p>
                    <ul className="space-y-2 mb-6" role="list">
                      {serviceExamples[service.slug]?.slice(0, 2).map((example) => (
                        <li key={example.title} className="flex items-start gap-2 text-fluid-sm text-remz-secondary/70">
                          <Zap className="h-4 w-4 flex-shrink-0 text-remz-accent mt-0.5" aria-hidden="true" />
                          <span><strong>{example.title}:</strong> {example.desc}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-remz-primary font-medium group-hover:gap-3 transition-all duration-fluid-fast">
                      <span>{service.ctaText}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center mt-12">
          <ScrollReveal direction="up" delay={0.3}>
            <Link href="/services" className="btn-primary px-8 py-4 text-fluid-lg">
              View All Services
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  )
}

function CTASection({ whatsappHref }: { whatsappHref: string }) {
  return (
    <Section className="bg-remz-secondary text-remz-white">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto">
          <h2 className="heading-2 mb-6">Ready to Build Something Great?</h2>
          <p className="body-lg text-remz-white/70 mb-10">
            Let's discuss your project. No pressure. No sales pitch. Just a conversation about what you need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-8 py-4 text-fluid-lg w-full sm:w-auto"
            >
              <MessageSquare className="h-6 w-6" aria-hidden="true" />
              <span>WhatsApp Me Now</span>
            </a>
            <Link href="/contact" className="btn-outline border-remz-white text-remz-white hover:bg-remz-white/10 px-8 py-4 text-fluid-lg w-full sm:w-auto">
              <Mail className="h-5 w-5" aria-hidden="true" />
              <span>Email Instead</span>
            </Link>
          </div>
          <p className="caption text-remz-white/50 mt-6">
            Available 24/7. Based in Durban, KwaZulu-Natal. Serving clients across South Africa.
          </p>
        </ScrollReveal>
      </Container>
    </Section>
  )
}