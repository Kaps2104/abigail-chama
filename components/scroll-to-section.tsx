"use client"

import type React from "react"
import { scrollToElement } from "@/utils/scroll"

interface ScrollToSectionProps {
  targetId: string
  children: React.ReactNode
  className?: string
  offset?: number
}

const ScrollToSection = ({ targetId, children, className = "", offset = 0 }: ScrollToSectionProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    scrollToElement(targetId, offset)
  }

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

export default ScrollToSection
