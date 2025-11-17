import React from 'react'
import Button from './Button'

export default function Card({ image, title, subtitle, ctaLabel = 'Learn more', href = '#', className = '' }) {
  return (
    <div className={`group overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition-shadow ${className}`}>
      {image && (
        <div className="aspect-[16/10] w-full overflow-hidden">
          <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-[#222222]">{subtitle}</p>}
        <div className="mt-4">
          <Button href={href} variant="secondary" size="sm">{ctaLabel}</Button>
        </div>
      </div>
    </div>
  )
}
