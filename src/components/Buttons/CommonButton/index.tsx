import React, { memo } from 'react'

import { ButtonWrapper } from './styled'
import { IButton } from './types'

export const CommonButton = memo(
  ({
    name,
    color = 'default',
    radius,
    buttonSize,
    icon,
    handleClick,
    size,
    padding = 14,
    top,
    bottom,
    shadow,
    border,
  }: IButton) => (
    <ButtonWrapper
      color={color}
      radius={radius}
      buttonSize={buttonSize}
      onClick={handleClick}
      size={size}
      padding={padding}
      top={top}
      bottom={bottom}
      shadow={shadow}
      border={border}
    >
      {icon && <img src={icon} alt="media-button" />}
      {name}
    </ButtonWrapper>
  ),
)
