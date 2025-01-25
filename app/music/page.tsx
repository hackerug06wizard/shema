import MusicPlayer from "../components/MusicPlayer"

const songs = [
  {
    id: 1,
    title: "Crown of Melodies",
    artist: "Shema King👑",
    duration: "3:45",
    releaseDate: "2023-01-15",
    size: "7.2 MB",
    url: "/songs/song1.mp3",
  },
  {
    id: 2,
    title: "Rising Star",
    artist: "Shema King👑",
    duration: "4:12",
    releaseDate: "2023-03-22",
    size: "8.1 MB",
    url: "/songs/song2.mp3",
  },
  {
    id: 3,
    title: "Journey Home",
    artist: "Shema King👑",
    duration: "3:58",
    releaseDate: "2023-06-30",
    size: "7.8 MB",
    url: "/songs/song3.mp3",
  },
]

export default function Music() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-center">
        Music
      </h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {songs.map((song) => (
          <MusicPlayer key={song.id} song={song} />
        ))}
      </div>
    </div>
  )
}

