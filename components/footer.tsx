import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-gradient text-white">
      {/* Top Wave Divider */}
      <div className="w-full h-12 bg-white relative overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-12 text-secondary"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: "currentColor" }}
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>

      <div className="container-custom py-16">
        {/* Logo and Contact Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <Image
              src="/images/logo-light.png"
              alt="Abigail & Chama Advocates"
              width={220}
              height={80}
              className="h-auto mb-4"
            />
            <p className="max-w-md text-white/80">
              A premier full-service law firm headquartered in Lusaka, Zambia, providing innovative legal solutions
              across various sectors.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center mb-3">
              <Phone className="h-5 w-5 mr-2 text-primary" />
              <a href="tel:+260776474125" className="text-white hover:text-primary transition-colors">
                +260 776 474 125
              </a>
            </div>
            <div className="flex items-center mb-3">
              <Mail className="h-5 w-5 mr-2 text-primary" />
              <a href="mailto:info@abigailandchama.co.zm" className="text-white hover:text-primary transition-colors">
                info@abigailandchama.co.zm
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              <p className="text-white/80">Vitumbiko Office Park, Lusaka, Zambia</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider mb-12"></div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="text-xl font-bold mb-6 font-playfair relative inline-block">
              About Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h4>
            <p className="text-white/80 mb-6">
              Founded in 2020, Abigail & Chama Advocates has rapidly ascended to prominence in the Zambian legal
              landscape, recognized for excellence and client-centered service.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 font-playfair relative inline-block">
              Practice Areas
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Corporate & Commercial Law", link: "/practice-areas#corporate" },
                { name: "Banking & Finance", link: "/practice-areas#banking" },
                { name: "Dispute Resolution", link: "/practice-areas#dispute" },
                { name: "Energy, Mining & Infrastructure", link: "/practice-areas#energy" },
                { name: "Real Estate & Conveyancing", link: "/practice-areas#real-estate" },
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  <Link href={item.link} className="text-white/80 hover:text-primary transition-colors btn-selector">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 font-playfair relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", link: "/about" },
                { name: "Our Team", link: "/attorneys" },
                { name: "News & Insights", link: "/news-insights" },
                { name: "Careers", link: "/careers" },
                { name: "Contact Us", link: "/contact" },
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  <Link href={item.link} className="text-white/80 hover:text-primary transition-colors btn-selector">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 font-playfair relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h4>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter to receive updates on legal developments, firm news, and insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder:text-white/50"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">
            &copy; {currentYear} Abigail & Chama Advocates. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-white/70 hover:text-primary transition-colors btn-selector">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-white/70 hover:text-primary transition-colors btn-selector">
              Terms of Use
            </Link>
            <Link href="/disclaimer" className="text-white/70 hover:text-primary transition-colors btn-selector">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
