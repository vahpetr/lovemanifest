import { useEffect } from "react";
import { useYm } from "./hook";
import { Router as router } from "next/router";
import { YmInitOptions } from "./types";

export interface YmInitializerProps {
  options: YmInitOptions;
}

export function YmInitializer({ options }: YmInitializerProps) {
  const { init, hit } = useYm();

  useEffect(() => {
    init(options);

    hit();

    const handler = (url: string) => hit(url);

    router.events.on("routeChangeComplete", handler);
    router.events.on("hashChangeComplete", handler);

    return () => {
      router.events.off("routeChangeComplete", handler);
      router.events.off("hashChangeComplete", handler);
    };
  }, [options, init, hit]);

  return null;
}
