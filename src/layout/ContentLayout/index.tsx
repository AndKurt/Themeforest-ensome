import React from 'react'

import { IContentLayout } from '@interfaces/index'

import { ContentWrapper } from './styled'

export const ContentLayout = ({ children, bgColor, contentDirection }: IContentLayout) => (
  <ContentWrapper bgColor={bgColor} contentDirection={contentDirection}>
    {children}
  </ContentWrapper>
)
