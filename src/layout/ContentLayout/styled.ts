import styled from 'styled-components/macro'

import { IContentWrapper } from '@interfaces/index'
import theme from '@styles/theme'

const { BACKGROUND, WIDTH } = theme

export const ContentWrapper = styled.div<IContentWrapper>`
  align-items: center;
  background: ${({ bgColor }) => BACKGROUND[bgColor]};
  display: flex;
  flex-direction: ${({ contentDirection }) => contentDirection};
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  width: ${WIDTH.laptop};
`
