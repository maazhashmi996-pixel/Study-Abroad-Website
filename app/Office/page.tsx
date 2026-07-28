import OfficeGrid from "@/components/ourOffices/officeGrid"
import OfficeSearch from "@/components/ourOffices/officeSearch"
import Hero from "@/components/ourOffices/officesHero"


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
