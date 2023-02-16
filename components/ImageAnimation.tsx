import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import React from "react";

const ImageAnimation = ({
  n,
  i,
  ordered,
  animateVar,
  setExitTitleY,
}: {
  n: any;
  i: number;
  ordered: any;
  animateVar: string;
  setExitTitleY: (x: number) => void;
}) => {
  const animationControl = useAnimationControls();
  async function sequenceHide() {
    await animationControl.start({ rotate: 0 });
    animationControl.start({ scale: 1.3 });
    return animationControl.start({ y: 300 });
  }

  return (
    // <AnimatePresence mode="wait">
    <motion.div
      key={n}
      className={`absolute max-w-sm top-0 right-0 left-0 mx-auto`}
      initial={{
        x: n.initialX,
        opacity: 0.75,
        zIndex: ordered.length - i,
      }}
      animate={{ opacity: 1, x: 0, rotate: i === 0 ? -10 : i * 2 }}
      // variants={{
      //   animate1: { opacity: 1, x: 0, rotate: i === 0 ? -10 : i * 2 },
      // }}
      // animate={{
      //   opacity: 1,
      //   x: 0,
      //   rotate: i === 0 ? -10 : i * 2,
      //   ...animationControl,
      // }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
      exit={{
        rotate: 0,
        scale: 1.3,
        // opacity: 0,
        y: 300,
        transition: {
          delay: 0.15,
          // type: "tween",
          // ease: "anticipate",
          duration: 0.75,
        },
      }}

      // onTap={sequenceHide}
    >
      <Link href={`${n.slug}`} key={i} onClick={() => setExitTitleY(-728)}>
        <Image
          src={n.imageSrc}
          alt="s"
          width={1920}
          height={2880}
          className="max-w-[200px] max-h-[250px] mx-auto md:max-w-xs md:max-h-[400px] xl:max-w-[350px] xl:max-h-[437px] 3xl:max-w-none 3xl:max-h-[480px]"
        />
      </Link>
    </motion.div>
    // </AnimatePresence>
  );
};

export default React.memo(ImageAnimation);
