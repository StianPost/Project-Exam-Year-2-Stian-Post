import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    
  --font-body: "Open Sans", Helvetica Neue, sans-serif;
  --font-headings: Poppins, Helvetica Neue, sans-serif;

  /* FONT SIZES */

  --font-size-base: 16px;
  --font-size-xxs: 0.296rem;
  --font-size-xs: 0.444rem;
  --font-size-sm: 0.667rem;
  --font-size: 1rem;
  --font-size-md: 1.5rem;
  --font-size-lg: 2.25rem;
  --font-size-xl: 3.375rem;
  --font-size-xxl: 5.068rem;
  --font-size-huge: 7.594rem;
  --font-size-jumbo: 11.391rem;

  /* SPACING */

  --size-xxs: 4px;
  --size-xs: 7px;
  --size-sm: 11px;
  --size: 16px;
  --size-md: 24px;
  --size-lg: 36px;
  --size-xl: 54px;
  --size-xxl: 81px;
  --size-huge: 121px;
  --size-jumbo: 182px;

  /* COLORS */

  --color-primary: #2a7a8c;
  --color-secondary: #f2fcfe;
  --color-tertiary: #1c1212;
  --color-quaternary: #ed7c00;
  --color-quinary: #54494B;
  --color-white: #fff;
  --color-black: #282828;
  --c-action: var(--color-primary);
  --c-danger: var(--color-quaternary);
  --c-success: var(--color-primary);
  --c-info: var(--color-quaternary);
  --c-bg: var(--color-primary);
  --c-bg--secondary: var(--color-secondary);
  --c-text: black;

  /* Z-index */

  --z-base: 0;
  --z-ground: 1;
  --z-ceiling: 10;
  --z-sky: 20;
}

html {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  scroll-behavior: smooth;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
`;

export default GlobalStyle;
