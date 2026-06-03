import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  History,
  ShieldCheck,
  Gem,
  Users,
  Award,
  Globe,
  Scale,
  BookOpen,
  ChevronRight,
  Eye,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";
import PageHero from "@/components/PageHero";

// Asset imports
import heroImg from "@/assets/hero-industrial.jpg";
import pvcImg from "@/assets/products-pvc.jpg";
import hdpeImg from "@/assets/products-hdpe.jpg";
import protankImg from "@/assets/ProtankDSC_0060.png";
import prodrainImg from "@/assets/ProDrainDSC_0316.png";
import proflowImg from "@/assets/ABOUTUSLANDING.png";
import historyVisual from "@/assets/HISTORYIMAGE.png";

// Board assets
import chairmanGregoryImg from "@/assets/Cooperate/optimized/Chairman-Gregory Sebborn.jpg";
import herbertMashanyareImg from "@/assets/Cooperate/optimized/Non Executive Director - Herbert Mashanyare.jpg";
import sandraRobertsImg from "@/assets/Cooperate/optimized/Non Executive Director - Sandra Roberts.jpg";
import paddyZhandaImg from "@/assets/Cooperate/optimized/Non Executive Director - Paddy T Zhanda Jnr.jpg";
import canadaMalungaImg from "@/assets/Cooperate/optimized/Non Executive Director - Canada Malunga.jpg";
import pascalChangundaImg from "@/assets/Cooperate/optimized/CEO -Pascal Changunda.jpg";
import bennyDedaImg from "@/assets/Cooperate/optimized/Non Executive Director - Benny T Deda.jpg";
import genericNonExecutiveImg from "@/assets/Cooperate/optimized/Non Executive Director - Non Executive Director.jpg";

// Timeline events based on layout document
const timelineEvents = [
  {
    year: "1965",
    title: "Inception & Founding",
    description: "Proplastics was founded, starting PVC pipe extrusion in Zimbabwe to supply agricultural water developments and municipal reticulation.",
    image: pvcImg
  },
  {
    year: "1970s",
    title: "Industrial Growth",
    description: "Expanded our manufacturing footprint in Harare, setting up bulk production capabilities to support national water infrastructure.",
    image: heroImg
  },
  {
    year: "1994",
    title: "Product Range Diversification",
    description: "Introduced advanced piping lines for sewer and drainage networks, becoming a core supplier for regional municipal contracts.",
    image: hdpeImg
  },
  {
    year: "2012",
    title: "Automation & Expansion",
    description: "Invested heavily in modern high-capacity extrusion lines, introducing state-of-the-art European automated mixing plants.",
    image: protankImg
  },
  {
    year: "2015",
    title: "ZSE Listing",
    description: "Successfully unbundled and listed independently on the Zimbabwe Stock Exchange (PROL.zw), unlocking public investment and growth capital.",
    image: prodrainImg
  },
  {
    year: "2020+",
    title: "Regional Infrastructure & Future",
    description: "Commissioned high-diameter HDPE lines, expanded SADC exports, and initiated green manufacturing initiatives like on-site solar plants.",
    image: proflowImg
  }
];

