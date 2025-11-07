import React from 'react'
import { cn } from '@/lib/utils'
import type { FeaturedSectionProps } from './types'

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  title,
  description,
  features,
  columns = 3,
  variant = 'default',
  className,
}) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[columns]

  return (
    <section className={cn('py-20 px-4 sm:px-6 lg:px-8', className)}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div
          className={cn(
            'mb-16',
            variant === 'centered' && 'text-center mx-auto max-w-3xl'
          )}
        >
          {title && (
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          )}
          {description && (
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          )}
        </div>

        {/* Features Grid */}
        <div className={cn('grid gap-8', gridCols)}>
          {features.map((feature) => (
            <div
              key={feature.id}
              className={cn(
                'group relative',
                variant === 'cards' &&
                  'p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow'
              )}
            >
              {/* Icon/Image */}
              {(feature.icon || feature.image) && (
                <div className="mb-4">
                  {feature.image ? (
                    <div className="aspect-video rounded-lg bg-muted overflow-hidden mb-4">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : feature.icon ? (
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary text-2xl">
                      {feature.icon}
                    </div>
                  ) : null}
                </div>
              )}

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>

              {/* Hover effect for cards */}
              {variant === 'cards' && (
                <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-border group-hover:ring-primary/50 transition-colors pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
