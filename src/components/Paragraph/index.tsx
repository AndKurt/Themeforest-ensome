import React, { memo } from 'react'

import { ParagraphWrapper } from './styled'
import { IParagraph } from './types'

export const Paragraph = memo(({ children, top, bottom, size }: IParagraph) => (
  <ParagraphWrapper top={top} bottom={bottom} size={size}>
    {children}
  </ParagraphWrapper>
))
