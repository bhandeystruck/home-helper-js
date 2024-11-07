import globalAPI from '@/app/services/GlobalApi'
import Hero from '@/app/categories/[id]/components/hero'
import React from 'react'
import HelperGrid from '@/app/categories/[id]/components/helperGrid'
import InfoSection from '@/app/categories/[id]/components/infoSection'
import Faq from '@/app/categories/[id]/components/faq'
import Checklist from './components/checklist'


export default async function CategoriesPage({params}) {
  const categories = await globalAPI.getCategoryData(params.id);
  return (
    <div>
      <Hero categories={categories} />
      <HelperGrid categories={categories}/>
      <Checklist categories={categories}/>
      <InfoSection categories={categories}/>
      <Faq categories={categories}/>
    </div>
  )
}