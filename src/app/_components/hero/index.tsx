import { Play, Shapes, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroContent() {
  return (
    <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 md:py-16 text-center">
      <div className="mb-6 md:mb-8 inline-flex items-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/20">
        <Star className="h-4 w-4 text-lime-400 fill-current" />
        <span className="text-sm font-medium text-white">
          Biweekly feature releases
        </span>
      </div>

      <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
        Build Stunning Interfaces with{" "}
        <span className="text-nowrap bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 bg-clip-text text-transparent">
          Woven UI
        </span>
      </h1>

      <p className="mb-8 md:mb-10 text-lg md:text-xl lg:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
        Accelerate development with beautifully designed, accessible components
        for React and Next.js
      </p>

      <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
        <Button
          size="lg"
          className="w-full sm:w-auto rounded-full bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 font-semibold text-white"
        >
          <Play className="h-5 w-5" />
          Get Started
        </Button>

        <Button
          size="lg"
          variant="ghost"
          className="w-full sm:w-auto rounded-full border-2 border-white/30 font-semibold text-white hover:bg-white/5"
        >
          <Shapes className="h-5 w-5" />
          UI Blocks
        </Button>
      </div>
    </div>
  );
}
