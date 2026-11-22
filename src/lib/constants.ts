export const siteConfig = {
  name: 'RemzTech',
  tagline: 'Handbuilt Software Solutions',
  description:
    'Handbuilt software solutions. Direct access to your engineer. Modern solutions with smarter futures.',
  url: 'https://remztech.co.za',
  ogImage: '/og-image.jpg',
  keywords: [
    'software development',
    'IT consulting',
    'cybersecurity',
    'cloud solutions',
    'managed services',
    'custom apps',
    'Durban',
    'KwaZulu-Natal',
    'South Africa',
  ],
}

export const contactInfo = {
  whatsapp: '27697530923',
  email: 'remztech@gmail.com',
  phone: '+27 69 753 0923',
  location: 'Durban, KwaZulu-Natal, South Africa',
  address: {
    street: '',
    city: 'Durban',
    province: 'KwaZulu-Natal',
    country: 'South Africa',
    postalCode: '',
  },
}

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
] as const

export const trustSignals = [
  {
    title: 'Vision',
    description: 'We see what your business could become — then build the digital products to get you there.',
    icon: 'Eye',
  },
  {
    title: 'Capability',
    description: 'Full-stack expertise. One engineer who designs, builds, and delivers — no handoffs, no dilution.',
    icon: 'Code',
  },
  {
    title: 'Trust',
    description: 'Direct access, transparent pricing, 24/7 availability. Your business runs on our code — we take that seriously.',
    icon: 'Shield',
  },
] as const

export const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ],
  services: [
    { href: '/services/software-development', label: 'Software Development' },
    { href: '/services/it-consulting', label: 'IT Consulting' },
    { href: '/services/cybersecurity', label: 'Light Cybersecurity' },
    { href: '/services/cloud-solutions', label: 'Cloud Solutions' },
    { href: '/services/managed-services', label: 'Managed Services' },
    { href: '/services/custom-apps', label: 'Custom Applications' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
}

export const socialLinks = [
  { href: 'https://wa.me/27697530923', label: 'WhatsApp', icon: 'MessageSquare' },
  { href: 'mailto:remztech@gmail.com', label: 'Email', icon: 'Mail' },
  { href: 'https://github.com/remztech', label: 'GitHub', icon: 'Github' },
  { href: 'https://linkedin.com/in/remztech', label: 'LinkedIn', icon: 'Linkedin' },
]

export { services } from './services'
export { industries } from './industries'