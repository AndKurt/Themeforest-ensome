import React, { Children } from 'react'

import { Footer, Header } from '@components/index'
import { ILayout } from '@interfaces/index'

import { Wrapper } from './styled'

export const PageLayout = ({ children }: ILayout) => (
  <Wrapper>
    <Header />
    {children}
    <Footer />
  </Wrapper>
)
