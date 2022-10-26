import { ButtonSize, JustifyContent, ParagraphSize, SvgSize, TitleSize } from '@interfaces/styles'
import theme from '@styles/theme'

const { PARAGRAPH, HEADLINE, SVG_SIZE, WIDTH } = theme

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

export const setButtonSize = (size: ButtonSize) => {
  switch (size) {
    case 'extra-small':
      return WIDTH.buttonXS
    case 'small':
      return WIDTH.buttonS
    case 'medium':
      return WIDTH.buttonM
    case 'large':
      return WIDTH.buttonL
    default:
      return WIDTH.buttonRound
  }
}
