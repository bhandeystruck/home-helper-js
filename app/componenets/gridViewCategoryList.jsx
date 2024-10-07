import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import OnlinePulse from '@/components/ui/onlineSign'
import { Skeleton } from '@/components/ui/skeleton'

export default function CategoryGrid({ categoryList }) {
  return (
    <section className="container mx-auto px-4 py-8 bg-inherit"> 
        <h2 className="text-center lg:text-4xl text-2xl font-bold mb-10 text-white">
          Services
        </h2>
      {categoryList.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-2 lg:gap-2 gap-2">
          {categoryList.map((category) => (
            <div>
               <Card 
              key={category.id} 
              className="w-full h-20 lg:h-20 md:h-20 flex justify-items-center place-items-center bg-white/40 backdrop-blur-md" 
            >
              <CardContent className="flex flex-col p-3 md:p-3 lg:p-3">
                <h3 className="text-sm md:text-md lg:text-md font-semibold mb-1 text-amber-50">
                  {category.name}
                </h3>
                <h3 className="text-xs md:text-md lg:text-md font-norma text-amber-50 flex items-center gap-2">
                  20 helpers online <OnlinePulse />
                </h3>
              </CardContent>
            </Card>
            </div>
           
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <Card key={index} className="w-full h-40">
              <CardContent className="flex flex-col justify-center p-6">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[150px]" />
                    <Skeleton className="h-4 w-[100px]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  )
}