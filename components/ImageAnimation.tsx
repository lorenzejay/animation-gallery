import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

const ImageAnimation = ({
  n,
  i,
  ordered,
}: {
  n: any;
  i: number;
  ordered: any;
}) => {
  console.log("n", n);

  return (
    <motion.div
      key={n}
      className={`absolute max-w-sm top-0 right-0 left-0 `}
      initial={{
        ...n?.initial,
        opacity: 1,
        zIndex: ordered.length - i,
      }}
      animate={n.animation}
      custom={ordered.length - i}
      // variants={variants}
      onViewportEnter={n.sequence}
      transition={n?.transition}
      exit={{
        opacity: 0,
        x: 200,
        transition: {
          duration: 2,
        },
      }}
    >
      <Link href={`${n.slug}`} key={i}>
        <Image
          src={n.imageSrc}
          alt="s"
          width={1920}
          height={2880}
          className="max-h-[480px]"
        />
      </Link>
    </motion.div>
  );
};

export default ImageAnimation;
