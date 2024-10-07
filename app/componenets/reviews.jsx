import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I love helping people resolve their issues and/or going out of my way to find answers for people.",
      name: "Debra F.",
      role: "Customer Service Professional",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote: "I ensure to treat their concerns with high urgency. I respond right away. That is how I let them feel I value their time well.",
      name: "Carlo Angelo O.",
      role: "Customer Service Manager",
      avatar: "/placeholder.svg?height=40&width=40",
    }
  ]

  return (
    <section className="mx-auto px-4 py-10 mt-10 rounded-xl max-w-6xl">
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-bold ml-28">
          Hear from our Professionals on Home Helper.
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl m-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white max-h-min place-content-center">
              <CardContent className="p-6">
                <blockquote className="text-lg mb-8">"{testimonial.quote}"</blockquote>
                <div className="flex items-center h-auto">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                    <div className="font-semibold flex flex-col gap-1">{testimonial.name}
                      <Badge variant="secondary" className="w-min text-nowrap">
                          Top Rated Helper
                        </Badge>
                    </div>    
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}