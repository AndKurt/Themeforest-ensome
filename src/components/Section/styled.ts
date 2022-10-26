import styled from 'styled-components/macro'

import theme from '@styles/theme'

import { ISectionWrapper } from './types'

const { DEVICE } = theme

export const SectionWrapper = styled.section<ISectionWrapper>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 0)};
  margin-top: ${({ top }) => (top ? `${top}px` : 0)};
  width: 100%;

  @media ${DEVICE.laptop} {
    justify-content: center;
  }
`
