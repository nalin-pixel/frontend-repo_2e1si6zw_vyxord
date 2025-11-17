import React from 'react'
import Button from './Button'

export default function Pagination({ page, totalPages, onPageChange }) {
  const prevDisabled = page <= 1
  const nextDisabled = page >= totalPages

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button variant="secondary" size="sm" onClick={() => !prevDisabled && onPageChange(page - 1)} aria-disabled={prevDisabled} className={prevDisabled ? 'opacity-50 cursor-not-allowed' : ''}>Prev</Button>
      <span className="px-3 py-1 text-sm text-[#222222]">Page {page} of {totalPages}</span>
      <Button variant="secondary" size="sm" onClick={() => !nextDisabled && onPageChange(page + 1)} aria-disabled={nextDisabled} className={nextDisabled ? 'opacity-50 cursor-not-allowed' : ''}>Next</Button>
    </div>
  )
}
