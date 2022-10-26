import styled from 'styled-components/macro'

import theme from '@styles/theme'

import { IBannerContainer } from './types'

const { COLOR } = theme

export const BannerContainer = styled.div<IBannerContainer>`
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
  height: auto;
  max-width: 1920px;
  position: relative;
  width: 100vw;

  @media (max-width: 1600px) {
    justify-content: center;
  }
`

export const BannerImg = styled.img<IBannerContainer>`
  height: auto;
  max-width: ${({ width }) => (width ? `${width}px` : '100vw')};
  width: 100vw;
`
