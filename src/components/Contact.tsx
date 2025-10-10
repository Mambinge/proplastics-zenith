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
      title: "Head Office",
      address: "5 Spurn Road, New Ardbennie, PO Causeway CY1199",
      tel: "+263 242 621651-5",
      fax: "+263 242 660535",
      cell: ["+263 773 894561-2", "+263 773888923"],
      whatsapp: "+263 787121723",
    },
    {
      title: "Showground",
      address: "Zimbabwe Agricultural Show, Stand No. 14, Main Gate, 1st Avenue",
      tel: "+263 242751735",
    },
    {
      title: "Gweru Branch",
      address: "1041 Coventry Road",
      tel: "+263 54 2222277",
    },
    {
      title: "Bulawayo Branch",
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
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a question or need a quote? We're here to help
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
              className={`flex gap-4 items-start p-6 bg-card rounded-xl border border-border ${
                item.href ? "hover:border-primary transition-colors cursor-pointer" : ""
              }`}
            >
              <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.content}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Locations */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Locations</h3>
            <p className="text-muted-foreground mb-8">
              Visit us at any of our branches across Zimbabwe for product inquiries and technical support.
            </p>

            <div className="space-y-6">
              {locations.map((location, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-card rounded-xl border border-border hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-3 items-start mb-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{location.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{location.address}</p>
                      
                      <div className="space-y-1 text-sm">
                        <p className="text-foreground">
                          <span className="font-medium">Tel:</span> {location.tel}
                        </p>
                        {location.fax && (
                          <p className="text-foreground">
                            <span className="font-medium">Fax:</span> {location.fax}
                          </p>
                        )}
                        {location.cell && (
                          <p className="text-foreground">
                            <span className="font-medium">Cell:</span> {location.cell.join(", ")}
                          </p>
                        )}
                        {location.whatsapp && (
                          <p className="text-foreground">
                            <span className="font-medium">WhatsApp:</span> {location.whatsapp}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg animate-scale-in animate-delay-200">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <Input id="firstName" required placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <Input id="lastName" required placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input id="email" type="email" required placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <Input id="company" placeholder="Your Company" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  required
                  placeholder="Tell us about your requirements..."
                  rows={5}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
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
