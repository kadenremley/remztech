'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, MessageSquare, Mail, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems, contactInfo } from '@/lib/constants'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-fluid-normal',
        isScrolled
          ? 'bg-remz-white/95 backdrop-blur-md shadow-remz-sm border-b border-remz-muted/20'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav className="container-remz" aria-label="Main navigation">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-display font-bold text-fluid-xl text-remz-secondary hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-remz-primary focus-visible:ring-offset-2 rounded-fluid-md"
            aria-label="RemzTech - Home"
          >
            <span className="relative flex h-9 w-9 items-center justify-center">
              <svg
                className="h-9 w-9 text-remz-primary"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="32" height="32" rx="8" fill="currentColor" />
                <path
                  d="M16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8ZM16 22C12.6863 22 10 19.3137 10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22Z"
                  fill="#FFFFFF"
                />
                <text
                  x="50%"
                  y="55%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontFamily="Space Grotesk, system-ui, sans-serif"
                  fontSize="18"
                  fontWeight="700"
                  fill="#F1B24A"
                >R</text>
              </svg>
            </span>
            <span className="hidden sm:block">RemzTech</span>
          </Link>

          <DesktopNav />
          <DesktopCTA />
          <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} isOpen={isMobileMenuOpen} />
        </div>

        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </nav>
    </header>
  )
function DesktopNav() {
  return (
    <div className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-fluid-sm font-medium text-remz-secondary/80 hover:text-remz-primary transition-colors duration-fluid-fast relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-remz-primary after:transition-all hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-remz-primary focus-visible:ring-offset-2 rounded-fluid-sm px-1 py-1"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

function DesktopCTA() {
  return (
    <div className="hidden lg:flex items-center gap-3">
      <a
        href={`https://wa.me/${contactInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp px-5 py-2.5 text-fluid-sm"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="h-4 w-4" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
      <a
        href={`mailto:${contactInfo.email}`}
        className="btn-primary px-5 py-2.5 text-fluid-sm"
        aria-label="Email us"
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
        <span>Contact</span>
      </a>
    </div>
  )
}

function MobileMenuButton({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) {
  return (
    <button
      className="md:hidden p-2 rounded-fluid-md text-remz-secondary hover:bg-remz-muted-light hover:text-remz-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-remz-primary"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  )
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div
      id="mobile-menu"
      className={cn(
        'md:hidden overflow-hidden transition-all duration-fluid-normal ease-remz-ease border-t border-remz-muted/20 bg-remz-white',
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}
      role="navigation"
      aria-label="Mobile menu"
    >
      <div className="px-4 py-4 space-y-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-3 py-2.5 rounded-fluid-md text-fluid-base font-medium text-remz-secondary/80 hover:bg-remz-muted-light hover:text-remz-primary transition-colors"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
        <div className="pt-4 border-t border-remz-muted/20 flex flex-col gap-3">
          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp justify-center"
            onClick={onClose}
          >
            <MessageSquare className="h-5 w-5" aria-hidden="true" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="btn-primary justify-center"
            onClick={onClose}
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            <span>Email Us</span>
          </a>
          <a
            href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
            className="btn-outline justify-center"
            onClick={onClose}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            <span>Call: {contactInfo.phone}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
}