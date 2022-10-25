import styled from 'styled-components/macro'

import theme from '@styles/theme'
import { setTitleFontSize } from '@utils/index'

import { ITitleElement } from '../types'

const { COLOR } = theme

export const TitleElement = styled.h2<ITitleElement>`
  display: inline-block;
  max-width: ${({ width }) => (width ? `${width}px` : '100%')};
  ${({ size }) => setTitleFontSize(size || 'extrabold_1')};

  span {
    color: ${COLOR.PRIMARY};
  }
`
