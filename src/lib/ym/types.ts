export type YmInitOptions = {
  clickmap?: boolean;
  trackLinks?: boolean;
  accurateTrackBounce?: boolean;
  webvisor?: boolean;
  defer?: boolean;
};

export type YmHitOptions = {
  callback?: () => void;
  ctx?: any;
  params?: YmReachGoalParams;
  referer?: string;
  title?: string;
};

export type YmReachGoalParams = {
  order_price?: number;
  currency?: string;
};

type Ym = (...args: any[]) => void;

declare global {
  interface Window {
    ym: Ym;
    YM_TRACKING_ID: number;
  }
}
