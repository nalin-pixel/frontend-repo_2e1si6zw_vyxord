import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'

const bw1 = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80&auto=format&fit=crop'
const bw2 = 'https://images.unsplash.com/photo-1533000524052-59a5f417c0eb?w=900&q=80&auto=format&fit=crop'
const bw3 = 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&q=80&auto=format&fit=crop'

export default function About() {
  return (
    <div className="bg-white text-[#222222]">
      <Navbar />

      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-black">About Streams of Life International</h1>
          <p className="mt-4">Our story is one of grace, faith, and a growing family on mission together.</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <p>We are a church centered on Jesus and shaped by Scripture. We gather to encounter God in worship and scatter to serve our neighborhoods and the nations.</p>
          <p>From small prayer meetings to city-wide outreaches, our heartbeat is to see people find life in Christ and grow as disciples.</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-3 gap-4">
          {[bw1, bw2, bw3].map((src, i) => (
            <img key={i} src={src} alt="Worship" className="rounded-lg grayscale hover:grayscale-0 transition-all shadow" />
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold text-black">Join the mission</h3>
        <p className="mt-2">Be part of what God is doing in and through our community.</p>
        <Button href="/connect" className="mt-6">Connect With Us</Button>
      </section>

      <Footer />
    </div>
  )
}
