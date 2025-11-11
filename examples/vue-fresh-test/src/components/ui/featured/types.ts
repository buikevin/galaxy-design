export interface Feature {
  id: string
  title: string
  description: string
  icon?: string
  image?: string
}

export interface FeaturedSectionProps {
  title?: string
  description?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  variant?: 'default' | 'centered' | 'cards'
}

export interface HeroSectionProps {
  title: string
  description?: string
  primaryCta?: { label: string; href?: string }
  secondaryCta?: { label: string; href?: string }
  image?: string
  variant?: 'default' | 'centered' | 'split'
}
