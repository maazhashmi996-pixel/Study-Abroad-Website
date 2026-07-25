
import EventDetailPage from '../components/events/eventDetails'
import EventsPage from '../components/events/eventsPage'
import EventRegisterPage from '../components/events/eventRegister'
import OfficesPage from '../components/events/eventOffices'

export default function page() {
  return (
    <div>
      <EventsPage/>
      <EventDetailPage/>
      <EventRegisterPage/>
      <OfficesPage/>
    </div>
  )
}


