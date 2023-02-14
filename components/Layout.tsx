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
  //   const first = orderedGallery.find(
  //     (gallery) => gallery.slug === router.pathname.toLowerCase()
  //   );
  //   if (first) {
  //     dispatch({ type: "PAGE_GALLERY", selectedGallery: first });
  //   }
  // }, [dispatch, orderedGallery, router.pathname]);
  return (
    <>
      <Script src="http://localhost:8097" />
      <div className="w-full h-screen relative">
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ background: "red", opacity: 0, transition: { duration: 5 } }}
          transition={{ delay: 0, duration: 2 }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default React.memo(Layout);
