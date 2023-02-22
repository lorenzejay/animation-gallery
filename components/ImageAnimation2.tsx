import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ImageAnimation2 = ({
  showNumber,
  goingToNewPath,
  setGoingToNewPath,
  orderedGallery,
  n,
  i,
  isNextPressed,
  setIsNextPressed,
}: {
  showNumber: number;
  goingToNewPath: boolean;
  setGoingToNewPath: (x: boolean) => void;
  orderedGallery: any[];
  i: number;
  n: any;
  isNextPressed: boolean;
  setIsNextPressed: (x: boolean) => void;
}) => {
  console.log("n", i);
  console.log("n-showNumber", showNumber);

  const [animationType, setAnimationType] = useState("");
  const [exitType, setExitType] = useState("exitNext");
  // const AnimateBg =
  console.log("animationType", animationType);
  console.log("exitType", animationType);
  console.log("isNextPressed", isNextPressed);
  useEffect(() => {
    if (isNextPressed) {
      setAnimationType("exitNext");
    } else {
      setAnimationType("original");
    }
  }, [isNextPressed]);
  // useEffect(() => {
  //   if (showNumber) {
  //     console.log("showNumber", showNumber);
  //   }
  // }, [showNumber]);
  return (
    <motion.div
      id={`${i}`}
      className="absolute"
      onClick={() => setGoingToNewPath(true)}
      // onAnimationStart={(def) => }
      onAnimationStart={() => {
        if (goingToNewPath) {
          setExitType("exitNewPath");
          // setAnimationType("exitNewPath");
          console.log("going to new page");
        } else {
          setExitType("exitNext");
        }
      }}
      onAnimationComplete={() => {
        if (isNextPressed) {
          setAnimationType("exitNext");
        }
      }}
      initial={
        isNextPressed
          ? false
          : {
              x: n.initialX,
              opacity: 0,
              zIndex: orderedGallery.length - i,
            }
      }
      animate={animationType}
      // animate={
      //   animationType === "exitNewPath"
      //     ? {
      //         rotate: [-4, -4, 4],
      //         y: [0, 328],
      //         scale: [1, 1.6],
      //         // opacity: 1,
      //         transition: {
      //           delay: 0.5,
      //           duration: 1,
      //         },
      //       }
      //     : {
      //         opacity: [1, 1],
      //         x: 0,
      //         rotate: [0, 0, 0, 0, 0, i === 0 ? -10 : i * 2],
      //         transition: {
      //           delay: 1,
      //           duration: 1,
      //         },
      //       }
      // }
      // onViewportEnter={() => }
      transition={{ duration: 2 }}
      // exit={exitType}
      exit={{
        rotate: [i * 2, 0],
        opacity: [1, 1, 0],
        transition: { duration: 1, delay: 0 },
      }}
      variants={{
        original: {
          opacity: [0, 1],
          x: [n.initialX, 0],
          // x: 0,
          rotate: [0, 0, 0, 0, 0, 0, 0, 0, i === 0 ? -10 : i * 2],
          transition: {
            delay: 0.3,
            duration: 1,
          },
        },
        animateNewPath: {
          rotate: 0,
          y: [0, 328],
          scale: [1, 1.6],
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 1,
          },
        },
        exitNext: {
          // x: [n.initialX, 0],
          // z: orderedGallery.length - i,
          opacity: 1,
          rotate: [0, i * 2],
          transition: {
            delay: 0,
            duration: 0.4,
          },
          // z: orderedGallery.length - i,
        },
        // exitNext:
        //   showNumber
        //     ? {
        //         x: [0, 200],
        //         z: [100, 100, 100, 100, 0],
        //         // opacity: [1, 1, 0],
        //         rotate: [-4, 0, 4],
        //       }
        //     : {
        //         x: 0,
        //         rotate: i * 2,
        //         opacity: 1,
        //       },
        exitNewPath: {
          rotate: 0,
          opacity: 0,
          transition: {
            delay: 0.2,
            duration: 0.2,
          },
        },
      }}
      // key={`${orderedGallery[showNumber].type}-name`}
      key={`same-name`}
    >
      <Link
        href={orderedGallery[0].slug}
        onClick={() => setAnimationType("animateNewPath")}
      >
        <Image
          src={n.imageSrc}
          alt="dsadas"
          width={1920}
          height={2880}
          className="max-w-[200px] max-h-[250px] mx-auto md:max-w-xs md:max-h-[400px] xl:max-w-[350px] xl:max-h-[437px] 3xl:max-w-[690px] 3xl:max-h-[800px]"
        />
      </Link>
    </motion.div>
  );
};

export default ImageAnimation2;
