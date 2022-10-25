import styled from 'styled-components/macro'

import theme from '@styles/theme'

import { ITitleElement } from '../types'

const { HEADLINE, COLOR } = theme

export const TitleElement = styled.h2<ITitleElement>`
  display: inline-block;
  max-width: ${({ width }) => (width ? `${width}px` : '100%')};
  ${HEADLINE.MAIN}

  span {
    color: ${COLOR.PRIMARY};
  }
`
