import HeroSection from "@/components/sections/HeroSection";
import PropsSection from "@/components/sections/PropsSection";
import StepsSection from "@/components/sections/StepsSection";
import HeroBackground from "@/components/svg/HeroBackground";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="absolute -top-8 w-full">
        <HeroBackground />
      </div>
      <HeroSection />
      <StepsSection />
      <PropsSection />
    </div>
  );
}
