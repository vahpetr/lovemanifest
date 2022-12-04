import { useRef } from "react";
import { ym, ymInit } from "./core";
import { YmHitOptions, YmInitOptions, YmReachGoalParams } from "./types";

export function useYm() {
  const prevUrl = useRef("");

  // https://yandex.ru/support/metrica/objects/method-reference.html
  // TODO rewrite to window[`yaCounter${window.YM_TRACKING_ID}`]
  return {
    init: (options: YmInitOptions) => {
      ymInit(window.YM_TRACKING_ID, options);
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

      ym(window.YM_TRACKING_ID, "hit", url, options);

      prevUrl.current = url;
    },
    reachGoal: (
      target: string,
      params?: YmReachGoalParams,
      callback?: () => void,
      ctx?: any
    ) => {
      ym(window.YM_TRACKING_ID, "reachGoal", target, params, callback, ctx);
    },
  };
}
