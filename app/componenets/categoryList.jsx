import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import AutoScroll from 'embla-carousel-auto-scroll'
import OnlinePulse from '@/components/ui/onlineSign'
import { Skeleton } from '@/components/ui/skeleton'
function CategoryList({categoryList}) {
  return (
    <section className="md:flex lg:flex items-center justify-center bg-inherit">
      <Carousel
        opts={{
          align: "start",
          loop: "true",
          
        }}
        plugins={[
          AutoScroll({ speed:1 })
        ]}
        className="hidden w-full sm:max-w-md md:max-w-lg lg:max-w-6xl xl:max-w-6xl md:flex lg:flex items-center justify-center"
      >
        <CarouselContent>
          {categoryList.length > 0 ? (
            categoryList.map((category) => (
              <CarouselItem
                key={category.id}
                className="md:basis-2/4 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card className="w-full h-40" style={{ backgroundColor: category.bgcolor.hex}}>
                    <CardContent className="flex flex-col p-6">
                      <h3 className="text-lg font-semibold mb-2 text-amber-50 drop-shadow-md">
                        {category.name}
                      </h3>
                      <h3 className="text-sm font-normal mb-2 text-amber-50 flex place-items-center gap-2">
                        20 helpers online <OnlinePulse/>
                      </h3>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          ) : (
            <CarouselItem>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
      </Carousel>

      <div className="p-4 shadow-sm lg:hidden md:hidden">
      <div className="grid grid-cols-2 gap-4">
        {categoryList.map((category) => (
          <Card key={category.id} className="w-full h-auto" style={{ backgroundColor: category.bgcolor.hex}}>
          <CardContent className="flex flex-col p-6 text-amber-50">
            <h3 className="text-lg font-semibold mb-2">
              {category.name}
            </h3>
            <h3 className="text-sm font-normal mb-2 flex place-items-center gap-2">
              20 helpers online <OnlinePulse/>
            </h3>
          </CardContent>
        </Card>
        ))}
      </div>
    </div>
    </section>
  );
}

export default CategoryList