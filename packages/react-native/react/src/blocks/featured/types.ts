export interface Feature {
  id: string
  title: string
  description: string
  icon?: React.ReactNode
  image?: string
}

export interface FeaturedSectionProps {
  title?: string
  description?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  variant?: 'default' | 'centered' | 'cards'
  className?: string
}

export interface HeroSectionProps {
  title: string
  description?: string
  primaryCta?: { label: string; href?: string; onClick?: () => void }
  secondaryCta?: { label: string; href?: string; onClick?: () => void }
  image?: string
  variant?: 'default' | 'centered' | 'split'
  className?: string
}
