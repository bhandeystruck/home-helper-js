import OnlinePulse from "@/components/ui/onlineSign";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Category2({ categoryList, helperList }) {
  return (
    <section className="items-center justify-center bg-inherit py-10 px-5 lg:py-10 md:py-10 md:px-10 flex flex-col gap-5 m-auto md:max-w-max lg:max-w-6xl xl:max-w-7xl bg-white rounded-xl mt-20 ">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-[#6F5D44]">
          Specialized professionals you can count on
        </h1>
        <div className="grid grid-cols-3 gap-8 mb-8 text-green-500">
          <div>
            <div className="flex items-center mb-2">
              <Star className="w-6 h-6 text-yellow-400 mr-2 fill-yellow-400" />
              <span className="text-2xl font-bold">4.87</span>
            </div>
            <p className="text-sm text-green-700 ">
              Average rating for work with home services.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">60K+ skilled helpers</h2>
            <p className="text-sm text-green-700">
              Involving helpers from all over the country
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">332 skills</h2>
            <p className="text-sm text-green-700">
              Represented by talent on HomeHelper
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categoryList.map((category, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold mb-2 text-green-900">{category.name}</h3>
                <div className="flex items-center mb-2">
                  <h3 className="text-sm font-normal mb-2 text-green-900 flex place-items-center gap-2">
                    20 helpers online <OnlinePulse />
                  </h3>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                    />
                  ))}
                </div>
                <Link href={`/categories/${category.id}`}>
                  <ArrowRight className="w-5 h-5 text-green-600"/>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-2 border border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors">
          See more services
        </button>
      </div>
    </section>
  );
}
