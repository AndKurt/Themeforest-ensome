import styled from 'styled-components/macro'

import theme from '@styles/theme'
import { setTitleFontSize } from '@utils/index'

import { IButtonWrapper } from './types'

const { COLOR, RADIUS, TRANSITION, BOX_SHADOW, HEADLINE, WIDTH } = theme

export const ButtonWrapper = styled.button<IButtonWrapper>`
  ${({ size }) => setTitleFontSize(size || 'bold_6')}
  align-items:center;
  background: ${({ color }) => (color === 'blue' ? COLOR.PRIMARY : COLOR.WHITE)};
  border: 1px solid ${COLOR.PRIMARY};
  border-radius: ${({ radius }) => {
    if (!radius) {
      return RADIUS.FULL
    }
    return radius === 'small' ? RADIUS.S : RADIUS.M
  }};
  box-shadow: ${BOX_SHADOW.BUTTON};
  color: ${({ color }) => (color === 'blue' ? COLOR.WHITE : COLOR.PRIMARY)};
  cursor: pointer;
  display: flex;
  height: ${({ buttonSize }) => (buttonSize === 'round' ? WIDTH.buttonRound : 'auto')};
  justify-content: space-around;
  padding: ${({ padding }) => `${padding}px`};
  transition: ${TRANSITION.FAST};
  width: ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'extra-small':
        return WIDTH.buttonXS
      case 'small':
        return WIDTH.buttonS
      case 'medium':
        return WIDTH.buttonM
      case 'large':
        return WIDTH.buttonL
      default:
        return WIDTH.buttonRound
    }
  }};

  :hover {
    background: ${({ color }) => (color === 'blue' ? COLOR.PRIMARY_HOVER : COLOR.WHITE)};
    border: 1px solid ${COLOR.PRIMARY_HOVER};
  }

  :active {
  }
`
