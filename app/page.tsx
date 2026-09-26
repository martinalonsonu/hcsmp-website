import { HomeArchiveSections } from "@/app/components/home-archive-sections";
import { HomeBrotherhoodSection } from "@/app/components/home-brotherhood-section";
import { HomeHero } from "@/app/components/home-hero";
import { HomeIdentitySections } from "@/app/components/home-identity-sections";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeBrotherhoodSection />
      <HomeIdentitySections />
      <HomeArchiveSections />
    </>
  );
}
