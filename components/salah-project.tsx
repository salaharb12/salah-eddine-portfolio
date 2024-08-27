/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/hwGhnUBUCYB
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import { JSX, SVGProps , useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SalahProject() {
  const projects = [
    {
      id: 1,
      title: "Acme Website",
      description: "A modern and responsive website for Acme Inc.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Web Development",
      liveDemo: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Fitness Tracker App",
      description: "A mobile app to help users track their fitness goals.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Mobile Apps",
      liveDemo: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Brand Identity Design",
      description: "A sleek and modern brand identity design.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Design",
      liveDemo: "#",
      github: "#",
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "A feature-rich e-commerce platform for online shopping.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Web Development",
      liveDemo: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Productivity App",
      description: "A mobile app to help users stay organized and productive.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Mobile Apps",
      liveDemo: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Brochure Design",
      description: "A visually appealing brochure design for a company.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Design",
      liveDemo: "#",
      github: "#",
    },
  ]
  const [selectedCategory, setSelectedCategory] = useState("All")
  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)
  return (
    <section className="bg-background py-12 md:py-20 lg:py-28">
      <div className="container max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:mb-12 md:flex-row">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Salah Eddine Arbani's Portfolio</h2>
          <div className="flex items-center gap-4">
            <Button
              variant={selectedCategory === "All" ? "primary" : "outline"}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </Button>
            <Button
              variant={selectedCategory === "Web Development" ? "primary" : "outline"}
              onClick={() => setSelectedCategory("Web Development")}
            >
              Web Development
            </Button>
            <Button
              variant={selectedCategory === "Mobile Apps" ? "primary" : "outline"}
              onClick={() => setSelectedCategory("Mobile Apps")}
            >
              Mobile Apps
            </Button>
            <Button
              variant={selectedCategory === "Design" ? "primary" : "outline"}
              onClick={() => setSelectedCategory("Design")}
            >
              Design
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
            >
              <img
                src="/placeholder.svg"
                alt={project.title}
                width={400}
                height={300}
                className="h-60 w-full object-cover"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="flex items-center justify-between">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    <EyeIcon className="h-4 w-4" />
                    Live Demo
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EyeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}
