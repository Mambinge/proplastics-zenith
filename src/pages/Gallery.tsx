import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Image as ImageIcon, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

// Assets
import pvcPic from "@/assets/products-pvc.jpg";
import hdpePic from "@/assets/products-hdpe.jpg";
import protankPic from "@/assets/ProtankDSC_0060.png";
import cpvcPic from "@/assets/CPVCDSC_0074.png";
import historyPic from "@/assets/HISTORYIMAGE.png";
import governancePic from "@/assets/COPERATEGOVNANCEIMAGE.jpg";
import aboutLanding from "@/assets/ABOUTUSLANDING.png";
import contactLanding from "@/assets/CONTACTSUSLANDING.png";
import rangeLanding from "@/assets/PRODUCT-RANGELANDING.jpg";
import drainPic from "@/assets/ProDrainDSC_0316.png";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  categoryName: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: historyPic, title: "PVC Structural Pipe Stacks", category: "pvc", categoryName: "PVC Systems" },
  { id: 2, src: hdpePic, title: "HDPE Pressure Pipeline Yard", category: "hdpe", categoryName: "HDPE Systems" },
  { id: 3, src: protankPic, title: "Protank Rotomoulding Storage Area", category: "tanks", categoryName: "Protank Storage" },
  { id: 4, src: cpvcPic, title: "FlowGuard cPVC Hot & Cold Plumbing Coils", category: "hdpe", categoryName: "HDPE Systems" },
  { id: 5, src: governancePic, title: "Ardbennie Automated Control Center", category: "factory", categoryName: "Factory & Operations" },
  { id: 6, src: aboutLanding, title: "Modernized High-Output Extrusion Line", category: "factory", categoryName: "Factory & Operations" },
  { id: 7, src: contactLanding, title: "Harare Corporate Headquarters Exterior", category: "factory", categoryName: "Factory & Operations" },
  { id: 8, src: rangeLanding, title: "Bulk Product Delivery Bay", category: "pvc", categoryName: "PVC Systems" },
  { id: 9, src: drainPic, title: "Prodrain Sub-surface Drainage Systems", category: "pvc", categoryName: "PVC Systems" },
  { id: 10, src: pvcPic, title: "Borehole Casing and Well Screens", category: "pvc", categoryName: "PVC Systems" }
];

const categories = [
  { id: "all", label: "All Photos" },
  { id: "factory", label: "Factory & Operations" },
  { id: "pvc", label: "PVC Systems" },
  { id: "hdpe", label: "HDPE Systems" },
  { id: "tanks", label: "Protank Storage" }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const openLightbox = (id: number) => {
    const idx = galleryItems.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;
    let nextIndex = direction === "next" ? lightboxIndex + 1 : lightboxIndex - 1;

    // Loop bounds
    if (nextIndex >= galleryItems.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = galleryItems.length - 1;

    setLightboxIndex(nextIndex);
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      <main className="pt-20 pb-16">
        {/* Page Hero Banner */}
        <PageHero
          image={aboutLanding}
          title="Media Gallery"
          subtitle="Explore our advanced automated production machinery, product inventory yard, and pipe installations across Southern Africa."
        />

        <div className="container mx-auto px-4 mt-12 space-y-12">
          
          {/* Gallery Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-full px-5 text-xs font-bold uppercase tracking-wider",
                  activeCategory === cat.id ? "bg-primary text-white border-0" : "border-slate-200"
                )}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Grid Layout of Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col text-left focus:outline-none"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-50 w-full">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                  {/* Zoom Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-white/20 text-white backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform">
                      <ZoomIn className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-4 w-full">
                  <span className="text-[9px] font-extrabold text-primary uppercase tracking-widest block mb-1">
                    {item.categoryName}
                  </span>
                  <h4 className="font-extrabold text-xs text-foreground uppercase tracking-wide truncate">
                    {item.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>

          {/* Empty Category Fallback */}
          {filteredItems.length === 0 && (
            <div className="py-16 text-center border border-dashed border-slate-200 rounded-2xl max-w-lg mx-auto">
              <ImageIcon className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <h3 className="text-sm font-extrabold uppercase tracking-wider">No photos in category</h3>
              <p className="text-xs text-muted-foreground mt-1">Please select another media tab above.</p>
            </div>
          )}

        </div>
      </main>

      {/* Lightbox Pop-up Overlay */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center p-4 animate-fade-in">
          
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close image popup"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Lightbox Main Container */}
          <div className="relative max-w-5xl w-full flex flex-col items-center justify-center gap-4">
            
            {/* Image display */}
            <div className="relative aspect-[4/3] max-h-[70vh] bg-neutral-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center">
              <img
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                className="max-w-full max-h-full object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={() => navigateLightbox("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-black/45 hover:bg-black/80 transition-colors focus:outline-none border border-white/5"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={() => navigateLightbox("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-black/45 hover:bg-black/80 transition-colors focus:outline-none border border-white/5"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Captions and indices */}
            <div className="text-center text-white max-w-2xl space-y-1 px-4">
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest">
                {galleryItems[lightboxIndex].categoryName}
              </span>
              <h3 className="font-extrabold text-sm sm:text-base uppercase tracking-wide">
                {galleryItems[lightboxIndex].title}
              </h3>
              <p className="text-[10px] text-white/60 font-semibold uppercase tracking-wider pt-1">
                Image {lightboxIndex + 1} of {galleryItems.length}
              </p>
            </div>

          </div>

        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
