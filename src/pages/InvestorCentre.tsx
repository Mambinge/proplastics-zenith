import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Download, TrendingUp, Users, Bell, BarChart3, CircleDollarSign, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const InvestorCentre = () => {
  const investorItems = [
    { name: "Annual Reports", icon: FileText, description: "Detailed annual performance and financial statements" },
    { name: "Trading Updates", icon: TrendingUp, description: "Quarterly updates on business performance" },
    { name: "AGM Notices", icon: Users, description: "Notices and documents for Annual General Meetings" },
    { name: "Shareholder Notices", icon: Bell, description: "Important announcements for our shareholders" },
    { name: "Financial Results", icon: BarChart3, description: "Interim and year-end financial disclosures" },
    { name: "Share Price", icon: CircleDollarSign, description: "Latest stock market performance and history" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Investor Centre
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Proplastics Limited is listed on the Zimbabwe Stock Exchange under the symbol <span className="text-primary font-semibold">PROL.zw</span>. 
              Get the latest investor information for Proplastics Limited, including top shareholders, financial summaries, 
              stocks and annual reports here.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="hover-lift">
                Latest Annual Report <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Downloadables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-in-bottom">
            {investorItems.map((item, index) => (
              <div 
                key={item.name} 
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  {item.name}
                  <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {item.description}
                </p>
                <button className="text-primary text-sm font-medium flex items-center hover:underline">
                  Click to download <Download className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Stock Info Summary (Placeholder for extra premium feel) */}
          <div className="mt-16 p-8 rounded-3xl bg-secondary/30 border border-border animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center md:border-r border-border last:border-0">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Symbol</p>
                <p className="text-2xl font-bold">PROL.zw</p>
              </div>
              <div className="text-center md:border-r border-border last:border-0">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Exchange</p>
                <p className="text-2xl font-bold">Zimbabwe Stock Exchange</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Reporting Currency</p>
                <p className="text-2xl font-bold">ZWG / USD</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InvestorCentre;
