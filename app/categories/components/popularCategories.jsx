import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


function popularCategories() {
    const categories = [
        { name: "Technology", icon: "💻", subcategories: ["Web Development", "Mobile Apps", "Data Science"] },
        { name: "Health & Fitness", icon: "🏋️‍♀️", subcategories: ["Nutrition", "Workout Plans", "Mental Health"] },
        { name: "Education", icon: "📚", subcategories: ["Language Learning", "Test Prep", "Tutoring"] },
        { name: "Arts & Crafts", icon: "🎨", subcategories: ["Painting", "Knitting", "Pottery"] },
        { name: "Cooking", icon: "🍳", subcategories: ["Baking", "Meal Planning", "International Cuisine"] },
        { name: "Personal Finance", icon: "💰", subcategories: ["Budgeting", "Investing", "Tax Planning"] },
      ]
    
  return (
    <section className="w-full py-5 md:py-5 lg:py-5 bg-white m-auto px-20">
    <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category) => (
        <Card key={category.name} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <span className="text-4xl mr-3">{category.icon}</span>
              {category.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {category.subcategories.map((sub) => (
                <li key={sub} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {sub}
                </li>
              ))}
            </ul>
            <Button className="mt-4 w-full">Explore Category</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
  )
}

export default popularCategories