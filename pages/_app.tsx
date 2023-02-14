import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { AppStateProvider } from "@/utils/appReducer";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);
  //wrapper app state provider
  return getLayout(
    <AppStateProvider>
      {/* <Layout> */}
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
      {/* </Layout> */}
    </AppStateProvider>
  );
}
