import CustomHead, { SEOProps } from "../../components/custom-head";
import clsx from "clsx";
import dynamic from "next/dynamic";
import { useViewportObserver } from "../../hooks/use-viewport";
import css from "./layout.module.css";
import { Loader } from "../../components/loader";

const Cursor: any = dynamic(
  () => import("../../components/cursor").then(({ Cursor }) => Cursor),
  { ssr: false }
);

const LenisSmoothScroll: any = dynamic(
  () =>
    import("../../components/scroll").then(
      ({ LenisSmoothScroll }) => LenisSmoothScroll
    ),
  {
    ssr: false,
  }
);

type LayoutProps = {
  seo?: SEOProps;
  className?: string;
};

export default function Layout({
  seo = {
    description: "Abba Sali Aboubakar Mamate",
    title: "Abba Sali Aboubakar Mamate",
  },
  children,
  className,
}: React.PropsWithChildren<LayoutProps>) {
  useViewportObserver();
  return (
    <>
      <CustomHead {...seo} />
      <Cursor />
      <Loader />
      <LenisSmoothScroll />
      <div className={clsx(css.container, className)}>
        <main>{children}</main>
      </div>
    </>
  );
}
