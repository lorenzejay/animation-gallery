import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
const Header = () => {
  const navControl = useAnimationControls();
  // useEffect(() => {
  //   // console.log("re-rendered nav");
  //   navControl.start({ opacity: 1, y: 0 });
  //   // if(router)
  // }, [navControl]);
  return (
    <motion.nav
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      viewport={{ once: true }}
      className="absolute w-full text-white "
    >
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-12 3xl:px-0 flex items-center justify-between">
        <div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ y: 150 }}
            animate={{ y: 0 }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 8l16 0"></path>
            <path d="M4 16l16 0"></path>
          </motion.svg>
        </div>
        <motion.div
          initial={{ y: 150 }}
          animate={{ y: 0 }}
          className="uppercase text-3xl lg:text-5xl italic tracking-[0.2rem]"
        >
          untitled 001
        </motion.div>
        <div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-instagram"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ y: 150 }}
            animate={{ y: 0 }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M16.5 7.5l0 0"></path>
          </motion.svg>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
