import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, TrendingUp } from "lucide-react"

function featuredHelpers() {
    const topHelpers = [
        { name: "Sarah Johnson", category: "Technology", helps:25, rating: 4.9, specialties: ["Web Development", "Mobile Apps"] },
        { name: "Mark Thompson", category: "Health & Fitness",helps:25, rating: 4.8, specialties: ["Nutrition", "Strength Training"] },
        { name: "Emily Chen", category: "Education",helps:25, rating:  4.9, specialties: ["Math Tutoring", "Test Prep"] },
        { name: "Alex Rodriguez", category: "Cooking",helps:25, rating: 4.7, specialties: ["Baking", "International Cuisine"] },
      ]
  return (
    <section className="w-full py-5 md:py-5 lg:py-5 px-20 bg-white m-auto">
    <h2 className="text-3xl font-bold mb-8">Featured Experts</h2>
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="mb-6">
        <TabsTrigger value="all">All Categories</TabsTrigger>
        <TabsTrigger value="technology">Technology</TabsTrigger>
        <TabsTrigger value="health">Health & Fitness</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topHelpers.map((helper) => (
            <Card key={helper.name} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{helper.name}</CardTitle>
              <p className="text-muted-foreground">{helper.category} Expert</p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <Star className="text-yellow-400 mr-1 h-5 w-5" />
                  <span>{helper.rating}</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="text-green-500 mr-1 h-5 w-5" />
                  <span>{helper.helps} helps</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">View Profile</Button>
            </CardContent>
          </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  </section>
  )
}

export default featuredHelpers