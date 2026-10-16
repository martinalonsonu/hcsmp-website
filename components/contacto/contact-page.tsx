import { AssemblySection } from "@/components/contacto/assemblySection";
import { ContactChannelsSection } from "@/components/contacto/contactChannelsSection";
import { ContactClosingSection } from "@/components/contacto/contactClosingSection";
import { ContactIntroSection } from "@/components/contacto/contactIntroSection";
import { MembershipSection } from "@/components/contacto/membershipSection";

export default function ContactPage() {
  return (
    <>
      <ContactIntroSection />
      <MembershipSection />
      <ContactChannelsSection />
      <AssemblySection />
      <ContactClosingSection />
    </>
  );
}
