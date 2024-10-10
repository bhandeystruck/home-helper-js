import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function faq({categories}) {
  console.log(categories)
  const faqs = {
    services: [
      {
        question: "What services do you offer?",
        answer: "We offer a wide range of cleaning services including regular house cleaning, deep cleaning, move-in/move-out cleaning, and specialized cleaning for specific areas of your home."
      },
      {
        question: "Do you provide your own cleaning supplies?",
        answer: "Yes, our cleaners bring all necessary cleaning supplies and equipment. However, if you prefer us to use specific products, we're happy to accommodate your request."
      }
    ],
    booking: [
      {
        question: "How do I book a cleaning service?",
        answer: "You can book a cleaning service by selecting a cleaner from our available list and clicking the 'Book Now' button. You'll be guided through the process to select a date, time, and specific services you need."
      },
      {
        question: "Can I schedule recurring cleanings?",
        answer: "We offer weekly, bi-weekly, and monthly recurring cleaning services. You can set this up during the booking process or contact our customer support for assistance."
      }
    ],
    safety: [
      {
        question: "Are your cleaners background checked?",
        answer: "Yes, all our cleaners undergo thorough background checks and are fully insured for your peace of mind."
      },
      {
        question: "What safety measures do you have in place?",
        answer: "We follow strict safety protocols, including wearing PPE, using EPA-approved disinfectants, and adhering to social distancing guidelines. Our cleaners are also trained in the latest safety practices."
      }
    ]
  }

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
          {categories.map((category, questions) => (
            <TabsContent key={category} value={category}>
              <div className="space-y-4">
                {Object.entries(questions).map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
          
        </Tabs>
      </div>
    </section>
  )
}