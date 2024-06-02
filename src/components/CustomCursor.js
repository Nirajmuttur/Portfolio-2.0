import { useAnimation } from "framer-motion";
import { GrFormNext } from "react-icons/gr";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export const CustomCursor = ({ children }) => {
  const controls = useAnimation();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.3 },
    });
  };

  const handleMouseLeave = () => {
    controls.start({
      opacity: 0,
      transition: { duration: 0.3 },
    });
  };
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [controls]);

  return (
    <div
      className="relative cursor-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <motion.div
        className="flex items-center fixed m-2 pl-2 pointer-events-none bg-white text-black dark:bg-black dark:text-white border-2 dark:border-0 rounded-full"
        initial={{ opacity: 0 }}
        animate={controls}
        style={{
          left: cursorPosition.x + "px",
          top: cursorPosition.y + "px",
        }}
      >
        View Details <GrFormNext className="m-2" />
      </motion.div>
    </div>
  );
};
