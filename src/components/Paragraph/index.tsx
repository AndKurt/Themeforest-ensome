import React, { memo } from 'react'

import { ParagraphWrapper } from './styled'
import { IParagraph } from './types'

export const Paragraph = memo(({ children, top, bottom, size, color }: IParagraph) => (
  <ParagraphWrapper top={top} bottom={bottom} size={size} color={color}>
    {children}
  </ParagraphWrapper>
))
