"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Award, BookOpen, Briefcase } from "lucide-react"
import { useInView } from "react-intersection-observer"

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
    fullBio:
      "Abigail Chimuka is a founding partner of Abigail & Chama Advocates with 17 years of experience in banking and finance, employment law, corporate advisory, energy law, and dispute resolution. Her strategic approach to legal challenges and commitment to client service have earned her recognition as a leader in Zambia's legal community. Abigail is ranked in IFLR1000 Women Leaders (2021, 2022), holds a Band 2 ranking from Chambers and Partners, and is recognized as a Next Generation Partner by Legal500. She is known for her ethical leadership and advocacy for diversity and inclusion in the legal profession.",
    expertise: ["Banking & Finance", "Employment Law", "Corporate Advisory", "Energy Law", "Dispute Resolution"],
    education: [
      "LLB, University of Zambia",
      "Postgraduate Diploma in Legal Practice, Zambia Institute of Advanced Legal Education",
    ],
    awards: [
      "IFLR1000 Women Leaders (2021, 2022)",
      "Band 2 Ranking (Chambers and Partners)",
      "Next Generation Partner (Legal500)",
    ],
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
    fullBio:
      "Gilbert Chama is a founding partner of Abigail & Chama Advocates with over 14 years of experience in corporate law, mergers & acquisitions, capital markets, mining, and pensions. He is a Certified Corporate Insolvency practitioner with particular expertise in impact investment projects, especially in the agricultural sector, and sustainable development in Zambia. Gilbert holds a Band 3 ranking from Chambers and Partners and is recognized as Highly Regarded by IFLR1000. His exceptional negotiation skills and ability to develop strategic legal solutions have made him a trusted advisor to clients across various industries.",
    expertise: [
      "Corporate Law",
      "Mergers & Acquisitions",
      "Capital Markets",
      "Mining",
      "Pensions",
      "Corporate Insolvency",
    ],
    education: [
      "LLB, University of Zambia",
      "Postgraduate Diploma in Legal Practice, Zambia Institute of Advanced Legal Education",
      "Certified Corporate Insolvency Practitioner",
    ],
    awards: ["Band 3 Ranking (Chambers and Partners)", "Highly Regarded (IFLR1000)"],
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
    fullBio:
      "Eugene Sakala is a Senior Associate at Abigail & Chama Advocates with over 4 years of experience specializing in dispute resolution, security documents, conveyancing, and competition law. He has developed a reputation for his skilled courtroom advocacy and practical approach to transactional advisory. Eugene works closely with clients to understand their objectives and develop tailored legal strategies that address their specific needs.",
    expertise: ["Dispute Resolution (Litigation/Arbitration)", "Security Documents", "Conveyancing", "Competition Law"],
    education: [
      "LLB, University of Zambia",
      "Postgraduate Diploma in Legal Practice, Zambia Institute of Advanced Legal Education",
    ],
    awards: [],
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
    fullBio:
      "Namiloli Mbozi is an Associate at Abigail & Chama Advocates with over 2 years of experience focusing on conveyancing, competition dispute resolution, and pensions. She is known for her client-centric approach, ensuring that legal solutions are tailored to meet the specific needs of each client. Namiloli's attention to detail and commitment to excellence make her a valuable member of the firm's team.",
    expertise: ["Conveyancing", "Competition Dispute Resolution", "Pensions"],
    education: [
      "LLB, University of Zambia",
      "Postgraduate Diploma in Legal Practice, Zambia Institute of Advanced Legal Education",
    ],
    awards: [],
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
    fullBio:
      "Natasha Chibuye is an Associate at Abigail & Chama Advocates specializing in dispute resolution and employment law. Recently called to the Zambian bar, she has quickly established herself as a valuable member of the firm's litigation team. Natasha is known for her analytical rigor and meticulous drafting skills, which enable her to develop compelling legal arguments and effective solutions for clients facing complex disputes.",
    expertise: ["Dispute Resolution (Litigation/Arbitration)", "Employment Law"],
    education: [
      "LLB, University of Zambia",
      "Postgraduate Diploma in Legal Practice, Zambia Institute of Advanced Legal Education",
    ],
    awards: [],
  },
  {
    id: "daudi-banda",
    name: "Daudi Banda",
    title: "Associate",
    email: "",
    phone: "",
    image: "/images/daudi-banda.png",
    overview: "Associate with expertise in corporate and commercial law.",
    fullBio:
      "Daudi Banda is an Associate at Abigail & Chama Advocates with expertise in corporate and commercial law. He assists clients with a range of corporate matters, including company formations, commercial contracts, and regulatory compliance. Daudi's practical approach and attention to detail make him an effective advisor for businesses operating in Zambia's evolving legal landscape.",
    expertise: ["Corporate Law", "Commercial Contracts", "Regulatory Compliance"],
    education: [
      "LLB, University of Zambia",
      "Postgraduate Diploma in Legal Practice, Zambia Institute of Advanced Legal Education",
    ],
    awards: [],
  },
  {
    id: "muulo-kayawe",
    name: "Muulo Kayawe",
    title: "Associate (Secondment)",
    email: "",
    phone: "",
    image: "/images/muulo.png",
    overview: "Associate on secondment with expertise in banking and finance.",
    fullBio:
      "Muulo Kayawe is an Associate on secondment at Abigail & Chama Advocates with expertise in banking and finance. Her experience includes advising on financial transactions, regulatory compliance, and banking operations. Muulo brings valuable insights from her secondment experience, allowing her to provide practical and business-oriented legal advice to clients in the financial sector.",
    expertise: ["Banking & Finance", "Regulatory Compliance", "Financial Transactions"],
    education: [
      "LLB, University of Zambia",
      "Postgraduate Diploma in Legal Practice, Zambia Institute of Advanced Legal Education",
    ],
    awards: [],
  },
]

