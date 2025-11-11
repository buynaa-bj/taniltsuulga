import { Header }  from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { BenefitsSection } from "@/components/BenefitsSection"
import { WorksSection } from "@/components/WorksSection"
import { DemoSection } from "@/components/DemoSection"
import { ScreenshotSection } from "@/components/ScreenshotSection"
import { ReviewsSection } from "@/components/ReviewsSection"
import { PlansSection } from "@/components/PlansSection"
import { InstallSection } from "@/components/InstallSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <WorksSection />
      {/* <DemoSection /> */}
      <ScreenshotSection />
      <ReviewsSection />
      {/* <PlansSection /> */}
      <InstallSection />
      {/* <Footer /> */}
    </div>

  );
}
