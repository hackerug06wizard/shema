"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Play, Pause, Download } from "lucide-react"
import { Button } from "@/components/button"
import { Card, CardContent } from "@/components/card"

interface Song {
  id: number
  title: string
  artist: string
  duration: string
  releaseDate: string
  size: string
  url: string
}

const MusicPlayer = ({ song }: { song: Song }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-full md:w-[100px] aspect-square">
            <Image src="/album-cover.jpg" alt={`${song.title} cover`} fill className="rounded-lg object-cover" />
          </div>
          <div className="flex-grow space-y-2 text-center md:text-left">
            <h2 className="text-xl font-bold">{song.title}</h2>
            <p className="text-gray-400">{song.artist}</p>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm text-gray-500">
              <span>Duration: {song.duration}</span>
              <span>Release Date: {song.releaseDate}</span>
              <span>Size: {song.size}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={togglePlay} variant="default" size="icon" className="bg-green-500 hover:bg-green-600">
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            <Button asChild variant="secondary" size="icon">
              <a href={song.url} download>
                <Download className="h-4 w-4" />
                <span className="sr-only">Download song</span>
              </a>
            </Button>
          </div>
        </div>
        <audio ref={audioRef} src={song.url} />
      </CardContent>
    </Card>
  )
}

export default MusicPlayer

