import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface ContainerProps {
  children: ReactNode
  size?: 'default' | 'narrow' | 'wide' | 'full'
  className?: string
}

export function Container({ children, size = 'default', className }: ContainerProps) {
  const sizes = {
    default: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
    narrow: 'mx-auto max-w-3xl px-4 sm:px-6 lg:px-8',
    wide: 'mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8',
    full: 'w-full px-4 sm:px-6 lg:px-8',
  }

  return <div className={cn(sizes[size], className)}>{children}</div>
}

export interface SectionProps {
  children: ReactNode
  size?: 'sm' | 'default' | 'lg' | 'xl'
  className?: string
  id?: string
  background?: 'default' | 'muted' | 'dark' | 'gradient'
}

export function Section({ children, size = 'default', className, id, background = 'default' }: SectionProps) {
  const sizes = {
    sm: 'py-12 sm:py-16 lg:py-20',
    default: 'py-16 sm:py-24 lg:py-32',
    lg: 'py-24 sm:py-32 lg:py-40',
    xl: 'py-32 sm:py-40 lg:py-48',
  }

  const backgrounds = {
    default: '',
    muted: 'bg-remz-muted-light',
    dark: 'bg-remz-secondary text-remz-white',
    gradient: 'bg-gradient-to-b from-remz-white via-remz-muted-light to-remz-white',
  }

  return (
    <section
      id={id}
      className={cn(sizes[size], backgrounds[background], className)}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      {children}
    </section>
  )
}