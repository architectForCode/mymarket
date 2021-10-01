import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setDirection] = useState("");
  const [prevOffset, setPrevOffset] = useState(0);

  const toggleScrollDirection = () => {
    let scrollY = window.scrollY;
    if (scrollY === 0) {
      setDirection("");
    }

    if (scrollY > prevOffset) {
      setDirection("down");
    } else if (scrollY < prevOffset) {
      setDirection("up");
    }
    setPrevOffset(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollDirection);
    return () => window.removeEventListener("scroll", toggleScrollDirection);
  });

  return scrollDirection;
};

export default useScrollDirection;
