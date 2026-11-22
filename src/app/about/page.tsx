import { Metadata } from 'next'
import { Code, Heart, Users, Target, BookOpen, Lightbulb, MessageSquare, Mail } from 'lucide-react'
import { Container, Section } from '@/components/layout/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animations/ScrollReveal'
import { contactInfo } from '@/lib/constants'
import { whatsappUrl, mailtoUrl } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about RemzTech - handbuilt software solutions from Durban. Direct access to your engineer, transparent pricing, modern tech stack.',
}

const values = [
  { title: 'Handbuilt, Not Templated', icon: Code, description: 'Every line of code written for your specific needs. No AI generators, no cookie-cutter themes, no shortcuts.' },
  { title: 'Direct to Engineer', icon: Users, description: 'You work directly with the developer. No account managers, no middlemen, no communication breakdowns.' },
  { title: 'Transparent Pricing', icon: Target, description: 'Low, honest rates. No hidden fees. You approve scope before work begins. No surprise invoices.' },
  { title: '24/7 Availability', icon: Lightbulb, description: 'Something breaks? Need a change? One call/WhatsApp and I\'m on it. Your business doesn\'t wait.' },
  { title: 'Local & Personal', icon: Heart, description: 'Based in Durban, KwaZulu-Natal. We meet in person. We understand your market and your customers.' },
  { title: 'Modern Stack, Future-Proof', icon: BookOpen, description: 'TypeScript, React, Next.js, Tailwind, Cloud — built to scale with you, not hold you back.' },
]

const story = [
  { year: '2020', title: 'Started Freelancing', description: 'Built first custom apps for local businesses while studying. Learned that clients value direct communication over fancy processes.' },
  { year: '2022', title: 'Focused on Niches', description: 'Discovered restaurants, barbers, and healthcare had unique needs underserved by generic agencies. Doubled down.' },
  { year: '2023', title: 'Formed RemzTech', description: 'Official launch. Branded the "handbuilt" philosophy. Started building long-term partnerships, not one-off projects.' },
  { year: '2024', title: 'Scaling with Quality', description: '50+ projects delivered. Zero templates. Every client still gets direct access. Growing without losing what matters.' },
]

