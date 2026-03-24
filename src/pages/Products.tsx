import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Droplets, 
  Zap, 
  Waves, 
  Construction, 
  FlaskConical, 
  Search,
  Filter
} from "lucide-react";
import { cn } from "@/lib/utils";

// Import assets
import pvcImage from "@/assets/products-pvc.jpg";
import hdpeImage from "@/assets/products-hdpe.jpg";
import protankImage from "@/assets/ProtankDSC_0060.JPG";
import cpvcImage from "@/assets/CPVCDSC_0074.JPG";
import prodrainImage from "@/assets/ProDrainDSC_0316.JPG";
import proflowImage from "@/assets/ProfowDSC_0216.jpg";

const productCategories = [
  {
    id: "pvc",
    name: "PVC Pipe Systems",
    icon: Construction,
    description: "Industry-leading PVC solutions for water supply, borehole casing, and electrical conduit.",
    image: pvcImage,
    products: [
      { name: "Sewer & Drain", description: "Standard underground drainage and sewerage systems." },
      { name: "Borehole Casing & Screening", description: "High-strength solutions for water well construction." },
      { name: "Underground Cable Conduit", description: "Electrical and telecommunications cable protection." },
      { name: "Pressure Pipes (mPVC & uPVC)", description: "High-performance water distribution systems." },
      { name: "Soil, Waste & Vent", description: "Above-ground domestic and industrial drainage." },
    ],
    technical: "SABS & SAZ Certified | Multiple pressure ratings (Class 4 to 20)",
  },
  {
    id: "hdpe",
    name: "HDPE Pipe Systems",
    icon: Waves,
    description: "Flexible, high-density polyethylene pipes for mining and industrial infrastructure.",
    image: hdpeImage,
    products: [
      { name: "Mining Pipes", description: "Chemical and abrasion resistant pipes for slurry and tailings." },
      { name: "Irrigation Systems", description: "Durable HDPE for agricultural water management." },
      { name: "Gas Distribution", description: "Certified leak-proof jointing for safe gas transport." },
      { name: "Cable Ducting", description: "Heavy-duty protection for fiber optic and power cables." },
    ],
    technical: "PE100 & PE80 material | UV Stabilized | Leak-proof butt-welding",
  },
  {
    id: "cpvc",
    name: "cPVC FlowGuard",
    icon: Droplets,
    description: "Specialized hot and cold water plumbing system for premium residential and commercial builds.",
    image: cpvcImage,
    products: [
      { name: "Hot Water Systems", description: "Withstands high temperatures without corrosion or scale." },
      { name: "Cold Water Systems", description: "Pure, lead-free water delivery with minimal noise." },
      { name: "Fittings & Valves", description: "Complete range for easy solvent-weld installation." },
    ],
    technical: "Corrosion resistant | Low thermal expansion | Lead-free",
  },
  {
    id: "protank",
    name: "ProTank Water Storage",
    icon: Zap,
    description: "Advanced vertical water storage solutions for domestic and industrial use.",
    image: protankImage,
    products: [
      { name: "Domestic Tanks (500L - 5000L)", description: "Space-saving designs for home water backup." },
      { name: "Industrial Tanks (10,000L+)", description: "Heavy-duty storage for large-scale operations." },
      { name: "Agricultural Tanks", description: "Specialized tanks for liquid fertilizer and water." },
    ],
    technical: "Food Grade LDPE | UV Stable | Multiple color options",
  },
  {
    id: "fittings",
    name: "Fittings & Accessories",
    icon: FlaskConical,
    description: "Complete range of solvent cement and fittings to ensure system integrity.",
    image: proflowImage,
    products: [
      { name: "Pressure Fittings", description: "Full range of elbows, tees, and couplings." },
      { name: "Sewer Fittings", description: "Bends and junctions for efficient flow management." },
      { name: "High Pressure Solvent Cement", description: "Specially formulated for permanent leakage-free joints." },
    ],
    technical: "Precision molded | High-stress resistance | Standard compliant",
  },
];

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = productCategories.filter(cat => 
    (activeTab === "all" || cat.id === activeTab) &&
    (cat.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     cat.products.some(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-secondary/30">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="container relative mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Product Solutions
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Discover Proplastics' comprehensive range of piping systems and storage solutions, 
              engineered to meet the highest international standards of durability and performance.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 mt-12">
          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              <Button 
                variant={activeTab === "all" ? "default" : "outline"}
                onClick={() => setActiveTab("all")}
                className="rounded-full px-6"
              >
                All Products
              </Button>
              {productCategories.map(cat => (
                <Button 
                  key={cat.id}
                  variant={activeTab === cat.id ? "default" : "outline"}
                  onClick={() => setActiveTab(cat.id)}
                  className="rounded-full px-6"
                >
                  {cat.name}
                </Button>
              ))}
            </div>
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-card rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="space-y-24">
            {filteredCategories.map((category, index) => (
              <div 
                key={category.id}
                id={category.id}
                className={cn(
                  "grid lg:grid-cols-2 gap-12 items-center animate-fade-in",
                  index % 2 === 1 && "lg:flex-row-reverse"
                )}
              >
                <div className={cn("space-y-6", index % 2 === 1 && "lg:order-2")}>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{category.name}</h2>
                  <p className="text-lg text-muted-foreground">
                    {category.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-1 gap-4">
                    {category.products.map((product, pIdx) => (
                      <div 
                        key={pIdx}
                        className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                      >
                        <h4 className="font-semibold mb-1 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {product.name}
                        </h4>
                        <p className="text-sm text-muted-foreground pl-6">
                          {product.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-sm">
                    <span className="font-bold text-primary mr-2 uppercase tracking-wider">Technical:</span>
                    <span className="text-muted-foreground">{category.technical}</span>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button className="hover-lift">
                      Request Quote
                    </Button>
                    <Button variant="outline" className="hover-lift">
                      <Download className="mr-2 h-4 w-4" />
                      Download Technical Manual
                    </Button>
                  </div>
                </div>

                <div className={cn(
                  "relative group rounded-3xl overflow-hidden border border-border shadow-2xl",
                  index % 2 === 1 && "lg:order-1"
                )}>
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover aspect-video lg:aspect-square group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCategories.length === 0 && (
            <div className="py-20 text-center">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters.</p>
              <Button 
                variant="link" 
                onClick={() => {setActiveTab("all"); setSearchQuery("");}}
                className="text-primary mt-4"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;
