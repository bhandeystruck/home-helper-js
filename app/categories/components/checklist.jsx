import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function Checklist({categories}) {
  return (
    <section className="w-full py-5 md:py-5 lg:py-5 bg-white m-auto ">
      <div className="container mx-auto px-4 py-14 md:py-14 lg:py-14">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Our {categories[0].name} Checklist</h2>
        <Card className="bg-white drop-shadow-xl max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">What's Included in Every Clean</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-4 sm:grid-cols-2">
              {categories[0].checklist.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500 w-5 h-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}