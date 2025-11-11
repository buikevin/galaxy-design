import React from 'react'
import { Button } from '@/components/ui/button/Button'
import { cn } from '@/lib/utils'
import type { HeroSectionProps } from './types'

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  variant = 'default',
  className,
}) => {
  return (
    <section
      className={cn(
        'relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8',
        variant === 'centered' && 'text-center',
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            'grid gap-12 items-center',
            variant === 'split' ? 'lg:grid-cols-2' : 'lg:grid-cols-1'
          )}
        >
          {/* Content */}
          <div className={cn(variant === 'centered' && 'mx-auto max-w-3xl')}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {description && (
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {description}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <div
                className={cn(
                  'mt-10 flex items-center gap-4',
                  variant === 'centered' && 'justify-center'
                )}
              >
                {primaryCta && (
                  <Button size="lg" onClick={primaryCta.onClick}>
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button variant="outline" size="lg" onClick={secondaryCta.onClick}>
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Image */}
          {(image || variant === 'split') && (
            <div className="relative">
              {image ? (
                <div className="aspect-video rounded-lg bg-muted overflow-hidden shadow-2xl">
                  <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-primary/5" />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-30">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-primary/50" />
        </div>
      </div>
    </section>
  )
}
