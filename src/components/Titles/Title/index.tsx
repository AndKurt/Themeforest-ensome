import React, { memo } from 'react'

import { TitleElement } from './styled'

import { ITitle } from '../types'

export const Title = memo(({ children, width, size = 'extrabold_1' }: ITitle) => (
  <TitleElement width={width} size={size}>
    {children}
  </TitleElement>
))
