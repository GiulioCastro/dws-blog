import { breakpoints } from "@/themes";
import { useState } from "react";

export function useMatchMedia(
  breakpoint: keyof typeof breakpoints = "md"
): boolean {
  const [matches, setMatches] = useState(false);

  const mediaQuery = window.matchMedia(
    `(max-width: ${breakpoints[breakpoint]}px)`
  );

  mediaQuery.addEventListener("change", () => setMatches(mediaQuery.matches));

  return matches;
}
