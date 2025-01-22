import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Home, Factory, Droplet, Bug, Instagram, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function BeekeepingServices() {
  return (
    <div className="bg-gray-200 min-h-screen bg-[#f5f5f5] text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100/30 backdrop-blur-sm p-6 flex justify-between items-center">
        <Link href="mailto:beekeeper@example.com" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9sho4QYo7ZyNpQv6BxPxV8IcsJJDtv.png"
            alt="Bee At Home Logo"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
        </Link>
        <nav className="flex gap-4 text-sm text-gray-900">
          <Link href="https://www.instagram.com/beeatthome" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 text-gray-900 hover:text-gray-700" />
          </Link>
          <Link href="https://www.facebook.com/beeatthome" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-6 h-6 text-gray-900 hover:text-gray-700" />
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="bg-gray-200 pt-40 pb-16 text-center rounded-bl-3xl rounded-br-3xl relative overflow-hidden"
        style={{
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/man-with-bees.jpg-9EJciU3gMyXWnj7EZaV12oMyj32SiF.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Add a dark overlay */}
        <div className="absolute inset-0 bg-black/40 w-full" />

        {/* Wrap content in relative container to appear above overlay */}
        <div className="relative z-10">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <Avatar className="w-24 h-24">
              <AvatarImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wSEkwvc1PTXf4PIWpr2pQseLNgXK99.png"
                alt="Bee At Home Logo"
              />
              <AvatarFallback>BH</AvatarFallback>
            </Avatar>
            <span className="absolute -right-2 -top-2 text-2xl">🐝</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium mb-8 leading-tight text-white">
            Bee Relocations, Hive Management, and Honey Collection.
          </h1>
          <Button className="bg-gray-900 hover:bg-gray-800">
            Learn More
            <span className="ml-2">↓</span>
          </Button>
        </div>
      </section>

      {/* Partners - Bento Grid Gallery */}
      <section className="bg-gray-200 rounded-bl-3xl rounded-br-3xl max-w-7xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-center">Nature and Bees</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WyV2cQf37zaNRMZLYzf1Q9JvKfggGt.png"
              alt="Close-up of purple flowers with a bee collecting nectar against blue sky"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ldebBNw5eCSJO8AiswAB3H0IU2WrYi.png"
              alt="Bee on purple flower with dried seedheads in natural setting"
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CXjn31JKMOJjBpZ0V5sWxGxPb77FjT.png"
              alt="Beekeeping workshop with people gathered around wooden hive boxes"
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="col-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uG94bK5e3KjOGPteUB6k5jA1INmMHE.png"
              alt="Jar of raw honey held up against mountainous landscape"
              width={400}
              height={200}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div>
            <Image
              src="/placeholder.svg"
              alt="Partner 5"
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div>
            <Image
              src="/placeholder.svg"
              alt="Partner 6"
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services Intro */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-medium mb-4">Let's Work Together to Make a Buzz!</h2>
        <p className="text-gray-600">Whether you need expert advice, hive management, or sustainable honey solutions, our team is here to help. Reach out to us today, and let's create impactful and eco-friendly results together.

</p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="w-12 h-12 mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-medium mb-3">Bee Relocations</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Professional removal and relocation of bee colonies from unwanted locations to suitable new homes.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
              <Factory className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-medium mb-3">Hive Management</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Regular hive inspections, maintenance, and management to ensure colony health and productivity.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
              <Droplet className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-medium mb-3">Honey Collection</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Professional honey extraction and collection services using state-of-the-art equipment.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
              <Bug className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-medium mb-3">Beekeeper Consultation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Expert consultation services for new and experienced beekeepers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="mb-8">
          <Image src="/placeholder.svg" alt="Handshake" width={48} height={48} className="mx-auto mb-8" />
          <h2 className="text-3xl font-medium mb-4">How can we assist with your next project?</h2>
        </div>
        <div className="flex gap-4 justify-center">
          <Button className="bg-gray-900 hover:bg-gray-800">
            <Mail className="mr-2 h-4 w-4" />
            Email Us
          </Button>
          <Button variant="outline">
            <MessageSquare className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 flex justify-center items-center max-w-7xl mx-auto text-sm border-t border-gray-200">
        <p>© 2025 All rights reserved.</p>
      </footer>
    </div>
  )
}

