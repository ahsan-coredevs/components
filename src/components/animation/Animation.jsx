import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "../../assets/animation/slider5-1.jpg";
import Image2 from "../../assets/animation/slider5-2.jpg";
import Image3 from "../../assets/animation/slider5-3.jpg";

function Animation() {
  const images = [Image1, Image2, Image3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full">
      <div className="w-full h-screen relative overflow-hidden">
        <AnimatePresence>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              initial={{ opacity: 0, scale: 1.2 }} // Initial state for fade-in effect
              animate={{
                opacity: currentImageIndex === index ? 1 : 1, // Show current image
                scale: currentImageIndex === index ? 1 : 1.5, // Scale effect for current image
              }} // Animate based on index
              exit={{ opacity: 0, scale: 1.5 }} 
              transition={{ duration: 1 }} 
              style={{
                backgroundImage: `url(${image})`,
                zIndex: currentImageIndex === index ? 10 : 1, 
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Animation;
