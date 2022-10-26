/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components/macro'

import theme from '@styles/theme'
import { setSvgSize } from '@utils/styleHelper'

import { ICardWrapper, IStyledImg } from './types'

const { SPACES, BACKGROUND, RADIUS, DEVICE } = theme

export const CardWrapper = styled.div<ICardWrapper>`
  display: flex;
  flex-wrap: wrap;
  max-width: ${({ width }) => (width ? `${width}px` : '100%')};
  padding: ${SPACES[35]}px;
  position: relative;
  width: 100%;
`

export const StyledImg = styled.img<IStyledImg>`
  ${({ imgSize }) => setSvgSize(imgSize || 'S')}
  border-radius: ${({ radius }) => radius && RADIUS[radius]};
`
