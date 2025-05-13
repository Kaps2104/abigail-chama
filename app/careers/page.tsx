"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { Briefcase, Users, Award, Mail, Bell, Check } from "lucide-react"

export default function Careers() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true })
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: cultureRef, inView: cultureInView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const { ref: newsletterRef, inView: newsletterInView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send the email to a server
    console.log("Subscribed with email:", email)
    setSubscribed(true)

    // Reset form after submission
    setTimeout(() => {
      setEmail("")
      setSubscribed(false)
    }, 5000)
  }

  return (
    <div>
      {/* Hero Section - Full Background Image with Animations */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center">
        {/* Full background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Careers"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-secondary/70"></div>
        </div>

        <div className="container-custom relative z-10 mt-20">
          <div className="max-w-3xl">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up`}>Careers</h1>

            <p className={`text-xl text-white/90 mb-10 animate-slide-up animate-delay-100`}>
              Join our team of exceptional legal professionals dedicated to excellence and innovation in legal practice.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section ref={cultureRef} className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${
                cultureInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Why Join Abigail & Chama Advocates?
            </h2>
            <p
              className={`text-lg text-secondary mb-8 transition-all duration-700 delay-100 ${
                cultureInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              At Abigail & Chama Advocates, we believe that our people are our greatest asset. We are committed to
              fostering a collaborative, inclusive, and supportive work environment where legal professionals can thrive
              and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="h-12 w-12 text-primary" />,
                title: "Challenging Work",
                description:
                  "Work on complex, high-profile matters for leading Zambian and international clients across various industries.",
                delay: 0,
              },
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "Collaborative Culture",
                description:
                  "Join a team that values collaboration, diversity, and inclusion, where every voice is heard and respected.",
                delay: 100,
              },
              {
                icon: <Award className="h-12 w-12 text-primary" />,
                title: "Professional Development",
                description:
                  "Benefit from mentorship, training programs, and opportunities to develop your legal expertise and leadership skills.",
                delay: 200,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-neutral-light p-8 rounded-lg text-center transition-all duration-500 ${
                  cultureInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section ref={contentRef} className="py-20 bg-neutral-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Current Openings</h2>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-secondary mb-8">
              We're always looking for talented individuals to join our team. While we don't have any specific openings
              at the moment, we encourage you to subscribe to our newsletter to be notified when new positions become
              available.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bell className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">No Current Openings</h3>
              <p className="text-secondary mb-6">
                Please check back later or subscribe to our newsletter below to be notified when new positions are
                posted.
              </p>
              <Link href="#newsletter" className="btn-primary">
                Subscribe for Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" ref={newsletterRef} className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div
              className={`newsletter-form p-10 rounded-lg shadow-lg transition-all duration-700 ${
                newsletterInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h2>
                <p className="text-white/80 max-w-2xl mx-auto">
                  Stay updated on career opportunities, legal insights, and firm news. Be the first to know when new
                  positions become available.
                </p>
              </div>

              {subscribed ? (
                <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Thank You for Subscribing!</h3>
                  <p className="text-white/80">You'll now receive updates about career opportunities and firm news.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-grow relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-white/50"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-primary hover:bg-primary-dark text-white font-medium py-4 px-8 rounded-md transition-colors whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-white/60 text-sm mt-4 text-center">
                    By subscribing, you agree to receive emails from Abigail & Chama Advocates. You can unsubscribe at
                    any time.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Speculative Applications */}
      <section className="py-20 bg-neutral-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Speculative Applications</h2>
            <p className="text-lg text-secondary mb-8">
              We're always interested in hearing from talented legal professionals who are passionate about excellence
              and innovation. If you believe you would be a valuable addition to our team, we welcome your application.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">How to Apply</h3>
              <p className="text-secondary mb-6">
                Send your CV, cover letter, and academic transcripts to careers@abigailandchama.co.zm with "Speculative
                Application" in the subject line. Please specify your area of expertise and the type of role you're
                interested in.
              </p>
              <a href="mailto:careers@abigailandchama.co.zm" className="btn-primary">
                Send Application
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team, even if we don't have a specific opening
            listed. Send your CV to careers@abigailandchama.co.zm to be considered for future opportunities.
          </p>
          <a href="mailto:careers@abigailandchama.co.zm" className="btn-primary bg-primary hover:bg-primary-dark">
            CONTACT OUR RECRUITMENT TEAM
          </a>
        </div>
      </section>
    </div>
  )
}
