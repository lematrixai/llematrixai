import { HeroSection } from "@/components/hero-section";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Banner from "@/components/banner";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="relative">
        <HeroSection />
        <Services />
        <Testimonials />
        <Banner />
      </div>
    </main>
  );
}

