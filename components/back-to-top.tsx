"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { scrollToTop } from "@/utils/scroll"

interface BackToTopProps {
  showAfter?: number // Scroll position in pixels to show the button
  scrollDuration?: number // Duration of scroll animation in ms
}

export default function BackToTop({ showAfter = 300, scrollDuration = 800 }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > showAfter) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [showAfter])

  const handleClick = () => {
    scrollToTop(scrollDuration)
  }

  return (
    <button onClick={handleClick} className={`back-to-top ${isVisible ? "visible" : ""}`} aria-label="Back to top">
      <ChevronUp className="h-6 w-6" />
    </button>
  )
}
