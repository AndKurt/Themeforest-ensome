import { Link } from 'react-router-dom'

import styled from 'styled-components/macro'

import theme from '@styles/theme'

// eslint-disable-next-line object-curly-newline
const { HEADLINE, COLOR, TRANSITION, WIDTH, HEIGHT } = theme

export const HeaderWrapper = styled.header`
  background: ${COLOR.BACKGROUND};
  display: flex;
  height: ${HEIGHT.HEADER};
  width: 100%;
`

export const StyledLink = styled(Link)`
  align-items: center;
  color: ${COLOR.GREY};
  cursor: pointer;
  display: inline-block;
  margin: 17px;
  text-align: center;
  transition: ${TRANSITION.FAST};
  ${HEADLINE.MEDIUM_7}
  width: ${WIDTH.navLink};

  :active {
    color: ${COLOR.BLACK};
  }

  :hover {
    color: ${COLOR.BLACK};
    ${HEADLINE.SEMIBOLD_7}
  }
`
