"use client"

import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { Briefcase, Award, Scale, MapPin, Users, Shield, Building, Leaf } from "lucide-react"

export default function PracticeAreas() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true })
  const { ref: introRef, inView: introInView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const { ref: areasRef, inView: areasInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  // Practice areas data
  const practiceAreas = [
    {
      id: "corporate",
      title: "Corporate & Commercial Law",
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      overview:
        "We provide strategic guidance on corporate governance, compliance, and complex transactions, positioning businesses for sustainable growth in Zambia and beyond.",
      services: [
        "Mergers & Acquisitions (M&A)",
        "Joint Ventures & Shareholder Agreements",
        "Capital Markets & Securities Offerings",
        "Corporate Restructuring & Insolvency",
        "Regulatory Compliance & Corporate Governance",
      ],
      highlight:
        "Led by Gilbert Chama (Band 3 ranked by Chambers and Partners), our team has advised on landmark transactions in mining, agriculture, and infrastructure. Recognized by IFLR1000 for innovative structuring of cross-border deals.",
    },
    {
      id: "banking",
      title: "Banking & Finance",
      icon: <Award className="h-12 w-12 text-primary" />,
      overview:
        "We represent banks, financial institutions, and borrowers in high-stakes financing transactions, ensuring compliance with Zambia's evolving regulatory framework.",
      services: [
        "Syndicated Loans & Project Finance",
        "Asset-Backed Financing & Securitization",
        "Regulatory Licensing & Compliance",
        "Debt Restructuring & Recovery",
      ],
      highlight:
        "Abigail Chimuka (IFLR1000 Women Leader) brings 17+ years of expertise in structuring financing solutions for energy and infrastructure projects. Deep ties with Zambian regulators streamline approval processes.",
    },
    {
      id: "dispute",
      title: "Dispute Resolution",
      icon: <Scale className="h-12 w-12 text-primary" />,
      overview:
        "From courtroom litigation to arbitration, we defend client interests with precision and agility, resolving disputes efficiently across sectors.",
      services: [
        "Commercial Litigation",
        "Arbitration & Mediation",
        "Competition Law Disputes",
        "Debt Recovery & Enforcement",
      ],
      highlight:
        "Eugene Sakala (Senior Associate) is praised for his strategic courtroom advocacy. Track record of success in high-profile mining and employment disputes.",
    },
    {
      id: "energy",
      title: "Energy, Mining & Infrastructure",
      icon: <Building className="h-12 w-12 text-primary" />,
      overview:
        "We advise on Zambia's booming energy and mining sectors, supporting projects from licensing to operational compliance.",
      services: [
        "Mining License Negotiations",
        "Renewable Energy Project Development",
        "PPP (Public-Private Partnership) Agreements",
        "Environmental & Regulatory Compliance",
      ],
      highlight:
        "Gilbert Chama's expertise in impact investments drives sustainable project outcomes. Ranked Tier 2 in Energy & Natural Resources by Legal500.",
    },
    {
      id: "real-estate",
      title: "Real Estate & Conveyancing",
      icon: <MapPin className="h-12 w-12 text-primary" />,
      overview:
        "We simplify property transactions, ensuring seamless compliance with Zambian land laws for individuals and institutional investors.",
      services: [
        "Title Transfers & Due Diligence",
        "Lease Agreements & Mortgages",
        "Land Dispute Resolution",
        "Commercial Real Estate Development",
      ],
      highlight: "Namiloli Mbozi (Associate) is renowned for her responsive handling of complex conveyancing matters.",
    },
    {
      id: "employment",
      title: "Employment & Pensions",
      icon: <Users className="h-12 w-12 text-primary" />,
      overview:
        "We mitigate risks for employers while safeguarding employee rights, balancing compliance with practical business solutions.",
      services: [
        "Employment Contract Drafting",
        "Workplace Dispute Resolution",
        "Pension Fund Regulation & Compliance",
        "Retrenchment Advisory",
      ],
      highlight:
        "Abigail Chimuka's advisory work for multinationals ensures alignment with both local labor laws and global HR standards.",
    },
    {
      id: "competition",
      title: "Competition & Antitrust",
      icon: <Shield className="h-12 w-12 text-primary" />,
      overview:
        "We guide businesses through Zambia's competition regime, minimizing risks of non-compliance and fostering fair market practices.",
      services: [
        "Merger Control Filings",
        "Antitrust Investigations & Compliance",
        "Cartel & Abuse of Dominance Defense",
        "Market Studies & Advisory",
      ],
      highlight: "Eugene Sakala's proactive approach helps clients navigate complex antitrust landscapes.",
    },
    {
      id: "insolvency",
      title: "Insolvency & Restructuring",
      icon: <Leaf className="h-12 w-12 text-primary" />,
      overview:
        "We provide pragmatic solutions for distressed businesses, balancing creditor rights with corporate recovery strategies.",
      services: [
        "Corporate Insolvency Proceedings",
        "Debtor-in-Possession Financing",
        "Creditor Representation",
        "Business Rescue Plans",
      ],
      highlight:
        "Gilbert Chama is a certified Corporate Insolvency Practitioner with a focus on preserving stakeholder value.",
    },
  ]

  return (
    <div>
      {/* Hero Section - Full Width */}
      <section ref={heroRef} className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Practice Areas"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-urbanist">Practice Areas</h1>
            <p className="text-xl md:text-2xl text-white font-montserrat">
              Comprehensive legal solutions across key sectors in Zambia
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={introRef} className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Introduction Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/95"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
                introInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } font-urbanist`}
            >
              Our Expertise
            </h2>
            <p
              className={`text-lg text-secondary-light mb-8 transition-all duration-700 delay-100 ${
                introInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Abigail & Chama Advocates delivers innovative, client-centric legal solutions across a broad spectrum of
              legal disciplines. Our team of experienced attorneys combines deep industry knowledge with practical legal
              strategies to help clients navigate complex challenges and achieve their objectives.
            </p>
            <p
              className={`text-lg text-secondary-light transition-all duration-700 delay-200 ${
                introInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Recognized by <strong>Chambers and Partners</strong>, <strong>Legal500</strong>, and{" "}
              <strong>IFLR1000</strong>, our practice areas reflect our commitment to excellence and our understanding
              of Zambia's evolving legal and business landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section ref={areasRef} className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Practice Areas Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-neutral-light/95"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="space-y-24">
            {practiceAreas.map((area, index) => (
              <div
                key={area.id}
                id={area.id}
                className={`scroll-mt-32 transition-all duration-700 ${
                  areasInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                  <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-lg shadow-md text-center">
                      <div className="flex justify-center mb-6">{area.icon}</div>
                      <h3 className="text-2xl font-bold mb-4 font-urbanist">{area.title}</h3>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-lg text-secondary-light mb-6">{area.overview}</p>

                    <h4 className="text-xl font-bold mb-4 font-urbanist">Key Services</h4>
                    <ul className="space-y-2 mb-6">
                      {area.services.map((service, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                      <h4 className="text-lg font-bold mb-2 font-urbanist">Why Choose Us?</h4>
                      <p className="text-secondary-light">{area.highlight}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Industries Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/95"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-urbanist">Industries We Serve</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Banking & Financial Services",
              "Energy & Natural Resources",
              "Mining",
              "Agriculture",
              "Real Estate & Construction",
              "Telecommunications",
              "Manufacturing",
              "Healthcare",
              "Retail & Consumer",
              "Technology",
              "Transport & Logistics",
              "Public Sector",
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-neutral-light p-6 rounded-lg text-center hover:bg-primary hover:text-white transition-colors"
              >
                <p className="font-medium font-urbanist">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="CTA Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/90"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-urbanist text-white">Need Legal Assistance?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Contact our team today to discuss how we can help you navigate complex legal challenges and achieve your
            objectives.
          </p>
          <Link href="/contact" className="hero-underline-effect text-white text-lg font-urbanist font-medium">
            GET IMMEDIATE ATTENTION
          </Link>
        </div>
      </section>
    </div>
  )
}
