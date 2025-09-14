"use client";

import { useEffect, useState } from "react";

export function BackgroundEffects() {
  const [stars, setStars] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3,
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0" />

      {/* Animated Stars Element*/}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute h-1 w-1 rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: "2s",
          }}
        />
      ))}

      {/* Gradient Orbs Element */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-lime-600/15 blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-lime-600/15 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Mesh Lines Element */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="mesh"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 50 L 100 50 M 50 0 L 50 100"
              stroke="#a3e635"
              strokeWidth="0.5"
              opacity="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh)" />

        {/* Connection Lines Element*/}
        <line
          x1="25%"
          y1="25%"
          x2="75%"
          y2="75%"
          stroke="#a3e635"
          strokeWidth="1"
          opacity="0.2"
          className="animate-pulse"
        />
        <line
          x1="75%"
          y1="25%"
          x2="25%"
          y2="75%"
          stroke="#a3e635"
          strokeWidth="1"
          opacity="0.2"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <circle
          cx="25%"
          cy="25%"
          r="3"
          fill="#a3e635"
          opacity="0.4"
          className="animate-pulse"
        />
        <circle
          cx="75%"
          cy="75%"
          r="3"
          fill="#a3e635"
          opacity="0.4"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <circle
          cx="75%"
          cy="25%"
          r="2"
          fill="#a3e635"
          opacity="0.3"
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <circle
          cx="25%"
          cy="75%"
          r="2"
          fill="#a3e635"
          opacity="0.3"
          className="animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </svg>

      {/* Center Circle Element*/}
      <div
        className="absolute top-1/3 right-1/3 w-32 h-32 border border-lime-400/20 rounded-full animate-spin"
        style={{ animationDuration: "20s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-lime-400/30 rounded-full animate-spin"
        style={{ animationDuration: "15s", animationDirection: "reverse" }}
      />
    </div>
  );
}
