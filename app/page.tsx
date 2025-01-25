import Link from "next/link"
import { Button } from "@/components/button"

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
        Welcome to Shema King👑's Official Website
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl">
        Explore the world of Shema King's music and upcoming events. Experience the unique blend of contemporary and
        traditional sounds.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
          <Link href="/music">Listen to Music</Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <Link href="/upcoming-events">View Upcoming Events</Link>
        </Button>
      </div>
    </div>
  )
}

