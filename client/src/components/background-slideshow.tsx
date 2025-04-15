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
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const handlePrevious = () => {
    if (images.length <= 1) return;
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    // Start transition
    setFadeIn(false);
    
    // After fade out, change to previous image
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFadeIn(true);
      
      // Restart interval if not paused
      if (!isPaused) {
        startInterval();
      }
    }, 1000); // 1 second for fade out
  };
  
  const handleNext = () => {
    if (images.length <= 1) return;
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    // Start transition
    setFadeIn(false);
    
    // After fade out, change to next image
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
      setFadeIn(true);
      
      // Restart interval if not paused
      if (!isPaused) {
        startInterval();
      }
    }, 1000); // 1 second for fade out
  };
  
  const startInterval = () => {
    if (images.length <= 1) return;
    
    const fadeOutDuration = 1000; // 1 second for the fade out effect
    
    intervalRef.current = setInterval(() => {
      // Start fade out
      setFadeIn(false);

      // After fade out is complete, change the image
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        // Start fade in with the new image
        setFadeIn(true);
      }, fadeOutDuration);
    }, interval);
  };

  useEffect(() => {
    // Initialize images loaded array
    setImagesLoaded(new Array(images.length).fill(false));
    
    // Log images for debugging
    console.log("Background images:", images);
    
    // Preload images
    images.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        console.log(`Image loaded successfully: ${src}`);
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
      };
      img.src = src;
    });

    // Only setup the interval if we have more than one image and not paused
    if (!isPaused) {
      startInterval();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images, interval, isPaused]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {/* Debug info */}
      <div className="absolute top-0 left-0 bg-black/80 text-white text-xs p-1 z-50 hidden">
        {images.map((img, idx) => (
          <div key={`debug-${idx}`}>
            Image {idx+1}: {img} - {imagesLoaded[idx] ? "Loaded" : "Loading..."}
          </div>
        ))}
      </div>

      {/* Image Layers */}
      {images.map((image, index) => (
        <div
          key={`slide-${index}-${image}`}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentIndex 
              ? fadeIn 
                ? "opacity-100" 
                : "opacity-0" 
              : "opacity-0"
          )}
          style={{ 
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden={index !== currentIndex}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
      
      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          {/* Previous Button */}
          <button 
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          {/* Next Button */}
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          
          {/* Indicator Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => {
                  if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                  }
                  
                  setFadeIn(false);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setFadeIn(true);
                    
                    if (!isPaused) {
                      startInterval();
                    }
                  }, 1000);
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-white scale-110" 
                    : "bg-white/50 hover:bg-white/80"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}