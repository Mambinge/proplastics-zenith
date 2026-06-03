import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  CheckCircle2, 
  Search,
  ChevronRight,
  TrendingUp,
  MessageCircle,
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";

// Import assets
import pvcImage from "@/assets/PRODUCT-RANGELANDING.jpg";
import hdpeImage from "@/assets/products-hdpe.jpg";
import protankImage from "@/assets/ProtankDSC_0060.png";
import cpvcImage from "@/assets/CPVCDSC_0074.png";
import prodrainImage from "@/assets/ProDrainDSC_0316.png";
import proflowImage from "@/assets/ProfowDSC_0216.jpg";
import heroImg from "@/assets/hero-industrial.jpg";

// Categories mapping to "Filters: All Products, PVC pipes, HDPE pipes, Tanks, Fabricated Fittings, Gutter."
const productCategories = [
  {
    id: "pvc",
    name: "PVC pipes",
    description: "Industry-leading PVC solutions (mPVC & uPVC) for high-pressure water transmission, boreholes, and conduits.",
    image: pvcImage,
    products: [
      { name: "mPVC Pressure Pipes", description: "Modified PVC for increased durability and pressure ratings." },
      { name: "uPVC Conduit & Ducting", description: "Unplasticized PVC for underground and electrical protections." },
      { name: "Sewer & Drainage Pipes", description: "Standard gravity flow gravity pipes." },
      { name: "Borehole Casings & Screens", description: "High-strength casing for water wells." },
      { name: "Soil Waste & Vent", description: "Above-ground domestic and industrial drainage systems." },
      { name: "Minetuff Pipes", description: "High-impact mining-spec piping systems." }
    ],
    technical: "ISO 1452 | SABS 966 | SANS 967"
  },
  {
    id: "hdpe",
    name: "HDPE pipes",
    description: "Flexible, high-density polyethylene coils and pipeline rolls designed for heavy-stress mining, agriculture, and gas.",
    image: hdpeImage,
    products: [
      { name: "HDPE Mining Pipes", description: "Chemical and abrasion resistant lines for tailings." },
      { name: "HDPE Irrigation Rolls", description: "Flexible polyethene coils for drip and spray farming." },
      { name: "Gas Distribution Lines", description: "Certified leak-proof jointing for gas transport." },
      { name: "LDPE Irrigation Pipes", description: "Low-density polyethene utility pipes." }
    ],
    technical: "SANS 4427 | PE100 & PE80 raw materials | UV-stabilized"
  },
  {
    id: "protank",
    name: "Tanks",
    description: "Advanced vertical water storage solutions under our Protank brand for domestic, agricultural, and industrial backup.",
    image: protankImage,
    products: [
      { name: "Domestic Water Tanks", description: "Vertical tanks (500L to 5000L) with food-grade lining." },
      { name: "Industrial Bulk Storage", description: "Heavy-duty vertical tanks (10,000L) for bulk utilities." },
      { name: "Septic Tanks", description: "Corrosion-proof biological treatment tanks." }
    ],
    technical: "Food-grade FDA approved LDPE | 100% recyclable"
  },
  {
    id: "fittings",
    name: "Fabricated Fittings",
    description: "Precision-molded and custom-fabricated steel-jacketed fittings ensuring pipeline systems seal perfectly.",
    image: proflowImage,
    products: [
      { name: "Pressure Fittings", description: "Full range of elbows, tees, and flanges." },
      { name: "Compression Fittings", description: "Mechanical couplings for HDPE connection." },
      { name: "Fabricated Steel-Jacketed Fittings", description: "High-pressure custom welded specials." }
    ],
    technical: "Joint integrity exceeds pipe ratings | Precision molded"
  },
  {
    id: "gutter",
    name: "Gutter",
    description: "UV-protected PVC rainwater gutter channels and downpipes for reliable domestic and commercial drainage.",
    image: prodrainImage,
    products: [
      { name: "Domestic Gutter Channels", description: "High-capacity roof runoff rainwater channels." },
      { name: "Gutter Outlets & Downpipes", description: "Runoff downpipes and elbow adapters." },
      { name: "Gutter Union Brackets", description: "Support brackets and expansion joints." }
    ],
    technical: "Impact-resistant PVC | UV protected | Fast installation"
  }
];

