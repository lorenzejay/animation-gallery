import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TestEx = () => {
  const [direction, setDirection] = useState("");
  const variants = {
    left: { x: 200 },
    right: { x: -200 },
  };
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <AnimatePresence>
        <motion.div
          animate={direction}
          variants={variants}
          exit={{ y: 200 }}
          key={direction}
        >
          <div>dsa</div>
        </motion.div>
        <div className="space-x-2">
          <button onClick={() => setDirection("left")}>left</button>
          <button onClick={() => setDirection("right")}>right</button>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default TestEx;
