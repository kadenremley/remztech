import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'outline'
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Badge({ children, variant = 'primary', className, size = 'md' }: BadgeProps) {
  const variants = {
    primary: 'bg-remz-primary-light text-remz-primary',
    secondary: 'bg-remz-secondary/10 text-remz-secondary',
    accent: 'bg-remz-muted-light text-remz-accent',
    success: 'bg-green-50 text-green-700',
    outline: 'border border-remz-muted/30 text-remz-secondary hover:bg-remz-muted/10',
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-fluid-xs gap-1',
    md: 'px-3 py-1 text-fluid-xs gap-1.5',
    lg: 'px-4 py-1.5 text-fluid-sm gap-2',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-fluid-md',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  )
}