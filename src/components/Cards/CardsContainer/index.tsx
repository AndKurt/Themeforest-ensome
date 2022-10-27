import React, { memo } from 'react'

import { CardsContainerWrapper } from './styled'
import { ICardsContainer } from './types'

export const CardsContainer = memo(
  ({ children, directionRow, width, height, gap, top, bottom, isWrap }: ICardsContainer) => (
    <CardsContainerWrapper
      directionRow={directionRow}
      width={width}
      gap={gap}
      top={top}
      bottom={bottom}
      height={height}
      isWrap={isWrap}
    >
      {children}
    </CardsContainerWrapper>
  ),
)
