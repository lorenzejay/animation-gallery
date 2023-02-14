import React, { useEffect, useState } from "react";
import { animate, AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  useIsLarge,
  useIsMedium,
  useIsSmall,
  useMediaQuery,
} from "@/utils/useMedia";

const AnimatedGallery = ({ orderedGallery }) => {
  const [windowSize, setWindowSize] = useState(0);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
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
  console.log("windowSize", windowSize);

  const isSmall = useIsSmall();
  const isMedium = useIsMedium();
  const isLarge = useIsLarge();
  console.log(
    "windowSize",
    windowSize > 1024 ? "large" : windowSize > 724 ? "med" : "small"
  );
  const [titleTextDelayDuration, setTitleTextDelayDuration] = useState(0.5);
  const variants =
    windowSize > 1024
      ? {
          animate: {
            y: 275,
          },
        }
      : windowSize > 724
      ? {
          animate: {
            y: 100,
          },
        }
      : {
          animate: {
            y: 50,
          },
        };
  const headingVariant =
    windowSize > 1024
      ? {
          animate: {
            y: -550,
            opacity: 1,
          },
        }
      : windowSize > 724
      ? {
          animate: {
            y: -650,
            opacity: 1,
          },
        }
      : {
          animate: {
            y: -700,
            opacity: 1,
          },
        };
  console.log("variants", variants);
  return (
    <motion.div
      className="overflow-x-hidden"
      style={{ background: orderedGallery[0].background }}
      variants={{
        initial: {
          background: "#6d7671",
          opacity: 0.9,
        },
        animate: {
          background: orderedGallery[0].background,
          opacity: 1,
        },
        exit: {
          opacity: 0,
          transition: { duration: 5, delay: 2 },
        },
      }}
      animate={"animate"}
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="relative flex justify-center items-center">
        <AnimatePresence>
          <motion.div className="pt-32 lg:pt-0 h-screen relative  w-full flex items-center justify-center ">
            <motion.div
              key={orderedGallery[0].name}
              className={`max-w-sm `}
              initial={{
                opacity: 1,
                // y: -40,
                scale: 1,
              }}
              animate="animate"
              variants={variants}
              transition={{
                duration: 0.75,
                delay: 1,
              }}
            >
              <Image
                src={orderedGallery[0].imageSrc}
                alt="s"
                width={1920}
                height={2880}
                className="z-10 lg:max-h-[480px]"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <motion.div className="w-[1200px] h-full mx-auto absolute text-white">
          <AnimatePresence>
            <motion.div
              className="text-center absolute -bottom-20 3xl:-bottom-40 left-0 right-0"
              initial={{ y: 0, opacity: 0.5 }}
              animate={"animate"}
              variants={headingVariant}
              exit={{
                opacity: 0,
                // y: -100,
                transition: { delay: 0, duration: 0.75 },
              }}
              transition={{
                ease: "easeIn",
                delay: titleTextDelayDuration,
                duration: 0.75,
              }}
              key={orderedGallery[0].type}
            >
              <motion.h2 className="-z-10 text-7xl sm:text-[128px] 3xl:text-[236px] text-white tracking-[0.3rem] capitalize">
                {orderedGallery[0].type}
              </motion.h2>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: -300 }}
          transition={{ delay: 1, duration: 0.75 }}
          className="px-12 flex justify-between space-x-12"
        >
          <Image
            src={orderedGallery[0].imageSrc}
            alt="s"
            width={1920}
            height={2880}
            className="max-w-sm max-h-[480px] object-cover"
          />

          <div className="pt-32">
            <Image
              src={orderedGallery[0].imageSrc}
              alt="s"
              width={1920}
              height={2880}
              className="max-w-sm max-h-[480px] object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default React.memo(AnimatedGallery);
