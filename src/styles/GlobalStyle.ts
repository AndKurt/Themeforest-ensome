import { createGlobalStyle } from 'styled-components'

import theme from './theme'

const { COLOR, DEVICE } = theme

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
}
html,
body {
  font-size: 16px;
  height: 100%;
  font-family: 'Manrope', 'Open Sans', sans-serif;
}
a {
  text-decoration: none;
}
#root {
  height: 100%;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px grey;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
  background: ${COLOR.BACKGROUND};
  border: 1px solid ${COLOR.GREY};
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background: ${COLOR.PRIMARY};
  }
}

// ---MEDIA QUERIES---
@media ${DEVICE.tablet} {
  html,
  body {
  font-size: 15px;
  }
}

@media ${DEVICE.mobileL} {
  html,
  body {
  font-size: 14px;
  }
}

@media ${DEVICE.mobileM} {
  html,
  body {
  font-size: 13px;
  }
}

@media ${DEVICE.mobileS} {
  html,
  body {
  font-size: 12px;
  }
}
`
