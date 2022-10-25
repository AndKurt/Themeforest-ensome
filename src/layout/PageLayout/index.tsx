import React, { Children } from 'react'

import { Footer, Header } from '@components/index'
import { ILayout } from '@layout/types/index'

import { Wrapper } from './styled'

export const PageLayout = ({ children }: ILayout) => (
  <Wrapper>
    <Header />
    {children}
    <Footer />
  </Wrapper>
)
