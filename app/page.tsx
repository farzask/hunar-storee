import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Facilities from "@/components/Facilities";
import Audience from "@/components/Audience";
import Partnership from "@/components/Partnership";
import FuturePlans from "@/components/FuturePlans";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Gallery />
        <Facilities />
        <Audience />
        <Partnership />
        <FuturePlans />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
