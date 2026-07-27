import React from 'react'
import OfficeGrid from '../ourOffices/officeGrid'
import OfficeSearch from '../ourOffices/officeSearch'
import Hero from '../ourOffices/officesHero'

function page() {
  return (
    <div>
      <Hero/>
      <OfficeGrid/>
      <OfficeSearch/>
    </div>
  )
}

export default page
