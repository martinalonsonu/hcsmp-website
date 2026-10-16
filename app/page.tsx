import { HomeArchiveSections } from "@/components/home/home-archive-sections";
import { HomeBrotherhoodSection } from "@/components/home/home-brotherhood-section";
import { HomeHero } from "@/components/home/home-hero";
import { HomeIdentitySections } from "@/components/home/home-identity-sections";
import { ScrollRevealSections } from "@/components/shared/scroll-reveal-sections";
import { AudioPill } from "@/components/shared/audio-pill";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ScrollRevealSections>
        <HomeBrotherhoodSection />
        <HomeIdentitySections />
        <HomeArchiveSections />
      </ScrollRevealSections>
      <AudioPill left />
    </>
  );
}
