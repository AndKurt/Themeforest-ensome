import styled from 'styled-components/macro'

import theme from '@styles/theme'

import { ICardsContainerWrapper } from './types'

const { DEVICE } = theme

export const CardsContainerWrapper = styled.div<ICardsContainerWrapper>`
  display: flex;
  flex-direction: ${({ directionRow }) => (directionRow ? 'row' : 'column')};
  flex-wrap: wrap;
  gap: ${({ gap }) => (gap ? `${gap}px` : 0)};
  height: 100%;
  margin-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 0)};
  margin-top: ${({ top }) => (top ? `${top}px` : 0)};
  max-height: ${({ height }) => (height ? `${height}px` : 0)};
  max-width: ${({ width }) => (width ? `${width}px` : '100%')};
  position: relative;
  width: 100%;

  @media ${DEVICE.tablet} {
    align-items: center;
    max-height: 100%;
  }
`
