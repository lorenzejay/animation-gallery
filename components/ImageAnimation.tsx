import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const ImageAnimation = ({
  n,
  i,
  ordered,
  animateVar,
  setExitTitleY,
  setIsNextPressed,
  isNextPressed,
  showNumber,
}: {
  n: any;
  i: number;
  ordered: any;
  animateVar: string;
  setExitTitleY: (x: number) => void;
  isNextPressed: boolean;
  setIsNextPressed: (x: boolean) => void;
  showNumber: number;
}) => {
  const initialAnimation = useRef(false);
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);
  useEffect(() => {
    initialAnimation.current = true;
  }, []);
  console.log("showNumber", showNumber);
  console.log("showNumber-i", i);
  const YPositioning =
    windowSize > 1024 ? -720 : windowSize > -700 ? -600 : -100;

  return (
    <motion.div
      key={n}
      className={`absolute max-w-sm top-0 right-0 left-0 mx-auto`}
      initial={{
        x: n.initialX,
        opacity: 0.75,
        zIndex: ordered.length - i,
      }}
      animate={
        isNextPressed && i === 0 ? "slideOut" : "original"

        // isNextPressed && i === ordered.length - 1
        //   ? "slideOut"
        //   : initialAnimation
        //   ? "original"
        //   : false
      }
      variants={{
        original: {
          opacity: [1, 1],
          x: 0,
          rotate: [0, 0, 0, 0, 0, i === 0 ? -10 : i * 2],
          transition: {
            delay: 1,
            duration: 1,
          },
        },
        slideOut: {
          rotate: [-10, 0, 0, 0],
          x: [0, 100, 100],
          z: [1000, 1000, 0, -1],
          opacity: [1, 1, 0.75, 0],
          transition: { delay: 0.3, duration: 0.7 },
        },
      }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
      exit={{
        rotate: [i === 0 ? -10 : i * 2, 0, 0],
        scale: [1, 1, 1, 1.6],
        // opacity: 0,
        y: [0, 0, 0, 328],
        transition: {
          delay: 0.15,
          duration: 0.75,
        },
      }}
    >
      <Link
        href={`${n.slug}`}
        key={i}
        onClick={() => setExitTitleY(YPositioning)}
      >
        <Image
          src={n.imageSrc}
          alt="s"
          width={1920}
          height={2880}
          className="max-w-[200px] max-h-[250px] mx-auto md:max-w-xs md:max-h-[400px] xl:max-w-[350px] xl:max-h-[437px] 3xl:max-w-[690px] 3xl:max-h-[800px]"
        />
      </Link>
    </motion.div>
  );
};

export default React.memo(ImageAnimation);
