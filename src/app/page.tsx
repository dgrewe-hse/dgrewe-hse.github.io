import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Fragments from "@/components/Fragments";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Experience from "@/components/Experience";
// import Awards from "@/components/Awards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Writing />
        <Fragments />
        <Skills />
        <About />
        <Experience />
        {/* <Awards /> */}
      </main>
      <Footer />
    </>
  );
}
