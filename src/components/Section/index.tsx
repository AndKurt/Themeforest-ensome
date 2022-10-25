import React, { memo } from 'react'

import { SectionWrapper } from './styled'
import { ISection } from './types'

export const Section = memo(({ children, top, bottom }: ISection) => (
  <SectionWrapper top={top} bottom={bottom}>
    {children}
  </SectionWrapper>
))
