"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { Calendar, User, ArrowRight } from "lucide-react"

// Sample news and insights data
const newsItems = [
  {
    id: "zambia-mining-regulations-2025",
    title: "New Mining Regulations in Zambia: What Investors Need to Know",
    excerpt:
      "An analysis of Zambia's updated mining regulations and their implications for local and international investors in the sector.",
    date: "May 5, 2025",
    author: "Abigail Chimuka",
    category: "Mining Law",
    image: "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  },
  {
    id: "banking-sector-reforms",
    title: "Banking Sector Reforms: Impact on Financial Institutions",
    excerpt:
      "Exploring the recent banking sector reforms in Zambia and their implications for financial institutions and their clients.",
    date: "April 22, 2025",
    author: "Gilbert Chama",
    category: "Banking & Finance",
    image:
      "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  },
  {
    id: "employment-law-updates",
    title: "Key Employment Law Updates for Zambian Businesses",
    excerpt: "Recent changes to Zambia's employment legislation and what they mean for employers and employees.",
    date: "April 10, 2025",
    author: "Eugene Sakala",
    category: "Employment Law",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  },
  {
    id: "real-estate-investment-guide",
    title: "A Guide to Real Estate Investment in Zambia",
    excerpt:
      "Navigating the legal aspects of real estate investment in Zambia, including property rights, conveyancing, and regulatory compliance.",
    date: "March 28, 2025",
    author: "Namiloli Mbozi",
    category: "Real Estate",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  },
  {
    id: "dispute-resolution-strategies",
    title: "Effective Dispute Resolution Strategies for Businesses",
    excerpt:
      "A comparative analysis of litigation, arbitration, and mediation options for resolving commercial disputes in Zambia.",
    date: "March 15, 2025",
    author: "Natasha Chibuye",
    category: "Dispute Resolution",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  },
  {
    id: "corporate-governance-best-practices",
    title: "Corporate Governance Best Practices for Zambian Companies",
    excerpt: "Implementing effective corporate governance structures to ensure compliance and business sustainability.",
    date: "February 28, 2025",
    author: "Gilbert Chama",
    category: "Corporate Law",
    image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  },
]

// Categories for filtering
const categories = [
  "All",
  "Mining Law",
  "Banking & Finance",
  "Employment Law",
  "Real Estate",
  "Dispute Resolution",
  "Corporate Law",
]

export default function NewsInsights() {
  const [activeCategory, setActiveCategory] = useState("All")
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true })
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  // Filter news items based on selected category
  const filteredNews =
    activeCategory === "All" ? newsItems : newsItems.filter((item) => item.category === activeCategory)

  return (
    <div>
      {/* Hero Section - Full Width */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="News & Insights"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80"></div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
          <div
            className={`max-w-4xl mx-auto transition-all duration-1000 ${
              heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-urbanist">
              News & Insights
            </h1>
            <p className="text-xl md:text-2xl text-white font-montserrat">
              Stay updated with the latest legal developments and expert analysis
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Blog Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/95"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Category Filter */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-neutral-light text-secondary hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white border border-neutral-dark rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 ${
                  contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 w-full">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center text-secondary/70 text-sm">
                      <Calendar className="h-3 w-3 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-urbanist text-secondary">{item.title}</h3>
                  <p className="text-secondary mb-4 line-clamp-3">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-secondary/70 text-sm">
                      <User className="h-3 w-3 mr-1" />
                      {item.author}
                    </div>
                    <Link href={`/news-insights/${item.id}`} className="flex items-center text-primary font-urbanist">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-secondary">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Newsletter Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-secondary/90"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-urbanist text-white">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/80 mb-8">
              Stay informed about legal developments, industry insights, and firm news. Subscribe to our newsletter for
              regular updates.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