const boardMembers = [
  {
    name: "Mr. Gregory Sebborn",
    role: "Non-Executive Board Chairman",
    image: chairmanGregoryImg,
    bio: "Gregory served as Managing Director of the Zimbabwe and Southern African operations of the Rennies Group of Companies. He is also a founding Director and former Group Managing Director of Zimplats Holdings Limited and Managing Director of Zimbabwe Platinum Mines. Gregory is currently a consultant for special mining projects and developments in Africa and serves as a non-executive Director of several companies including Stanbic Bank Zimbabwe."
  },
  {
    name: "Mr. Herbert S. Mashanyare",
    role: "Non-Executive Director",
    image: herbertMashanyareImg,
    bio: "Herbert is a former mining executive and until recently was an Executive Director for Mimosa Mines in Zimbabwe. Prior to that, Herbert held several senior positions with Union Carbide and Zimasco. Herbert holds a Bachelor of Science in Chemistry and a Masters of Philosophy in Process Research from the University of Zimbabwe."
  },
  {
    name: "Mrs. Sandra Roberts",
    role: "Non-Executive Director",
    image: sandraRobertsImg,
    bio: "Sandra is a proven Agribusiness Specialist and Project Manager with over twenty years of experience in commercial crop production, donor funded agricultural initiatives and horticultural research. Sandra holds a Master of Science Agriculture (Horticulture) (Cum Laude) from the University of Natal, South Africa."
  },
  {
    name: "Mr. Paddy Tongai Zhanda (Jnr)",
    role: "Non-Executive Director",
    image: paddyZhandaImg,
    bio: "Paddy holds a Bachelor of Commerce in Accounting Science from the University of South Africa and completed his Articles of Clerkship with Deloitte & Touche. Paddy is a Director of a number of companies including Aurora Agricultural Ventures."
  },
  {
    name: "Mr. Canada Malunga",
    role: "Non-Executive Director",
    image: canadaMalungaImg,
    bio: "Canada holds Master’s in Business Administration and Bachelor of Laws degrees and is a Chartered Accountant (Zimbabwe). He is the immediate former Chief Executive Officer at Masimba Holdings Limited, the leading ZSE-listed construction company."
  },
  {
    name: "Mr. Paschal Changunda",
    role: "Chief Executive Officer",
    image: pascalChangundaImg,
    bio: "Paschal is a qualified Chartered Accountant (Zimbabwe) and is a holder of a Masters Degree in Business Leadership (MBL) from the University of South Africa. Prior to joining Proplastics, he was Director – Finance & Administration with ZimTrade."
  },
  {
    name: "Mr. Benny Tichaona Deda",
    role: "Non-Executive Director",
    image: bennyDedaImg,
    bio: "Benny is a holder of an MBA from Edinburgh Heriot Watt Business School. He is also a qualified Chartered Management Accountant (CIMA) and sits on several Boards in health care provision, financial services, and education sectors."
  },
  {
    name: "Mrs. Thembiwe Chikosi Mazingi",
    role: "Non-Executive Director",
    image: genericNonExecutiveImg,
    bio: "Thembiwe holds a Master's in Business Administration and a Bachelor of Laws degree from the University of Zimbabwe. Thembiwe is a registered Legal Practitioner and Managing Partner at Coghlan, Welsh & Guest."
  }
];

const governancePillars = [
  {
    icon: ShieldCheck,
    title: "Board of Directors",
    description: "Providing strategic direction, ethical leadership, and high levels of transparency."
  },
  {
    icon: Scale,
    title: "Audit & Risk Committee",
    description: "Overseeing financial reporting integrity, internal controls, and corporate risks."
  },
  {
    icon: Users,
    title: "Remuneration Committee",
    description: "Aligning executive compensation with company performance and shareholder interests."
  },
  {
    icon: Globe,
    title: "Sustainability & ESG",
    description: "Driving environmental protection, social support, and ethical sourcing."
  },
  {
    icon: Gem,
    title: "Quality Certifications",
    description: "Maintaining ISO 9001, ISO 14001, and ISO 45001 international standards compliance."
  },
  {
    icon: BookOpen,
    title: "Ethics & Compliance",
    description: "Operating with a zero-tolerance policy for corruption under a strict Code of Conduct."
  }
];

const clientList = [
  { name: "ZINWA", sector: "National Water Authority" },
  { name: "Masimba Construction", sector: "Civil Engineering & Civils" },
  { name: "Zimplats", sector: "Mining Utility" },
  { name: "City of Harare", sector: "Municipal Utilities" },
  { name: "Mimosa Mining Company", sector: "Mining Utility" },
  { name: "City of Bulawayo", sector: "Municipal Utilities" },
  { name: "Mazowe Citrus Estates", sector: "Commercial Agriculture" },
  { name: "Zinara", sector: "Road Infrastructure Projects" }
];

