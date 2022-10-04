import { css } from 'styled-components'

// Color palette
const COLOR = {
  WHITE: '#fff',
  BLACK: '#292D33',
  GREY: '#9497A1',
  PRIMARY: '#185CFF',
  SECONDARY: '#002B4E',
  TERTIARY: '#F0F9FF',
  HELPER_BLUE_1: '#194060',
  HELPER_BLUE_2: '#607D94',
  HELPER_BLUE_3: '#C9DCEC',
  BACKGROUND: '#F1F6FA',
  RED: '#C14040',
}

// Font sizes
const FONT_SIZE = {
  XS: css`
    font-size: 14px;
    line-height: 24px;
  `,
  S: css`
    font-size: 16px;
    line-height: 28px;
  `,
  M: css`
    font-size: 20px;
    line-height: 30px;
  `,
  L: css`
    font-size: 22px;
    line-height: 33px;
  `,
  XL: css`
    font-size: 30px;
    line-height: 40px;
  `,
  XXL: css`
    font-size: 38px;
    line-height: 56px;
  `,
  XXXL: css`
    font-size: 46px;
    line-height: 60px;
  `,
}

// Font weights
const FONT_WEIGHT = {
  400: 400,
  500: 500,
  600: 600,
  700: 700,
  800: 800,
}

const BOX_SHADOW = {
  BUTTON: '0px 12px 30px rgba(24, 92, 255, 0.18)',
  CARD_1: '0px 2px 20px 17px rgba(24, 92, 255, 0.04)',
  CARD_2: '0px 12px 30px 17px rgba(24, 92, 255, 0.04)',
  CARD_3: '0px 4px 12px rgba(12, 68, 204, 0.1)',
  DROPDOWN: '0px 2px 6px rgba(0, 43, 78, 0.15), 0px 1px 2px rgba(0, 43, 78, 0.3)',
}

// Media queries
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1110px',
  desktop: '1920px',
}

const DEVICE = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
}

const RADIUS = {
  S: '6px',
  M: '20px',
}

const SPACES = {
  0: 0,
  5: 5,
  10: 10,
  12: 12,
  15: 15,
  20: 20,
  25: 25,
  30: 30,
  40: 40,
  50: 50,
  60: 60,
}

const SVG_SIZE = {
  S: css`
    height: 24px;
    width: 24px;
  `,
  M: css`
    height: 32px;
    width: 32px;
  `,
}

const TRANSITION = {
  SLOW: 1.5,
  MEDIUM: 0.8,
  FAST: 0.4,
}

const OPACITY = {
  LOW: 0.4,
  MEDIUM: 0.7,
  FULL: 1,
}

export default {
  COLOR,
  DEVICE,
  BOX_SHADOW,
  SPACES,
  FONT_SIZE,
  FONT_WEIGHT,
  RADIUS,
  SVG_SIZE,
  OPACITY,
  TRANSITION,
}
