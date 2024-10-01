import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary/10 to-background py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl">
              Your Personal <span className='text-green-400'>Home Helper</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg sm:text-xl md:text-2xl">
              Simplify your home management with our all-in-one solution. From cleaning schedules to maintenance reminders, we've got you covered.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg">
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg">
              <Link href="/features">Learn More</Link>
            </Button>
          </div>
          <div className="flex items-center gap-5">
            <Input placeholder='Search for Services' className='md:w-[500px] md:h-[60px]' />
            <Button className='h-[60px] rounded-full bg-green-400 hover:bg-green-600'>
            <Search className="h-4"/>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}