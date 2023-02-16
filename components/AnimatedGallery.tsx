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
  const [windowSize, setWindowSize] = useState(0);
  const animation = useAnimationControls();
  async function sequence(y: number) {
    await animation.start({ rotate: 0 });
    await animation.start({ scale: 2 });

    return animation.start({ y });
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

  const [titleTextDelayDuration, setTitleTextDelayDuration] = useState(0.5);
  const variants =
    windowSize > 1024
      ? {
          animate: {
            y: 275,
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
  const headingVariant =
    windowSize > 1024
      ? {
          animate: {
            y: -750,
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
    // <AnimatePresence mode="wait">
    <motion.div
      className="overflow-x-hidden"
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
          transition: { duration: 0.75 },
        },
      }}
      animate={"animate"}
      exit="exit"
      transition={{ duration: 0.1 }}
    >
      <div className="relative flex justify-center items-center">
        <AnimatePresence>
          <motion.div className="pt-32 lg:pt-0 h-screen relative  w-full flex items-center justify-center ">
            <div
              key={orderedGallery[0].name}
              className={`max-w-sm mt-auto`}
              // initial={{
              //   // y: -800,
              //   opacity: 1,
              //   // y: -40,
              //   scale: 1.3,
              // }}
              // onViewportEnter={() => sequence(variants.animate.y)}
              // animate="animate"
              // variants={variants}
              // transition={
              //   {
              //     // duration: 0.75,
              //     // delay: 0.5,
              //   }
              // }
            >
              <Image
                src={orderedGallery[0].imageSrc}
                alt="s"
                width={1920}
                height={2880}
                className="scale-[1.3] z-10 max-w-[200px] max-h-[250px] mx-auto md:max-w-xs md:max-h-[400px] xl:max-w-[350px] xl:max-h-[437px] 3xl:max-w-none 3xl:max-h-[480px]"
              />
            </div>
          </motion.div>
        </AnimatePresence>
        <motion.div className="w-[1200px] h-full mx-auto absolute text-white">
          {/* <AnimatePresence> */}
          <div
            // className="text-center absolute -bottom-6 md:-bottom-12 lg:-bottom-10 xl:-bottom-14 2xl:-bottom-24 3xl:-bottom-40 left-0 right-0"
            className="text-center absolute -bottom-6 md:-bottom-12 lg:-bottom-10 xl:-bottom-14 2xl:top-32 3xl:-bottom-40 left-0 right-0"
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
      <AnimatePresence mode="sync">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: -300 }}
          transition={{ duration: 0.75 }}
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
    // </AnimatePresence>
  );
};

export default AnimatedGallery;
