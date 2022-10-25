import React from 'react'

import { IContentLayout } from '@layout/types/index'

import { ContentWrapper } from './styled'

export const ContentLayout = ({ children, bgColor, contentDirection }: IContentLayout) => (
  <ContentWrapper bgColor={bgColor} contentDirection={contentDirection}>
    {children}
  </ContentWrapper>
)
