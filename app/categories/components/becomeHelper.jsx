import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


function becomeHelper() {
  return (
    <section className='w-full py-5 md:py-5 lg:py-5 bg-white m-auto px-20'>
    <Card className="bg-primary text-primary-foreground">
      <CardContent className="flex flex-col md:flex-row items-center justify-between p-8">
        <div className="mb-4 md:mb-0">
          <h2 className="text-3xl font-bold mb-2">Ready to share your skills?</h2>
          <p className="text-lg">Join our community of helpers and start earning today.</p>
        </div>
        <Button variant="secondary" size="lg">Become a Helper</Button>
      </CardContent>
    </Card>
  </section>
  )
}

export default becomeHelper