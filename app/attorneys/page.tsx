"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, X } from "lucide-react"

// Attorney data
const attorneys = [
  {
    id: "abigail-chimuka",
    name: "Abigail Chimuka",
    title: "Partner",
    email: "achimuka@abigailandchama.co.zm",
    phone: "+260 977 892 577",
    image: "/images/abigail.png",
    overview:
      "17 years of experience in banking and finance, employment law, corporate advisory, energy law, and dispute resolution. Ranked in IFLR1000 Women Leaders (2021, 2022), Band 2 (Chambers and Partners), and Next Generation Partner (Legal500). Founding partner known for strategic solutions, ethical leadership, and advocacy for diversity and inclusion.",
    category: "partner",
  },
  {
    id: "gilbert-chama",
    name: "Gilbert Chama",
    title: "Partner",
    email: "gchama@abigailandchama.co.zm",
    phone: "+260 977 302 678",
    image: "/images/gilbert-chama.png",
    overview:
      "14+ years of experience in corporate law, mergers & acquisitions, capital markets, mining, and pensions. Band 3 ranking (Chambers and Partners) and Highly Regarded by IFLR1000. Certified Corporate Insolvency practitioner. Expertise in impact investment projects (notably agriculture) and sustainable development in Zambia. Recognized for negotiation skills and strategic legal solutions.",
    category: "partner",
  },
  {
    id: "eugene-sakala",
    name: "Eugene Sakala",
    title: "Senior Associate",
    email: "esakala@abigailandchama.co.zm",
    phone: "",
    image: "/images/eugene.png",
    overview:
      "4+ years of experience in dispute resolution (litigation/arbitration), security documents, conveyancing, and competition law. Skilled in courtroom advocacy and transactional advisory.",
    category: "senior-associate",
  },
  {
    id: "namiloli-mbozi",
    name: "Namiloli Mbozi",
    title: "Associate",
    email: "nmbozi@abigailandchama.co.zm",
    phone: "",
    image: "/images/namiloli.png",
    overview:
      "Focus: Conveyancing, competition dispute resolution, and pensions. 2+ years of experience with a client-centric approach.",
    category: "associate",
  },
  {
    id: "natasha-chibuye",
    name: "Natasha Chibuye",
    title: "Associate",
    email: "nchibuye@abigailandchama.co.zm",
    phone: "",
    image: "/images/natasha.png",
    overview:
      "Focus: Dispute resolution (litigation/arbitration) and employment law. Recently called to the Zambian bar; known for analytical rigor and meticulous drafting.",
    category: "associate",
  },
  {
    id: "daudi-banda",
    name: "Daudi Banda",
    title: "Associate",
    email: "",
    phone: "",
    image: "/images/daudi-banda.png",
    overview: "Associate with expertise in corporate and commercial law.",
    category: "associate",
  },
  {
    id: "muulo-kayawe",
    name: "Muulo Kayawe",
    title: "Associate (Secondment)",
    email: "",
    phone: "",
    image: "/images/muulo.png",
    overview: "Associate on secondment with expertise in banking and finance.",
    category: "associate",
  },
]

// Legal assistants
const legalAssistants = [
  {
    name: "Mumba Mwenda",
    image: "/images/mumba-mwenda.png",
  },
  {
    name: "Hannah Mpamba",
    image: "/images/hannah.png",
  },
  {
    name: "Mukuka Kabwe",
    image: "/images/mukuka-kabwe.png",
  },
  {
    name: "Mulenga Kansembe",
    image: "/images/mulenga-kansembe.png",
  },
]

export default function Attorneys() {
  const [filter, setFilter] = useState("all")
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true })
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Filter attorneys based on category
  const filteredAttorneys = filter === "all" ? attorneys : attorneys.filter((attorney) => attorney.category === filter)

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <div>
      {/* Hero Section - Exclusive Design */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Our Team"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-1">
          <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 mt-24">
          <div className="max-w-3xl">
            <div className="relative">
              {/* Gold accent line */}
              <div className="absolute left-0 top-0 w-1 h-24 bg-primary"></div>

              <div className="pl-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  <span className="block mb-2 text-primary">Our</span>
                  Legal Team
                </h1>

                <p className="text-xl text-white/90 mb-10 max-w-xl">
                  Meet our experienced legal professionals dedicated to providing exceptional service and innovative
                  legal solutions.
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <button
                    onClick={() => setFilter("all")}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      filter === "all" ? "bg-primary text-white" : "bg-white/10 text-white hover:bg-primary/10"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilter("partner")}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      filter === "partner" ? "bg-primary text-white" : "bg-white/10 text-white hover:bg-primary/10"
                    }`}
                  >
                    Partners
                  </button>
                  <button
                    onClick={() => setFilter("senior-associate")}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      filter === "senior-associate"
                        ? "bg-primary text-white"
                        : "bg-white/10 text-white hover:bg-primary/10"
                    }`}
                  >
                    Senior Associates
                  </button>
                  <button
                    onClick={() => setFilter("associate")}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      filter === "associate" ? "bg-primary text-white" : "bg-white/10 text-white hover:bg-primary/10"
                    }`}
                  >
                    Associates
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={contentRef} className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAttorneys.map((attorney, index) => (
              <div
                key={attorney.id}
                className={`bg-white border border-neutral-dark rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 ${
                  contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-80 w-full cursor-pointer" onClick={() => openImageModal(attorney.image)}>
                  <Image
                    src={attorney.image || "/placeholder.svg"}
                    alt={attorney.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{attorney.name}</h3>
                  <p className="text-primary mb-4">{attorney.title}</p>

                  <div className="mb-4">
                    {attorney.email && (
                      <a
                        href={`mailto:${attorney.email}`}
                        className="flex items-center text-secondary mb-2 hover:text-primary transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        <span className="text-sm">{attorney.email}</span>
                      </a>
                    )}
                    {attorney.phone && (
                      <a
                        href={`tel:${attorney.phone}`}
                        className="flex items-center text-secondary hover:text-primary transition-colors"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        <span className="text-sm">{attorney.phone}</span>
                      </a>
                    )}
                  </div>

                  <p className="text-secondary mb-6">{attorney.overview}</p>

                  <Link href={`/attorneys/${attorney.id}`} className="btn-selector">
                    View Full Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Assistants Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Legal Assistants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {legalAssistants.map((assistant, index) => (
                <div key={index} className="bg-neutral-light p-6 rounded-lg text-center">
                  <div
                    className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden cursor-pointer"
                    onClick={() => openImageModal(assistant.image)}
                  >
                    <Image
                      src={assistant.image || "/placeholder.svg"}
                      alt={assistant.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-bold text-secondary">{assistant.name}</p>
                  <p className="text-sm text-secondary/70">Legal Assistant</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Legal Assistance?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team of experienced attorneys is ready to help you navigate complex legal challenges and achieve your
            goals.
          </p>
          <Link href="/contact" className="hero-underline-effect text-white text-lg font-medium">
            GET IMMEDIATE ATTENTION
          </Link>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
            <button className="absolute top-4 right-4 bg-white rounded-full p-1 z-10" onClick={closeImageModal}>
              <X className="h-6 w-6 text-secondary" />
            </button>
            <div className="relative w-full h-[80vh]">
              <Image src={selectedImage || "/placeholder.svg"} alt="Full size image" fill className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
