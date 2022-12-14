import { SVGProps } from "react";

export interface TelegramIconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
}

export default function TelegramIcon({
  width = 24,
  height = 24,
  color = "#0B1734",
  backgroundColor = "#C9C5BA",
  ...svgProps
}: TelegramIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      fill="none"
      {...svgProps}
    >
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        fill={color}
      />
      <path
        d="M6.85647 11.8028C6.85647 11.8028 11.3146 9.90614 12.8608 9.23828C13.4535 8.97116 15.4635 8.11631 15.4635 8.11631C15.4635 8.11631 16.3912 7.74234 16.3139 8.65058C16.2881 9.02459 16.082 10.3335 15.8758 11.7494C15.5666 13.7529 15.2316 15.9434 15.2316 15.9434C15.2316 15.9434 15.18 16.5578 14.742 16.6647C14.3039 16.7715 13.5823 16.2907 13.4535 16.1838C13.3504 16.1037 11.5208 14.9016 10.8508 14.3139C10.6704 14.1536 10.4642 13.833 10.8765 13.459C11.8042 12.5775 12.9123 11.4822 13.5823 10.7877C13.8916 10.4671 14.2008 9.71914 12.9123 10.6274C11.0827 11.9364 9.27882 13.1652 9.27882 13.1652C9.27882 13.1652 8.86649 13.4323 8.09341 13.1919C7.3203 12.9515 6.41836 12.6309 6.41836 12.6309C6.41836 12.6309 5.79993 12.2302 6.85647 11.8028Z"
        fill={backgroundColor}
      />
    </svg>
  );
}
