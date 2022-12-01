import { useRef } from "react";
import { ym, ymInit } from "./core";
import { YmHitOptions, YmInitOptions } from "./types";

export const YM_TRACKING_ID = process.env.YM_TRACKING_ID
// export const YM_TRACKING_ID = 91457067

export function useYm() {
  const prevUrl = useRef("");

  return {
    init: (options: YmInitOptions) => {
      ymInit(YM_TRACKING_ID, options);
    },
    hit: (url?: string, options?: YmHitOptions) => {
      url =
        url ||
        window.location.pathname +
          window.location.search +
          window.location.hash;

      options = options || {};

      if (!options.referer && prevUrl.current) {
        options.referer = prevUrl.current;
      }

      ym(YM_TRACKING_ID, "hit", url, options);

      prevUrl.current = url;
    },
    method: (name: string, ...other: any[]) => {
      ym(YM_TRACKING_ID, name, ...other);
    },
  };
}
