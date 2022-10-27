import React, { memo } from 'react'

import { ButtonWrapper } from './styled'
import { IButton } from './types'

export const CommonButton = memo(
  ({
    name = '',
    color = 'default',
    radius,
    width,
    height,
    icon,
    handleClick,
    textSize,
    padding = 14,
    top,
    bottom,
    isShadow,
    border,
  }: IButton) => (
    <ButtonWrapper
      color={color}
      radius={radius}
      width={width}
      height={height}
      onClick={handleClick}
      textSize={textSize}
      padding={padding}
      top={top}
      bottom={bottom}
      isShadow={isShadow}
      border={border}
    >
      {icon && <img src={icon} alt="media-button" />}
      {name}
    </ButtonWrapper>
  ),
)
