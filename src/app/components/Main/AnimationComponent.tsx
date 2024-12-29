"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DivType {
  id: number;
  top: number;
}

function AnimationComponent() {
  const [divs, setDivs] = useState<DivType[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDiv = {
        id: Math.random(),
        top: Math.random() * 80 + 10,
      };
      setDivs((prev) => [...prev, newDiv]);

      setTimeout(() => {
        setDivs((prev) => prev.filter((div) => div.id !== newDiv.id));
      }, 1000);
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full flex justify-center items-center h-96 relative">
      <div className="flex-grow">
        <AnimatePresence>
          {divs.map((div) => (
            <motion.div
              key={div.id}
              initial={{ x: "-50vw", opacity: 0 }}
              animate={{ x: "40vw", y: "50%", opacity: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                x: { type: "spring", stiffness: 100, damping: 15 },
                opacity: { duration: 2 },
              }}
              className="absolute w-20 h-10 bg-black shadow-xl rounded-3xl"
              style={{
                top: `${div.top}%`,
              }}
            ></motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="bg-blue-500 h-24 w-24 rounded-full"></div>
      <div className="flex-grow">
        {/* <div className="h-96 w-56 bg-gray-100"></div> */}
      </div>
    </div>
  );
}

export default AnimationComponent;
