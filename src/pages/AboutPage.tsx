import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Building2,
  History,
  ShieldCheck,
  Target,
  Eye,
  Gem,
  Users,
  Award,
  Globe,
  Scale,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import PageHero from "@/components/PageHero";

// Use existing project assets as timeline thumbnails
import heroImg from "@/assets/hero-industrial.jpg";
import pvcImg from "@/assets/products-pvc.jpg";
import hdpeImg from "@/assets/products-hdpe.jpg";
import protankImg from "@/assets/ProtankDSC_0060.JPG";
import prodrainImg from "@/assets/ProDrainDSC_0316.JPG";
import proflowImg from "@/assets/ABOUTUSLANDING.png";

// ===========================
// TIMELINE DATA
// ===========================
const timelineEvents = [
  {
    year: "1988",
    title: "Foundation",
    description:
      "Proplastics was established as a subsidiary of the Murray & Roberts group, commencing production of standard PVC pipes for Zimbabwe's growing infrastructure needs.",
    image: heroImg,
  },
  {
    year: "1996",
    title: "Product Expansion",
    description:
      "Diversified into pressure pipe systems and sewer & drain products, becoming the first Zimbabwean manufacturer to achieve SABS certification for PVC piping.",
    image: pvcImg,
  },
  {
    year: "2005",
    title: "HDPE Introduction",
    description:
      "Launched the HDPE pipe range to serve mining and large-diameter water infrastructure markets, investing in advanced butt-fusion welding technology.",
    image: hdpeImg,
  },
  {
    year: "2010",
    title: "Water Storage Solutions",
    description:
      "Introduced the ProTank range of rotomoulded water storage tanks, expanding from pipes into complete water management solutions.",
    image: protankImg,
  },
  {
    year: "2015",
    title: "ZSE Listing",
    description:
      "Successfully unbundled from the parent group and listed independently on the Zimbabwe Stock Exchange (PROL.zw), opening the company to public investment.",
    image: prodrainImg,
  },
  {
    year: "2020",
    title: "Modernization & Automation",
    description:
      "Commissioned a state-of-the-art automated manufacturing plant, expanding HDPE capacity and introducing continuous profile extrusion lines.",
    image: proflowImg,
  },
  {
    year: "2024",
    title: "Regional Leadership",
    description:
      "Solidified position as Southern Africa's premier plastic piping manufacturer, exporting to Zambia, Mozambique, Malawi, Botswana, and beyond.",
    image: heroImg,
  },
];

