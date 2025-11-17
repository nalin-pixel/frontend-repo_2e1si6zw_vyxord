import React from 'react'

export default function SectionHeading({ eyebrow, title, description, align='center' }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'text-center mx-auto' : ''}`}>
      {eyebrow && <div className="text-xs uppercase tracking-wider text-[#0065A8]/80">{eyebrow}</div>}
      <h2 className="mt-2 text-3xl font-bold text-black">{title}</h2>
      {description && <p className="mt-3 text-[#222222]">{description}</p>}
    </div>
  )
}
