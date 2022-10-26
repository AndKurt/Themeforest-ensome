import styled from 'styled-components/macro'

import theme from '@styles/theme'

import { ISectionWrapper } from './types'

const { DEVICE, COLOR, WIDTH, BACKGROUND } = theme

export const SectionWrapper = styled.div<ISectionWrapper>`
  align-items: center;
  display: flex;
  flex-direction: ${({ contentDirection }) => (contentDirection === 'row' ? 'row' : 'column')};
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 0)};
  margin-top: ${({ top }) => (top ? `${top}px` : 0)};
  max-width: ${WIDTH.laptop};
  width: 100%;

  @media ${DEVICE.laptop} {
    justify-content: center;
  }
`
