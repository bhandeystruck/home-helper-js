import { Star } from "lucide-react";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import React from "react";
import { Badge} from "@/components/ui/badge";

function helperList({ helperList }) {
  return (
    <section className="items-center justify-center bg-inherit py-10 px-5 lg:py-10 md:py-10 md:px-10 flex flex-col gap-5 m-auto md:max-w-max lg:max-w-6xl xl:max-w-6xl">
      <div className="header">
        <h2 className="text-center lg:text-4xl text-2xl font-bold mb-10">
          Popular Helpers Around You
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 grid-cols-1 m-auto place-items-center w-full">
        {helperList.map((business, index) => (
        <Card key={business.id} className="w-full h-full overflow-hidden text-primary-foreground  bg-white/40 backdrop-blur-md">
        <CardContent className="p-6 flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-between">
              <div className="flex flex-col">
              <h2 className="text-2xl font-bold mb-2">{business.name}</h2>
              <p className="text-sm opacity-80 mb-4">{business.address}</p>
              </div>   
              {business.images && business.images.length > 0 ? (
              <img
                src={business.images[0].url}
                alt={`${business.name} profile`}
                className="w-16 h-16 rounded-full border-4 border-background"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{business.name[0]}</span>
              </div>
            )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                      {[...Array(business.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                      ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mt-4">
            {business.category.map((category,index)=>(
              <Badge key={index} variant="" className="text-sm text-white" style={{ backgroundColor: category.bgcolor.hex}}>
               {category.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
        ))}
      </div>
    </section>
  );
}

export default helperList;
