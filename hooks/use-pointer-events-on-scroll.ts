import { useEffect } from "react";

type Options = {
  location: any; // WindowLocation<unknown>
};

/**
 * Add pointer-events to certain
 * elements on scroll in order to smooth the experience.
 */
export default function usePointerEventsOnScroll({ location }: Options) {
  useEffect(() => {
    // Do not use this
    // trick on touch devices.

    return () => {};
  }, [location]);
}
