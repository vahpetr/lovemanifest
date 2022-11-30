import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* https://google-webfonts-helper.herokuapp.com/fonts/inter?subsets=cyrillic,latin */
/* inter-regular - latin_cyrillic */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  /* IE9 Compat Modes */
  src: url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-regular.eot');
  src: local(''),
    /* IE6-IE8 */
    url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-regular.eot?#iefix') format('embedded-opentype'),
    /* Super Modern Browsers */
    url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-regular.woff2') format('woff2'),
    /* Modern Browsers */
    url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-regular.woff') format('woff'),
    /* Safari, Android, iOS */
    url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-regular.ttf') format('truetype'),
    /* Legacy iOS */
    url('../fonts/inter-v12-latin_cyrillic/inter-v12-latin_cyrillic-regular.svg#Inter') format('svg');
  font-display: swap;
}
`;