// Sectorbased Solutions (grid layout, each with image + description + CTA)
const sectorSolutions = [
  {
    name: "Mining",
    image: heroImg,
    description: "High-pressure slurry lines, flanged tailing pipes, and chemical-resistant PE lines.",
    cta: "Pressure pipes, flanged pipe"
  },
  {
    name: "Irrigation",
    image: proflowImage,
    description: "Advanced drip systems, HDPE coil distribution lines, and lateral spray lines.",
    cta: "Drip irrigation, HDPE rolls, Laterals system"
  },
  {
    name: "Borehole Drilling",
    image: pvcImage,
    description: "Threaded high-tensile casing pipes and sand filtration slotted screens.",
    cta: "PVC casings"
  },
  {
    name: "Electricals",
    image: hdpeImage,
    description: "Premium electrical conduits, bends, and impact-resistant round junction boxes.",
    cta: "Conduit, bends, round, flash, and surface boxes"
  },
  {
    name: "Civils & Infrastructure",
    image: prodrainImage,
    description: "Perforated sub-surface drainage lines and heavy-duty municipal mainlines.",
    cta: "perforated drainage pipe, municipal mainline"
  },
  {
    name: "Building & Plumbing",
    image: cpvcImage,
    description: "Domestic and commercial hot and cold water supplies and above-ground waste pipes.",
    cta: "Waste systems, hot/cold water"
  },
  {
    name: "Water & Sewerage",
    image: pvcImage,
    description: "Large-diameter gravity sewer lines and high-pressure water supply mains.",
    cta: "Sewer pipes, water mains"
  },
  {
    name: "Domestic Storage",
    image: protankImage,
    description: "Food-grade vertical water storage systems and underground septic tanks.",
    cta: "ProTank range, septic tanks"
  }
];

