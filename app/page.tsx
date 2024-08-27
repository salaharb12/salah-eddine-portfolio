import { Portfolio } from "@/components/portfolio";
import { SalahAbout } from "@/components/salah-about";
import { SalahArticles } from "@/components/salah-articles";
import { SalahAwards } from "@/components/salah-awards";
import { SalahContact } from "@/components/salah-contact";
import { SalahEducation } from "@/components/salah-education";
import { SalahExperiences } from "@/components/salah-experiences";
import { SalahFooter } from "@/components/salah-footer";
import { SalahHeader } from "@/components/salah-header";
import { SalahHero } from "@/components/salah-hero";
import { SalahHobies } from "@/components/salah-hobies";
import { SalahProject } from "@/components/salah-project";
import { SalahResume } from "@/components/salah-resume";
import { SalahSkils } from "@/components/salah-skils";
import { SalahTestimonials } from "@/components/salah-testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <SalahHeader />
      <SalahHero />
      <section id="about">
      <SalahAbout />
      </section>
      <section id="projects">
      <SalahProject />
      </section>
      <section id="skills">
      <SalahSkils />
      </section>
      <SalahExperiences />
      <SalahEducation />
      <SalahTestimonials />
      <SalahArticles />
      <SalahAwards />
      <SalahHobies />
      <SalahResume />
      <section id="contact">

      <SalahContact />
      </section>
      <SalahFooter />
    </main>
  );
}
