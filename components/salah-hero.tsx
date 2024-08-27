
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

export function SalahHero() {
  return (
    <section className="pt-12 md:pt-24 lg:pt-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/salahimg.jpg" alt="Salah Eddine Arbani" />
              <AvatarFallback>SEA</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Salah Eddine Arbani</h1>
              <p className="text-lg font-medium text-muted-foreground">Full Stack Developer</p>
            </div>
          </div>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            As a passionate full-stack developer, I thrive on the challenge of crafting elegant and efficient web
            applications that solve real-world problems. With a deep understanding of both front-end and back-end
            technologies, I'm driven to create seamless user experiences that push the boundaries of what's possible.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Contact Me
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View Resume
            </Link>
          </div>
        </div>
        <img
          src="/salahimg.jpg"
          width="550"
          height="550"
          alt="Salah Eddine Arbani"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
        />
      </div>
    </section>
  )
}
