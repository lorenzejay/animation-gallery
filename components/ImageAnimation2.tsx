import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ImageAnimation2 = ({
  showNumber,
  goingToNewPath,
  setGoingToNewPath,
  orderedGallery,
}: {
  showNumber: number;
  goingToNewPath: boolean;
  setGoingToNewPath: (x: boolean) => void;
  orderedGallery: any[];
}) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        onClick={() => setGoingToNewPath(true)}
        initial={{ x: 0, opacity: 0 }}
        animate={
          goingToNewPath
            ? {
                rotate: [4, 4, 0],
                y: [0, 328],
                scale: [1, 1.6],
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 1,
                },
              }
            : {
                opacity: [0, 0.3, 1],
                rotate: [0, 0, 4],
                transition: { duration: 1 },
              }
        }
        transition={{ duration: 2 }}
        exit={goingToNewPath ? "exitNewPath" : "exitNext"}
        variants={{
          exitNext: {
            x: 200,
            opacity: [1, 1, 0],
            rotate: [0, 0, 100],
          },
          exitNewPath: {
            rotate: 0,
            transition: {
              delay: 0.5,
            },
          },
        }}
        key={`${orderedGallery[showNumber].type}-name`}
      >
        <Link href={orderedGallery[0].slug}>
          <Image
            src={orderedGallery[0].imageSrc}
            alt="dsadas"
            width={1920}
            height={2880}
            className="max-w-[200px] max-h-[250px] mx-auto md:max-w-xs md:max-h-[400px] xl:max-w-[350px] xl:max-h-[437px] 3xl:max-w-[690px] 3xl:max-h-[800px]"
          />
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageAnimation2;
