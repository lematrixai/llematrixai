import { HeroSection } from "@/components/hero-section";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="relative flex flex-col max-2xl:gap-10">
        <HeroSection />
        <Services />
        <Testimonials />
        <Banner />
      </div>
    </main>
  );
}

