import { YmInitOptions } from "./types";
import ymLoader from "./loader";

const notBrowser =
  typeof window === "undefined" || typeof document === "undefined";

export function ymInit(
  trackingId?: number | string,
  options: YmInitOptions = {}
) {
  if (notBrowser || !trackingId) return;

  if (typeof window.ym === "undefined") {
    ymLoader();
  }

  window.ym(trackingId, "init", options);
}

export function ym(...args: any[]) {
  if (notBrowser || !args[0]) return;

  if (typeof window.ym === "undefined") {
    return console.warn(
      "ymInit must be called first or Yandex.Metrika should be loaded manually"
    );
  }

  return window.ym(...args);
}
