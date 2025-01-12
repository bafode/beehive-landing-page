import React, { useState, useEffect } from "react";

const slide_img = [
  "/images/slider1.png",
  "/images/slider2.png",
  "/images/slider3.png",
  "/images/slider1.png",
  "/images/slider2.png",
  "/images/slider3.png",
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slide_img.length);
    }, 2000); // Change toutes les 2 secondes
    return () => clearInterval(interval);
  }, []);

  const normalizeIndex = (index) => {
    return (index + slide_img.length) % slide_img.length;
  };

  return (
    <div style={styles.container}>
      {slide_img.map((image, i) => {
        const isActive = i === normalizeIndex(activeIndex);
        const isPrevious = i === normalizeIndex(activeIndex - 1);
        const isNext = i === normalizeIndex(activeIndex + 1);

        return (
          <div
            key={i}
            style={{
              ...styles.imageWrapper,
              ...(isActive
                ? styles.active
                : isPrevious || isNext
                ? styles.sibling
                : styles.hidden),
            }}
          >
            <img
              src={image}
              alt={`slide-${i}`}
              style={{
                ...styles.image,
                transform: isActive ? "scale(1.2)" : "scale(0.9)",
                opacity: isActive ? 1 : 0.7,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
const isMobile = window.matchMedia("(max-width: 768px)").matches;
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "400px",
    position: "relative",
    overflow: "hidden",
  },
  imageWrapper: {
    position: "absolute",
    transition: "all 0.5s ease",
  },
  active: {
    zIndex: 2,
    transform: "translateX(0)",
  },
  sibling: {
    zIndex: 1,
    transform: "translateX(-50%)",
  },
  hidden: {
    zIndex: 0,
    transform: "translateX(50%)",
  },
  image: {
    width: isMobile ? "90%" : "300px", // 80% pour le mobile
    maxWidth: isMobile ? "none" : "300px", // Supprimer maxWidth pour mobile
    height: "340px", // Hauteur proportionnelle sur mobile
    objectFit: "contain",
    transition: "all 0.5s ease",
  },
};

export default HeroSlider;
