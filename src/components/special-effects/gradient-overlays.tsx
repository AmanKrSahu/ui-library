export function GradientOverlays() {
  return (
    <>
      {/* Enhanced Bottom Fade and Blur Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/80 to-transparent z-5" />
      <div className="absolute bottom-0 left-0 right-0 h-15 backdrop-blur-md z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-10 backdrop-blur-lg z-15" />
    </>
  );
}
