import { CheckCircle, Star, Clock, } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import React from 'react'


function infoSection() {
  return (
    <section className="w-full py-5 md:py-5 lg:py-5 bg-white m-auto ">
    <div className="container mx-auto px-4 py-14 md:py-14 lg:py-14">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Why Choose Us</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: CheckCircle, title: "Trusted Professionals", description: "All our cleaners are vetted and background checked" },
          { icon: Clock, title: "Flexible Scheduling", description: "Book a cleaning service that fits your schedule" },
          { icon: Star, title: "Satisfaction Guaranteed", description: "We're not happy until you're happy with our service" },
        ].map((item, i) => (
          <Card key={i} className="bg-white">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}

export default infoSection