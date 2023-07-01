import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { useStore } from "../../lib/store";

import css from "./loader.module.css";

export const Loader = () => {
  const router = useRouter();
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const changeRouteComplete = () => {
      console.log("Page loaded");
      setPageLoaded(true);
    };

    setTimeout(changeRouteComplete, 2000);
    router.events.on("routeChangeComplete", changeRouteComplete);
    return () => {
      router.events.off("routeChangeComplete", changeRouteComplete);
    };
  }, []);

  return (
    <div className={clsx(css.container, pageLoaded && "-complete")}>
      <div style={{ fontFamily: "SkylarSans" }} className={css.inner}>
        Loading...
      </div>
    </div>
  );
};
