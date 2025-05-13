"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send the form data to a server
    console.log("Form submitted:", formData)
    setFormSubmitted(true)

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      })
      setFormSubmitted(false)
    }, 5000)
  }

  return (
    <div>
      {/* Hero Section - Full Width */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact Us"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80"></div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-urbanist">Contact Us</h1>
            <p className="text-xl md:text-2xl text-white font-montserrat">
              Get in touch with our team of experienced legal professionals
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/95"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div ref={formRef} className="lg:col-span-2">
              <div
                className={`bg-white rounded-lg shadow-md p-8 transition-all duration-700 ${
                  formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h2 className="text-2xl font-bold mb-6 font-urbanist">Send Us a Message</h2>

                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
                    <p className="font-medium">Thank you for your message!</p>
                    <p>We will get back to you as soon as possible.</p>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition-colors"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div ref={infoRef} className="lg:col-span-1">
              <div
                className={`bg-secondary text-white rounded-lg shadow-md p-8 transition-all duration-700 delay-200 ${
                  infoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h2 className="text-2xl font-bold mb-6 font-urbanist">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 text-primary" />
                    <div>
                      <h3 className="font-bold mb-1 font-urbanist">Address</h3>
                      <p>
                        Vitumbiko Office Park, Stand 4713, East Wing, United Nations Avenue Longacres, Lusaka, Zambia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 text-primary" />
                    <div>
                      <h3 className="font-bold mb-1 font-urbanist">Phone</h3>
                      <p>
                        <a href="tel:+260776474125" className="hover:underline">
                          +260 776 474 125
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 text-primary" />
                    <div>
                      <h3 className="font-bold mb-1 font-urbanist">Email</h3>
                      <p>
                        <a href="mailto:info@abigailandchama.co.zm" className="hover:underline">
                          info@abigailandchama.co.zm
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 mr-4 text-primary" />
                    <div>
                      <h3 className="font-bold mb-1 font-urbanist">Business Hours</h3>
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`mt-8 bg-neutral-light rounded-lg shadow-md p-8 transition-all duration-700 delay-300 ${
                  infoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-xl font-bold mb-4 font-urbanist">Need Immediate Assistance?</h3>
                <p className="mb-4">
                  For urgent matters, please call our office directly or send an email with "URGENT" in the subject
                  line.
                </p>
                <a
                  href="tel:+260776474125"
                  className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition-colors inline-block"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Map Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-neutral-light/95"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center font-urbanist">Our Location</h2>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15456.734254115277!2d28.29000972767334!3d-15.416699035351508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408b0cfa3a9f11%3A0x63d33aaf5e0caf3!2sLongacres%2C%20Lusaka%2C%20Zambia!5e0!3m2!1sen!2sus!4v1652345678901!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Abigail & Chama Advocates Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
