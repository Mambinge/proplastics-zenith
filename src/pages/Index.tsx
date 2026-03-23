import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Sustainability from "@/components/Sustainability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Achievements from "@/components/achievements";
import PropServices from "@/components/Services";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Products />
        <PropServices />
        <Sustainability />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
