import { useAppDispatch, useAppState } from "@/utils/appReducer";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect } from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactElement;
}
const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { orderedGallery } = useAppState();

  // useEffect(() => {
  //   console.log("router", router);
  //   if (router.pathname === "/") {
  //     dispatch({ type: "IS_HOMEPAGE", isHomepage: true });
  //   } else {
  //     dispatch({ type: "IS_HOMEPAGE", isHomepage: false });
  //   }
  //   // const first = orderedGallery.find(
  //   //   (gallery) => gallery.slug === router.pathname.toLowerCase()
  //   // );
  //   // if (first) {
  //   //   dispatch({ type: "PAGE_GALLERY", selectedGallery: first });
  //   // }
  // }, [router, dispatch]);
  return (
    <>
      <Script src="http://localhost:8097" />
      <div className="w-full h-screen relative">
        <Header />
        <motion.div
          // initial={{ x: 300, opacity: 1 }}
          // animate={{ x: 0, opacity: 1 }}
          // exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            duration: 0.1,
            // stiffness: 260,
            // damping: 20,
          }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default Layout;
