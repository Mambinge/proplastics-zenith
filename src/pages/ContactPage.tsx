import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import contactImg from "@/assets/CONTACTSUSLANDING.png";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20 pb-16">
        <PageHero 
          image={contactImg}
          title="Contact Us"
          subtitle="We're here to help. Reach out to us for enquiries, support, or to learn more about our piping solutions."
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
