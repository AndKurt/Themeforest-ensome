import React from 'react'

import { IButton } from './interface'
import { ButtonWrapper } from './styled'

// eslint-disable-next-line object-curly-newline
export const Button = ({ text, color, radius, buttonSize }: IButton) => (
  <ButtonWrapper color={color} radius={radius} buttonSize={buttonSize}>
    <img src="" alt="" />
    {text}
  </ButtonWrapper>
)
