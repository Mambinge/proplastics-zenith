import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/proplastics-logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getWhatsAppUrl } from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";

interface SubItem {
  name: string;
  href: string;
}

interface DropdownItem {
  name: string;
  href?: string;
  subItems?: SubItem[];
  columns?: {
    title: string;
    items: SubItem[];
  }[];
}

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveMobileSection(null);
  }, [location.pathname]);

  const navItems: { name: string; href?: string; dropdown?: DropdownItem[] | any }[] = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      dropdown: [
        { name: "Overview", href: "/about#overview" },
        { name: "History", href: "/about#journey" },
        { name: "Corporate Governance", href: "/about#governance" }
      ]
    },
    {
      name: "Products",
      // Mega-menu columns
      megaMenu: [
        {
          title: "PVC Pipes",
          items: [
            { name: "mPVC Pipes", href: "/products?tab=pvc" },
            { name: "uPVC Pipes", href: "/products?tab=pvc" },
            { name: "Sewer Pipes", href: "/products?tab=pvc" },
            { name: "Electrical Conduits", href: "/products?tab=pvc" },
            { name: "Borehole Casing", href: "/products?tab=pvc" },
            { name: "Soil Waste & Vent", href: "/products?tab=pvc" },
            { name: "Minetuff Pipes", href: "/products?tab=pvc" }
          ]
        },
        {
          title: "Polyethene Pipes",
          items: [
            { name: "HDPE Pipes", href: "/products?tab=hdpe" },
            { name: "LDPE Pipes", href: "/products?tab=hdpe" }
          ]
        },
        {
          title: "Fittings",
          items: [
            { name: "Pressure Fittings", href: "/products?tab=fittings" },
            { name: "Compression Fittings", href: "/products?tab=fittings" },
            { name: "Fabricated Fittings", href: "/products?tab=fittings" },
            { name: "Insert Fittings", href: "/products?tab=fittings" },
            { name: "Electrical Fittings", href: "/products?tab=fittings" },
            { name: "Sewer & Waste Fittings", href: "/products?tab=fittings" }
          ]
        },
        {
          title: "Specialties",
          items: [
            { name: "Solvent Cement", href: "/products?tab=fittings" },
            { name: "cPVC FlowGuard", href: "/products?tab=cpvc" },
            { name: "Protank Storage", href: "/products?tab=protank" }
          ]
        }
      ]
    },
    {
      name: "Resources",
      dropdown: [
        { name: "Investor Centre", href: "/investor-centre" },
        { name: "Gallery", href: "/gallery" }
      ]
    },
    { name: "Contact", href: "/contact" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    if (href.startsWith("/#") || href.includes("#")) {
      const [path, hash] = href.split("#");
      if (location.pathname === path || (path === "" && location.pathname === "/")) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const toggleMobileSection = (section: string) => {
    setActiveMobileSection(activeMobileSection === section ? null : section);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[3px] bg-primary transition-all duration-150 z-50" 
        style={{ width: `${scrollProgress}%` }}
      />
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              onClick={(e) => handleLinkClick(e, "/")} 
              className="flex items-center"
            >
              <img 
                src={logo} 
                alt="Proplastics Zimbabwe" 
                className="h-10 sm:h-12 hover:scale-102 transition-transform duration-300" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {navItems.map((item) => {
              const hasDropdown = !!item.dropdown;
              const hasMegaMenu = !!item.megaMenu;

              if (hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative py-6"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className={cn(
                      "flex items-center gap-1 font-bold text-xs uppercase tracking-wider transition-colors py-1 focus:outline-none",
                      activeDropdown === item.name || location.pathname.startsWith(item.name === "About Us" ? "/about" : "/investor")
                        ? "text-primary" 
                        : "text-foreground hover:text-primary"
                    )}>
                      {item.name}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>

                    {/* Standard Dropdown list */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-[80%] left-0 w-52 bg-white border border-primary/20 rounded-xl shadow-lg py-2 animate-scale-in z-50">
                        {item.dropdown.map((sub: SubItem) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={(e) => handleLinkClick(e, sub.href)}
                            className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (hasMegaMenu) {
                return (
                  <div
                    key={item.name}
                    className="py-6"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className={cn(
                      "flex items-center gap-1 font-bold text-xs uppercase tracking-wider transition-colors py-1 focus:outline-none",
                      activeDropdown === item.name || location.pathname.startsWith("/products")
                        ? "text-primary" 
                        : "text-foreground hover:text-primary"
                    )}>
                      {item.name}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>

                    {/* Mega Menu Block */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-[90%] left-[5%] right-[5%] lg:left-[10%] lg:right-[10%] bg-white border border-primary/20 rounded-2xl shadow-xl p-8 grid grid-cols-4 gap-6 animate-scale-in z-50">
                        {item.megaMenu.map((col: any) => (
                          <div key={col.title} className="space-y-4">
                            <h4 className="font-extrabold text-xs uppercase tracking-wider text-primary border-b border-primary/10 pb-2">
                              {col.title}
                            </h4>
                            <ul className="space-y-2">
                              {col.items.map((sub: SubItem) => (
                                <li key={sub.name}>
                                  <Link
                                    to={sub.href}
                                    onClick={(e) => handleLinkClick(e, sub.href)}
                                    className="block text-xs font-semibold text-foreground/80 hover:text-primary transition-colors py-1 hover:translate-x-0.5 transform duration-200"
                                  >
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Normal flat link
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href || "/"}
                  onClick={(e) => handleLinkClick(e, item.href || "/")}
                  className={cn(
                    "transition-all duration-300 font-bold text-xs uppercase tracking-wider relative py-1 mb-[-1px]",
                    isActive 
                      ? "text-primary after:w-[60%] after:mx-auto after:absolute after:bottom-0 after:left-[20%] after:h-[2px] after:bg-primary" 
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Header CTAs */}
            <a href={getWhatsAppUrl("Hello, I would like to request a quote from Proplastics.")} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="ml-4 bg-primary text-white hover:bg-primary-hover font-extrabold text-[10px] uppercase tracking-wider rounded-lg h-9 px-4 shadow-sm border border-transparent">
                Get Quote
              </Button>
            </a>
            <a href="https://shop.proplastics.co.zw" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="ml-2 border-primary text-primary hover:bg-primary hover:text-white font-extrabold text-[10px] uppercase tracking-wider rounded-lg h-9 px-4">
                Shop Online
              </Button>
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-foreground hover:text-primary"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in bg-white max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const hasDropdown = !!item.dropdown;
                const hasMegaMenu = !!item.megaMenu;

                if (hasDropdown) {
                  return (
                    <div key={item.name} className="border-b border-border/50 pb-2">
                      <button
                        onClick={() => toggleMobileSection(item.name)}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-foreground hover:text-primary text-left"
                      >
                        {item.name}
                        <ChevronDown className={cn("h-4 w-4 transition-transform", activeMobileSection === item.name && "rotate-180")} />
                      </button>
                      
                      {activeMobileSection === item.name && (
                        <div className="pl-6 space-y-2 mt-1 py-1">
                          {item.dropdown.map((sub: SubItem) => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              onClick={(e) => handleLinkClick(e, sub.href)}
                              className="block py-1.5 text-xs font-semibold text-muted-foreground hover:text-primary"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (hasMegaMenu) {
                  return (
                    <div key={item.name} className="border-b border-border/50 pb-2">
                      <button
                        onClick={() => toggleMobileSection(item.name)}
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-foreground hover:text-primary text-left"
                      >
                        {item.name}
                        <ChevronDown className={cn("h-4 w-4 transition-transform", activeMobileSection === item.name && "rotate-180")} />
                      </button>
                      
                      {activeMobileSection === item.name && (
                        <div className="pl-6 space-y-4 mt-2 py-1 max-h-[40vh] overflow-y-auto">
                          {item.megaMenu.map((col: any) => (
                            <div key={col.title} className="space-y-1">
                              <div className="text-[10px] font-extrabold uppercase text-primary tracking-wider">{col.title}</div>
                              {col.items.map((sub: SubItem) => (
                                <Link
                                  key={sub.name}
                                  to={sub.href}
                                  onClick={(e) => handleLinkClick(e, sub.href)}
                                  className="block py-1 text-xs text-muted-foreground hover:text-primary"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.href || "/"}
                    onClick={(e) => handleLinkClick(e, item.href || "/")}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-bold transition-colors block border-b border-border/50",
                      location.pathname === item.href ? "text-primary bg-primary/5" : "text-foreground hover:text-primary"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <div className="grid grid-cols-2 gap-2 pt-2 px-3">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full text-xs font-bold uppercase tracking-wider h-11 bg-primary text-white hover:bg-primary-hover">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Get Quote
                  </Button>
                </a>
                <a href="https://shop.proplastics.co.zw" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full text-xs font-bold uppercase tracking-wider h-11 border-primary text-primary hover:bg-primary hover:text-white">
                    Shop Online
                  </Button>
                </a>
              </div>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
