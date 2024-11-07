import { CheckCircle, Star, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

function infoSection({ categories }) {
  const [category] = categories;
  const { chooseUs } = category;
  if(chooseUs){
    return (
      <section className="w-full py-5 md:py-5 lg:py-5 bg-white m-auto ">
        <div className="container mx-auto px-4 py-14 md:py-14 lg:py-14">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
            Why Choose Us
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {chooseUs.features.map((feature, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default infoSection;
