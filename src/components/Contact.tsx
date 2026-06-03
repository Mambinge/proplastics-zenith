import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { cn } from "@/lib/utils";

const Contact = () => {
  const { toast } = useToast();
  const [selectedBranchIndex, setSelectedBranchIndex] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your .env file.");
      }

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        to_name: "Proplastics Sales",
        company: formData.company,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error Sending Message",
        description: "Please try again later or contact us directly via phone.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const locations = [
    {
      title: "Proplastics Head Office",
      address: "5 Spurn Road, New Ardbennie, PO Causeway CY1199",
      tel: "+263 242 621651-5",
      fax: "+263 242 660535",
      cell: ["+263 773 894561-2", "+263 773888923"],
      whatsapp: "+263 787121723",
      mapUrl: "https://maps.google.com/maps?q=Proplastics%20Limited,%205%20Spurn%20Rd,%20Ardbennie,%20Harare&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    {
      title: "Proplastics Showground",
      address: "Zimbabwe Agricultural Show, Stand No. 14, Main Gate, 1st Avenue, Harare",
      tel: "+263 242751735",
      mapUrl: "https://maps.google.com/maps?q=Zimbabwe%20Agricultural%20Showground,%20Harare&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    {
      title: "Proplastics Gweru",
      address: "1041 Coventry Road, Gweru",
      tel: "+263 54 2222277",
      mapUrl: "https://maps.google.com/maps?q=1041%20Coventry%20Road,%20Gweru&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    {
      title: "Proplastics Bulawayo",
      address: "Military Road (Off Khami Rd), Raylton, Bulawayo",
      tel: "+263 292 68396 / 62059",
      mapUrl: "https://maps.google.com/maps?q=Military%20Road,%20Raylton,%20Bulawayo&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
  ];

  const quickContact = [
    {
      icon: Mail,
      title: "Email Us",
      content: "sales@proplastics.co.zw",
      href: "mailto:sales@proplastics.co.zw"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      content: "+263 787121723",
      href: "https://wa.me/263787121723"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 8:00 AM - 5:00 PM",
      href: "#"
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Quick Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {quickContact.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all duration-300 shadow-sm"
            >
              <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-extrabold text-xs uppercase tracking-wider text-foreground mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground font-semibold whitespace-pre-line">{item.content}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Map and Locations Grid */}
        <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto mb-20">
          
          {/* Interactive Locations List (Left 5 Columns) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1">
              <h3 className="text-lg font-extrabold text-foreground uppercase tracking-wider">Our Branches</h3>
              <p className="text-xs text-muted-foreground font-medium">Click on a branch card to view its location on the map.</p>
            </div>
            
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {locations.map((location, index) => {
                const isSelected = index === selectedBranchIndex;
                return (
                  <button 
                    key={index} 
                    onClick={() => setSelectedBranchIndex(index)}
                    className={cn(
                      "w-full text-left p-5 bg-white rounded-2xl border transition-all duration-300 shadow-sm flex gap-4 items-start focus:outline-none",
                      isSelected 
                        ? "border-primary ring-1 ring-primary/20 bg-slate-50/50" 
                        : "border-slate-100 hover:border-primary/20 hover:shadow-sm"
                    )}
                  >
                    <div className={cn(
                      "h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors",
                      isSelected ? "bg-primary text-white" : "bg-primary/10 text-primary"
                    )}>
                      <MapPin className="h-4.5 w-4.5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-extrabold text-xs text-foreground uppercase tracking-wider mb-1.5">{location.title}</h4>
                      <p className="text-[11px] text-muted-foreground leading-relaxed mb-3 font-semibold">{location.address}</p>
                      
                      <div className="space-y-1 text-[10px] font-bold text-foreground/80">
                        <div className="flex items-center gap-1.5">
                          <Phone className="h-3.5 w-3.5 text-primary/70" />
                          <span>Tel: {location.tel}</span>
                        </div>
                        
                        {location.whatsapp && (
                          <div className="flex items-center gap-1.5 text-green-600">
                            <MessageCircle className="h-3.5 w-3.5 text-green-500" />
                            <span>WhatsApp: {location.whatsapp}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Map Frame (Right 7 Columns) */}
          <div className="lg:col-span-7 h-[350px] lg:h-[500px] rounded-3xl overflow-hidden border border-primary/20 shadow-md">
            <iframe 
              src={locations[selectedBranchIndex].mapUrl}
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${locations[selectedBranchIndex].title} Location Map`}
            ></iframe>
          </div>

        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-primary/10 shadow-lg relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground uppercase tracking-tight mb-2">Send us an Enquiry</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-8 font-medium">
              Have questions about sizing, custom pricing, or order delivery? Complete the form below.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                    First Name *
                  </label>
                  <Input 
                    id="firstName" 
                    required 
                    placeholder="John" 
                    className="bg-white border-slate-200 rounded-xl h-11 text-xs"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                    Last Name *
                  </label>
                  <Input 
                    id="lastName" 
                    required 
                    placeholder="Doe" 
                    className="bg-white border-slate-200 rounded-xl h-11 text-xs"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                    Email *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    placeholder="john@example.com" 
                    className="bg-white border-slate-200 rounded-xl h-11 text-xs"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                    Company
                  </label>
                  <Input 
                    id="company" 
                    placeholder="Your Company" 
                    className="bg-white border-slate-200 rounded-xl h-11 text-xs"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  required
                  placeholder="Describe your requirements (pipe type, diameters, project scale, etc.)..."
                  rows={6}
                  className="bg-white border-slate-200 rounded-2xl resize-none text-xs"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full sm:w-auto px-10 h-12 text-xs font-bold uppercase tracking-wider bg-primary hover:bg-primary-hover border-0 shadow-sm rounded-xl"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
