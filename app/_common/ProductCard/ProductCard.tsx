import { ProductItem } from '@/app/_types/Products'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({prod}: {prod:ProductItem}) => {
  return (
    <Link
        href={`/product/${prod._id}`}
        data-aos="fade-left"
        data-aos-duration="2000"
        className="lg:max-w-[295px] shadow-md rounded-2xl overflow-hidden hover:bg-gray-300/55"
      >
        <div className="block h-64 overflow-hidden">
          <img
            width={200}
            height={300}
            loading="lazy"
            src={prod.images[0]}
            alt={prod.name}
            className="w-full h-full lg:object-cover object-contain "
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{prod.name}</h3>
          {/* <Rate rate={prod.rate} /> */}
          <div className="mt-2">
            <span className="font-bold text-lg">${prod.price}</span>
          </div>
        </div>
      </Link>
  )
}

export default ProductCard