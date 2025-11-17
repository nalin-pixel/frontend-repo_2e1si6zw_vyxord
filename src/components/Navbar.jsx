import React, { useState, useEffect } from 'react'
import Button from './Button'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Missions', href: '/missions' },
  { label: 'Sermons', href: '/sermons' },
  { label: 'Connect', href: '/connect' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-white/80 backdrop-blur shadow-sm' : 'bg-white/70 backdrop-blur'} `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded bg-[#0065A8] text-white grid place-content-center font-bold">SL</div>
            <span className="font-bold text-black">Streams of Life International</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-[#222222] hover:text-[#0065A8]">{l.label}</a>
            ))}
            <Button href="/give" className="ml-2">Give</Button>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded border border-gray-200">
            <span className="sr-only">Toggle Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75zm.75 5.25a.75.75 0 000 1.5h15a.75.75 0 000-1.5H4.5z" clipRule="evenodd" /></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-2">
            {links.map(l => (
              <a key={l.href} href={l.href} className="block py-2 text-[#222222]">{l.label}</a>
            ))}
            <Button href="/give" className="w-full">Give</Button>
          </div>
        </div>
      )}
    </header>
  )
}
