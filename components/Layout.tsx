import { motion } from "framer-motion";
import Head from "next/head";
import Script from "next/script";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactElement;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Script src="http://localhost:8097" />
      <div className="w-full h-screen relative">
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ background: "red" }}
          transition={{ delay: 0, duration: 2 }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default Layout;