// Product Brands (sub-section)
const productBrands = [
  { name: "ProFlow Systems", info: "Advanced pressure pipes" },
  { name: "ProDrain Solutions", info: "Drainage & sewerage" },
  { name: "ProTank Storage", info: "Foodgrade water tanks" },
  { name: "FlowGuard cPVC", info: "Hot & cold water plumbing" }
];

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sync tab with URL query parameter
  const activeTab = searchParams.get("tab") || "all";

  const handleTabChange = (tab: string) => {
    setSearchParams({ tab });
  };

  const filteredCategories = productCategories.filter(cat => 
    (activeTab === "all" || cat.id === activeTab) &&
    (cat.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     cat.products.some(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />
      
      <main className="pt-20 pb-16">
        
        {/* Page Header Banner */}
        <PageHero 
          image={pvcImage} 
          title="Product Solutions"
          subtitle="Discover Proplastics' comprehensive range of piping systems and storage solutions, engineered to meet the highest international standards."
        />

        <div className="container mx-auto px-4 mt-12 space-y-20">
          
          {/* Main Search & Category Selector */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              
              {/* Category Tab List */}
              <div className="flex flex-wrap gap-2 justify-center">
                <Button 
                  variant={activeTab === "all" ? "default" : "outline"}
                  onClick={() => handleTabChange("all")}
                  className={cn(
                    "rounded-full px-5 text-xs font-bold uppercase tracking-wider",
                    activeTab === "all" ? "bg-primary text-white border-0" : "border-slate-200"
                  )}
                >
                  All Products
                </Button>
                {productCategories.map(cat => (
                  <Button 
                    key={cat.id}
                    variant={activeTab === cat.id ? "default" : "outline"}
                    onClick={() => handleTabChange(cat.id)}
                    className={cn(
                      "rounded-full px-5 text-xs font-bold uppercase tracking-wider",
                      activeTab === cat.id ? "bg-primary text-white border-0" : "border-slate-200"
                    )}
                  >
                    {cat.name}
                  </Button>
                ))}
              </div>
              
              {/* Search Box */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted-foreground" />
                <input 
                  type="text"
                  placeholder="Search catalog..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs font-semibold bg-white rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground"
                />
              </div>

            </div>
          </div>

          {/* Catalog Listing */}
          <div className="space-y-20">
            {filteredCategories.map((category, index) => (
              <div 
                key={category.id}
                id={category.id}
                className={cn(
                  "grid lg:grid-cols-2 gap-12 items-center",
                  index % 2 === 1 && "lg:flex-row-reverse"
                )}
              >
                {/* Content Panel */}
                <div className={cn("space-y-6", index % 2 === 1 && "lg:order-2")}>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide">
                    {category.name}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">{category.name} Range</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Detailed list of products */}
                  <div className="grid gap-3">
                    {category.products.map((product, pIdx) => (
                      <div 
                        key={pIdx}
                        className="p-4 rounded-xl bg-white border border-primary/10 hover:border-primary/30 transition-colors shadow-sm"
                      >
                        <h4 className="font-extrabold text-xs text-foreground uppercase tracking-wider mb-1 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {product.name}
                        </h4>
                        <p className="text-xs text-muted-foreground pl-6 font-medium">
                          {product.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technical Standard Box */}
                  <div className="p-4 rounded-xl bg-primary/[0.03] border border-primary/10 text-xs">
                    <span className="font-extrabold text-primary mr-2 uppercase tracking-widest text-[10px]">Technical Specifications:</span>
                    <span className="text-muted-foreground font-bold">{category.technical}</span>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a href={getWhatsAppUrl(`Hi, I'd like a quote for ${category.name} systems.`)} target="_blank" rel="noopener noreferrer">
                      <Button className="rounded-xl font-bold uppercase text-xs tracking-wider bg-primary hover:bg-primary-hover text-white h-11 px-6 shadow-sm border-0">
                        Request Quote
                      </Button>
                    </a>
                    <Button variant="outline" className="rounded-xl font-bold uppercase text-xs tracking-wider border-slate-200 text-muted-foreground hover:text-foreground h-11 px-6">
                      <Download className="mr-2 h-4 w-4 text-primary" />
                      Technical Manual
                    </Button>
                  </div>
                </div>

                {/* Visual Panel */}
                <div className={cn(
                  "relative rounded-3xl overflow-hidden border border-border shadow-md",
                  index % 2 === 1 && "lg:order-1"
                )}>
                  <img 
                    src={category.image} 
                    alt={category.name}
                    loading="lazy"
                    className="w-full h-full object-cover aspect-video lg:aspect-square"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCategories.length === 0 && (
            <div className="py-16 text-center border border-dashed border-slate-200 rounded-2xl">
              <Search className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <h3 className="text-sm font-extrabold uppercase tracking-wider">No products matched</h3>
              <p className="text-xs text-muted-foreground mt-1">Try adjusting your filters or search keywords.</p>
              <Button 
                variant="link" 
                onClick={() => {handleTabChange("all"); setSearchQuery("");}}
                className="text-primary mt-4 font-bold text-xs"
              >
                Clear Search Filter
              </Button>
            </div>
          )}

          {/* ============================================================ */}
          {/* SECTOR-BASED SOLUTIONS GRID (8 items)                        */}
          {/* ============================================================ */}
          <section className="border-t border-border pt-20 space-y-10">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Industrial Applications
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Sector-Based Solutions</h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto font-medium">
                Piping infrastructure systems custom-engineered to excel in specialized sector environments.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {sectorSolutions.map((sector, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  <div className="h-36 overflow-hidden bg-slate-100 relative">
                    <img 
                      src={sector.image} 
                      alt={sector.name} 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-3 left-4 font-extrabold text-xs uppercase tracking-wider text-white">
                      {sector.name}
                    </span>
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                      {sector.description}
                    </p>
                    <a 
                      href={getWhatsAppUrl(`Hi, I'd like to talk to an expert about ${sector.name} solutions.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full text-[10px] font-extrabold text-primary hover:text-primary-hover uppercase tracking-wider border-t border-slate-50 pt-3"
                    >
                      <span>{sector.cta}</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Solutions CTA banner */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden shadow-md max-w-5xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-extrabold mb-2">Need Custom Specifications?</h3>
              <p className="text-xs text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
                Do you have custom pipe lengths, wall thicknesses, or flange configurations? Talk directly with our technical engineering division.
              </p>
              <a href={getWhatsAppUrl("Hello! I'd like to consult on a custom piping solution.")} target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-white hover:bg-primary-hover font-bold text-xs uppercase tracking-wider h-11 px-8 rounded-xl border-0 shadow-sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Talk to an Expert
                </Button>
              </a>
            </div>
          </section>

          {/* ============================================================ */}
          {/* PRODUCT BRANDS LIST                                          */}
          {/* ============================================================ */}
          <section className="border-t border-border pt-20 space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-base font-extrabold uppercase tracking-wider text-primary">Registered Product Brands</h3>
              <p className="text-xs text-muted-foreground max-w-xl mx-auto font-medium">
                Our leading trademarked piping and storage ranges, manufactured in Zimbabwe and certified globally.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {productBrands.map((brand, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center shadow-sm"
                >
                  <h4 className="font-extrabold text-xs text-foreground uppercase tracking-wider mb-1">
                    {brand.name}
                  </h4>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                    {brand.info}
                  </span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;
