import React, { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import SectionHeading from '../components/SectionHeading'
import Pagination from '../components/Pagination'

const sermonsData = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  title: `Faith That Endures ${i + 1}`,
  date: `2024-0${(i % 9) + 1}-1${i % 9}`,
  image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop'
}))

export default function Sermons() {
  const [page, setPage] = useState(1)
  const pageSize = 6
  const totalPages = Math.ceil(sermonsData.length / pageSize)
  const items = useMemo(() => {
    const start = (page - 1) * pageSize
    return sermonsData.slice(start, start + pageSize)
  }, [page])

  return (
    <div className="bg-white text-[#222222] min-h-screen">
      <Navbar />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Sermons" description="Catch up or rewatch recent messages." />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((s) => (
              <Card key={s.id} image={s.image} title={s.title} subtitle={new Date(s.date).toLocaleDateString()} ctaLabel="Watch" href="#" />
            ))}
          </div>
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
