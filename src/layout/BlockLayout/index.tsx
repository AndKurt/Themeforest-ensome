import React, { memo } from 'react'

import { BlocWrapper } from './styled'
import { IBlockLayout } from './types'

export const BlockLayout = memo(({ children, width, top, bottom, directionRow, jc }: IBlockLayout) => (
  <BlocWrapper width={width} top={top} bottom={bottom} directionRow={directionRow} jc={jc}>
    {children}
  </BlocWrapper>
))
