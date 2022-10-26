import React, { memo } from 'react'

import { TitleElement } from './styled'

import { ITitle } from '../types'

export const MainTitle = memo(({ children, width, top, bottom }: ITitle) => (
  <TitleElement width={width} top={top} bottom={bottom}>
    {children}
  </TitleElement>
))
