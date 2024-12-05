import Link from 'next/link'
import React from 'react'

const LeftLinks = () => {
  return (
    <div className="flex items-center gap-1">
      {/* <LeftLinks /> */}
      <Link href="/" className="font-cairo font-bold text-xl">
        SHOP.CO
      </Link>
      <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
        <Link
          href="/on-sale"
          className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-indigo-600 transition duration-150 ease-in-out"
        >
          On Sale
        </Link>
        <Link
          href="/new-arrivals"
          className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-indigo-600 transition duration-150 ease-in-out"
        >
          New Arrivals
        </Link>
        <Link
          href="/brands"
          className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-indigo-600 transition duration-150 ease-in-out"
        >
          Brands
        </Link>
      </div>
    </div>
  )
}

export default LeftLinks