/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/seRNsnGpPHe
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Comfortaa } from 'next/font/google'
import { Gabarito } from 'next/font/google'

comfortaa({
  subsets: ['latin'],
  display: 'swap',
})

gabarito({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function SalahAbout() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Salah Eddine Arbani</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Salah Eddine Arbani is a passionate and versatile individual with a diverse range of interests and
                skills. Born and raised in Morocco, he has always been drawn to the world of technology, gaming, and
                creative expression.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <h3 className="text-xl font-semibold">Background</h3>
                <p className="text-muted-foreground">
                  Salah Eddine's journey began with a deep fascination for programming and computer science. He honed
                  his skills through self-study and online courses, eventually earning a degree in Computer Engineering.
                  Along the way, he discovered a love for gaming, anime, and playing the piano, which have become
                  integral parts of his life.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-semibold">Skills and Interests</h3>
                <p className="text-muted-foreground">
                  In addition to his technical expertise, Salah Eddine is a well-rounded individual with a passion for
                  gaming, anime, and music. He is an avid gamer, with a particular fondness for RPGs and strategy games.
                  He also enjoys exploring the rich narratives and captivating visuals of anime. When he's not coding or
                  gaming, you can find him playing the piano, a skill he has cultivated since childhood.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-semibold">Mission Statement</h3>
                <p className="text-muted-foreground">
                  Salah Eddine's mission is to combine his technical prowess, creative inclinations, and love for
                  storytelling to develop innovative and engaging digital experiences. He aspires to create applications
                  and platforms that not only solve real-world problems but also captivate and inspire users through
                  their design, functionality, and narrative elements.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <h3 className="text-xl font-semibold">Technical Proficiency</h3>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <div className="flex items-center justify-between">
                    <span>JavaScript</span>
                    <span className="font-semibold">90%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "90%" }} />
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="flex items-center justify-between">
                    <span>React</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "85%" }} />
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="flex items-center justify-between">
                    <span>Node.js</span>
                    <span className="font-semibold">80%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "80%" }} />
                  </div>
                </div>
                <div className="grid gap-1">
                  <div className="flex items-center justify-between">
                    <span>TypeScript</span>
                    <span className="font-semibold">75%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "75%" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <h3 className="text-xl font-semibold">Hobbies and Interests</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <GamepadIcon className="h-8 w-8" />
                  <span>Gaming</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <FanIcon className="h-8 w-8" />
                  <span>Anime</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <PianoIcon className="h-8 w-8" />
                  <span>Piano</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FanIcon(props) {
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
      <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
      <path d="M12 12v.01" />
    </svg>
  )
}


function GamepadIcon(props) {
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
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}


function PianoIcon(props) {
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
      <path d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8" />
      <path d="M2 14h20" />
      <path d="M6 14v4" />
      <path d="M10 14v4" />
      <path d="M14 14v4" />
      <path d="M18 14v4" />
    </svg>
  )
}
