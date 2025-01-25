import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Event {
  id: number
  title: string
  date: string
  venue: string
  description: string
}

const EventList = ({ events }: { events: Event[] }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <Card key={event.id} className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>{event.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-gray-400">Date: {event.date}</p>
              <p className="text-gray-400">Venue: {event.venue}</p>
              <p className="text-gray-300">{event.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default EventList

