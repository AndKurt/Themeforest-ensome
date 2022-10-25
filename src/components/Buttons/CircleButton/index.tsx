import React, { memo } from 'react'

import { CircleButtonWrapper, TextContent } from './styled'
import { ICircleButton } from './types'

export const CircleButton = memo(({ name, handleClick }: ICircleButton) => (
  <CircleButtonWrapper onClick={handleClick}>
    <TextContent>{name}</TextContent>
  </CircleButtonWrapper>
))
