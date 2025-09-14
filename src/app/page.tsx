import { HeroContent } from "./_components/hero";
import { BackgroundEffects } from "@/components/special-effects/background-effects";
import { GradientOverlays } from "@/components/special-effects/gradient-overlays";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <section className="relative min-h-[85vh] overflow-hidden">
        <BackgroundEffects />
        <GradientOverlays />
        <div className="relative z-20">
          <HeroContent />
        </div>
      </section>
    </main>
  );
}
