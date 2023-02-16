import { useEffect, useState } from "react";
import Head from "next/head";

import {
  AnimatePresence,
  motion,
  Reorder,
  useAnimationControls,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import Layout from "@/components/Layout";
import Link from "next/link";
import ImageAnimation from "@/components/ImageAnimation";
import { useAppDispatch, useAppState, useIsHomepage } from "@/utils/appReducer";
import Image from "next/image";

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;
export default function Home() {
  const { orderedGallery } = useAppState();

  // console.log("isHomepage", isHomepage);
  const dispatch = useAppDispatch();
  // const x = useMotionValue(0);
  // useMotionValueEvent(x, "change", (latest) => {
  //   console.log("x changed to", latest);
  // });
  const [titleTextDelayDuration, setTitleTextDelayDuration] = useState(1.5);
  const [testingAnimation, setTestingAnimation] = useState("");

  const animation1 = useAnimationControls();
  const animation2 = useAnimationControls();
  const animation3 = useAnimationControls();
  const animation4 = useAnimationControls();
  const animation5 = useAnimationControls();

  const [showNumber, setShowNumber] = useState(0);
  console.log("showNumber", showNumber);

  async function sequence5() {
    await animation5.start({ opacity: 1 });

    await animation5.start({ x: 0 });
    return await animation5.start({ rotate: 10 });
  }
  async function sequence1() {
    await animation1.start({ opacity: 1 });

    return await animation1.start({ x: 0 });
    // return await animation1.start({ rotate: 10 });
  }
  async function sequence2() {
    await animation2.start({ opacity: 1 });

    await animation2.start({ x: 0 });
    return await animation2.start({ rotate: -10 });
  }
  async function sequence3() {
    await animation3.start({ opacity: 1 });
    await animation3.start({ x: 0 });
    return await animation3.start({ rotate: 20 });
  }
  async function sequence4() {
    await animation4.start({ opacity: 1 });
    await animation4.start({ x: 0 });
    return await animation5.start({ rotate: -20 });
  }

  function moveToEnd() {
    const copyOrder = [...orderedGallery];
    copyOrder.push(copyOrder.shift() as any) as any;
    // copyOrder.shift();
    // @ts-ignore
    dispatch({ type: "GALLERY_REORDERED", reorderedGallery: [...copyOrder] });
    // setOrdered([...copyOrder]);
  }
  function reverseMove() {
    const copyOrder = [...orderedGallery];
    copyOrder.unshift(copyOrder.pop() as any) as any;
    // @ts-ignore
    dispatch({ type: "GALLERY_REORDERED", reorderedGallery: [...copyOrder] });
    // setOrdered([...copyOrder]);
  }
  const [exitTitleY, setExitTitleY] = useState(-100);
  const [exitTextVar, setTextVar] = useState("home");
  console.log("exitTitleY", exitTitleY);
  console.log("exitTextVar", exitTextVar);
  const [animateVar, setAnimateVar] = useState("animate1");

  useEffect(() => {
    if (exitTitleY <= -101) {
      return setTextVar("notHome");
    } else {
      return setTextVar("home");
    }
  }, [exitTitleY]);
  // const [showOne, setShowOne] = useState(false);
  return (
    // <AnimatePresence mode="wait">
    <motion.div
      className=""
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
          // opacity: 0.5,
          // transition: { duration: 0.2 },
        },
      }}
      animate={"animate"}
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Artist Studio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex items-center justify-center h-screen w-full text-white font-medium">
        <motion.div
          exit={{
            opacity: 0,
            transition: { duration: 1 },
          }}
          className="absolute left-12 text-xl lg:space-y-2"
        >
          {/* <AnimatePresence> */}
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.5,
            }}
            // exit={{ y: 200, opacity: 0 }}
          >
            0{showNumber + 1}
          </motion.div>
          <motion.div
            className="w-1 mx-auto h-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.5,
            }}
          >
            <motion.div
              className=""
              key={"showNumber"}
              initial={"initial"}
              animate={"animate"}
              // custom={(showNumber / 5) * 100 }
              transition={{
                duration: 0.5,
                // delay: 1.5,
                type: "spring",
              }}
              exit={{
                opacity: 0,
                transition: {
                  delay: 1.5,
                  duration: 1,
                },
              }}
              variants={{
                initial: {
                  height: `${((showNumber + 1) / 5) * 100}%`,
                  background: "transparent",
                },
                animate: () => ({
                  height: `${((showNumber + 1) / 5) * 100}%`,
                  background: "#ffffff",
                }),
              }}
            ></motion.div>
          </motion.div>
          {/* <div>{showNumber + 1}</div> */}
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.5,
            }}
          >
            05
          </motion.div>
          {/* </AnimatePresence> */}
        </motion.div>
        <motion.div
          key={"container-home"}
          className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/4 lg:w-[800px] h-[50vh] space-y-12 md:space-y-0 mx-auto absolute text-white"
        >
          {/* <AnimatePresence> */}
          <motion.button
            key={"prev-btn"}
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: 200,
              transition: { duration: 0.65, delay: 1 },
            }}
            transition={{ delay: 1.5 }}
            onClick={() => {
              setShowNumber((prev) => {
                if (prev === 0) return prev;

                // prev - 1;
                reverseMove();
                return prev - 1;
              });
            }}
          >
            <motion.div className="uppercase text-lg lg:text-3xl font-thin tracking-[0.2rem]">
              prev
            </motion.div>
            <motion.div className="border-t-2 w-4 lg:w-16"></motion.div>
          </motion.button>
          {/* </AnimatePresence> */}
          <motion.div
            key={"gallery-container"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // exit={{ rotate }}
            transition={{ duration: 0.75 }}
            className="relative h-[50vh] w-1/2 flex items-center justify-center flex-grow"
          >
            {/* {orderedGallery.map((n, i) => {
                  return (
                    <ImageAnimation
                      animateVar={animateVar}
                      n={n}
                      i={i}
                      ordered={orderedGallery}
                      key={i}
                    />
                  );
                })} */}

            {/* <AnimatePresence mode="wait"> */}
            {/* {showOne ? (
              <motion.div
                initial={{
                  rotate: -10,
                  x: orderedGallery[0].initialX,

                  opacity: 0.75,
                  zIndex: orderedGallery.length - 1,
                }}
                animate={{ rotate: 0, transition: { duration: 0.3 } }}
                className="relative h-[50vh] w-1/2 flex items-center justify-center flex-grow"
              >
                <Image
                  src={orderedGallery[0].imageSrc}
                  alt="s"
                  width={1920}
                  height={2880}
                  className="max-w-[200px] max-h-[250px] mx-auto md:max-w-xs md:max-h-[400px] xl:max-w-[350px] xl:max-h-[437px] 3xl:max-w-none 3xl:max-h-[480px]"
                />
              </motion.div>
            ) : (
              <>
                {orderedGallery.map((n, i) => {
                  return (
                    <ImageAnimation
                      animateVar={animateVar}
                      n={n}
                      i={i}
                      ordered={orderedGallery}
                      key={i}
                    />
                  );
                })}
              </>
            )} */}
            {orderedGallery.map((n, i) => {
              return (
                <ImageAnimation
                  animateVar={animateVar}
                  n={n}
                  i={i}
                  ordered={orderedGallery}
                  key={i}
                  setExitTitleY={setExitTitleY}
                />
              );
            })}
            {/* </AnimatePresence> */}
          </motion.div>
          {/* <AnimatePresence mode="sync"> */}
          <motion.button
            key={"next-btn"}
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: 200,
              transition: { duration: 0.65, delay: 1 },
            }}
            transition={{ delay: 1.5 }}
            onClick={() => {
              setTitleTextDelayDuration(0.1);
              // setTestingAnimation("bringToFront");
              setShowNumber((prev) => {
                if (prev === orderedGallery.length - 1) {
                  return prev;
                }
                moveToEnd();
                // setAnimateVar("slideOut");
                // setShowOne(true);
                return prev + 1;
              });
            }}
          >
            <motion.div className="border-t-2 w-4 lg:w-16"></motion.div>
            <div className="uppercase text-xl lg:text-3xl font-thin tracking-[0.2rem] md:mr-32">
              Next
            </div>
          </motion.button>
          {/* </AnimatePresence> */}
        </motion.div>

        {/* <AnimatePresence mode="wait"> */}
        <motion.div
          className="absolute -bottom-6 md:-bottom-12 lg:-bottom-10 xl:-bottom-14 2xl:-bottom-24 3xl:-bottom-40 "
          initial={exitTextVar === "home" ? { opacity: 0 } : { y: 0 }}
          animate={{
            y: 0,
            opacity: 0.5,
          }}
          exit={exitTextVar}
          variants={{
            home: {
              y: -100,
              opacity: 0.5,
            },
            notHome: {
              opacity: [0.5, 1],
              y: [0, exitTitleY],
              transition: {
                duration: 1,
                delay: 0.5,
                from: -100,
              },
            },
          }}
          transition={{ delay: titleTextDelayDuration }}
          key={`${orderedGallery[0].type}${exitTitleY < -100 && exitTitleY}`}
        >
          <motion.h2 className="z-[200] text-7xl sm:text-[128px] 2xl:text-[236px] text-white tracking-[0.3rem] capitalize">
            {orderedGallery[0].type}
          </motion.h2>
        </motion.div>
        {/* </AnimatePresence> */}
      </main>
    </motion.div>
    // </AnimatePresence>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
