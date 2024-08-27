"use client"

import { useState, useEffect, JSX, SVGProps, } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SalahHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setIsDarkMode(mediaQuery.matches)
  }, [])
  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState)
  }
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-between bg-background px-4 md:px-6 ${
        isDarkMode ? "" : ""
      }`}
    >
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <SaladIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Salah Eddine Arbani</span>
      </Link>
      <nav className="flex items-center gap-4">
        <Link
          href="#"
          onClick={() => scrollToSection("about")}
          className={`text-sm font-medium hover:underline underline-offset-4 ${
            isDarkMode ? "" : ""
          }`}
          prefetch={false}
        >
          About Me
        </Link>
        <Link
          href="#"
          onClick={() => scrollToSection("projects")}
          className={`text-sm font-medium hover:underline underline-offset-4 ${
            isDarkMode ? "" : ""
          }`}
          prefetch={false}
        >
          Projects
        </Link>
        <Link
          href="#"
          onClick={() => scrollToSection("skills")}
          className={`text-sm font-medium hover:underline underline-offset-4 ${
            isDarkMode ? "" : ""
          }`}
          prefetch={false}
        >
          Skills
        </Link>
        <Link
          href="#"
          onClick={() => scrollToSection("contact")}
          className={`text-sm font-medium hover:underline underline-offset-4 ${
            isDarkMode ? "" : ""
          }`}
          prefetch={false}
        >
          Contact
        </Link>
        <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
          {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          <span className="sr-only">Toggle dark mode</span>
        </Button>
      </nav>
    </header>
  )
}

function MoonIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function SaladIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 21h10" />
      <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
      <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" />
      <path d="m13 12 4-4" />
      <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
    </svg>
  )
}


function SunIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}
