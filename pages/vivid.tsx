import AnimatedGallery from "@/components/AnimatedGallery";
import ImageAnimation from "@/components/ImageAnimation";
import Layout from "@/components/Layout";
import {
  useAppDispatch,
  useAppState,
  useIsHomepage,
  usePageGallery,
} from "@/utils/appReducer";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Vivid = () => {
  const [titleTextDelayDuration, setTitleTextDelayDuration] = useState(0.5);
  const { orderedGallery } = useAppState();
  const isHomepage = useIsHomepage();
  const dispatch = useAppDispatch();

  // function moveToEnd() {
  //   const copyOrder = [...orderedGallery];
  //   copyOrder.push(copyOrder.shift() as any) as any;
  //   dispatch({ type: "GALLERY_REORDERED", reorderedGallery: [...copyOrder] });
  //   // setOrdered([...copyOrder]);
  // }
  // function reverseMove() {
  //   const copyOrder = [...orderedGallery];
  //   copyOrder.unshift(copyOrder.pop() as any) as any;
  //   dispatch({ type: "GALLERY_REORDERED", reorderedGallery: [...copyOrder] });
  //   // setOrdered([...copyOrder]);
  // }
  const router = useRouter();

  useEffect(() => {
    const findVividIndex = orderedGallery.findIndex(
      (g) => g.slug === router.pathname
    );

    const newOrder = [...orderedGallery];
    newOrder[0] = newOrder.splice(findVividIndex, 1, newOrder[0])[0];
    // newOrder.splice(0, 0, orderedGallery[findVividIndex]);
    if (newOrder) {
      // @ts-ignore
      dispatch({ type: "GALLERY_REORDERED", reorderedGallery: newOrder });
    }
  }, [dispatch, router.pathname]);

  return (
    <div className="overflow-hidden">
      <AnimatedGallery orderedGallery={orderedGallery} />
      {/* <motion.div
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
            <motion.div className="h-screen relative  w-full flex items-center justify-center ">
              <motion.div
                key={orderedGallery[0].name}
                className={`max-w-sm `}
                initial={{
                  opacity: 1,
                  // y: -40,
                  scale: 1,
                }}
                animate={{
                  y: 275,
                  x: 0,
                }}
                transition={{
                  duration: 0.75,
                  delay: 0.5,
                }}
              >
                <Image
                  src={orderedGallery[0].imageSrc}
                  alt="s"
                  width={1920}
                  height={2880}
                  className="max-h-[480px]"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <motion.div className="w-[1200px] h-full mx-auto absolute text-white">
            <AnimatePresence>
              <motion.div
                className="text-center absolute -bottom-40 left-0 right-0"
                initial={{ y: 0, opacity: 0.5 }}
                animate={{
                  y: -550,
                  opacity: 1,
                }}
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
                <motion.h2 className="text-[236px] text-white tracking-[0.3rem] capitalize">
                  {orderedGallery[0].type}
                </motion.h2>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: -250 }}
          transition={{ delay: 0.5, duration: 0.75 }}
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
      </motion.div> */}
    </div>
  );
};

Vivid.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
export default Vivid;
