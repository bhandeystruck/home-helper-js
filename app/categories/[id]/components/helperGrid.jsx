import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const helperGrid = ({ categories }) => {
  return (
    <section className="w-full py-5 md:py-5 lg:py-5 bg-white m-auto ">
      <div className="container mx-auto px-4 py-14 md:py-14 lg:py-14">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
          Our Helpers
        </h2>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all">All </TabsTrigger>
            <TabsTrigger value="top-rated">Top Rated</TabsTrigger>
            <TabsTrigger value="new">New Cleaners</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) =>
                category.helper.map((helper) => (
                  <Card
                    key={helper.id}
                    className="overflow-hidden transition-all hover:shadow-lg"
                  >
                    <CardHeader className="p-0">
                      <Image
                        src={`/placeholder.svg?height=200&width=400`}
                        alt={helper.name}
                        width={400}
                        height={200}
                        className="w-full object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle>{helper.name}</CardTitle>
                        <Badge variant="secondary">
                          <Star className="h-4 w-4 mr-1" />
                          {helper.rating}
                        </Badge>
                      </div>
                      <CardDescription>{`Professional ${category.name} Helper`}</CardDescription>
                      <div className="flex items-center mt-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />2 miles away
                      </div>
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button className="w-full">Book Now</Button>
                    </CardFooter>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
          <TabsContent value="top-rated">
            <div className="text-center text-muted-foreground">
              Top rated {categories.name} here
            </div>
          </TabsContent>
          <TabsContent value="new">
            <div className="text-center text-muted-foreground">
              New cleaners content here
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default helperGrid;
