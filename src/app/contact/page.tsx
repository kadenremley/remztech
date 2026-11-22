import { Metadata } from 'next'
import { MessageSquare, Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'
import { Container, Section } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Input, Textarea } from '@/components/ui/Input'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { contactInfo } from '@/lib/constants'
import { whatsappUrl, mailtoUrl } from '@/lib/utils'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact RemzTech - WhatsApp, email, or phone. Based in Durban, KwaZulu-Natal. Available 24/7.',
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  industry: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  honeypot: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const whatsappHref = whatsappUrl(contactInfo.whatsapp, 'Hi! I\'d like to discuss a project with RemzTech.')
  const emailHref = mailtoUrl(contactInfo.email, 'Project Enquiry', 'Hi!\n\nI\'m interested in working with RemzTech...')

  return (
    <>
      <ContactHero whatsappHref={whatsappHref} emailHref={emailHref} />
      <ContactMethods whatsappHref={whatsappHref} emailHref={emailHref} />
      <ContactForm />
      <ContactCTA whatsappHref={whatsappHref} emailHref={emailHref} />
    </>
  )
}

function ContactHero({ whatsappHref, emailHref }: { whatsappHref: string; emailHref: string }) {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-remz-white via-remz-muted-light/50 to-remz-white">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto">
          <Badge variant="primary" className="mb-6">Get In Touch</Badge>
          <h1 className="heading-1 mb-6 text-balance">Let's Build <span className="gradient-text">Something Great.</span></h1>
          <p className="body-lg text-remz-secondary/70 mb-10 max-w-2xl mx-auto">No contact forms that go to a black hole. Message me directly on WhatsApp, email, or call. I respond personally — usually within minutes.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-8 py-4 text-fluid-lg"><MessageSquare className="h-6 w-6" aria-hidden="true" /><span>WhatsApp Me Now</span></a>
            <a href={emailHref} className="btn-outline px-8 py-4 text-fluid-lg"><Mail className="h-5 w-5" aria-hidden="true" /><span>Email Instead</span></a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}

