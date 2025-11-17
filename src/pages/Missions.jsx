import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'

const missions = [
  {
    title: 'Evangelism Works',
    intro: 'City-wide gospel outreaches and street evangelism.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80&auto=format&fit=crop'
  },
  {
    title: 'Rural Community Outreach',
    intro: 'Serving villages with food, medical care, and the message of hope.',
    image: 'https://images.unsplash.com/photo-1706799718553-ec84ddd05df1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSdXJhbCUyMENvbW11bml0eSUyME91dHJlYWNofGVufDB8MHx8fDE3NjMzOTAwMDB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Community Support Initiatives',
    intro: 'Practical help for families: meals, counseling, and care.',
    image: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=1200&q=80&auto=format&fit=crop'
  }
]

export default function Missions() {
  return (
    <div className="bg-white text-[#222222]">
      <Navbar />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Missions" description="Where the gospel meets real needs." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((m, i) => (
              <Card key={i} image={m.image} title={m.title} subtitle={m.intro} href="#" />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
