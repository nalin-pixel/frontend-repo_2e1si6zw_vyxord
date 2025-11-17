import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'

export default function Give() {
  return (
    <div className="bg-white text-[#222222] min-h-screen">
      <Navbar />
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-black">Give</h1>
          <p className="mt-3">Partner with Streams of Life International. Your generosity fuels mission and ministry.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="#">Give Online</Button>
            <Button variant="secondary" href="#">Other Ways to Give</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
