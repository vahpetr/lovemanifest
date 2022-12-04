import { useEffect } from "react";
import { useYm } from "./hook";
import { Router } from "next/router";
import { YmInitOptions } from "./types";

export interface YmInitializerProps {
  options: YmInitOptions;
}

export function YmInitializer({ options }: YmInitializerProps) {
  const { init, hit, reachGoal } = useYm();

  useEffect(() => {
    init(options);

    hit();

    // TODO bug
    // const onUrlChangeHandler = (url: string) => hit(url);

    // Router.events.on("routeChangeComplete", onUrlChangeHandler);
    // Router.events.on("hashChangeComplete", onUrlChangeHandler);

    const onAppinstalledHandler = () => reachGoal("appinstalled");

    window.addEventListener("appinstalled", onAppinstalledHandler);

    return () => {
      // Router.events.off("routeChangeComplete", onUrlChangeHandler);
      // Router.events.off("hashChangeComplete", onUrlChangeHandler);

      window.removeEventListener("appinstalled", onAppinstalledHandler);
    };
  }, [options, init, hit, reachGoal]);

  return null;
}
