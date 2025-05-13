"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Search } from "lucide-react"

const Header = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if we've scrolled enough to change header appearance
      if (currentScrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Hide header on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setVisible(false)
      } else {
        // Scrolling up or at the top
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // Check if a link is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled ? "bg-secondary/90 backdrop-blur-sm py-1" : "py-2"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="relative z-10">
          <Image
            src="/images/logo-light.png"
            alt="Abigail & Chama Advocates"
            width={120}
            height={40}
            className="h-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link
            href="/"
            className={`nav-link text-white hover:text-primary ${isActive("/") && pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`nav-link text-white hover:text-primary ${isActive("/about") ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            href="/practice-areas"
            className={`nav-link text-white hover:text-primary ${isActive("/practice-areas") ? "active" : ""}`}
          >
            Practice Areas
          </Link>
          <Link
            href="/attorneys"
            className={`nav-link text-white hover:text-primary ${isActive("/attorneys") ? "active" : ""}`}
          >
            Attorneys
          </Link>
          <Link
            href="/news-insights"
            className={`nav-link text-white hover:text-primary ${isActive("/news-insights") ? "active" : ""}`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`nav-link text-white hover:text-primary ${isActive("/contact") ? "active" : ""}`}
          >
            Contact
          </Link>

          <div className="flex items-center ml-4">
            <button aria-label="Search" className="text-white hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button aria-label="Search" className="text-white hover:text-primary transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            className="text-white hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-secondary/95 backdrop-blur-sm shadow-md z-50">
          <nav className="px-4 md:px-8 py-4 flex flex-col space-y-3">
            <Link
              href="/"
              className={`text-white py-2 hover:text-primary ${isActive("/") && pathname === "/" ? "text-primary" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-white py-2 hover:text-primary ${isActive("/about") ? "text-primary" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/practice-areas"
              className={`text-white py-2 hover:text-primary ${isActive("/practice-areas") ? "text-primary" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Practice Areas
            </Link>
            <Link
              href="/attorneys"
              className={`text-white py-2 hover:text-primary ${isActive("/attorneys") ? "text-primary" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Attorneys
            </Link>
            <Link
              href="/news-insights"
              className={`text-white py-2 hover:text-primary ${isActive("/news-insights") ? "text-primary" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`text-white py-2 hover:text-primary ${isActive("/contact") ? "text-primary" : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
