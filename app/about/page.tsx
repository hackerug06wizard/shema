import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-center">
        About Shema King👑
      </h1>
      <Card className="bg-gray-800 border-gray-700 max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-center">The Journey</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg">
            Shema King👑 is a rising star in the music industry, known for his unique blend of contemporary and
            traditional sounds. With a voice that captivates audiences and lyrics that touch the soul, Shema King👑 has
            been making waves in the music scene since his debut in 2020.
          </p>
          <p className="text-lg">
            Born and raised in a small town, Shema King👑 discovered his passion for music at a young age. He honed his
            skills through years of dedication and hard work, eventually catching the attention of major record labels.
          </p>
          <p className="text-lg">
            Shema King👑's music is a reflection of his life experiences, addressing themes of love, growth, and social
            issues. His debut album "Crown of Melodies" received critical acclaim and established him as a force to be
            reckoned with in the industry.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

