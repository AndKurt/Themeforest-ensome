import styled from 'styled-components/macro'

import { ISectionWrapper } from './types'

export const SectionWrapper = styled.section<ISectionWrapper>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 0)};
  padding-top: ${({ top }) => (top ? `${top}px` : 0)};
  width: 100%;
`
