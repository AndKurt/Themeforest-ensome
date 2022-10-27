import { ButtonSize, Color, JustifyContent, ParagraphSize, SvgSize, TitleSize } from '@interfaces/styles'
import theme from '@styles/theme'

const { PARAGRAPH, HEADLINE, SVG_SIZE, COLOR, BUTTON_WIDTH, BUTTON_HEIGHT } = theme

export const setParagraphFontSize = (size: ParagraphSize) => {
  switch (size) {
    case 'regular_2':
      return PARAGRAPH.REGULAR_2
    case 'regular_3':
      return PARAGRAPH.REGULAR_3
    case 'bold_2':
      return PARAGRAPH.BOLD_2
    case 'bold_3':
      return PARAGRAPH.BOLD_3
    default:
      return PARAGRAPH.REGULAR_1
  }
}

export const setTitleFontSize = (size: TitleSize) => {
  switch (size) {
    case 'extra':
      return HEADLINE.EXTRA
    case 'extrabold_2':
      return HEADLINE.EXTRABOLD_2
    case 'extrabold_3':
      return HEADLINE.EXTRABOLD_3
    case 'bold_4':
      return HEADLINE.BOLD_4
    case 'bold_5':
      return HEADLINE.BOLD_5
    case 'bold_6':
      return HEADLINE.BOLD_6
    case 'semibold_7':
      return HEADLINE.SEMIBOLD_7
    case 'medium_7':
      return HEADLINE.MEDIUM_7
    default:
      return HEADLINE.EXTRABOLD_1
  }
}

export const setJustifyContent = (value: JustifyContent) => {
  switch (value) {
    case 'space-around':
      return 'space-around'
    case 'space-between':
      return 'space-between'
    default:
      return 'center'
  }
}

export const setSvgSize = (size: SvgSize) => {
  switch (size) {
    case 'M':
      return SVG_SIZE.M
    case 'L':
      return SVG_SIZE.L
    case 'XL':
      return SVG_SIZE.XL
    default:
      return SVG_SIZE.S
  }
}

export const setWidthButtonSize = (size: ButtonSize) => {
  switch (size) {
    case 'XS':
      return BUTTON_WIDTH.buttonXS
    case 'S':
      return BUTTON_WIDTH.buttonS
    case 'M':
      return BUTTON_WIDTH.buttonM
    case 'L':
      return BUTTON_WIDTH.buttonL
    case 'XL':
      return BUTTON_WIDTH.buttonXL
    case 'round':
      return BUTTON_WIDTH.buttonRound
    case 'round-small':
      return BUTTON_WIDTH.buttonRoundSmall
    default:
      return 'auto'
  }
}

export const setHeightButtonSize = (size: ButtonSize) => {
  switch (size) {
    case 'XS':
      return BUTTON_HEIGHT.buttonXS
    case 'S':
      return BUTTON_HEIGHT.buttonS
    case 'M':
      return BUTTON_HEIGHT.buttonM
    case 'L':
      return BUTTON_HEIGHT.buttonM
    case 'round':
      return BUTTON_HEIGHT.buttonRound
    case 'round-small':
      return BUTTON_HEIGHT.buttonRoundSmall
    default:
      return 'auto'
  }
}

export const setColor = (color?: Color) => {
  switch (color) {
    case 'WHITE':
      return COLOR.WHITE
    case 'BLACK':
      return COLOR.BLACK
    case 'GREY':
      return COLOR.GREY
    case 'PRIMARY':
      return COLOR.PRIMARY
    case 'PRIMARY_HOVER':
      return COLOR.PRIMARY_HOVER
    case 'SECONDARY':
      return COLOR.SECONDARY
    case 'TERTIARY':
      return COLOR.TERTIARY
    case 'HELPER_BLUE_1':
      return COLOR.HELPER_BLUE_1
    case 'HELPER_BLUE_2':
      return COLOR.HELPER_BLUE_2
    case 'HELPER_BLUE_3':
      return COLOR.HELPER_BLUE_2
    case 'BACKGROUND':
      return COLOR.BACKGROUND
    case 'RED':
      return COLOR.RED
    default:
      return COLOR.GREY
  }
}
