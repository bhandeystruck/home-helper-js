import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search} from "lucide-react"

export default function SearchHeader() {
  return (
    <section className="w-full py-5 md:py-5 lg:py-5 bg-white m-auto text-center">
    <h2 className="text-4xl font-bold mb-4">Find Expert Help in Any Category</h2>
    <p className="text-xl text-gray-600 mb-6">Connect with skilled professionals for personalized guidance and support.</p>
    <div className="max-w-2xl mx-auto flex">
      <Input placeholder="What skill do you want to learn?" className="flex-grow" />
      <Button className="ml-2">
        <Search className="mr-2 h-4 w-4" /> Search
      </Button>
    </div>
  </section>
  )
}
