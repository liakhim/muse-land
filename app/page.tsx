import HeroSectionGradient from "@/app/components/HeroSelection";
import HeroSplit from "@/app/components/HeroSplit";
import HeroSplitReversed from "@/app/components/HeroSplitReversed";
import FeaturesGrid from "@/app/components/FeaturesGridDark";
import TestimonialsSection from "@/app/components/TestimonialsSection";
export default function Home() {
  return (
      <div style={{marginTop: '64px'}}>
          <HeroSectionGradient />
          <HeroSplit/>
          <HeroSplitReversed/>
          <TestimonialsSection/>
          <FeaturesGrid/>
      </div>
  );
}
