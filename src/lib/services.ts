export const services = [
  {
    slug: 'software-development',
    title: 'Software Development',
    shortDesc: 'Custom web & mobile applications built from scratch — no templates, no shortcuts.',
    icon: 'Code',
    features: [
      'Full-stack web applications (React, Next.js, Node.js)',
      'Cross-platform mobile apps (React Native, Flutter)',
      'API design & development (REST, GraphQL)',
      'Database design & optimization (PostgreSQL, MongoDB)',
      'Legacy system modernization',
      'Code reviews & technical debt reduction',
    ],
    ctaText: 'Start Your Project',
  },
  {
    slug: 'it-consulting',
    title: 'IT Consulting',
    shortDesc: 'Strategic technology guidance aligned with your business goals — not vendor agendas.',
    icon: 'Cpu',
    features: [
      'Technology roadmap & strategy',
      'Architecture review & design',
      'Vendor evaluation & selection',
      'Cost optimization & cloud migration planning',
      'Team mentoring & best practices',
      'Digital transformation guidance',
    ],
    ctaText: 'Book a Consultation',
  },
  {
    slug: 'cybersecurity',
    title: 'Light Cybersecurity',
    shortDesc: 'Practical security hardening for SMEs — protect what matters without enterprise complexity.',
    icon: 'Shield',
    features: [
      'Vulnerability assessments & penetration testing',
      'Security awareness training for staff',
      'SSL/TLS certificate management',
      'Secure coding practices implementation',
      'Incident response planning',
      'Compliance guidance (POPIA, GDPR basics)',
    ],
    ctaText: 'Secure Your Business',
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDesc: 'Scalable, cost-effective cloud infrastructure — AWS, Azure, or hybrid, done right.',
    icon: 'Cloud',
    features: [
      'Cloud migration & modernization',
      'Infrastructure as Code (Terraform, CDK)',
      'Serverless architecture (Lambda, Cloudflare Workers)',
      'Container orchestration (Docker, Kubernetes)',
      'CI/CD pipeline setup & optimization',
      'Cost monitoring & optimization',
    ],
    ctaText: 'Move to Cloud',
  },
  {
    slug: 'managed-services',
    title: 'Managed Services',
    shortDesc: 'Your systems monitored, maintained, and secured — so you focus on your business.',
    icon: 'Monitor',
    features: [
      '24/7 system monitoring & alerting',
      'Automated backups & disaster recovery',
      'Patch management & security updates',
      'Performance optimization',
      'Monthly health reports',
      'Priority support response',
    ],
    ctaText: 'Get Managed Support',
  },
  {
    slug: 'custom-apps',
    title: 'Custom Applications',
    shortDesc: 'Tailored software that fits your workflow — not the other way around.',
    icon: 'Layout',
    features: [
      'Business process automation',
      'Custom CRM/ERP modules',
      'Booking & scheduling systems',
      'Inventory & POS integrations',
      'Client portals & dashboards',
      'Integration with existing tools (Xero, QuickBooks, etc.)',
    ],
    ctaText: 'Build Your App',
  },
] as const

export type Service = (typeof services)[number]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}