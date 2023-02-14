import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const ImageAnimation = ({
  n,
  i,
  ordered,
}: {
  n: any;
  i: number;
  ordered: any;
}) => {
  return (
    <AnimatePresence mode="wait">
      <Link href={`${n.slug}`} key={i}>
        <motion.div
          key={i}
          className={`absolute max-w-sm top-0 right-0 left-0 mx-auto`}
          initial={{
            x: n.initialX,

            opacity: 0.75,
            zIndex: ordered.length - i,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: i * 2,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          exit={{
            x: 200,
            transition: {
              duration: 0.5,
            },
          }}
        >
          <Image
            src={n.imageSrc}
            alt="s"
            width={1920}
            height={2880}
            className="max-w-[200px] max-h-[250px] mx-auto md:max-w-xs md:max-h-[400px] xl:max-w-[350px] xl:max-h-[437px] 3xl:max-w-none 3xl:max-h-[480px]"
          />
        </motion.div>
      </Link>
    </AnimatePresence>
  );
};

export default ImageAnimation;
