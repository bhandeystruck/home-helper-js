
import Image from 'next/image'
import React from 'react'

function categoryHero(categories) {
  let categoryData = categories.categories[0]
  return (
    <section className="relative bg-black text-white overflow-hidden">
    <div className="absolute inset-0">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Background"
        width={1920}
        height={1080}
        className="w-full h-full object-cover opacity-50"
      />
    </div>
    <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Expert {categoryData.name} Services
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-xl">
          {categoryData.description}
        </p>
      </div>
    </div>
  </section>
  )
}

export default categoryHero