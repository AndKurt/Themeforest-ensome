import styled from 'styled-components/macro'

import theme from '@styles/theme'
import { setTitleFontSize } from '@utils/index'

import { ITitleElement } from '../types'

const { COLOR } = theme

export const TitleElement = styled.h2<ITitleElement>`
  color: ${({ color }) => (color === 'blue' ? COLOR.PRIMARY : COLOR.BLACK)};
  display: inline-block;
  margin-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 0)};
  margin-top: ${({ top }) => (top ? `${top}px` : 0)};
  ${({ size }) => setTitleFontSize(size || 'extrabold_1')};
  max-width: ${({ width }) => (width ? `${width}px` : '100%')};

  span {
    color: ${COLOR.PRIMARY};
  }
`
