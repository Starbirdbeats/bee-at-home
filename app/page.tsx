import { Button } from '@/components/ui/button';
import {
  Mail,
  MessageSquare,
  Home,
  Factory,
  Droplet,
  Bug,
  Instagram,
  Facebook,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function BeekeepingServices() {
  return (
    <div className="bg-gray-200 min-h-screen bg-[#f5f5f5] text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100/30 backdrop-blur-sm p-6 flex justify-between items-center">
        <Link href="mailto:beekeeper@example.com" className="flex items-center">
          <Image
            src="/bee-at-home-logo.avif"
            alt="Bee At Home Logo"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
        </Link>
        <nav className="flex gap-4 text-sm text-gray-900">
          <Link
            href="https://www.instagram.com/beeatthome"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6 text-gray-900 hover:text-gray-700" />
          </Link>
          <Link
            href="https://www.facebook.com/beeatthome"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6 text-gray-900 hover:text-gray-700" />
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="bg-gray-200 pt-40 pb-10 text-center rounded-bl-3xl rounded-br-3xl relative overflow-hidden"
        style={{
          backgroundImage: 'url("/man-with-bees.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Add a dark overlay */}
        <div className="absolute inset-0 bg-black/40 w-full" />

        {/* Wrap content in relative container to appear above overlay */}
        <div className="relative z-10">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <Avatar className="w-24 h-24">
              <AvatarImage
                src="/bee-at-home-logo.avif"
                alt="Bee At Home Logo"
              />
              <AvatarFallback>BH</AvatarFallback>
            </Avatar>
            <span className="absolute -right-2 -top-2 text-2xl">🐝</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-medium mb-4 leading-tight text-white">
            Bee Relocations, Hive Management, and Honey Collection.
          </h1>
          {/* <Button className="bg-gray-900 hover:bg-gray-800">
            Learn More
            <span className="ml-2">↓</span>
          </Button> */}
        </div>
      </section>

      {/* Partners - Bento Grid Gallery */}
      <section className="bg-gray-200 rounded-bl-3xl rounded-br-3xl max-w-7xl mx-auto px-6 py-16 border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-center">Nature and Bees</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <Image
              src="/pink-flower-bee.avif"
              alt="Close-up of purple flowers with a bee collecting nectar against blue sky"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div>
            <Image
              src="/bee-on-flower.avif"
              alt="Bee on purple flower with dried seedheads in natural setting"
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div>
            <Image
              src="/beekeeper-workshop.avif"
              alt="Beekeeping workshop with people gathered around wooden hive boxes"
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="col-span-2">
            <Image
              src="/raw-honey.avif"
              alt="Jar of raw honey held up against mountainous landscape"
              width={400}
              height={200}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="col-span-1 md:col-span-3 md:aspect-[16/9]">
            <Image
              src="/beekeeper.jpg"
              alt="Bee Keeper"
              width={400}
              height={200}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div>
            <Image
              src="/working-bees.jpg"
              alt="Bees on honeycomb"
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services Intro */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-medium mb-4">
          Let&apos;s Work Together to Make a Buzz!
        </h2>
        <p className="text-gray-600">
          Whether you need expert advice, hive management, or sustainable honey
          solutions, our team is here to help. Reach out to us today, and
          let&apos;s create impactful and eco-friendly results together.
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
              Professional removal and relocation of bee colonies from unwanted
              locations to suitable new homes.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
              <Factory className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-medium mb-3">Hive Management</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Regular hive inspections, maintenance, and management to ensure
              colony health and productivity.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
              <Droplet className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-medium mb-3">Honey Collection</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Professional honey extraction and collection services using
              state-of-the-art equipment.
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789012!2d18.123456789!3d-33.987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb1234567890!2s30%20Herbert%20Penny%20Road%2C%207100!5e0!3m2!1sen!2sza!4v1612345678901!5m2!1sen!2sza"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            className="rounded-lg border border-gray-300"
          ></iframe>
        </div>
        <div className="mb-8">
          <Image
            src="/bee.png"
            alt="Cute Bee"
            width={48}
            height={48}
            className="mx-auto mb-8"
          />
          <h2 className="text-3xl font-medium mb-4">
            How can we assist with your next project?
          </h2>
        </div>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" className="bg-gray-900 hover:bg-gray-800">
            <a
              href="mailto:beeatthome@gmail.com"
              className="inline-flex items-center gap-2 bg-transparent text-white px-4 py-2 rounded-md"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Us
            </a>
          </Button>
          <Button variant="outline" className="bg-slate-100 hover:bg-slate-200">
            <a
              href="https://wa.me/27712605007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md "
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 flex justify-center items-center max-w-7xl mx-auto text-sm border-t border-gray-200">
        <p>© 2025 All rights reserved.</p>
      </footer>
    </div>
  );
}
