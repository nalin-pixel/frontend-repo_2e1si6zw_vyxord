import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'

const leftImg = 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1400&q=80&auto=format&fit=crop'

export default function Connect() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus(data?.detail || 'error')
      }
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white text-[#222222]">
      <Navbar />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-black">Get in touch</h2>
            <p className="mt-2">We'd love to hear from you. Send us a message and our team will respond.</p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3"><span className="h-8 w-8 grid place-content-center rounded bg-[#0065A8] text-white">📍</span><span>123 Hope Street, City</span></div>
              <div className="flex items-center gap-3"><span className="h-8 w-8 grid place-content-center rounded bg-[#0065A8] text-white">✉️</span><span>hello@streamsoflife.org</span></div>
              <div className="flex items-center gap-3"><span className="h-8 w-8 grid place-content-center rounded bg-[#0065A8] text-white">📞</span><span>+1 (555) 123-4567</span></div>
            </div>

            <form onSubmit={submit} className="mt-8 space-y-4">
              <div>
                <label className="block text-sm font-medium text-black">Full name</label>
                <input value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0065A8]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-black">Email address</label>
                <input type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0065A8]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-black">Message</label>
                <textarea rows="5" value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0065A8]" required />
              </div>
              <Button as="button" type="submit" className="w-full">{status === 'sending' ? 'Sending...' : 'Send Message'}</Button>
              {status === 'sent' && <p className="text-green-600 text-sm">Thanks! We received your message.</p>}
              {status && status !== 'sent' && status !== 'sending' && <p className="text-red-600 text-sm">Something went wrong.</p>}
            </form>
          </div>

          <div className="order-1 md:order-2">
            <img src={leftImg} alt="Community" className="rounded-xl shadow-lg w-full object-cover" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
