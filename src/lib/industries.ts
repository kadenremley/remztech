export const industries = [
  {
    id: 'restaurants',
    label: 'Restaurants & Hospitality',
    icon: 'UtensilsCrossed',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'from-amber-50 to-orange-50',
    textColor: 'text-amber-900',
    borderColor: 'border-amber-200',
    description: 'POS systems, online ordering, table management, inventory, staff scheduling',
    problems: [
      'Lost orders between front-of-house and kitchen',
      'No real-time inventory tracking — waste & stockouts',
      'Manual staff scheduling eating hours each week',
      'Third-party delivery apps taking 30% commission',
      'No customer data for loyalty/marketing',
    ],
    solutions: [
      'Custom POS with kitchen display system',
      'Direct online ordering (zero commission)',
      'Automated inventory with low-stock alerts',
      'Smart scheduling with labor cost tracking',
      'Built-in loyalty & CRM for repeat business',
    ],
  },
  {
    id: 'barbers',
    label: 'Barber Shops & Salons',
    icon: 'Scissors',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-50 to-teal-50',
    textColor: 'text-emerald-900',
    borderColor: 'border-emerald-200',
    description: 'Booking apps, client management, POS, loyalty programs, staff rosters',
    problems: [
      'Double-bookings & no-shows killing revenue',
      'Paper appointment books — no history or reminders',
      'Walk-ins vs appointments — constant chaos',
      'No client profiles (preferences, history, products)',
      'Cash-only or clunky card readers',
    ],
    solutions: [
      'Online booking with automated reminders (SMS/WhatsApp)',
      'Client profiles: hair type, products used, photos, notes',
      'Walk-in queue management with wait-time estimates',
      'Integrated POS: services, retail, tips, packages',
      'Loyalty program: "10th cut free" auto-tracked',
    ],
  },
  {
    id: 'healthcare',
    label: 'Healthcare & Clinics',
    icon: 'HeartPulse',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'from-blue-50 to-indigo-50',
    textColor: 'text-blue-900',
    borderColor: 'border-blue-200',
    description: 'Patient portals, appointment systems, medical records, POPIA compliance, telehealth',
    problems: [
      'Patient files scattered across paper & spreadsheets',
      'Appointment no-shows — 15-20% revenue loss',
      'POPIA compliance gaps — risk of fines',
      'No patient portal for results, scripts, booking',
      'Telehealth bolted on, not integrated',
    ],
    solutions: [
      'Secure EHR/EMR with role-based access',
      'Automated reminders (SMS/WhatsApp/Email) — cuts no-shows 50%+',
      'POPIA-ready: encryption, audit logs, consent management',
      'Patient portal: book, view results, request scripts, pay',
      'Integrated video consultations with clinical notes',
    ],
  },
] as const

export type Industry = (typeof industries)[number]

export function getIndustryById(id: string): Industry | undefined {
  return industries.find((i) => i.id === id)
}

export function getAllIndustryIds(): string[] {
  return industries.map((i) => i.id)
}