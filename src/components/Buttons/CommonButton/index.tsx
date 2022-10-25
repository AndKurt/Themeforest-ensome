import React, { memo } from 'react'

import { ButtonWrapper } from './styled'
import { IButton } from './types'

export const CommonButton = memo(
  ({ name, color, radius, buttonSize, icon, handleClick, size = 'bold_6', padding = 14 }: IButton) => (
    <ButtonWrapper
      color={color}
      radius={radius}
      buttonSize={buttonSize}
      onClick={handleClick}
      size={size}
      padding={padding}
    >
      {icon && <img src={icon} alt="media-button" />}
      {name}
    </ButtonWrapper>
  ),
)