export default function AttorneyProfile() {
  const params = useParams()
  const [attorney, setAttorney] = useState<any>(null)
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  useEffect(() => {
    if (params.id) {
      const foundAttorney = attorneys.find((a) => a.id === params.id)
      setAttorney(foundAttorney)
    }
  }, [params.id])

  if (!attorney) {
    return (
      <div className="pt-24 lg:pt-32">
        <div className="container-custom py-20 text-center">
          <h1 className="text-3xl font-bold mb-4 font-urbanist">Attorney Not Found</h1>
          <p className="mb-8">The attorney profile you are looking for does not exist.</p>
          <Link href="/attorneys" className="underline-effect text-primary font-urbanist">
            Back to Attorneys
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 lg:pt-32">
      <div className="container-custom py-12">
        <Link href="/attorneys" className="underline-effect text-primary font-urbanist mb-8 inline-block">
          ← Back to Attorneys
        </Link>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
          {/* Left Column - Photo and Contact Info */}
          <div
            className={`transition-all duration-700 ${
              contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-md mb-6">
              <Image src={attorney.image || "/placeholder.svg"} alt={attorney.name} fill className="object-cover" />
            </div>

            <div className="bg-neutral-light p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 font-urbanist">Contact Information</h3>

              {attorney.email && (
                <div className="flex items-center mb-4">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <a href={`mailto:${attorney.email}`} className="underline-effect">
                    {attorney.email}
                  </a>
                </div>
              )}

              {attorney.phone && (
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <a href={`tel:${attorney.phone}`} className="underline-effect">
                    {attorney.phone}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Bio and Details */}
          <div className="lg:col-span-2">
            <div
              className={`transition-all duration-700 delay-100 ${
                contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-2 font-urbanist">{attorney.name}</h1>
              <p className="text-primary text-xl mb-6 font-urbanist">{attorney.title}</p>

              <div className="prose max-w-none mb-8">
                <p className="text-lg">{attorney.fullBio}</p>
              </div>

              {/* Areas of Expertise */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-urbanist flex items-center">
                  <Briefcase className="h-6 w-6 mr-2 text-primary" />
                  Areas of Expertise
                </h2>
                <div className="flex flex-wrap gap-2">
                  {attorney.expertise.map((area: string, index: number) => (
                    <span key={index} className="bg-neutral-light px-4 py-2 rounded-full text-sm font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-urbanist flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-primary" />
                  Education
                </h2>
                <ul className="space-y-2">
                  {attorney.education.map((edu: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Awards & Recognition */}
              {attorney.awards && attorney.awards.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 font-urbanist flex items-center">
                    <Award className="h-6 w-6 mr-2 text-primary" />
                    Awards & Recognition
                  </h2>
                  <ul className="space-y-2">
                    {attorney.awards.map((award: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Attorneys Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8 font-urbanist text-center">Other Team Members</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attorneys
              .filter((a) => a.id !== attorney.id)
              .slice(0, 4)
              .map((relatedAttorney) => (
                <div key={relatedAttorney.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-48 w-full">
                    <Image
                      src={relatedAttorney.image || "/placeholder.svg"}
                      alt={relatedAttorney.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1 font-urbanist">{relatedAttorney.name}</h3>
                    <p className="text-primary text-sm mb-3 font-urbanist">{relatedAttorney.title}</p>
                    <Link
                      href={`/attorneys/${relatedAttorney.id}`}
                      className="underline-effect text-primary text-sm font-urbanist"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 font-urbanist">Need Legal Assistance?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss how we can help you navigate complex legal challenges.
          </p>
          <Link href="/contact" className="hero-underline-effect text-white text-lg font-urbanist font-medium">
            GET IMMEDIATE ATTENTION
          </Link>
        </div>
      </section>
    </div>
  )
}
