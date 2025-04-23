import { HeroSection } from "@/components/hero-section";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="relative">
        <HeroSection />
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}

