import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  ${reset}

  /* tt-espina-black - latin */
  @font-face {
    font-family: 'TT Espina';
    font-style: normal;
    font-weight: 900;
    src: url('../fonts/tt-espina-v1-latin/tt-espina-v1-latin-black.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/tt-espina-v1-latin/tt-espina-v1-latin-black.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/tt-espina-v1-latin/tt-espina-v1-latin-black.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/tt-espina-v1-latin/tt-espina-v1-latin-black.woff') format('woff'), /* Modern Browsers */
        url('../fonts/tt-espina-v1-latin/tt-espina-v1-latin-black.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/tt-espina-v1-latin/tt-espina-v1-latin-black.svg#Roboto') format('svg'); /* Legacy iOS */
    font-display: swap;
  }

  // https://google-webfonts-helper.herokuapp.com/fonts/roboto?subsets=cyrillic,latin
  /* roboto-regular - latin_cyrillic */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/roboto-v30-latin_cyrillic/roboto-v30-latin_cyrillic-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/roboto-v30-latin_cyrillic/roboto-v30-latin_cyrillic-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/roboto-v30-latin_cyrillic/roboto-v30-latin_cyrillic-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/roboto-v30-latin_cyrillic/roboto-v30-latin_cyrillic-regular.woff') format('woff'), /* Modern Browsers */
        url('../fonts/roboto-v30-latin_cyrillic/roboto-v30-latin_cyrillic-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/roboto-v30-latin_cyrillic/roboto-v30-latin_cyrillic-regular.svg#Roboto') format('svg'); /* Legacy iOS */
    font-display: swap;
  }

  // https://google-webfonts-helper.herokuapp.com/fonts/noto-serif?subsets=cyrillic,latin
  /* noto-serif-regular - latin_cyrillic */
  @font-face {
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/noto-serif-v21-latin_cyrillic/noto-serif-v21-latin_cyrillic-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/noto-serif-v21-latin_cyrillic/noto-serif-v21-latin_cyrillic-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/noto-serif-v21-latin_cyrillic/noto-serif-v21-latin_cyrillic-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/noto-serif-v21-latin_cyrillic/noto-serif-v21-latin_cyrillic-regular.woff') format('woff'), /* Modern Browsers */
        url('../fonts/noto-serif-v21-latin_cyrillic/noto-serif-v21-latin_cyrillic-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/noto-serif-v21-latin_cyrillic/noto-serif-v21-latin_cyrillic-regular.svg#NotoSerif') format('svg'); /* Legacy iOS */
    font-display: swap;
  }

  // https://google-webfonts-helper.herokuapp.com/fonts/inter?subsets=cyrillic,latin
  /* inter-regular - latin_cyrillic */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-regular.woff') format('woff'), /* Modern Browsers */
        url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-regular.svg#Inter') format('svg'); /* Legacy iOS */
    font-display: swap;
  }
  /* inter-500 - latin_cyrillic */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    src: url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-500.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-500.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-500.woff') format('woff'), /* Modern Browsers */
        url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-500.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-500.svg#Inter') format('svg'); /* Legacy iOS */
    font-display: swap;
  }

  /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    /* line-height: 1.5; */
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #__next {
    isolation: isolate;
    min-height: 100vh;
  }

  /*
    Experimental path! In this article https://www.joshwcomeau.com/css/custom-css-reset/#digit-tweaking-line-height, the author also suggests this other option:
  */
  * {
    line-height: calc(1em + 0.5rem);
  }

  body {
    background: ${({ theme }) => theme.colors.primaryBackground};
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: Roboto, sans-serif;
    touch-action: manipulation;
    font-size: 100%;
    font-size: calc(16px + 0.390625vw);
    font-size: clamp(1rem, 0.75rem + 1.5vw, 2rem);
    line-height: calc(2px + 2ex + 2px);
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

      &:hover {
        text-decoration: underline;
      }
  }

  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  /* hide scrollbar but allow scrolling */
  body {
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
  }

  body::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  img {
    -webkit-touch-callout: none;
    pointer-events: none;
  }

  body {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }
`
