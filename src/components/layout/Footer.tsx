import Link from 'next/link'
import { MessageSquare, Mail, MapPin, Github, Linkedin, ArrowRight } from 'lucide-react'
import { siteConfig, contactInfo, footerLinks, socialLinks, trustSignals } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-remz-secondary text-remz-white" role="contentinfo">
      <div className="container-remz">
        <FooterMain />
        <FooterTrustBar />
        <FooterBottom currentYear={currentYear} />
      </div>
    </footer>
  )
}

function FooterMain() {
  return (
    <div className="py-16 lg:py-24 grid gap-12 lg:gap-16 lg:grid-cols-2 xl:grid-cols-4">
      <FooterBrand />
      <FooterQuickLinks />
      <FooterServices />
      <FooterContact />
    </div>
  )
}

function FooterBrand() {
  return (
    <div className="lg:col-span-1 xl:col-span-2 space-y-6">
      <Link href="/" className="flex items-center gap-2 font-display font-bold text-2xl text-remz-white" aria-label="RemzTech - Home">
        <span className="relative flex h-10 w-10 items-center justify-center">
          <svg className="h-10 w-10 text-remz-primary" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="currentColor" />
            <path d="M16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8ZM16 22C12.6863 22 10 19.3137 10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22Z" fill="#FFFFFF" />
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Space Grotesk, system-ui, sans-serif" fontSize="18" fontWeight="700" fill="#F1B24A">R</text>
          </svg>
        </span>
        <span>RemzTech</span>
      </Link>
      <p className="text-remz-white/70 text-fluid-base max-w-xs leading-relaxed">
        {siteConfig.description}
      </p>
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-remz-white/10 text-remz-white/80 hover:bg-remz-primary hover:text-remz-white transition-all duration-fluid-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-remz-primary"
            aria-label={social.label}
          >
            {social.icon === 'MessageSquare' && <MessageSquare className="h-5 w-5" />}
            {social.icon === 'Mail' && <Mail className="h-5 w-5" />}
            {social.icon === 'Github' && <Github className="h-5 w-5" />}
            {social.icon === 'Linkedin' && <Linkedin className="h-5 w-5" />}
          </a>
        ))}
      </div>
    </div>
  )
}
function FooterQuickLinks() {
  return (
    <nav aria-label="Quick links" className="space-y-4">
      <h3 className="heading-5 text-remz-white">Quick Links</h3>
      <ul className="space-y-3" role="list">
        {footerLinks.company.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-remz-white/70 hover:text-remz-primary transition-colors duration-fluid-fast text-fluid-sm flex items-center gap-2 group"
            >
              {link.label}
              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function FooterServices() {
  return (
    <nav aria-label="Services" className="space-y-4">
      <h3 className="heading-5 text-remz-white">Services</h3>
      <ul className="space-y-3" role="list">
        {footerLinks.services.slice(0, 4).map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-remz-white/70 hover:text-remz-primary transition-colors duration-fluid-fast text-fluid-sm flex items-center gap-2 group"
            >
              {link.label}
              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            </Link>
          </li>
        ))}
        <li>
          <Link href="/services" className="text-remz-primary hover:text-remz-white text-fluid-sm font-medium flex items-center gap-2 group">
            View All Services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

function FooterContact() {
  return (
    <address className="space-y-4 not-italic" aria-label="Contact information">
      <h3 className="heading-5 text-remz-white">Contact</h3>
      <div className="space-y-3">
        <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-remz-white/70 hover:text-remz-primary transition-colors duration-fluid-fast group">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-remz-primary/20 text-remz-primary group-hover:bg-remz-primary group-hover:text-remz-white transition-colors">
            <MessageSquare className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-fluid-sm">WhatsApp: {contactInfo.phone}</span>
        </a>
        <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-remz-white/70 hover:text-remz-primary transition-colors duration-fluid-fast group">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-remz-primary/20 text-remz-primary group-hover:bg-remz-primary group-hover:text-remz-white transition-colors">
            <Mail className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-fluid-sm">{contactInfo.email}</span>
        </a>
        <div className="flex items-center gap-3 text-remz-white/70">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-remz-primary/20 text-remz-primary">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-fluid-sm">{contactInfo.location}</span>
        </div>
      </div>
    </address>
  )
}
function FooterTrustBar() {
  return (
    <div className="py-12 border-t border-remz-white/10 hidden lg:block">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        {trustSignals.map((signal) => (
          <div key={signal.title} className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-remz-primary/20 text-remz-primary">
              {signal.icon === 'Eye' && <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>}
              {signal.icon === 'Code' && <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>}
              {signal.icon === 'Shield' && <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
            </div>
            <div>
              <h4 className="font-medium text-remz-white">{signal.title}</h4>
              <p className="text-remz-white/60 text-fluid-sm mt-0.5">{signal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FooterBottom({ currentYear }: { currentYear: number }) {
  return (
    <div className="py-6 border-t border-remz-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-remz-white/50 text-fluid-sm">
        © {currentYear} {siteConfig.name}. All rights reserved. Handbuilt in Durban, South Africa.
      </p>
      <div className="flex items-center gap-6">
        <Link href="/privacy" className="text-remz-white/50 hover:text-remz-primary text-fluid-sm transition-colors">Privacy</Link>
        <Link href="/terms" className="text-remz-white/50 hover:text-remz-primary text-fluid-sm transition-colors">Terms</Link>
      </div>
    </div>
  )
}