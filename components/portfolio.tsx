
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export function Portfolio() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-background sticky top-0 z-50 border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <PaletteIcon className="w-6 h-6" />
            <span className="font-bold text-lg">Portfolio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Work
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button>
            <PlusIcon className="w-4 h-4 mr-2" />
            Hire Me
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-background py-12 md:py-24">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">Crafting Exceptional Digital Experiences</h1>
              <p className="text-muted-foreground text-lg">
                As a UI/UX designer, I specialize in creating visually stunning and user-friendly digital products.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary/50"
                prefetch={false}
              >
                View My Work
              </Link>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={600}
                height={600}
                alt="Hero Image"
                className="rounded-xl object-cover"
                style={{ aspectRatio: "600/600", objectFit: "cover" }}
              />
              <div className="absolute -bottom-4 -right-4 bg-primary rounded-full w-16 h-16 flex items-center justify-center">
                <PaletteIcon className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Latest Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Project 1"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                  <h3 className="text-lg font-bold mb-2">Project 1</h3>
                  <p className="text-sm">
                    A modern e-commerce website design with a focus on user-friendly navigation and seamless checkout
                    experience.
                  </p>
                </div>
              </div>
              <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Project 2"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                  <h3 className="text-lg font-bold mb-2">Project 2</h3>
                  <p className="text-sm">A sleek and modern mobile app design for a fitness tracking application.</p>
                </div>
              </div>
              <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Project 3"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                  <h3 className="text-lg font-bold mb-2">Project 3</h3>
                  <p className="text-sm">A clean and modern dashboard design for a business intelligence platform.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-24">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">My Expertise</h2>
              <p className="text-muted-foreground text-lg">
                As a UI/UX designer, I specialize in creating visually stunning and user-friendly digital products. My
                expertise includes:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-4 flex items-center gap-3">
                  <FigmaIcon className="w-8 h-8" />
                  <span className="font-medium">Figma</span>
                </div>
                <div className="bg-muted rounded-lg p-4 flex items-center gap-3">
                  <PencilIcon className="w-8 h-8" />
                  <span className="font-medium">Sketch</span>
                </div>
                <div className="bg-muted rounded-lg p-4 flex items-center gap-3">
                  <PaintbrushIcon className="w-8 h-8" />
                  <span className="font-medium">Photoshop</span>
                </div>
                <div className="bg-muted rounded-lg p-4 flex items-center gap-3">
                  <PaintbrushIcon className="w-8 h-8" />
                  <span className="font-medium">Illustrator</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={600}
                height={600}
                alt="Expertise Image"
                className="rounded-xl object-cover"
                style={{ aspectRatio: "600/600", objectFit: "cover" }}
              />
              <div className="absolute -bottom-4 -left-4 bg-primary rounded-full w-16 h-16 flex items-center justify-center">
                <BrushIcon className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 border-t">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; 2024 Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BrushIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}


function FigmaIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  )
}


function PaintbrushIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  )
}


function PaletteIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}


function PencilIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}


function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