function ContactMethods({ whatsappHref, emailHref }: { whatsappHref: string; emailHref: string }) {
  const methods = [
    { icon: MessageSquare, label: 'WhatsApp (Fastest)', href: whatsappHref, external: true, color: 'bg-green-600 hover:bg-green-700' },
    { icon: Mail, label: 'Email', href: emailHref, external: false, color: 'bg-remz-primary hover:bg-remz-primary-hover' },
    { icon: Phone, label: 'Phone Call', href: `tel:${contactInfo.phone.replace(/\s/g, '')}`, external: false, color: 'bg-remz-secondary hover:bg-remz-secondary-hover' },
    { icon: MapPin, label: 'In Person (Durban)', href: '#', external: false, color: 'bg-remz-accent hover:bg-remz-accent-hover' },
  ]
  return (
    <Section id="methods" background="muted">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="accent" className="mb-4">Ways to Connect</Badge>
          <h2 className="heading-2 mb-4">Choose What Works for You</h2>
          <p className="body-lg text-remz-secondary/70">Every route leads to the same place: a conversation with your engineer.</p>
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((method, index) => (
            <ScrollReveal key={method.label} direction="up" delay={index * 0.1}>
              <a href={method.href} target={method.external ? '_blank' : undefined} rel={method.external ? 'noopener noreferrer' : undefined} className="block">
                <Card variant="hover-lift" className="h-full text-center p-6 border-remz-primary/20">
                  <CardContent>
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${method.color} text-white mb-4 mx-auto`}><method.icon className="h-7 w-7" aria-hidden="true" /></div>
                    <h3 className="heading-5 mb-2">{method.label}</h3>
                    {method.external ? <Badge variant="primary">Opens in new tab</Badge> : method.href.startsWith('tel:') ? <Badge variant="secondary">Opens phone dialer</Badge> : <Badge variant="secondary">Opens email client</Badge>}
                  </CardContent>
                </Card>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { honeypot: '' },
  })
  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) return
    const mailtoLink = mailtoUrl(contactInfo.email, `New Contact: ${data.name}`, `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nIndustry: ${data.industry || 'N/A'}\nService: ${data.service || 'N/A'}\n\nMessage:\n${data.message}`)
    window.location.href = mailtoLink
    reset()
  }
  return (
    <Section id="form">
      <Container>
        <div className="max-w-2xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Send a Message</Badge>
            <h2 className="heading-2 mb-4">Prefer a Form?</h2>
            <p className="body-lg text-remz-secondary/70">Fill this out and I'll get back to you personally. No auto-responders.</p>
          </ScrollReveal>
          <Card variant="bordered" className="p-6">
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input label="Name *" placeholder="Your name" error={errors.name?.message} {...register('name')} required autoComplete="name" />
                  <Input label="Email *" type="email" placeholder="you@example.com" error={errors.email?.message} {...register('email')} required autoComplete="email" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input label="Phone (Optional)" type="tel" placeholder="+27 XX XXX XXXX" {...register('phone')} autoComplete="tel" />
                  <select {...register('industry')} className="input" aria-label="Industry"><option value="">Select Industry (Optional)</option><option value="restaurants">Restaurants & Hospitality</option><option value="barbers">Barber Shops & Salons</option><option value="healthcare">Healthcare & Clinics</option><option value="other">Other</option></select>
                </div>
                <select {...register('service')} className="input" aria-label="Service"><option value="">Service of Interest (Optional)</option><option value="software-development">Software Development</option><option value="it-consulting">IT Consulting</option><option value="cybersecurity">Light Cybersecurity</option><option value="cloud-solutions">Cloud Solutions</option><option value="managed-services">Managed Services</option><option value="custom-apps">Custom Applications</option><option value="not-sure">Not Sure Yet</option></select>
                <Textarea label="Message *" placeholder="Tell me about your project, challenges, timeline, budget range..." error={errors.message?.message} {...register('message')} required rows={5} />
                <input type="hidden" {...register('honeypot')} tabIndex={-1} autoComplete="off" />
                <Button type="submit" className="w-full" isLoading={isSubmitting} size="lg">{isSubmitting ? <> <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /><span>Sending...</span></> : isSubmitSuccessful ? <>Sent! I'll reply soon.</> : <>Send Message<Send className="h-5 w-5" aria-hidden="true" /></>}</Button>
                <p className="caption text-center text-remz-secondary/50">By submitting, you agree to our <a href="/privacy" className="underline hover:text-remz-primary">Privacy Policy</a>. No spam. Ever.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  )
}

function ContactCTA({ whatsappHref, emailHref }: { whatsappHref: string; emailHref: string }) {
  return (
    <Section className="bg-remz-secondary text-remz-white">
      <Container>
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-remz-primary/20 text-remz-primary mb-6 mx-auto"><MessageSquare className="h-8 w-8" aria-hidden="true" /></div>
          <h2 className="heading-2 mb-4">Still Not Sure?</h2>
          <p className="body-lg text-remz-white/70 mb-10">Just say hi. Ask a question. No pressure. No sales pitch. I'm genuinely happy to chat.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-8 py-4 text-fluid-lg w-full sm:w-auto"><MessageSquare className="h-6 w-6" aria-hidden="true" /><span>Say Hi on WhatsApp</span></a>
            <a href={emailHref} className="btn-outline border-remz-white text-remz-white hover:bg-remz-white/10 px-8 py-4 text-fluid-lg w-full sm:w-auto"><Mail className="h-5 w-5" aria-hidden="true" /><span>Email Me</span></a>
          </div>
          <p className="caption text-remz-white/50 mt-6">RemzTech • {contactInfo.location} • Available 24/7 for emergencies</p>
        </ScrollReveal>
      </Container>
    </Section>
  )
}