import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <AnimatePresence initial={false} mode="wait">
      <Component {...pageProps} />
    </AnimatePresence>
  );
}
