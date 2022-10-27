import styled from 'styled-components/macro'

import theme from '@styles/theme'
import { setWidthButtonSize, setHeightButtonSize, setTitleFontSize } from '@utils/index'

import { IButtonWrapper } from './types'

const { BACKGROUND, COLOR, RADIUS, TRANSITION, BOX_SHADOW, HEADLINE, WIDTH } = theme

export const ButtonWrapper = styled.button<IButtonWrapper>`
  ${({ textSize }) => setTitleFontSize(textSize || 'bold_6')}
  align-items: center;

  background: ${({ color }) => (color ? BACKGROUND[color] : BACKGROUND.default)};
  border: 1px solid ${({ border }) => (border ? `${COLOR.PRIMARY}` : `${COLOR.WHITE}`)};
  border-radius: ${({ radius }) => (radius ? RADIUS[radius] : 0)};
  box-shadow: ${({ isShadow }) => isShadow && `${BOX_SHADOW.BUTTON}`};
  color: ${({ color }) => (color === 'primary' ? COLOR.WHITE : COLOR.PRIMARY)};
  cursor: pointer;
  display: flex;
  height: ${({ height = 'auto' }) => setHeightButtonSize(height)};
  justify-content: space-around;
  margin-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : 0)};
  margin-top: ${({ top }) => (top ? `${top}px` : 0)};
  padding: ${({ padding }) => `${padding}px`};
  transition: ${TRANSITION.FAST};
  width: ${({ width = 'auto' }) => setWidthButtonSize(width)};

  :hover {
    background: ${({ color }) => (color ? COLOR.PRIMARY_HOVER : COLOR.WHITE)};
    ${({ border }) => border && `border: 1px solid ${COLOR.PRIMARY_HOVER}`}
  }

  :active {
  }
`
