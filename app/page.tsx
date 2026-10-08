import { HomeArchiveSections } from "@/app/components/home-archive-sections";
import { HomeBrotherhoodSection } from "@/app/components/home-brotherhood-section";
import { HomeHero } from "@/app/components/home-hero";
import { HomeIdentitySections } from "@/app/components/home-identity-sections";
import { ScrollRevealSections } from "@/app/components/scroll-reveal-sections";
import { AudioPill } from "@/app/components/audio-pill";

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