const AboutPage = () => {
  const [expandedBios, setExpandedBios] = useState<Record<string, boolean>>({});

  const toggleBio = (memberName: string) => {
    setExpandedBios((prev) => ({ ...prev, [memberName]: !prev[memberName] }));
  };

  const handleSubNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />

      <main className="pt-20 pb-16">
        
        {/* Page Header Banner */}
        <PageHero 
          image={proflowImg} 
          title="About Proplastics"
          subtitle="Discover who we are, our rich heritage of manufacturing excellence, and the governance principles that guide every decision we make."
        />

        <div className="container mx-auto px-4 mt-8 space-y-24">
          
          {/* Sub Navigation Buttons */}
          <nav
            aria-label="About page section navigation"
            className="max-w-xl mx-auto flex items-center justify-center gap-4 bg-slate-50 border border-border p-2 rounded-full shadow-sm"
          >
            <a
              href="#overview"
              onClick={(e) => handleSubNavClick(e, "overview")}
              className="flex-1 text-center py-2 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-white transition-all duration-300"
            >
              Overview
            </a>
            <a
              href="#journey"
              onClick={(e) => handleSubNavClick(e, "journey")}
              className="flex-1 text-center py-2 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-white transition-all duration-300"
            >
              Our History
            </a>
            <a
              href="#governance"
              onClick={(e) => handleSubNavClick(e, "governance")}
              className="flex-1 text-center py-2 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-white transition-all duration-300"
            >
              Governance
            </a>
          </nav>

          {/* ============================================================ */}
          {/* OVERVIEW SECTION (50/50 Layout)                              */}
          {/* ============================================================ */}
          <section id="overview" className="max-w-6xl mx-auto scroll-mt-28">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Who are we? */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Corporate Profile
                </div>
                <h2 className="text-3xl font-extrabold text-foreground">Who are we?</h2>
                <div className="text-sm sm:text-base text-foreground leading-relaxed space-y-4">
                  <p>
                    Proplastics Limited is Zimbabwe's leading manufacturer of high-quality plastic piping systems for water supply, sewer drainage, borehole casings, irrigation, and power cable ducting.
                  </p>
                  <p>
                    With our highly computerized production systems in Harare, we supply complete, engineered pipelines designed to handle Africa's tough geological environments. We serve civil contractors, government utilities, mining conglomerates, and commercial agricultural developers, ensuring vital resources reach their destination without leakage.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button asChild className="rounded-xl font-bold uppercase text-xs tracking-wider bg-primary hover:bg-primary-hover text-white h-11 px-6 shadow-sm border-0">
                    <a href="#governance" onClick={(e) => handleSubNavClick(e, "governance")}>
                      Corporate Governance
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-xl font-bold uppercase text-xs tracking-wider border-primary text-primary hover:bg-primary hover:text-white h-11 px-6">
                    <a href="/products">
                      Explore Products
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-border shadow-lg">
                <img 
                  src={historyVisual} 
                  alt="Proplastics manufacturing factory floor" 
                  className="w-full h-full object-cover aspect-video lg:aspect-square" 
                />
              </div>

            </div>
          </section>

          {/* ============================================================ */}
          {/* VISION, MISSION, VALUES (Content Blocks)                     */}
          {/* ============================================================ */}
          <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col items-center text-center shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Our Vision</h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                To be the recognized leader in the provision of world-class plastic piping systems in Southern Africa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col items-center text-center shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Our Mission</h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                To deliver engineered plastic piping solutions that reliably build our continent's vital infrastructure.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col items-center text-center shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Gem className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Our Values</h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                Integrity, Innovation, Customer Focus, Safety, and Environmental Stewardship guide every decision we make.
              </p>
            </div>
          </section>

          {/* ============================================================ */}
          {/* CLIENTS SECTION                                              */}
          {/* ============================================================ */}
          <section className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Our Partnerships
              </div>
              <h2 className="text-3xl font-extrabold text-foreground">Our Clients</h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto font-medium">
                Partnering with Southern Africa's major utility organizations, builders, agricultural ventures, and mines.
              </p>
            </div>

            {/* Clients Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {clientList.map((client, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center shadow-sm"
                >
                  <h4 className="font-extrabold text-xs text-foreground uppercase tracking-wider mb-1">
                    {client.name}
                  </h4>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wide">
                    {client.sector}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================================ */}
          {/* HISTORY TIMELINE SECTION                                      */}
          {/* ============================================================ */}
          <section id="journey" className="max-w-5xl mx-auto scroll-mt-28">
            <div className="text-center mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <History className="h-4 w-4" />
                Chronology
              </div>
              <h2 className="text-3xl font-extrabold text-foreground">Our Journey</h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto font-medium">
                A rich heritage of manufacturing excellence, innovation, and unwavering infrastructure supply.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Center vertical line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 md:-translate-x-px" />

              <div className="space-y-10">
                {timelineEvents.map((event, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={event.year}
                      className={cn(
                        "relative flex flex-col md:flex-row items-start gap-4 md:gap-0",
                        !isEven && "md:flex-row-reverse"
                      )}
                    >
                      {/* Year badge on the center line */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-extrabold text-xs shadow-md border-4 border-white">
                          {event.year}
                        </div>
                      </div>

                      {/* Content card */}
                      <div
                        className={cn(
                          "ml-14 md:ml-0 md:w-[calc(50%-2.5rem)]",
                          isEven ? "md:pr-0 md:mr-auto" : "md:pl-0 md:ml-auto"
                        )}
                      >
                        <div className="group bg-white rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg">
                          
                          {/* Image thumbnail */}
                          <div className="relative h-40 overflow-hidden">
                            <img
                              src={event.image}
                              alt={event.title}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-3 left-4">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider">
                                {event.year}
                              </span>
                            </div>
                          </div>

                          {/* Text content */}
                          <div className="p-5">
                            <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider mb-2">
                              {event.title}
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* End cap */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 bottom-0 z-20">
                <div className="w-3.5 h-3.5 rounded-full bg-primary border-4 border-white" />
              </div>
            </div>
          </section>

          {/* ============================================================ */}
          {/* CORPORATE GOVERNANCE SECTION                                  */}
          {/* ============================================================ */}
          <section id="governance" className="max-w-6xl mx-auto space-y-16 scroll-mt-28">
            
            {/* Intro */}
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Leadership & Ethics
              </div>
              <h2 className="text-3xl font-extrabold text-foreground">Corporate Governance</h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                The Board of Proplastics Limited is committed to the highest standards of governance, accountability, and ethical transparency, guiding every corporate decision.
              </p>
            </div>

            {/* Governance pillars grid */}
            <div className="space-y-6">
              <h3 className="text-base font-extrabold uppercase tracking-wider text-primary text-center">Governance Framework</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {governancePillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="bg-white p-6 rounded-2xl border border-primary/15 hover:border-primary/35 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <pillar.icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-foreground mb-2">{pillar.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Board of Directors */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-base font-extrabold uppercase tracking-wider text-primary mb-2">Board of Directors</h3>
                <p className="text-xs text-muted-foreground max-w-xl mx-auto font-medium">
                  Providing expert strategic oversight to ensure sustainable corporate growth and investor alignment.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {boardMembers.map((member) => (
                  <div
                    key={member.name}
                    className="bg-white rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden shadow-sm group"
                  >
                    {/* Portrait Image */}
                    <div className="relative h-60 overflow-hidden bg-slate-100">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="font-extrabold text-white text-sm uppercase tracking-wide leading-tight">{member.name}</h4>
                        <p className="text-primary text-[10px] font-extrabold uppercase tracking-widest mt-1">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Bio Content */}
                    <div className="p-4 bg-white border-t border-slate-100 space-y-2">
                      <p
                        id={`bio-${member.name.replace(/\s+/g, "-").toLowerCase()}`}
                        className="text-[11px] text-muted-foreground leading-relaxed font-medium"
                      >
                        {expandedBios[member.name]
                          ? member.bio
                          : `${member.bio.slice(0, 120).trimEnd()}...`}
                      </p>
                      <button
                        type="button"
                        onClick={() => toggleBio(member.name)}
                        aria-expanded={Boolean(expandedBios[member.name])}
                        aria-controls={`bio-${member.name.replace(/\s+/g, "-").toLowerCase()}`}
                        className="text-[10px] font-extrabold text-primary hover:text-primary-hover transition-colors focus-visible:outline-none"
                      >
                        {expandedBios[member.name] ? "READ LESS" : "READ MORE"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Banner */}
            <div className="bg-primary/[0.03] rounded-3xl p-8 border border-primary/20 max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <Award className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm uppercase tracking-wider mb-2">
                    Internationally Certified Excellence
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Proplastics products undergo meticulous testing. Our facility is certified under <strong>ISO 9001</strong> (Quality Management), <strong>ISO 14001</strong> (Environmental Management), and <strong>ISO 45001</strong> (Occupational Health and Safety). Every pipeline we manufacture displays the <strong>SABS</strong> and <strong>SAZ</strong> seals of conformity.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact / Team CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild className="rounded-xl font-bold uppercase text-xs tracking-wider bg-primary hover:bg-primary-hover text-white h-12 px-8 border-0 shadow-sm">
                <a href="/contact">
                  Talk to Our Team
                  <ChevronRight className="h-4.5 w-4.5 ml-1.5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-xl font-bold uppercase text-xs tracking-wider border-primary text-primary hover:bg-primary hover:text-white h-12 px-8">
                <a href="/investor-centre">
                  Visit Investor Centre
                  <ChevronRight className="h-4.5 w-4.5 ml-1.5" />
                </a>
              </Button>
            </div>

          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
