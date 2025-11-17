import React from 'react'

const socials = [
  { name: 'Instagram', href: '#', svg: (<path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.25 2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/>) },
  { name: 'Facebook', href: '#', svg: (<path d="M13 22v-8h3l1-4h-4V8a2 2 0 0 1 2-2h2V2h-2a6 6 0 0 0-6 6v2H7v4h3v8z"/>) },
  { name: 'Twitter', href: '#', svg: (<path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.9-2.6 1.1A3.9 3.9 0 0 0 12 8.8v.8A10.9 10.9 0 0 1 3 5.3s-4 9 5 13a11.6 11.6 0 0 1-7 2c9 5 20 0 20-11.5v-.6c.7-.5 1.3-1.1 1.8-1.8z"/>) },
  { name: 'YouTube', href: '#', svg: (<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.4.6A3 3 0 0 0 .5 6.2 31.9 31.9 0 0 0 0 12a31.9 31.9 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.7.6 9.4.6 9.4.6s7.7 0 9.4-.6a3 3 0 0 0 2.1-2.1 31.9 31.9 0 0 0 .5-5.8 31.9 31.9 0 0 0-.5-5.8zM9.75 8.75 16 12l-6.25 3.25v-6.5z"/>) },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded bg-[#0065A8] text-white grid place-content-center font-bold">SL</div>
            <span className="font-bold text-black">Streams of Life International</span>
          </div>
          <p className="mt-4 text-[#222222]">A community centered on Jesus, making disciples, and bringing hope to the nations.</p>
          <div className="mt-4 flex gap-3">
            {socials.map((s) => (
              <a key={s.name} href={s.href} className="h-9 w-9 rounded-full border border-gray-200 grid place-content-center text-[#0065A8] hover:bg-[#0065A8] hover:text-white transition-colors" aria-label={s.name}>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">{s.svg}</svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-black font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-[#222222]">
            <li><a href="/" className="hover:text-[#0065A8]">Home</a></li>
            <li><a href="/about" className="hover:text-[#0065A8]">About Us</a></li>
            <li><a href="/missions" className="hover:text-[#0065A8]">Missions</a></li>
            <li><a href="/sermons" className="hover:text-[#0065A8]">Sermons</a></li>
            <li><a href="/connect" className="hover:text-[#0065A8]">Connect</a></li>
            <li><a href="/give" className="hover:text-[#0065A8]">Give</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-[#222222]">
            <li>123 Hope Street, City, Country</li>
            <li>Email: hello@streamsoflife.org</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Service Times: Sundays 10:00 AM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 py-4 text-center text-sm text-[#222222]">© {new Date().getFullYear()} Streams of Life International. All rights reserved.</div>
    </footer>
  )
}
