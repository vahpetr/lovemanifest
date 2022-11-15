import { useEffect, useState } from "react"


export interface WindowSize {
  width?: number,
  height?: number,
}

export default function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined
  });

  // useEffect(() => {
  //   console.log(windowSize);
  // }, [windowSize]);

  useEffect(() => {
    function resizeHandler() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    if (typeof window !== 'undefined') {

      window.addEventListener("resize", resizeHandler);

      resizeHandler();

      return () => window.removeEventListener("resize", resizeHandler);
    }
  }, []);

  return windowSize;
};
