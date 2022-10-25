import React, { memo } from 'react'

import { BlocWrapper } from './styled'
import { IBlockLayout } from './types'

export const BlockLayout = memo(({ children, width }: IBlockLayout) => (
  <BlocWrapper width={width}>{children}</BlocWrapper>
))
