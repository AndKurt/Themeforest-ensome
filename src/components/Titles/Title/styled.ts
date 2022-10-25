import styled from 'styled-components/macro'

import theme from '@styles/theme'

import { ITitleElement } from '../types'

const { HEADLINE, COLOR } = theme

export const TitleElement = styled.h2<ITitleElement>`
  display: inline-block;
  max-width: ${({ width }) => (width ? `${width}px` : '100%')};
  ${({ size }) => {
    switch (size) {
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
  }}

  span {
    color: ${COLOR.PRIMARY};
  }
`
