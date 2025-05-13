import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const TopBar = () => {
  return (
    <div className="bg-secondary py-2 text-white text-sm hidden md:block">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Phone className="h-3.5 w-3.5 mr-2" />
            <a href="tel:+260776474125" className="hover:text-primary transition-colors">
              Call Us: +260 776 474 125
            </a>
          </div>
          <div className="flex items-center">
            <Mail className="h-3.5 w-3.5 mr-2" />
            <a href="mailto:info@abigailandchama.co.zm" className="hover:text-primary transition-colors">
              Email us: info@abigailandchama.co.zm
            </a>
          </div>
          <div className="flex items-center">
            <MapPin className="h-3.5 w-3.5 mr-2" />
            <span>Our address: Vitumbiko Office Park, Lusaka, Zambia</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Link href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
            <Facebook className="h-3.5 w-3.5" />
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
            <Twitter className="h-3.5 w-3.5" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <Linkedin className="h-3.5 w-3.5" />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
            <Instagram className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopBar
