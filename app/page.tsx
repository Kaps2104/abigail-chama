"use client"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Award, Scale, Briefcase, Check, ArrowRight } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true })
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const { ref: practiceRef, inView: practiceInView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const { ref: teamRef, inView: teamInView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div>
      {/* Hero Section - Full Width Lady Justice Style */}
      <section ref={heroRef} className="relative min-h-screen w-full flex items-center">
        {/* Background image with overlay - full width */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/8112589/pexels-photo-8112589.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Lady Justice"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Our Independence Makes the Difference
              </h1>

              <p className="text-xl text-white/80 mb-10">Nationally Established. Internationally Recognized.</p>

              <Link href="/contact" className="hero-underline-effect text-white text-lg font-medium">
                GET IMMEDIATE ATTENTION
              </Link>
            </div>

            <div className="hidden lg:block">
              {/* This space intentionally left empty to match the layout in the reference image */}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
          <div className="animate-bounce">
            <ArrowRight className="h-5 w-5 text-white rotate-90" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" ref={aboutRef} className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 text-center transition-all duration-700 ${
                aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } text-secondary`}
            >
              About The Firm
            </h2>
            <div
              className={`space-y-6 transition-all duration-700 delay-100 ${
                aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-lg text-secondary">
                Abigail & Chama Advocates is a premier full-service law firm headquartered in Lusaka, Zambia. Founded in
                2020 by <strong>Abigail Chimuka</strong> and <strong>Gilbert Chama</strong>—two distinguished legal
                professionals with over 30 years of combined experience—the firm has rapidly ascended to prominence in
                the Zambian legal landscape.
              </p>
              <p className="text-lg text-secondary">
                Recognized for its dynamic approach and excellence, the firm holds a{" "}
                <strong>Band 3 ranking in General Business Law (Chambers and Partners)</strong>,{" "}
                <strong>Tier 2 status (Legal500)</strong>, and is listed as a <strong>Notable Firm by IFLR1000</strong>,
                cementing its reputation as a leader in corporate and financial law.
              </p>
              <div className="flex justify-center mt-8">
                <Link href="/about" className="btn-selector">
                  LEARN MORE ABOUT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="practice-areas" ref={practiceRef} className="relative py-20">
        {/* Background image with overlay - full width */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Practice Areas Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-neutral-light/95"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 text-center transition-all duration-700 ${
              practiceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } text-secondary`}
          >
            Our Practice Areas
          </h2>

          <p
            className={`text-center max-w-3xl mx-auto mb-12 text-secondary transition-all duration-700 delay-100 ${
              practiceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            We provide comprehensive legal services tailored to meet the unique needs of our clients. Our commitment to
            excellence and client satisfaction has resulted in a high rate of repeat business and long-term client
            relationships.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate & Commercial Law",
                icon: <Briefcase className="h-8 w-8" />,
                description:
                  "Strategic guidance on corporate governance, compliance, and complex transactions to position your business for sustainable growth.",
                benefits: ["Expert M&A advisory", "Regulatory compliance", "Corporate restructuring"],
                delay: 0,
                link: "/practice-areas#corporate",
              },
              {
                title: "Banking & Finance",
                icon: <Award className="h-8 w-8" />,
                description:
                  "Representing banks, financial institutions, and borrowers in high-stakes financing transactions with deep regulatory knowledge.",
                benefits: ["Project finance expertise", "Debt restructuring", "Regulatory compliance"],
                delay: 100,
                link: "/practice-areas#banking",
              },
              {
                title: "Dispute Resolution",
                icon: <Scale className="h-8 w-8" />,
                description:
                  "From courtroom litigation to arbitration, we defend client interests with precision, agility, and strategic thinking.",
                benefits: ["Commercial litigation", "Arbitration & mediation", "Strategic settlements"],
                delay: 200,
                link: "/practice-areas#dispute",
              },
              {
                title: "Energy, Mining & Infrastructure",
                icon: <Award className="h-8 w-8" />,
                description:
                  "Supporting projects from licensing to operational compliance in Zambia's booming energy and mining sectors.",
                benefits: ["Mining license negotiations", "Renewable energy projects", "Environmental compliance"],
                delay: 300,
                link: "/practice-areas#energy",
              },
              {
                title: "Real Estate & Conveyancing",
                icon: <MapPin className="h-8 w-8" />,
                description:
                  "Simplifying property transactions with seamless compliance with Zambian land laws for individuals and investors.",
                benefits: ["Title transfers & due diligence", "Commercial development", "Land dispute resolution"],
                delay: 400,
                link: "/practice-areas#real-estate",
              },
              {
                title: "Employment & Pensions",
                icon: <Briefcase className="h-8 w-8" />,
                description:
                  "Mitigating risks for employers while safeguarding employee rights and ensuring regulatory compliance.",
                benefits: ["Employment contract drafting", "Workplace dispute resolution", "Pension fund compliance"],
                delay: 500,
                link: "/practice-areas#employment",
              },
            ].map((area, index) => (
              <div
                key={index}
                className={`practice-card transition-all duration-500 ${
                  practiceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${area.delay}ms` }}
              >
                <div className="p-8">
                  <div className="practice-card-icon">{area.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">{area.title}</h3>
                  <p className="text-secondary mb-6">{area.description}</p>

                  <div className="mb-6">
                    <h4 className="font-bold text-sm uppercase text-primary mb-2">Key Benefits</h4>
                    <ul className="space-y-2">
                      {area.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                          <span className="text-secondary">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={area.link} className="btn-selector">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`text-center mt-12 transition-all duration-700 delay-600 ${
              practiceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link href="/practice-areas" className="btn-selector text-primary text-lg font-medium">
              VIEW ALL PRACTICE AREAS
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" ref={teamRef} className="relative py-20">
        {/* Background image with overlay - full width */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Team Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/95"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 text-center transition-all duration-700 ${
              teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } text-secondary`}
          >
            Our Team
          </h2>

          <p
            className={`text-center max-w-3xl mx-auto mb-12 text-secondary transition-all duration-700 delay-100 ${
              teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Meet our experienced legal professionals dedicated to providing exceptional service and innovative legal
            solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Abigail Chimuka",
                title: "Partner",
                delay: 0,
                image: "/images/abigail.png",
                link: "/attorneys/abigail-chimuka",
              },
              {
                name: "Gilbert Chama",
                title: "Partner",
                delay: 100,
                image: "/images/gilbert-chama.png",
                link: "/attorneys/gilbert-chama",
              },
              {
                name: "Eugene Sakala",
                title: "Senior Associate",
                delay: 200,
                image: "/images/eugene.png",
                link: "/attorneys/eugene-sakala",
              },
              {
                name: "Namiloli Mbozi",
                title: "Associate",
                delay: 300,
                image: "/images/namiloli.png",
                link: "/attorneys/namiloli-mbozi",
              },
            ].map((member, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 ${
                  teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${member.delay}ms` }}
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1 text-secondary">{member.name}</h3>
                <p className="text-primary mb-4">{member.title}</p>
                <Link href={member.link} className="btn-selector">
                  View Profile
                </Link>
              </div>
            ))}
          </div>

          <div
            className={`text-center mt-12 transition-all duration-700 delay-400 ${
              teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Link href="/attorneys" className="btn-selector text-primary text-lg font-medium">
              MEET OUR FULL TEAM
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20">
        {/* Background image with overlay - full width */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-secondary/90"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Work With Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Contact Abigail & Chama Advocates today to discuss how our experienced attorneys can help you navigate
            complex legal challenges and achieve your goals.
          </p>
          <Link href="/contact" className="hero-underline-effect text-white text-lg font-medium">
            GET IMMEDIATE ATTENTION
          </Link>
        </div>
      </section>
    </div>
  )
}
