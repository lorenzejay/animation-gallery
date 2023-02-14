import { useCycle, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const CycledImage = ({ initialX, initialRotate, nextX, nextRotate }) => {
  const [animate, cycle] = useCycle(
    { x: initialX, rotate: initialRotate },
    { x: nextX, rotate: nextRotate }
  );
  return (
    <motion.div
      // value={n}
      key={i}
      className={` max-w-sm top-0 right-0 left-0`}
      // initial="initial"
      // animate={"animate"}
      animate={animate}
      // custom={i === 0 ? 0 : ordered.length - i * 5}
      // variants={{
      //   initial: {
      //     opacity: 1,
      //     position: "relative",
      //     x: n.x,
      //   },
      //   remove: {
      //     x: 200,
      //     opacity: 0.8,
      //   },

      //   animate: (rotationAmount) => ({
      //     opacity: 1,
      //     rotate: rotationAmount,
      //     position: "absolute",
      //     zIndex: ordered.length - i,
      //     x: 0,
      //     transition: {
      //       duration: 1,
      //     },
      //   }),
      // }}
      // animate={{
      //   top: i * -CARD_OFFSET,
      //   // scale: 1 - i * SCALE_FACTOR,
      //   zIndex: ordered.length - i,
      //   ...n.animation,
      //   // rotate: 0,
      // }}
      // onViewportEnter={n.sequence}
      transition={{
        delay: 1,
        duration: 2,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <Image
        src={n.imageSrc}
        alt="s"
        width={1920}
        height={2880}
        className="max-h-[480px]"
      />
    </motion.div>
  );
};

export default CycledImage;
