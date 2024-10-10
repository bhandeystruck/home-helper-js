import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero2() {
  return (
    <section className="bg-[#6F5D44] items-center justify-center">
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-white mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Turn to your top helpers to aid <span className="text-[#6F5D44] italic">you</span>
          </h1>
          <p className="mb-6">
            Homehelper is your ticket to getting things done.
          </p>
          <a href="/signup">
            <button className="bg-[#1dbf73] text-white px-6 py-3 rounded-md text-lg font-semibold">
                Start now
            </button>
          </a>
          <p className="mt-4 text-sm">*Free registration. No credit card required</p>
        </div>
        <div className="md:w-1/2 relative">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Website Design Example"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-2 shadow-lg">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Web Developer"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Web Designer"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}