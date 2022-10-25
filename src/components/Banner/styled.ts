import styled from 'styled-components/macro'

import theme from '@styles/theme'

import { IBannerContainer } from './types'

export const BannerContainer = styled.div<IBannerContainer>`
  position: relative;
`

export const BannerImg = styled.img<IBannerContainer>`
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  max-width: ${({ width }) => (width ? `${width}px` : '100vw')};
  width: 100vw;
  ${({ width }) =>
    width &&
    +width > 1920 &&
    `
    width: 100vw;
  `}
`
