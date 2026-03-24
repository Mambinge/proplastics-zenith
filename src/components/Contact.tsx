import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const locations = [
    {
      title: "Proplastics Head Office",
      address: "5 Spurn Road, New Ardbennie, PO Causeway CY1199",
      tel: "+263 242 621651-5",
      fax: "+263 242 660535",
      cell: ["+263 773 894561-2", "+263 773888923"],
      whatsapp: "+263 787121723",
    },
    {
      title: "Proplastics Showground",
      address: "Zimbabwe Agricultural Show, Stand No. 14, Main Gate, 1st Avenue",
      tel: "+263 242751735",
    },
    {
      title: "Proplastics Gweru",
      address: "1041 Coventry Road",
      tel: "+263 54 2222277",
    },
    {
      title: "Proplastics Bulawayo",
      address: "Military Road (Off Khami Rd), P.O. Box RY115, Raylton",
      tel: "+263 292 68396 / 62059",
    },
  ];

  const quickContact = [
    {
      icon: Mail,
      title: "Email",
      content: "sales@proplastics.co.zw",
      href: "mailto:sales@proplastics.co.zw",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+263 787121723",
      href: "https://wa.me/263787121723",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 8:00 AM - 5:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Proplastics Head Office and manufacturing facilities are located in Ardbennie, Harare. 
            Please find a list of all our branches below:
          </p>
        </div>

        {/* Quick Contact */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {quickContact.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href ? "_blank" : undefined}
              rel={item.href ? "noopener noreferrer" : undefined}
              className={`flex gap-4 items-start p-6 bg-card rounded-xl border border-border shadow-sm ${
                item.href ? "hover:border-primary hover:shadow-md transition-all cursor-pointer" : ""
              }`}
            >
              <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{item.content}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Map and Locations Section */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Map */}
          <div className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-border bg-muted shadow-lg animate-fade-in">
            <iframe 
              src="https://maps.google.com/maps?q=Proplastics%20Limited,%205%20Spurn%20Rd,%20Ardbennie,%20Harare&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Proplastics Head Office Location"
            ></iframe>
          </div>

          {/* Locations */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Branches</h3>
            {locations.map((location, index) => (
              <div 
                key={index} 
                className="p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground text-lg mb-2">{location.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{location.address}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-y-2 gap-x-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary/70" />
                        <span className="text-muted-foreground font-medium">Tel:</span>
                        <span className="text-foreground">{location.tel}</span>
                      </div>
                      
                      {location.fax && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary/70" />
                          <span className="text-muted-foreground font-medium">Fax:</span>
                          <span className="text-foreground">{location.fax}</span>
                        </div>
                      )}
                      
                      {location.cell && (
                        <div className="col-span-full flex items-start gap-2">
                          <Phone className="h-4 w-4 text-primary/70 mt-1" />
                          <span className="text-muted-foreground font-medium">Cell:</span>
                          <div className="flex flex-col">
                            {location.cell.map((c, i) => (
                              <span key={i} className="text-foreground">{c}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {location.whatsapp && (
                        <div className="col-span-full flex items-center gap-2">
                          <MessageCircle className="h-4 w-4 text-green-500" />
                          <span className="text-muted-foreground font-medium">WhatsApp:</span>
                          <span className="text-foreground">{location.whatsapp}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 border border-border shadow-2xl relative overflow-hidden animate-scale-in">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-foreground mb-4">Send us an Enquiry</h3>
            <p className="text-muted-foreground mb-8">
              Fill out the form below and our team will get back to you shortly.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <Input id="firstName" required placeholder="John" className="bg-background/50" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <Input id="lastName" required placeholder="Doe" className="bg-background/50" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input id="email" type="email" required placeholder="john@example.com" className="bg-background/50" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input id="company" placeholder="Your Company" className="bg-background/50" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  required
                  placeholder="Tell us about your requirements..."
                  rows={6}
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto px-12 hover-lift">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