export default function AboutPage() {
  const whatsappHref = whatsappUrl(contactInfo.whatsapp, 'Hi! I\'d like to learn more about working with RemzTech.')
  const emailHref = mailtoUrl(contactInfo.email, 'Partnership Enquiry', 'Hi!\n\nI\'m interested in working with RemzTech...')

  return (
    <>
      <AboutHero whatsappHref={whatsappHref} emailHref={emailHref} />
      <PhilosophySection />
      <ValuesSection values={values} />
      <JourneySection story={story} />
      <TechStackSection />
      <AboutCTA whatsappHref={whatsappHref} emailHref={emailHref} />
    </>
  )
}
function AboutHero({ whatsappHref, emailHref }: { whatsappHref: string; emailHref: string }) {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-remz-white via-remz-muted-light/50 to-remz-white">
      <Container>
        <ScrollReveal direction="up" className="max-w-3xl">
          <Badge variant="primary" className="mb-6">About RemzTech</Badge>
          <h1 className="heading-1 mb-6 text-balance">
            Handbuilt Software.<br />
            <span className="gradient-text">Real Relationships.</span>
          </h1>
          <p className="body-lg text-remz-secondary/70 mb-8">
            I'm the engineer. You talk to me. No handoffs. No miscommunication. Just code that works.
          </p>
          <div className="flex flex-wrap items-center justify-start gap-4">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageSquare className="h-5 w-5" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>
            <a href={emailHref} className="btn-outline">
              <Mail className="h-5 w-5" aria-hidden="true" />
              <span>Email Me</span>
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
function PhilosophySection() {
  return (
    <Section id="philosophy">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal direction="left">
              <Badge variant="secondary" className="mb-4">My Philosophy</Badge>
              <h2 className="heading-2 mb-6">Why "Handbuilt" Matters</h2>
              <div className="space-y-4 text-remz-secondary/80">
                <p className="body-lg">
                  Most agencies put account managers between you and the code. You explain your vision to a salesperson, who tells a project manager, who briefs a developer. By the time code is written, your vision is diluted.
                </p>
                <p className="body-lg">
                  At RemzTech, <strong className="text-remz-secondary">you brief me directly.</strong> I ask the right questions. I push back when needed. I suggest better approaches. The code that ships is exactly what you need — often better than what you imagined.
                </p>
                <p className="body-lg">
                  This isn't just "better communication." It's fundamentally different economics: no middleman markup, no miscommunication rework, no scope creep from broken telephone.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-remz-primary to-remz-accent p-1">
                  <div className="w-full h-full rounded-[inherit] bg-remz-secondary p-8 flex items-center justify-center">
                    <Code className="h-24 w-24 text-remz-primary/20" aria-hidden="true" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-remz-white p-6 rounded-xl shadow-remz-xl border border-remz-muted/20 max-w-xs">
                  <p className="body text-remz-secondary/80">"Best developer experience I've had. Direct access meant we shipped in weeks what agencies quoted months for."</p>
                  <p className="font-medium text-remz-secondary mt-3">— Restaurant Owner, Durban</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}
function ValuesSection({ values }: { values: { title: string; icon: React.ComponentType<{ className?: string }>; description: string }[] }) {
  return (
    <Section id="values" background="muted">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="accent" className="mb-4">Core Values</Badge>
          <h2 className="heading-2 mb-4">What I Stand For</h2>
          <p className="body-lg text-remz-secondary/70">These aren't marketing words. They're how I work every day.</p>
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.1} className="grid-auto-fit">
          {values.map((value, index) => (
            <StaggerItem key={value.title} delay={index * 0.1}>
              <Card variant="hover-lift" className="h-full">
                <CardContent className="text-center p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-remz-primary-light text-remz-primary mb-5 mx-auto">
                    <value.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="heading-5 mb-3">{value.title}</h3>
                  <p className="body text-remz-secondary/70">{value.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
function JourneySection({ story }: { story: { year: string; title: string; description: string }[] }) {
  return (
    <Section id="journey">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">The Journey</Badge>
          <h2 className="heading-2 mb-4">How It Started</h2>
          <p className="body-lg text-remz-secondary/70">From freelance projects to a focused practice serving three industries.</p>
        </ScrollReveal>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-remz-muted/30 -translate-x-1/2" aria-hidden="true" />
          <StaggerContainer staggerDelay={0.15}>
            {story.map((item, index) => (
              <StaggerItem key={item.year} delay={index * 0.15}>
                <div className="relative flex mb-12">
                  <div className="w-1/2 pr-8 lg:pr-16 text-right">
                    <div className="flex justify-end">
                      <div className="relative z-10 flex w-full max-w-md flex-col items-end rounded-xl bg-remz-white p-6 shadow-remz-md border border-remz-muted/20">
                        <div className="mb-3 flex items-center gap-2 text-right">
                          <span className="font-display font-bold text-xl text-remz-primary">{item.year}</span>
                          <span className="flex h-3 w-3 rounded-full bg-remz-primary" aria-hidden="true" />
                        </div>
                        <h3 className="heading-5 mb-2 text-left">{item.title}</h3>
                        <p className="body text-remz-secondary/70 text-left">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 pl-8 lg:pl-16" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </Section>
  )
}

function TechStackSection() {
  const techStack = [
    { name: 'TypeScript', color: 'bg-blue-600' },
    { name: 'React', color: 'bg-cyan-500' },
    { name: 'Next.js', color: 'bg-slate-800' },
    { name: 'Tailwind CSS', color: 'bg-teal-500' },
    { name: 'PostgreSQL', color: 'bg-blue-700' },
    { name: 'Docker', color: 'bg-blue-500' },
    { name: 'AWS / Vercel', color: 'bg-orange-500' },
    { name: 'GitHub Actions', color: 'bg-gray-800' },
    { name: 'Node.js', color: 'bg-green-600' },
    { name: 'Prisma', color: 'bg-indigo-600' },
  ]

  return (
    <Section id="stack" background="muted">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="accent" className="mb-4">Tech Stack</Badge>
          <h2 className="heading-2 mb-4">Modern Tools, Boring Choices</h2>
          <p className="body-lg text-remz-secondary/70">I choose stable, well-supported technologies that will still be maintained in 5 years.</p>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-4xl mx-auto">
          {techStack.map((tech) => (
            <ScrollReveal key={tech.name} direction="up" className="text-center">
              <div className={`rounded-xl ${tech.color} text-white p-6 font-medium transition-transform hover:scale-105`}>
                {tech.name}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function AboutCTA({ whatsappHref, emailHref }: { whatsappHref: string; emailHref: string }) {
  return (
    <Section className="bg-remz-secondary text-remz-white">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto">
          <h2 className="heading-2 mb-6">Let's Build Something Together</h2>
          <p className="body-lg text-remz-white/70 mb-10">
            Whether you have a clear brief or just a problem to solve, let's talk. No pressure. No sales pitch.
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