import OfficeCard from "../components/ourOffices/officeCard";
import OfficeGrid from "../components/ourOffices/officeGrid";
import OfficeSearch from "../components/ourOffices/officeSearch";
import Hero from "../components/ourOffices/officesHero";


export default function OfficesHero() {
  return (
    <div>
      <Hero/>
      <OfficeSearch/>
      <OfficeCard/>
      <OfficeGrid/>
    </div>
  )
}


