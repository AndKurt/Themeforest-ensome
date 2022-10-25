import styled from 'styled-components/macro'

import { IContentWrapper } from '@layout/types/index'
import theme from '@styles/theme'

const { BACKGROUND, WIDTH } = theme

export const ContentWrapper = styled.div<IContentWrapper>`
  align-items: center;
  background: ${({ bgColor }) => BACKGROUND[bgColor]};
  display: flex;
  flex-direction: ${({ contentDirection }) => contentDirection};
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${WIDTH.laptop};
  width: 100%;
`
