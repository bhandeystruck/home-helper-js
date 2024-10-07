import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-24 md:py-32 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl">
              Your Personal <span className='text-[#6F5D44]'>Home Helper</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg sm:text-xl md:text-2xl text-white">
             
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg">
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild className="text-lg">
              <Link href="/features">Learn More</Link>
            </Button>
          </div>
          <div className="flex items-center gap-5">
            <Input placeholder='Search for Services' className='md:w-[500px] md:h-[60px] bg-white' />
            <Button className='h-[60px] rounded-full bg-[#6F5D44] hover:bg-amber-950 '>
            <Search className="h-4"/>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}