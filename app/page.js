import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Devider from "./components/Devider";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Devider />
      <Services />
      <Devider />
      <Process />
      <Devider />
      <Features />
      <Devider />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
