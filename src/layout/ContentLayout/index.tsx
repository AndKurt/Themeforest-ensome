import React from 'react'

import { IContentLayout } from '@layout/types/index'

import { ContentWrapper } from './styled'

export const ContentLayout = ({ children, background, contentDirection }: IContentLayout) => (
  <ContentWrapper background={background} contentDirection={contentDirection}>
    {children}
  </ContentWrapper>
)
