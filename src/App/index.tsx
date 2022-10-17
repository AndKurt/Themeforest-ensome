import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { PageLayout } from '@layout/index'
import { GlobalStyle } from '@styles/GlobalStyle'

import { Router } from '../components'

export const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <PageLayout>
      <Router />
    </PageLayout>
  </BrowserRouter>
)
