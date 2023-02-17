import React, { useEffect, useState } from "react";
import {
  animate,
  AnimatePresence,
  motion,
  useAnimationControls,
} from "framer-motion";
import Image from "next/image";
import {
  useIsLarge,
  useIsMedium,
  useIsSmall,
  useMediaQuery,
} from "@/utils/useMedia";

const AnimatedGallery = ({ orderedGallery }) => {
  const [canOverflow, setCanOverflow] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
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
    function trackDidScroll(e) {
      console.log("e.delta", e.deltaY);
      if (e.delate !== 0) {
        setCanOverflow(true);
      }
    }
    document.addEventListener("wheel", trackDidScroll);
  }, [canOverflow]);

  console.log("canOverflow", canOverflow);

  const [titleTextDelayDuration, setTitleTextDelayDuration] = useState(0.5);
  const variants =
    windowSize > 2000
      ? {
          animate: {
            y: -800,
            rotate: 0,
          },
        }
      : windowSize > 1024
      ? {
          animate: {
            y: 10,
            rotate: 0,
          },
        }
      : windowSize > 724
      ? {
          animate: {
            y: 100,
            rotate: 0,
          },
        }
      : {
          animate: {
            y: 50,
            rotate: 0,
          },
        };
  // const headingVariant =
  //   windowSize > 1024
  //     ? {
  //         animate: {
  //           y: -750,
  //           opacity: 1,
  //         },
  //       }
  //     : windowSize > 724
  //     ? {
  //         animate: {
  //           y: -650,
  //           opacity: 1,
  //         },
  //       }
  //     : {
  //         animate: {
  //           y: -700,
  //           opacity: 1,
  //         },
  //       };

  return (
    <motion.div
      className={`${canOverflow ? "max-auto" : "max-h-screen"}`}
      style={{ background: orderedGallery[0].background }}
      variants={{
        initial: {
          background: orderedGallery[0].background,
        },
        animate: {
          background: orderedGallery[0].background,
        },
        exit: {
          opacity: 0,
          transition: { duration: 0.25 },
        },
      }}
      animate={"animate"}
      exit="exit"
      transition={{ duration: 0.1 }}
    >
      <div className={`relative flex justify-center items-center `}>
        {/* <AnimatePresence> */}
        <div className="pt-32 lg:pt-0 h-screen relative  w-full flex items-center justify-center ">
          <motion.div
            key={orderedGallery[0].name}
            className={`max-w-sm mt-auto z-10`}
            initial={{
              // y: -800,
              opacity: 1,
              // y: -40,
              // scale: 1.3,
            }}
            // onViewportEnter={() => sequence(variants.animate.y)}
            animate="animate"
            variants={variants}
            transition={
              {
                // duration: 0.75,
                // delay: 0.5,
              }
            }
          >
            <Image
              src={orderedGallery[0].imageSrc}
              alt="s"
              width={1920}
              height={2880}
              className="scale-[1.6] z-10 max-w-[200px] max-h-[250px] mx-auto md:max-w-xs md:max-h-[400px] xl:max-w-[350px] xl:max-h-[437px] 3xl:max-h-[480px]"
            />
          </motion.div>
        </div>
        {/* </AnimatePresence> */}
        <motion.div className="w-[1200px] h-full mx-auto absolute text-white">
          {/* <AnimatePresence> */}
          <div
            // className="text-center absolute -bottom-6 md:-bottom-12 lg:-bottom-10 xl:-bottom-14 2xl:-bottom-24 3xl:-bottom-40 left-0 right-0"
            className="z-[100] text-center absolute top-32 md:-bottom-12 lg:-bottom-10 xl:-bottom-14 2xl:top-32 3xl:top-[17%] left-0 right-0"
            // initial={{ y: 0, opacity: 0.5 }}
            // animate={"animate"}
            // variants={headingVariant}
            // exit={{
            //   opacity: 0,
            //   // y: -100,
            //   transition: { delay: 0, duration: 0.75 },
            // }}
            // transition={{
            //   // delay: titleTextDelayDuration,
            //   duration: 1,
            // }}
            // key={orderedGallery[0].type}
          >
            <motion.h2 className="z-[-100] text-7xl sm:text-[128px] 2xl:text-[236px] 3xl:text-[236px] text-white tracking-[0.3rem] capitalize">
              {orderedGallery[0].type}
            </motion.h2>
          </div>
          {/* </AnimatePresence> */}
        </motion.div>
      </div>
      {/* <AnimatePresence> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -500 }}
        transition={{ duration: 0.35, delay: 0 }}
        className="px-12 flex justify-between space-x-12 3xl:max-w-[2200px] mx-auto"
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
      {/* </AnimatePresence> */}
    </motion.div>
  );
};

export default AnimatedGallery;
