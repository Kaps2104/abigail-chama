"use client"

import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { Award, Users, Scale, Globe } from "lucide-react"

export default function About() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true })
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const { ref: recognitionRef, inView: recognitionInView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div>
      {/* Hero Section - Exclusive Design */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About Abigail & Chama Advocates"
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
                  <span className="block mb-2 text-primary">About</span>
                  Our Firm
                </h1>

                <p className="text-xl text-white/90 mb-10 max-w-xl">
                  A premier full-service law firm committed to excellence in Zambia's legal landscape
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-8 text-center transition-all duration-700 ${
                aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              About The Firm
            </h2>
            <div
              className={`space-y-6 transition-all duration-700 delay-100 ${
                aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-lg text-secondary-light">
                Abigail & Chama Advocates is a premier full-service law firm headquartered in Lusaka, Zambia. Founded in
                2020 by <strong>Abigail Chimuka</strong> and <strong>Gilbert Chama</strong>—two distinguished legal
                professionals with over 30 years of combined experience—the firm has rapidly ascended to prominence in
                the Zambian legal landscape.
              </p>
              <p className="text-lg text-secondary-light">
                Recognized for its dynamic approach and excellence, the firm holds a{" "}
                <strong>Band 3 ranking in General Business Law (Chambers and Partners)</strong>,{" "}
                <strong>Tier 2 status (Legal500)</strong>, and is listed as a <strong>Notable Firm by IFLR1000</strong>,
                cementing its reputation as a leader in corporate and financial law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Practice Areas */}
      <section className="py-20 bg-neutral-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Core Practice Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Banking & Finance</h3>
              <p className="text-secondary-light mb-2">
                We represent banks, financial institutions, and borrowers in high-stakes financing transactions,
                ensuring compliance with Zambia's evolving regulatory framework.
              </p>
              <Link href="/practice-areas#banking" className="btn-selector">
                Learn More
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Corporate & Commercial Law</h3>
              <p className="text-secondary-light mb-2">
                We provide strategic guidance on corporate governance, compliance, and complex transactions, positioning
                businesses for sustainable growth in Zambia and beyond.
              </p>
              <Link href="/practice-areas#corporate" className="btn-selector">
                Learn More
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Energy, Mining & Infrastructure</h3>
              <p className="text-secondary-light mb-2">
                We advise on Zambia's booming energy and mining sectors, supporting projects from licensing to
                operational compliance.
              </p>
              <Link href="/practice-areas#energy" className="btn-selector">
                Learn More
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Dispute Resolution</h3>
              <p className="text-secondary-light mb-2">
                From courtroom litigation to arbitration, we defend client interests with precision and agility,
                resolving disputes efficiently across sectors.
              </p>
              <Link href="/practice-areas#dispute" className="btn-selector">
                Learn More
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/practice-areas" className="btn-selector">
              VIEW ALL PRACTICE AREAS
            </Link>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={valuesRef} className="py-20 bg-white">
        <div className="container-custom">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-700 ${
              valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Scale className="h-10 w-10 text-primary" />,
                title: "Excellence",
                description:
                  "We are committed to delivering the highest quality legal services and exceeding client expectations.",
                delay: 0,
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Integrity",
                description:
                  "We adhere to the highest ethical standards in all our professional relationships and business practices.",
                delay: 100,
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Collaboration",
                description:
                  "We work together as a team, leveraging our collective expertise to achieve optimal results for our clients.",
                delay: 200,
              },
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Innovation",
                description:
                  "We embrace creative thinking and innovative approaches to solve complex legal challenges.",
                delay: 300,
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`text-center p-6 transition-all duration-500 ${
                  valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${value.delay}ms` }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-secondary-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Rankings */}
      <section ref={recognitionRef} className="py-20 bg-neutral-light">
        <div className="container-custom">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-700 ${
              recognitionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Recognition & Rankings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-500 ${
                recognitionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className="text-4xl font-bold text-primary mb-4">Band 3</div>
              <h3 className="text-xl font-bold mb-3">Chambers and Partners</h3>
              <p className="text-secondary-light">General Business Law</p>
            </div>
            <div
              className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-500 ${
                recognitionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="text-4xl font-bold text-primary mb-4">Tier 2</div>
              <h3 className="text-xl font-bold mb-3">Legal500</h3>
              <p className="text-secondary-light">Commercial, Corporate and M&A</p>
            </div>
            <div
              className={`bg-white p-8 rounded-lg shadow-md text-center transition-all duration-500 ${
                recognitionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="text-4xl font-bold text-primary mb-4">Notable</div>
              <h3 className="text-xl font-bold mb-3">IFLR1000</h3>
              <p className="text-secondary-light">Financial and Corporate</p>
            </div>
          </div>

          <div
            className={`mt-12 text-center transition-all duration-700 delay-300 ${
              recognitionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg text-secondary-light max-w-3xl mx-auto mb-8">
              Our attorneys are consistently recognized for their excellence in legal practice, with individual rankings
              including IFLR1000 Women Leaders, Chambers and Partners Band 2 and Band 3 rankings, and Next Generation
              Partner status by Legal500.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Strategic Expertise</h3>
              <p className="text-secondary-light mb-6">
                Our deep understanding of Zambia's regulatory environment, combined with strategic relationships with
                key regulators, enables us to navigate complex legal frameworks and deliver actionable, forward-thinking
                advice.
              </p>

              <h3 className="text-xl font-bold mb-4">Cross-Industry Excellence</h3>
              <p className="text-secondary-light mb-6">
                We serve a diverse clientele, including multinational corporations, financial institutions, SMEs, and
                investors in sectors such as agriculture, energy, mining, and infrastructure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Global Perspective, Local Insight</h3>
              <p className="text-secondary-light mb-6">
                While deeply rooted in Zambian law, our team is adept at advising international clients on cross-border
                transactions and compliance, ensuring seamless alignment with global standards.
              </p>

              <h3 className="text-xl font-bold mb-4">Results-Driven Approach</h3>
              <p className="text-secondary-light mb-6">
                Renowned for pragmatic problem-solving, we prioritize efficiency, responsiveness, and tailored
                strategies to meet clients' unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
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
