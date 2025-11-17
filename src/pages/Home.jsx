import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'

const heroBg = 'https://images.unsplash.com/photo-1541931120-oodVibechurch?w=1600&q=80&auto=format&fit=crop'
const worshipImg = 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=80&auto=format&fit=crop'
const layered1 = 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=800&q=80&auto=format&fit=crop'
const layered2 = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80&auto=format&fit=crop'

export default function Home() {
  return (
    <div className="bg-white text-[#222222]">
      <Navbar />

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Faith community" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl">A Community of Faith, Hope, and Love</h1>
          <p className="mt-4 text-white/90 max-w-2xl">We exist to proclaim Jesus, make disciples, and serve our city and the nations.</p>
          <div className="mt-8 flex gap-3">
            <Button href="/sermons" variant="primary">Sermons</Button>
            <Button href="/missions" variant="secondary">Missions</Button>
          </div>

          {/* Layered photos */}
          <div className="mt-12 relative h-56 sm:h-64">
            <img src={layered1} alt="Community" className="absolute top-0 left-0 w-2/3 sm:w-1/2 h-full object-cover rounded-xl shadow-xl"/>
            <img src={layered2} alt="Worship" className="absolute bottom-0 right-0 w-2/3 sm:w-1/2 h-full object-cover rounded-xl shadow-2xl"/>
          </div>
        </div>
      </section>

      {/* Community of Faith */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading eyebrow="Community of Faith" title="Following Jesus Together" description="We gather to worship, we scatter to love. Discover who we are and what we believe." align="left"/>
            <Button href="/about" variant="secondary" className="mt-6">Learn More</Button>
          </div>
          <div>
            <img src={worshipImg} alt="Worship" className="rounded-xl shadow-lg w-full object-cover"/>
          </div>
        </div>
      </section>

      {/* Our Mission Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Mission" title="Reaching People, Restoring Hope" description="From city streets to rural communities, we carry the love of Christ." />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Card image={layered2} title="Evangelism Works" subtitle="Boldly sharing the gospel in our city." href="/missions"/>
            <Card image={layered1} title="Rural Community Outreach" subtitle="Serving villages with practical love." href="/missions"/>
          </div>
        </div>
      </section>

      {/* Sermon Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Latest Sermons" description="Be encouraged by the Word. Catch up on recent messages." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <Card key={i} image={`https://images.unsplash.com/photo-1496302662116-35cc4f36df92?w=800&q=80&auto=format&fit=crop`} title={`Walking by Faith ${i}`} subtitle={`Mar ${10+i}, 2024`} ctaLabel="Watch" href="/sermons" />
            ))}
          </div>
        </div>
      </section>

      {/* Giving CTA Banner */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Community" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/70 to-pink-400/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h3 className="text-3xl font-bold">Partner With Us</h3>
          <p className="mt-2 max-w-2xl">Your generosity fuels mission and ministry. Together, we make a difference.</p>
          <Button href="/give" className="mt-6">Give</Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
