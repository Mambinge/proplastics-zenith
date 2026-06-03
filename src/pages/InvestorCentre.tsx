import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  FileText, 
  Download, 
  TrendingUp, 
  Users, 
  Bell, 
  BarChart3, 
  CircleDollarSign, 
  ExternalLink, 
  Leaf, 
  Recycle, 
  Droplets, 
  Sun 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HistoryTable from "@/components/HistoryTable";
import { cn } from "@/lib/utils";
import PageHero from "@/components/PageHero";
import investorHeroImg from "@/assets/INVESTORCENTERLANDING.jpg";

const InvestorCentre = () => {
  const investorItems = [
    { name: "Annual Reports", icon: FileText, description: "Detailed annual performance and financial statements" },
    { name: "Trading Updates", icon: TrendingUp, description: "Quarterly updates on business performance" },
    { name: "AGM Notices", icon: Users, description: "Notices and documents for Annual General Meetings" },
    { name: "Shareholder Notices", icon: Bell, description: "Important announcements for our shareholders" },
    { name: "Financial Results", icon: BarChart3, description: "Interim and year-end financial disclosures" },
    { name: "Share Price", icon: CircleDollarSign, description: "Latest stock market performance and history" },
  ];

  const dividendData = [
    { year: 2024, type: "Final", amount: "US 0.12 cents", date: "May 2025" },
    { year: 2021, type: "Final", amount: "ZWL 38 cents", date: "June 2022" },
    { year: 2019, type: "Interim", amount: "ZW 0.80 cents", date: "Sept 2019" },
  ];

  const financialData = [
    { year: 2024, revenue: "USD 20.6M", profit: "USD 1.2M", assets: "USD 24.7M" },
    { year: 2023, revenue: "USD 21.3M", profit: "USD 1.4M", assets: "USD 22.8M" },
    { year: 2021, revenue: "ZWL 933M", profit: "ZWL 408M", assets: "ZWL 3.46B" },
  ];

  const shareholderData = [
    { name: "Zumbani Capital (Private) Ltd", stake: "23.62%" },
    { name: "Old Mutual Limited", stake: "21.32%" },
    { name: "Amalgamated African Ventures Pvt Ltd", stake: "7.76%" },
    { name: "Giona Capital Pvt Ltd", stake: "Significant" },
    { name: "Mega Market Pvt Ltd", stake: "Significant" },
    { name: "Braford Investments Pvt Ltd", stake: "Significant" },
  ];

  const sharePriceData = [
    { period: "Current (Mar 2026)", price: "ZiG 1.25", change: "+9.0%" },
    { period: "Start of Year (2026)", price: "ZiG 1.40", change: "-10.7%" },
    { period: "3M Average Volume", price: "100,716", change: "Shares/Day" },
  ];

  const sustainabilityInitiatives = [
    {
      icon: Recycle,
      title: "Recycling Programs",
      description: "Recovering post-industrial plastic scrap and runoffs to keep polymer materials out of regional landfills."
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Implementing closed-loop recycling cooling water tanks on our extruders, cutting utility intake to near-zero."
    },
    {
      icon: Sun,
      title: "Energy Efficiency",
      description: "Commissioning commercial rooftop solar arrays to supply clean electricity to our Ardbennie automated mixers."
    },
    {
      icon: Leaf,
      title: "Sustainable Materials",
      description: "Ensuring 100% lead-free formulation across all uPVC and cPVC water pipes, protecting local waterways."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />
      
      <main className="pt-20 pb-16">
        
        {/* Subpage Banner Header */}
        <PageHero
          image={investorHeroImg}
          title="Investor Centre"
          subtitle="Proplastics Limited is listed on the Zimbabwe Stock Exchange (ZSE) under the symbol PROL.zw. Access our reports, financial results, and shares history here."
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-24">
          
          {/* Main Action Banner */}
          <div className="flex justify-center">
            <Button size="lg" className="hover-lift bg-primary hover:bg-primary-hover text-white border-0 font-bold uppercase text-xs tracking-wider h-12 px-8 rounded-xl shadow-md">
              Latest Annual Report <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Downloadables Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-foreground uppercase tracking-tight">Investor Downloads</h2>
              <p className="text-xs text-muted-foreground mt-1 font-medium">Access our statutory publications and share listings.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {investorItems.map((item) => (
                <div 
                  key={item.name} 
                  className="group p-6 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                      <item.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 flex items-center mb-2">
                      {item.name}
                      <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium mb-6">
                      {item.description}
                    </p>
                  </div>
                  <button className="text-primary text-xs font-bold flex items-center hover:text-primary-hover transition-colors border-t border-slate-50 pt-3 uppercase tracking-wider">
                    View Document <Download className="ml-2 h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Share & Market History */}
          <div className="space-y-8 max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-foreground uppercase tracking-tight">Market Highlights</h2>
              <p className="text-xs text-muted-foreground mt-1 font-medium">Detailed dividend summaries and stock structure metrics.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <HistoryTable 
                title="Dividend History"
                columns={[
                  { header: "Year", accessor: "year" },
                  { header: "Type", accessor: "type" },
                  { header: "Amount", accessor: "amount", className: "font-bold text-primary" },
                  { header: "Payment Date", accessor: "date" },
                ]}
                data={dividendData}
                caption="Past dividend declarations and distributions."
              />

              <HistoryTable 
                title="Financial Performance"
                columns={[
                  { header: "Year", accessor: "year" },
                  { header: "Revenue", accessor: "revenue" },
                  { header: "Profit (PAT)", accessor: "profit", className: "font-bold text-primary" },
                  { header: "Total Assets", accessor: "assets" },
                ]}
                data={financialData}
                caption="Key financial highlights from recent annual reports."
              />

              <HistoryTable 
                title="Shareholding Structure"
                columns={[
                  { header: "Shareholder Name", accessor: "name" },
                  { header: "Stake (%)", accessor: "stake", className: "font-bold text-primary" },
                ]}
                data={shareholderData}
                caption="Major shareholders as of recent ZSE disclosures."
              />

              <HistoryTable 
                title="Market Data (PROL.zw)"
                columns={[
                  { header: "Period", accessor: "period" },
                  { header: "Value", accessor: "price", className: "font-bold" },
                  { 
                    header: "Change Status", 
                    accessor: "change",
                    format: (val) => (
                      <span className={cn(
                        "font-extrabold text-xs",
                        val.includes("+") ? "text-green-600" : 
                        val.includes("-") ? "text-primary" : "text-muted-foreground"
                      )}>
                        {val}
                      </span>
                    )
                  },
                ]}
                data={sharePriceData}
                caption="Summary of stock exchange performance variables."
              />
            </div>
          </div>

          {/* ============================================================ */}
          {/* SUSTAINABILITY / ESG SECTION                                 */}
          {/* ============================================================ */}
          {/* <section className="border-t border-border pt-20 space-y-10 max-w-6xl mx-auto">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <Leaf className="h-4 w-4" />
                Sustainability & ESG Strategy
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground uppercase tracking-tight">
                Driving Sustainable Infrastructure
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed font-medium">
                We design piping systems to last generations while continuously minimizing our manufacturing footprint and resource intake.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {sustainabilityInitiatives.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-sm flex flex-col items-center text-center group"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-sm font-extrabold text-foreground uppercase tracking-wider mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section> */}

          {/* Stock Info Summary Footer Banner */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-border max-w-6xl mx-auto shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center md:border-r border-border last:border-0 py-2">
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-extrabold mb-1">Stock Code</p>
                <p className="text-2xl font-black text-primary tracking-tight">PROL.zw</p>
              </div>
              <div className="text-center md:border-r border-border last:border-0 py-2">
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-extrabold mb-1">Exchange listing</p>
                <p className="text-sm font-extrabold text-slate-800 uppercase tracking-wide">Zimbabwe Stock Exchange</p>
              </div>
              <div className="text-center py-2">
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-extrabold mb-1">Reporting Currency</p>
                <p className="text-sm font-extrabold text-slate-800 uppercase tracking-wide">USD / ZWG</p>
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
