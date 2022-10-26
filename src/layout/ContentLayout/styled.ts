import styled from 'styled-components/macro'

import { IContentWrapper } from '@layout/types/index'
import theme from '@styles/theme'

const { BACKGROUND, DEVICE } = theme

export const ContentWrapper = styled.div<IContentWrapper>`
  align-items: center;
  background: ${({ background }) => (background ? BACKGROUND[background] : BACKGROUND.default)};
  display: flex;
  flex-direction: ${({ contentDirection }) => contentDirection};
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  @media ${DEVICE.tablet} {
    padding: 0 16px;
  }
`
