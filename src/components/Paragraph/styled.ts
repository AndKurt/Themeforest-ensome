import styled from 'styled-components/macro'

import theme from '@styles/theme'

import { IParagraphWrapper } from './types'

const { PARAGRAPH, COLOR } = theme

export const ParagraphWrapper = styled.p<IParagraphWrapper>`
  color: ${COLOR.GREY};
  ${({ size }) => {
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
  }}
  padding-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 0)};
  padding-top: ${({ top }) => (top ? `${top}px` : 0)};
`
