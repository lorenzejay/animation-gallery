import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { AppStateProvider } from "@/utils/appReducer";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  // @ts-ignore
  const getLayout = Component.getLayout ?? ((page) => page);
  //wrapper app state provider
  return getLayout(
    <AppStateProvider>
      {/* <Layout> */}
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
      {/* </Layout> */}
    </AppStateProvider>
  );
}
