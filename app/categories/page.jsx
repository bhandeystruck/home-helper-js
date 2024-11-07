import React from 'react'
import SearchHeader from './components/searchHeader'
import FeaturedHelpers from './components/featuredHelpers'
import PopularCategories from './components/popularCategories'
import BecomeHelper from './components/becomeHelper'


function page() {
  return (
    <>
      <SearchHeader/>
      <PopularCategories/>
      <FeaturedHelpers/>
      <BecomeHelper/>
    </>
  )
}

export default page