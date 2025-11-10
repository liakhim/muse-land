import Link from 'next/link';
import HeroSectionGradient from "@/app/components/HeroSelection";
import HeroSplit from "@/app/components/HeroSplit";
import HeroSplitReversed from "@/app/components/HeroSplitReversed";
export default function Home() {
  return (
      <div style={{marginTop: '64px'}}>
        <h1>(HOME) Lorem ipsum dolor sit amet.</h1>
          <HeroSectionGradient />
          <HeroSplit/>
          <HeroSplitReversed/>
      </div>
  );
}
