import React, { memo } from 'react'

import { TitleElement } from './styled'

import { ITitle } from '../types'

export const Title = memo(({ children, width, size, top, bottom, color }: ITitle) => (
  <TitleElement width={width} size={size} top={top} bottom={bottom} color={color}>
    {children}
  </TitleElement>
))
