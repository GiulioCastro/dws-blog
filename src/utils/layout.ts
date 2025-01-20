import { breakpoints } from "@/themes";

export const getIsMobile = (): boolean =>
  window.matchMedia(`(max-width: ${breakpoints.md}px)`).matches;
