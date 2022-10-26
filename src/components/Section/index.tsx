import React, { memo } from 'react'

import { SectionWrapper } from './styled'
import { ISection } from './types'

export const Section = memo(({ children, top, bottom, contentDirection = 'row' }: ISection) => (
  <SectionWrapper top={top} bottom={bottom} contentDirection={contentDirection}>
    {children}
  </SectionWrapper>
))
