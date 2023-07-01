import "../styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return <Component {...pageProps} />;
  }
}
