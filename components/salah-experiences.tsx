/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/2q3PedBvKph
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

import { JSX, SVGProps } from "react"

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function SalahExperiences() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 animate-fade-in">
          <div className="space-y-3 animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Salah Eddine Arbani's Career Journey
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Dive into the diverse professional journey of Salah Eddine Arbani, from his early days as an intern to his
              current role as a seasoned Software Engineer.
            </p>
          </div>
          <div className="relative grid gap-8 pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-muted-foreground/20 animate-fade-in-up">
            <div className="grid gap-4 text-sm relative animate-fade-in-up group">
              <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 group-hover:scale-125 transition-transform" />
              <div className="font-medium flex items-center gap-2">
                <BriefcaseIcon className="w-4 h-4 text-muted-foreground" />
                Software Engineer
                <span className="text-muted-foreground"> - Acme Inc</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                January 2021 - Present
              </div>
              <div className="text-muted-foreground">
                Developed and maintained complex web applications using React, Node.js, and various other technologies.
                Collaborated with cross-functional teams to deliver high-quality solutions.
              </div>
            </div>
            <div className="grid gap-4 text-sm relative animate-fade-in-up group">
              <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 group-hover:scale-125 transition-transform" />
              <div className="font-medium flex items-center gap-2">
                <BriefcaseIcon className="w-4 h-4 text-muted-foreground" />
                Front-End Developer
                <span className="text-muted-foreground"> - Globex Corporation</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                June 2018 - December 2020
              </div>
              <div className="text-muted-foreground">
                Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript. Collaborated with
                designers and back-end developers to deliver seamless web experiences.
              </div>
            </div>
            <div className="grid gap-4 text-sm relative animate-fade-in-up group">
              <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 group-hover:scale-125 transition-transform" />
              <div className="font-medium flex items-center gap-2">
                <BriefcaseIcon className="w-4 h-4 text-muted-foreground" />
                Intern - Web Development
                <span className="text-muted-foreground"> - Stark Industries</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                May 2017 - August 2017
              </div>
              <div className="text-muted-foreground">
                Gained hands-on experience in web development, learning various technologies and best practices.
                Contributed to multiple projects and participated in team meetings.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BriefcaseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}