// ===========================
// BOARD MEMBERS DATA
// ===========================
const boardMembers = [
  {
    name: "Mr. Gregory Sebborn",
    role: "Non-Executive Board Chairman",
    image: "https://www.proplastics.co.zw/images/chairman.JPG",
    bio: "Gregory served as Managing Director of the Zimbabwe and Southern African operations of the Rennies Group of Companies. He is also a founding Director and former Group Managing Director of Zimplats Holdings Limited and Managing Director of Zimbabwe Platinum Mines. He served as a Partner at Renaissance Partners, a Russian based Investment Bank. Gregory is currently a consultant for special mining projects and developments in Africa and serves as a non-executive Director of several companies including Stanbic Bank Zimbabwe.",
  },
  {
    name: "Mr. Herbert S. Mashanyare",
    role: "Non-Executive Director",
    image: "https://www.proplastics.co.zw/images/h.mashanyare.jpg",
    bio: "Herbert is a former mining executive and until recently was an Executive Director for Mimosa Mines in Zimbabwe. Prior to that, Herbert held several senior positions with Union Carbide and Zimasco. Herbert holds a Bachelor of Science in Chemistry and a Masters of Philosophy in Process Research from the University of Zimbabwe. He also holds a Master of Science in Process Engineering Design from the University of London.",
  },
  {
    name: "Mrs. Sandra Roberts",
    role: "Non-Executive Director",
    image: "https://www.proplastics.co.zw/images/Sandra_Roberts.jpg",
    bio: "Sandra is a proven Agribusiness Specialist and Project Manager with over twenty years of experience in commercial crop production, donor funded agricultural initiatives and horticultural research. Sandra holds a Master of Science Agriculture (Horticulture) (Cum Laude) and a Bachelor of Science Agriculture (Horticulture) Cum Laude, Dux student from the University of Natal, Pietermariztburg, South Africa. In addition, Sandra holds multiple memberships in international and regional agricultural and investment associations.",
  },
  {
    name: "Mr. Paddy Tongai Zhanda (Jnr)",
    role: "Non-Executive Director",
    image: "https://www.proplastics.co.zw/images/Paddy_Zhanda.jpg",
    bio: "Paddy holds a Bachelor of Commerce in Accounting Science from the University of South Africa and completed his Articles of Clerkship with Deloitte & Touche. Paddy is a Director of a number of companies including Aurora Agricultural Ventures & Processors (Private) Limited.",
  },
  {
    name: "Mr. Canada Malunga",
    role: "Non-Executive Director",
    image: "https://www.proplastics.co.zw/images/Canada_Malunga.jpg",
    bio: "Canada holds Master’s in Business Administration (Manchester) and Bachelor of Laws (UNISA) degrees and is a Chartered Accountant (Zimbabwe). He is the immediate former Chief Executive Officer at Masimba Holdings Limited, the leading construction Company in Zimbabwe. He is the past President of the Institute of Chartered Accountants of Zimbabwe and is a Non-Executive Director at FBC Holdings Limited. Canada previously served as Managing Director at Proplastics Limited.",
  },
  {
    name: "Mr. Paschal Changunda",
    role: "Chief Executive Officer",
    image: "https://www.proplastics.co.zw/images/Paschal_Changunda.jpg",
    bio: "Paschal is a qualified Chartered Accountant (Zimbabwe) and is a holder of a Masters Degree in Business Leadership (MBL) from the University of South Africa (UNISA). He served his articles with Deloitte & Touche. Paschal has previously worked for Cairns Foods where he was Finance Manager, and Rainbow Tourism Group, where he joined as Finance Manager and became Finance Director in 2004 until 2013. Prior to joining Proplastics, he was Director – Finance & Administration with ZimTrade.",
  },
  {
    name: "Mr. Benny Tichaona Deda",
    role: "Non-Executive Director",
    image: "https://www.proplastics.co.zw/images/Benny_Deda.jpg",
    bio: "Benny is a holder of an MBA from Edinburgh Heriot Watt Business School (UK). He is also a qualified Chartered Management Accountant (CIMA) (UK), Certified Public Accountant (CPA) (Kenya) and Chartered Secretary (CIS) (Zimbabwe). He sits on several Boards in health care provision, financial services and education sectors. Currently in semi-retirement, Benny previously was the Chief Executive Officer of Baines Imaging Group and the Avenues Clinic.",
  },
  {
    name: "Mrs. Thembiwe Chikosi Mazingi",
    role: "Non-Executive Director",
    image: "https://www.proplastics.co.zw/images/Thembiwe_Mazingi.JPG",
    bio: "Thembiwe holds a Master's in Business Administration and a Bachelor of Laws degree from the University of Zimbabwe. She is a registered Legal Practitioner and Managing Partner at Coghlan, Welsh & Guest. She is a Non-Executive Director at Axia Corporation Limited, Ariston Holdings, and African Century Limited.",
  },
];

const governancePillars = [
  {
    icon: ShieldCheck,
    title: "Board of Directors",
    description:
      "A diverse, independent board committed to King IV principles of ethical leadership, integrity, and accountability.",
  },
  {
    icon: Scale,
    title: "Audit & Risk Committee",
    description:
      "Oversees financial reporting integrity, internal controls, risk management, and compliance with regulatory requirements.",
  },
  {
    icon: Users,
    title: "Remuneration Committee",
    description:
      "Ensures fair, responsible, and transparent executive compensation aligned with company performance and shareholder interests.",
  },
  {
    icon: Globe,
    title: "Sustainability & ESG",
    description:
      "Drives environmental stewardship, social responsibility, and governance practices that create long-term value.",
  },
  {
    icon: Gem,
    title: "Quality Certifications",
    description:
      "ISO 9001 (Quality), ISO 14001 (Environment), ISO 45001 (Health & Safety). SABS and SAZ certified products.",
  },
  {
    icon: BookOpen,
    title: "Ethics & Compliance",
    description:
      "Comprehensive code of ethics, whistleblower protections, anti-corruption policies, and regulatory compliance frameworks.",
  },
];

