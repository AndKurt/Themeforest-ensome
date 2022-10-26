import styled from 'styled-components/macro'

import theme from '@styles/theme'
import { setParagraphFontSize } from '@utils/styleHelper'

import { IParagraphWrapper } from './types'

const { COLOR } = theme

export const ParagraphWrapper = styled.p<IParagraphWrapper>`
  color: ${COLOR.GREY};
  ${({ size }) => setParagraphFontSize(size || 'regular_1')}
  margin-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 0)};
  margin-top: ${({ top }) => (top ? `${top}px` : 0)};
`
