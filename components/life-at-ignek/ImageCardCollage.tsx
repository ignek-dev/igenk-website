"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageCardCollageProps {
  images: string[];
}

export default function ImageCardCollage({ images }: ImageCardCollageProps) {
  // State to track the card that is currently in the center
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect to set up a timer that cycles through the images
  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next index, looping back to 0 at the end
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [images.length]);

  // Helper function to determine the CSS class for each card's position
  const getCardClass = (index: number) => {
    const totalImages = images.length;
    let offset = index - currentIndex;

    // Handle the loop around effect
    if (offset > totalImages / 2) {
      offset -= totalImages;
    } else if (offset < -totalImages / 2) {
      offset += totalImages;
    }
    
    switch (offset) {
      case 0:
        return 'card-center'; // The card in the middle
      case 1:
        return 'card-right-1'; // The card to the immediate right
      case -1:
        return 'card-left-1'; // The card to the immediate left
      case 2:
        return 'card-right-2'; // The second card to the right
      case -2:
        return 'card-left-2'; // The second card to the left
      default:
        return 'card-hidden'; // All other cards
    }
  };

  return (
    <div className="collage-container">
      {images.map((src, index) => (
        <div key={src} className={`card-wrapper ${getCardClass(index)}`}>
          <div className="collage-card">
            <Image
              src={src}
              alt={`Collage image ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
}