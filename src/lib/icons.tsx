import {
  Code,
  Cpu,
  Shield,
  Cloud,
  Monitor,
  Layout,
  UtensilsCrossed,
  Scissors,
  HeartPulse,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  UserCheck,
  BadgePercent,
  Rocket,
} from 'lucide-react'
import { type ComponentType } from 'react'

export const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Code,
  Cpu,
  Shield,
  Cloud,
  Monitor,
  Layout,
  UtensilsCrossed,
  Scissors,
  HeartPulse,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  UserCheck,
  BadgePercent,
  Rocket,
}

export function getIcon(name: string): ComponentType<{ className?: string }> {
  return iconMap[name] || Code
}

export function Icon({ name, className, ...props }: { name: string; className?: string } & Record<string, unknown>) {
  const Component = getIcon(name)
  return <Component className={className} {...props} />
}