// ===========================
// TAB NAVIGATION
// ===========================
const tabs = [
  { id: "overview", label: "Overview", icon: Building2 },
  { id: "history", label: "Our History", icon: History },
  { id: "governance", label: "Corporate Governance", icon: ShieldCheck },
];

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Page Header Banner */}
        <PageHero 
          image={proflowImg} 
          title="About Proplastics"
          subtitle="Discover who we are, our rich heritage of manufacturing excellence, and the governance principles that guide every decision we make."
        />


        {/* ============ TAB BAR ============ */}
        <div className="container mx-auto px-4 mt-12">
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className="rounded-full px-6 gap-2"
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </Button>
            ))}
          </div>

          {/* ============================================================ */}
          {/* OVERVIEW SECTION                                              */}
          {/* ============================================================ */}
          {activeTab === "overview" && (
            <div className="max-w-5xl mx-auto animate-fade-in space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Zimbabwe's Premier Plastic Piping Manufacturer
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-primary">Proplastics Zimbabwe Limited</strong> is the
                    premier manufacturer and supplier of plastic pipe systems and fittings in
                    Zimbabwe and the broader Southern African region.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With over three decades of manufacturing excellence, we deliver engineered
                    solutions for water supply, sanitation, mining, telecommunications, and
                    agricultural infrastructure — all manufactured to the highest international
                    standards.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Listed on the Zimbabwe Stock Exchange (PROL.zw), Proplastics serves both
                    domestic and regional markets, exporting to Zambia, Mozambique, Malawi,
                    Botswana, and the broader SADC region.
                  </p>
                </div>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl group">
                  <img
                    src={heroImg}
                    alt="Proplastics manufacturing facility"
                    className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </div>

              {/* Vision / Mission / Values cards */}
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors group">
                  <Eye className="h-10 w-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-xl mb-3 text-foreground">Our Vision</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To be the recognized leader in the provision of world-class plastic piping
                    systems in Southern Africa.
                  </p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors group">
                  <Target className="h-10 w-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-xl mb-3 text-foreground">Our Mission</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To deliver engineered plastic piping solutions that reliably build our
                    continent's vital infrastructure.
                  </p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors group">
                  <Gem className="h-10 w-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-xl mb-3 text-foreground">Our Values</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Integrity, Innovation, Customer Focus, Safety, and Environmental Stewardship
                    guide every decision we make.
                  </p>
                </div>
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "36+", label: "Years of Excellence" },
                  { value: "5+", label: "Countries Served" },
                  { value: "500+", label: "Product Lines" },
                  { value: "ISO", label: "Certified Quality" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/10"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* HISTORY TIMELINE SECTION                                      */}
          {/* ============================================================ */}
          {activeTab === "history" && (
            <div className="max-w-5xl mx-auto animate-fade-in">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Over three decades of innovation, growth, and unwavering commitment to
                  building Africa's infrastructure.
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Center vertical line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 md:-translate-x-px" />

                <div className="space-y-12 md:space-y-16">
                  {timelineEvents.map((event, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <div
                        key={event.year}
                        className={cn(
                          "relative flex flex-col md:flex-row items-start gap-6 md:gap-0 animate-fade-in",
                          !isEven && "md:flex-row-reverse"
                        )}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {/* Year badge on the center line */}
                        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/30 border-4 border-background">
                            {event.year}
                          </div>
                        </div>

                        {/* Content card */}
                        <div
                          className={cn(
                            "ml-16 md:ml-0 md:w-[calc(50%-3rem)]",
                            isEven ? "md:pr-0 md:mr-auto" : "md:pl-0 md:ml-auto"
                          )}
                        >
                          <div className="group bg-card rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl">
                            {/* Image thumbnail */}
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                              <div className="absolute bottom-3 left-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold backdrop-blur-sm">
                                  <History className="h-3 w-3" />
                                  {event.year}
                                </span>
                              </div>
                            </div>

                            {/* Text content */}
                            <div className="p-6">
                              <h3 className="text-xl font-bold text-foreground mb-2">
                                {event.title}
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">
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
                  <div className="w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30 border-4 border-background" />
                </div>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* CORPORATE GOVERNANCE SECTION                                  */}
          {/* ============================================================ */}
          {activeTab === "governance" && (
            <div className="max-w-6xl mx-auto animate-fade-in space-y-16">
              {/* Intro */}
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold">Corporate Governance</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Proplastics, robust corporate governance is fundamental to creating long-term
                  value for our shareholders, employees, and the communities we serve. We are
                  committed to the principles of the King IV Code on Corporate Governance.
                </p>
              </div>

              {/* Governance pillars grid */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">Governance Framework</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {governancePillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="group bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <pillar.icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{pillar.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Board of Directors */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-center">Board of Directors</h3>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
                  Our board provides strategic direction and oversight, ensuring the highest
                  standards of governance and accountability.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {boardMembers.map((member) => (
                    <div
                      key={member.name}
                      className="group relative bg-card rounded-2xl border border-border hover:border-primary/40 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl"
                    >
                      {/* Portrait Image */}
                      <div className="relative h-64 overflow-hidden bg-slate-100">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        
                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                          <h4 className="font-bold text-white text-lg leading-tight">{member.name}</h4>
                          <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mt-1">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      {/* Bio Content - Scrollable on hover or fixed height */}
                      <div className="p-4 bg-card/80 backdrop-blur-sm border-t border-border/50">
                        <div className="max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                          <p className="text-xs text-muted-foreground leading-relaxed italic">
                            {member.bio}
                          </p>
                        </div>
                      </div>

                      {/* Accent highlight */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications banner */}
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <Award className="h-16 w-16 text-primary shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Internationally Certified Excellence
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Proplastics is certified in <strong>ISO 9001</strong> (Quality Management),{" "}
                      <strong>ISO 14001</strong> (Environmental Management), and{" "}
                      <strong>ISO 45001</strong> (Occupational Health & Safety). All products carry{" "}
                      <strong>SABS</strong> and <strong>SAZ</strong> certification marks,
                      guaranteeing consistent, world-class quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
