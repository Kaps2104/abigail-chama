/**
 * Smoothly scrolls to the specified element with options
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top of the element (default: 0)
 * @param duration - Optional duration of the scroll animation in ms (default: 800)
 */
export const scrollToElement = (elementId: string, offset = 0, duration = 800): void => {
  const element = document.getElementById(elementId)
  if (!element) return

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - offset

  // Check if browser supports smooth scrolling natively
  if ("scrollBehavior" in document.documentElement.style) {
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
    return
  }

  // Fallback for browsers that don't support smooth scrolling
  const startPosition = window.pageYOffset
  const distance = offsetPosition - startPosition
  let startTime: number | null = null

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  // Easing function
  const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  requestAnimationFrame(animation)
}

/**
 * Smoothly scrolls to the top of the page
 * @param duration - Optional duration of the scroll animation in ms (default: 800)
 */
export const scrollToTop = (duration = 800): void => {
  // Check if browser supports smooth scrolling natively
  if ("scrollBehavior" in document.documentElement.style) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    return
  }

  // Fallback for browsers that don't support smooth scrolling
  const startPosition = window.pageYOffset
  let startTime: number | null = null

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const run = easeInOutQuad(timeElapsed, startPosition, -startPosition, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  // Easing function
  const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  requestAnimationFrame(animation)
}
