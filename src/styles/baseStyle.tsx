import theme, { sizeRangeStyle } from "./theme";

const css = String.raw;

export default css`
  /*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #__next {
    isolation: isolate;
    display: none;
    min-height: 100vh;
    flex-direction: column;
    height: auto;
    max-width: ${theme.breakpoints.maxWidth}px;
  }

  header {
    flex: 1;
    display: flex;
    background-color: ${theme.colors.primaryColor};
  }

  nav {
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.primaryBackground};
    font-size: ${sizeRangeStyle(16, 20)};
    line-height: ${sizeRangeStyle(16, 20)};
    text-transform: uppercase;
  }

  nav ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: ${sizeRangeStyle(40, 46)};
  }

  body {
    background-color: #000;
    color: ${theme.colors.primaryColor};
    font-family: "Times New Roman";
    touch-action: manipulation;
    font-size: 16px;
    min-width: ${theme.breakpoints.minWidth}px;
    max-width: ${theme.breakpoints.maxWidth}px;
    margin: 0 auto;
    display: block;
  }

  article {
    max-inline-size: 66ch;
    line-height: 1.65;
  }

  blockquote {
    max-inline-size: 45ch;
    line-height: 2;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  /* hide scrollbar but allow scrolling */
  body {
    -ms-overflow-style: none;
    /* for Internet Explorer, Edge */
    scrollbar-width: none;
    /* for Firefox */
    overflow-y: scroll;
  }

  body::-webkit-scrollbar {
    display: none;
    /* for Chrome, Safari, and Opera */
  }

  img {
    -webkit-touch-callout: none;
    pointer-events: none;
  }

  body {
    -webkit-touch-callout: none;
    /* iOS Safari */
    -webkit-user-select: none;
    /* Safari */
    -khtml-user-select: none;
    /* Konqueror HTML */
    -moz-user-select: none;
    /* Old versions of Firefox */
    -ms-user-select: none;
    /* Internet Explorer/Edge */
    user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }

  .heartbeat-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
  }

  .heartbeat {
    max-width: 50%;
    margin: 0 auto;
    background-repeat: no-repeat;
    width: auto; /*or your image's width*/
    height: auto; /*or your image's height*/
    margin: 0;
    padding: 0;
    animation: heartbeat 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  @keyframes heartbeat {
    0% {
      transform: scale(0.95);
    }
    5% {
      transform: scale(1.1);
    }
    39% {
      transform: scale(0.85);
    }
    45% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.9);
    }
  }

  @media not all and (min-resolution: 0.001dpcm) {
    img[loading="lazy"] {
      clip-path: inset(0.5px);
    }
  }
`;
