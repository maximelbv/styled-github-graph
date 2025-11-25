import HeroSection from "@/components/sections/HeroSection";
import PropsSection from "@/components/sections/PropsSection";
import StepsSection from "@/components/sections/StepsSection";
import TemplatesSection from "@/components/sections/TemplatesSection";
import HeroBackground from "@/components/svg/HeroBackground";
import { readFileContent } from "@/utils/FileReader";

const coponentCode = await readFileContent("components/StyledGithubGraph.tsx");

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-8">
      <div className="absolute -top-8 w-full z-0">
        <HeroBackground />
      </div>
      <HeroSection />
      <StepsSection componentCode={coponentCode} />
      <TemplatesSection />
      <PropsSection />
    </div>
  );
}
