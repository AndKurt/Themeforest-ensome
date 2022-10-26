import styled from 'styled-components/macro'

import theme from '@styles/theme'

import { ITitleElement } from '../types'

const { HEADLINE, COLOR } = theme

export const TitleElement = styled.h2<ITitleElement>`
  display: inline-block;
  margin-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 0)};
  ${HEADLINE.MAIN}
  margin-top: ${({ top }) => (top ? `${top}px` : 0)};
  max-width: ${({ width }) => (width ? `${width}px` : '100%')};

  span {
    color: ${COLOR.PRIMARY};
  }
`
