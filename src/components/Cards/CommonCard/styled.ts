/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components/macro'

import theme from '@styles/theme'
import { setSvgSize } from '@utils/styleHelper'

import { ICardWrapper, IStyledImg } from './types'

const { SPACES, BACKGROUND, RADIUS, DEVICE } = theme

export const CardWrapper = styled.div<ICardWrapper>`
  background: ${({ background }) => (background ? BACKGROUND[background] : BACKGROUND.default)};
  border-radius: ${({ radius }) => (radius ? RADIUS[radius] : 0)};
  display: flex;
  flex-direction: column;
  max-width: ${({ width }) => (width ? `${width}px` : 0)};
  padding: ${SPACES[25]}px;
  width: 100%;

  ${({ offset }) =>
    offset &&
    `&:nth-child(${offset}) {
    margin-top: 56px;
  }`}

  @media ${DEVICE.tablet} {
    ${({ offset }) =>
      offset &&
      `&:nth-child(${offset}) {
    margin-top: ${SPACES[0]};
  }`};
  }
`

export const StyledImg = styled.img<IStyledImg>`
  ${({ imgSize }) => setSvgSize(imgSize || 'S')}
`
