import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

function CategoryList({categoryList}) {
  //const categoryArray = Object.values(categoryList);
  
  console.log(categoryList);
  return (
    <div className="flex items-center justify-center bg-background">
      <Carousel
        opts={{
          align: "start",
          loop: "true",
        }}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
      >
        <CarouselContent>
          {categoryList.length > 0 ? (
            categoryList.map((category) => (
              <CarouselItem
                key={category.id}
                className="md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                      <h3 className="text-lg font-semibold mb-2 text-center">
                        {category.name}
                      </h3>
                      <p className="text-sm text-center text-muted-foreground">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          ) : (
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <p className="text-muted-foreground">
                      No categories available
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CategoryList