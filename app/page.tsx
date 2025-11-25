import HeroSection from "@/components/sections/HeroSection";
import PropsSection from "@/components/sections/PropsSection";
import StepsSection from "@/components/sections/StepsSection";
import HeroBackground from "@/components/svg/HeroBackground";
import { readFileContent } from "@/utils/FileReader";

const coponentCode = await readFileContent("components/StyledGithubGraph.tsx");

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-32">
      <div className="absolute -top-8 w-full z-0">
        <HeroBackground />
      </div>
      <HeroSection />
      <StepsSection componentCode={coponentCode} />
      <PropsSection />
    </div>
  );
}
