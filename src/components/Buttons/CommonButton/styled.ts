import styled from 'styled-components/macro'

import theme from '@styles/theme'
import { setButtonSize, setTitleFontSize } from '@utils/index'

import { IButtonWrapper } from './types'

const { BACKGROUND, COLOR, RADIUS, TRANSITION, BOX_SHADOW, HEADLINE, WIDTH } = theme

export const ButtonWrapper = styled.button<IButtonWrapper>`
  ${({ size }) => setTitleFontSize(size || 'bold_6')}
  ${({ border }) => border && `border: 1px solid ${COLOR.PRIMARY}`}

  align-items:center;
  background: ${({ color }) => (color ? BACKGROUND[color] : BACKGROUND.default)};
  border-radius: ${({ radius }) => (radius ? RADIUS[radius] : 0)};
  box-shadow: ${({ shadow }) => shadow && `${BOX_SHADOW.BUTTON}`};
  color: ${({ color }) => (color === 'primary' ? COLOR.WHITE : COLOR.PRIMARY)};
  cursor: pointer;
  display: flex;
  height: ${({ buttonSize }) => (buttonSize === 'round' ? WIDTH.buttonRound : 'auto')};
  justify-content: space-around;
  margin-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 0)};
  margin-top: ${({ top }) => (top ? `${top}px` : 0)};
  padding: ${({ padding }) => `${padding}px`};
  transition: ${TRANSITION.FAST};
  width: ${({ buttonSize }) => setButtonSize(buttonSize)};

  :hover {
    background: ${({ color }) => (color ? COLOR.PRIMARY_HOVER : COLOR.WHITE)};
    ${({ border }) => border && `border: 1px solid ${COLOR.PRIMARY_HOVER}`}
  }

  :active {
  }
`
