import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Motto from "@/components/ui/Motto";
import { mottos } from "@/data/content";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Motto text={mottos.afterHero} align="right" />
        <About />
        <Experience />
        <Motto text={mottos.afterExperience} align="left" />
        <Projects />
        <Motto text={mottos.afterProjects} />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
