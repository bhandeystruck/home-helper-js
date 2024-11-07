import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function faq({categories}) {
  console.log(categories)
  if (categories[0].faq != null) {
  return (
    <section className="w-full py-5 md:py-5 lg:py-5 bg-white m-auto">
      <div className="container mx-auto px-4 py-14 md:py-14 lg:py-14">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <Tabs defaultValue="services" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="booking">Booking</TabsTrigger>
            <TabsTrigger value="safety">Safety</TabsTrigger>
          </TabsList>
          {categories.map((item) => (
            Object.entries(item.faq).map(([category, questions]) => (
          <TabsContent key={category} value={category}>
            <div className="space-y-4">
              {questions.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        ))
      ))}
        </Tabs>
      </div>
    </section>
  )
}
}