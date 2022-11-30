const theme = {
  colors: {
    primaryBackground: "#C9C5BA",
    primaryColor: "#0b1734",
    secondaryColor: "#0B1734",
  },
  rows: {
    odd: "#0B1734",
    event: "#C9C5BA",
  },
  fontSizes: {
    small: "1rem",
    medium: "1.5rem",
    large: "2.rem",
  },
  margins: {
    dynamic: "clamp(4px, 0.85rem , 6px)",
  },
  defaults: {
    fontFamily: "Roboto",
    posterUrl: "/icons/maskable_icon_x512.png",
  },
  breakpoints: {
    values: {
      mobile: 600,
    },
    minWidth: 320,
    maxWidth: 1536,
  },
};

export default theme;

export const sizeRangeStyle = (min: number, max: number) => {
  return `clamp(${min}px, ${min}px + (${max} - ${min}) * ((100vw - ${theme.breakpoints.minWidth}px) / (${theme.breakpoints.maxWidth} - ${theme.breakpoints.minWidth})), ${max}px)`;
};

export const sizeRangeValue = (min: number, max: number, width: number) => {
  const val =
    min +
    (max - min) *
      ((width - theme.breakpoints.minWidth) /
        (theme.breakpoints.maxWidth - theme.breakpoints.minWidth));
  return Math.min(Math.max(val, min), max);
};
