'use client'

import { useState, useEffect } from 'react'
import { MessageSquare, Mail, Phone, X, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { contactInfo } from '@/lib/constants'
import { whatsappUrl, mailtoUrl } from '@/lib/utils'

export function FloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          setIsVisible(currentScrollY < scrollY || currentScrollY < 100)
          setScrollY(currentScrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollY])

  const whatsappHref = whatsappUrl(contactInfo.whatsapp, 'Hi! I\'m interested in your services. Can we chat?')
  const emailHref = mailtoUrl(contactInfo.email, 'Enquiry from RemzTech Website', 'Hi!\n\nI\'m interested in your services. Could you please let me know more about...')
  const phoneHref = `tel:${contactInfo.phone.replace(/\s/g, '')}`

  const contactOptions = [
    { icon: MessageSquare, label: 'WhatsApp', href: whatsappHref, color: 'bg-green-600 hover:bg-green-700', external: true },
    { icon: Mail, label: 'Email', href: emailHref, color: 'bg-remz-primary hover:bg-remz-primary-hover', external: false },
    { icon: Phone, label: 'Call', href: phoneHref, color: 'bg-remz-secondary hover:bg-remz-secondary-hover', external: false },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute bottom-16 right-0 w-56 space-y-3"
            role="menu"
            aria-label="Contact options"
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.label}
                href={option.href}
                target={option.external ? '_blank' : undefined}
                rel={option.external ? 'noopener noreferrer' : undefined}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-fluid-lg shadow-remz-xl text-white font-medium text-fluid-sm',
                  option.color,
                  'transition-all duration-fluid-fast hover:shadow-remz-glow hover:-translate-x-1'
                )}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                role="menuitem"
              >
                <option.icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span>{option.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          'flex h-14 w-14 items-center justify-center rounded-full shadow-remz-xl transition-all duration-fluid-normal',
          'bg-remz-primary text-remz-white',
          'hover:scale-105 hover:shadow-remz-glow',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-remz-primary focus-visible:ring-offset-2',
          isExpanded && 'rotate-45 bg-remz-secondary'
        )}
        aria-expanded={isExpanded}
        aria-controls="contact-menu"
        aria-label={isExpanded ? 'Close contact options' : 'Open contact options'}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ boxShadow: ['0 0 0 0 rgba(241,178,74,0.4)', '0 0 0 10px rgba(241,178,74,0)', '0 0 0 0 rgba(241,178,74,0.4)'] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <X className="h-6 w-6" key="close" aria-hidden="true" />
          ) : (
            <MessageSquare className="h-7 w-7" key="whatsapp" aria-hidden="true" />
          )}
        </AnimatePresence>
      </motion.button>

      {/* Scroll to top button */}
      <AnimatePresence>
        {isVisible && scrollY > 300 && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 h-12 w-12 items-center justify-center rounded-full bg-remz-secondary text-remz-white shadow-remz-lg hover:bg-remz-secondary-hover hover:shadow-remz-xl transition-all duration-fluid-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-remz-primary focus-visible:ring-offset-2"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="h-6 w-6" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}