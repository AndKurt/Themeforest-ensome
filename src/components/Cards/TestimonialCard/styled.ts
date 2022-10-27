import styled from 'styled-components/macro'

import theme from '@styles/theme'
import { setSvgSize } from '@utils/styleHelper'

import { ICardWrapper, IStyledImg } from './types'

const { SPACES, BOX_SHADOW, RADIUS, DEVICE } = theme

export const CardWrapper = styled.div<ICardWrapper>`
  box-shadow: ${BOX_SHADOW.CARD_3};
  display: flex;
  flex-wrap: wrap;
  max-width: ${({ width }) => (width ? `${width}px` : '100%')};
  padding: ${SPACES[35]}px;
  position: relative;
`

export const PersonalData = styled.div`
  display: flex;
  margin-bottom: 25px;
  width: 100%;
`

export const StyledImg = styled.img<IStyledImg>`
  border-radius: ${({ radius }) => radius && RADIUS[radius]};
  ${({ imgSize }) => setSvgSize(imgSize || 'S')}
  display: block;
  margin-right: 25px;
`
