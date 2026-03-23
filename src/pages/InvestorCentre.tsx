import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Download, TrendingUp, Users, Bell, BarChart3, CircleDollarSign, ExternalLink, PieChart, Coins, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import HistoryTable from "@/components/HistoryTable";
import { cn } from "@/lib/utils";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 animate-slide-in-bottom">
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

          {/* Historical Data Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <HistoryTable 
              title="Dividend History"
              columns={[
                { header: "Year", accessor: "year" },
                { header: "Type", accessor: "type" },
                { header: "Amount", accessor: "amount", className: "font-semibold text-primary" },
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
                { header: "Profit (PAT)", accessor: "profit", className: "font-semibold text-green-600 dark:text-green-400" },
                { header: "Total Assets", accessor: "assets" },
              ]}
              data={financialData}
              caption="Key financial highlights from recent annual reports."
            />

            <HistoryTable 
              title="Shareholding Structure"
              columns={[
                { header: "Shareholder Name", accessor: "name" },
                { header: "Stake (%)", accessor: "stake", className: "font-semibold text-primary" },
              ]}
              data={shareholderData}
              caption="Major shareholders as of recent disclosures."
            />

            <HistoryTable 
              title="Market Data (PROL.zw)"
              columns={[
                { header: "Period", accessor: "period" },
                { header: "Value", accessor: "price", className: "font-semibold" },
                { 
                  header: "Change/Status", 
                  accessor: "change",
                  format: (val) => (
                    <span className={cn(
                      val.includes("+") ? "text-green-600 dark:text-green-400" : 
                      val.includes("-") ? "text-red-600 dark:text-red-400" : ""
                    )}>
                      {val}
                    </span>
                  )
                },
              ]}
              data={sharePriceData}
              caption="Summary of recent stock exchange performance."
            />
          </div>

          {/* Stock Info Summary Footer */}
          <div className="p-8 rounded-3xl bg-secondary/30 border border-border animate-fade-in shadow-inner">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center md:border-r border-border last:border-0">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Symbol</p>
                <p className="text-2xl font-bold text-primary">PROL.zw</p>
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
