"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/sheet"

const Navbar = () => {
  const pathname = usePathname()
  const routes = [
    { name: "Home", path: "/" },
    { name: "Music", path: "/music" },
    { name: "Upcoming Events", path: "/upcoming-events" },
    { name: "About", path: "/about" },
  ]

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative w-12 h-12 md:w-14 md:h-14">
            <Image
              src="/logo.png"
              alt="Shema King Logo"
              fill
              className="animate-pulse rounded-full shadow-[0_0_15px_rgba(0,255,0,0.5)]"
            />
          </div>
          <span className="ml-2 text-lg md:text-xl font-bold">Shema King👑</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {routes.map((route) => (
            <li key={route.name}>
              <Link
                href={route.path}
                className={`hover:text-green-400 transition-colors py-2 ${
                  pathname === route.path ? "border-b-2 border-green-400 text-green-400" : ""
                }`}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-gray-800">
            <nav className="flex flex-col gap-4">
              {routes.map((route) => (
                <Link
                  key={route.name}
                  href={route.path}
                  className={`text-lg py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors ${
                    pathname === route.path ? "bg-green-500/20 text-green-400" : ""
                  }`}
                >
                  {route.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default Navbar

