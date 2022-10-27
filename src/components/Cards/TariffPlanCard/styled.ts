import styled from 'styled-components/macro'

import theme from '@styles/theme'

const { BACKGROUND, COLOR, BOX_SHADOW, RADIUS, TRANSITION, SPACES } = theme

export const TariffPlanCardWrapper = styled.div`
  background-color: ${BACKGROUND.default};
  border-radius: ${RADIUS.S};
  box-shadow: ${BOX_SHADOW.CARD_3};
  display: flex;
  flex-direction: column;
  height: 525px;
  padding: ${SPACES[35]}px ${SPACES[20]}px;
  transition: ${TRANSITION.MEDIUM};
  width: 255px;

  h2,
  p,
  img,
  button {
    box-sizing: border-box;
    transition: ${TRANSITION.MEDIUM};
  }

  :hover {
    background-color: ${BACKGROUND.primary};

    h2,
    p {
      color: ${COLOR.WHITE};
    }

    button {
      border: 1px solid ${COLOR.WHITE};
    }

    img {
      filter: brightness(0) saturate(100%) invert(100%) sepia(100%);
    }
  }
`

export const CheckMarkImg = styled.img`
  margin-right: ${SPACES[15]}px;
  transition: ${TRANSITION.FAST};
`

export const OptionEntity = styled.div`
  display: flex;
  margin-bottom: 1rem;
`
