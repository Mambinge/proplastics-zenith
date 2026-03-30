import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import heroImg from "@/assets/hero-industrial.jpg";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Sustainability from "@/components/Sustainability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Achievements from "@/components/achievements";
import PropServices from "@/components/Services";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ScrollReveal animation="reveal-up">
          <About />
        </ScrollReveal>
        <ScrollReveal animation="reveal-scale">
          <Achievements />
        </ScrollReveal>
        <ScrollReveal animation="reveal-up">
          <Products />
        </ScrollReveal>
        <ScrollReveal animation="reveal-left">
          <PropServices />
        </ScrollReveal>
        <ScrollReveal animation="reveal-right">
          <Sustainability />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
