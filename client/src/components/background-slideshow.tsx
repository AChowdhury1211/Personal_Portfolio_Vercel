import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BackgroundSlideshowProps {
  images: string[];
  interval?: number;
  className?: string;
  children?: React.ReactNode;
}

export function BackgroundSlideshow({
  images,
  interval = 10000, // Default to 10 seconds
  className,
  children,
}: BackgroundSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    // Only setup the interval if we have more than one image
    if (images.length <= 1) return;

    const fadeOutDuration = 1000; // 1 second for the fade out effect

    const intervalId = setInterval(() => {
      // Start fade out
      setFadeIn(false);

      // After fade out is complete, change the image
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        // Start fade in with the new image
        setFadeIn(true);
      }, fadeOutDuration);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Image Layers */}
      {images.map((image, index) => (
        <div
          key={image}
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
            index === currentIndex 
              ? fadeIn 
                ? "opacity-100" 
                : "opacity-0" 
              : "opacity-0"
          )}
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden={index !== currentIndex}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}