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
  /* line-height: 1.5; */
  -webkit-font-smoothing: antialiased;
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
}

header {
  flex: 1;
  display: flex;
  background-color: #0b1734;
}

/*
  Experimental path! In this article https://www.joshwcomeau.com/css/custom-css-reset/#digit-tweaking-line-height, the author also suggests this other option:
*/
* {
  line-height: calc(1em + 0.5rem);
}

body {
  background-color: #fff;
  color: #0b1734;
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
}

a:hover {
  text-decoration: underline;
}

h1 {
  font-size: 1.8rem;
}

h2 {
  font-size: 1.5rem;
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
`
