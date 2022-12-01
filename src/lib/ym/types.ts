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
  params?: {
    order_price?: number;
    currency?: string;
  };
  referer?: string;
  title?: string;
};

type Ym = (...args: any[]) => void;

declare global {
  interface Window {
    ym: Ym;
  }
}
