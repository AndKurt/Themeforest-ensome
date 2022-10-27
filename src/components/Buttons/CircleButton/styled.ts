import styled from 'styled-components/macro'

import theme from '@styles/theme'

const { COLOR, HEADLINE, BUTTON_WIDTH, BUTTON_HEIGHT, RADIUS, TRANSITION, BOX_SHADOW } = theme

export const CircleButtonWrapper = styled.button`
  align-items: center;
  background: ${COLOR.PRIMARY};
  border-radius: ${RADIUS.FULL};
  bottom: -149px;
  box-shadow: ${BOX_SHADOW.BUTTON};
  color: ${COLOR.WHITE};
  cursor: pointer;
  display: flex;
  height: ${BUTTON_HEIGHT.buttonRound};
  justify-content: center;
  outline: none;
  position: absolute;
  transition: ${TRANSITION.FAST};
  width: ${BUTTON_WIDTH.buttonRound};
  z-index: 10;

  :before {
    background: none;
    border: 1px solid ${COLOR.WHITE};
    content: '';
    display: block;
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    border-radius: ${RADIUS.FULL};
    bottom: 8px;
    pointer-events: none;
  }

  :after {
    border: 10px solid ${COLOR.WHITE};
    border-radius: ${RADIUS.FULL};
    content: '';
    height: ${BUTTON_HEIGHT.buttonRound};
    position: absolute;
    width: ${BUTTON_WIDTH.buttonRound};
    z-index: 1;
  }

  :hover {
    background: ${COLOR.PRIMARY_HOVER};
  }
`

export const TextContent = styled.p`
  ${HEADLINE.SEMIBOLD_7}
  color: ${COLOR.WHITE};
`
