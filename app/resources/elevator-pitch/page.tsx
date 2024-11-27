import { Metadata } from "next";
import { ElevatorPitchHeader } from "@/components/components-elevator-pitch-header";
import { ElevatorPitchContent } from "@/components/components-elevator-pitch-content";
import { KeyInformation } from "@/components/components-key-information";
import { MissionServicesTabs } from "@/components/components-mission-services-tabs";
import { MarketAnalysis } from "@/components/components-market-analysis";
import { BudgetProjections } from "@/components/BudgetProjections";
import { MarketingSalesStrategy } from "@/components/MarketingSalesStrategy";
import { KeyPartners } from "@/components/KeyPartners";
import { ContactUs } from "@/components/components-contact-us";

export const metadata: Metadata = {
  title: "Essential Care Services - Elevator Pitch",
  description:
    "Discover how Essential Care Services is revolutionizing home care in Stafford County, Virginia.",
};

export default function ElevatorPitchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ElevatorPitchHeader />
      <ElevatorPitchContent />
      <div className="mb-32"></div>
      <KeyInformation />
      <MissionServicesTabs />
      <div className="mb-32"></div>
      <MarketAnalysis />
      <div className="mb-32"></div>
      <BudgetProjections />
      <div className="mb-32"></div>
      <MarketingSalesStrategy />
      <div className="mb-32"></div>
      <KeyPartners />
      <ContactUs />
    </div>
  );
}
