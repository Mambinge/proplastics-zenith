import { useState, useEffect } from "react";
import { MessageSquare, Quote, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Eng. Tinashe Moyo",
    role: "Senior Civil Engineer",
    company: "Infrabuild Zimbabwe",
    rating: 5,
    text: "Proplastics sewer and storm-water pipes have been our go-to for major municipal roadworks. The quality standards and SAZ certifications give our clients complete peace of mind."
  },
  {
    id: 2,
    name: "Kudzai Ndlovu",
    role: "Commercial Farmer",
    company: "Mazowe Citrus Estates",
    rating: 5,
    text: "We installed the Proflo irrigation roll systems across our entire 200-hectare estate. The UV protection and reliability under pressure have significantly improved our crop yield."
  },
  {
    id: 3,
    name: "Mbuso Sibanda",
    role: "Drilling Consultant",
    company: "Afridrill Casing Ltd",
    rating: 5,
    text: "The borehole PVC casings and sand screens from Proplastics are remarkably high-tensile. They withstand severe geothermal stress in deep water well applications."
  },
  {
    id: 4,
    name: "Shyam Patel",
    role: "Plumbing Contractor",
    company: "Patel Residential Systems",
    rating: 4,
    text: "FlowGuard cPVC has completely solved hot water scaling issues in our high-rise luxury apartment builds. It is extremely fast to weld and leak-proof."
  },
  {
    id: 5,
    name: "Ruan van der Merwe",
    role: "Mining Operations Director",
    company: "Great Dyke Platinum Group",
    rating: 5,
    text: "Slurry disposal requires highly abrasive-resistant piping. Proplastics' HDPE continuous pipes have reduced our tailing line maintenance costs by over 40%."
  }
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Get active 3 testimonials (wrapping around array)
  const getVisibleTestimonials = () => {
    const list = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % testimonialsData.length;
      list.push(testimonialsData[index]);
    }
    return list;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-24 bg-white border-t border-border relative overflow-hidden">
      {/* Visual Accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal animation="reveal-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <MessageSquare className="h-4.5 w-4.5" />
              Customer Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              What Our Clients <span className="text-primary">Say</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Trusted by leading contractors, engineers, and farmers across Zimbabwe and the Southern African region.
            </p>
          </ScrollReveal>
        </div>

        {/* Carousel Grid (Desktop displays 3, Mobile displays 1) */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Version */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map((t) => (
              <div 
                key={t.id}
                className="bg-white p-8 rounded-2xl border border-primary/10 hover:border-primary/30 shadow-sm transition-all duration-500 flex flex-col justify-between h-[300px] animate-scale-in"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < t.rating ? "text-primary fill-primary" : "text-slate-200"}`} 
                      />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex justify-between items-end border-t border-slate-100 pt-4 mt-4">
                  <div>
                    <h4 className="font-extrabold text-xs text-foreground uppercase tracking-wider">{t.name}</h4>
                    <p className="text-[10px] text-muted-foreground">{t.role}, <span className="font-bold">{t.company}</span></p>
                  </div>
                  <Quote className="h-8 w-8 text-primary/10 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Version (Single Card Carousel) */}
          <div className="block md:hidden">
            <div 
              className="bg-white p-6 rounded-2xl border border-primary/20 shadow-sm flex flex-col justify-between min-h-[260px] animate-fade-in"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonialsData[startIndex].rating ? "text-primary fill-primary" : "text-slate-200"}`} 
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed italic">
                  "{testimonialsData[startIndex].text}"
                </p>
              </div>

              <div className="flex justify-between items-end border-t border-slate-100 pt-4 mt-4">
                <div>
                  <h4 className="font-extrabold text-xs text-foreground uppercase tracking-wider">{testimonialsData[startIndex].name}</h4>
                  <p className="text-[10px] text-muted-foreground">
                    {testimonialsData[startIndex].role}, <span className="font-bold">{testimonialsData[startIndex].company}</span>
                  </p>
                </div>
                <Quote className="h-8 w-8 text-primary/10 flex-shrink-0" />
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-1.5 mt-6">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStartIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === startIndex ? "w-6 bg-primary" : "w-2 bg-slate-200"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
