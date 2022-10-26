import styled from 'styled-components/macro'

import theme from '@styles/theme'
import { setJustifyContent } from '@utils/index'

import { IBlockWrapper } from './types'

const { DEVICE } = theme

export const BlocWrapper = styled.div<IBlockWrapper>`
  display: flex;
  flex-direction: ${({ directionRow }) => (directionRow ? 'row' : 'column')};
  flex-wrap: wrap;
  justify-content: ${({ jc }) => setJustifyContent(jc || 'center')};
  margin-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 0)};
  margin-top: ${({ top }) => (top ? `${top}px` : 0)};
  max-width: ${({ width }) => (width ? `${width}px` : '100%')};
  position: relative;
  width: 100%;
`
