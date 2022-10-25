import React from 'react'

import { IContentWrapper } from './theme'

export interface ILayout {
  children?: React.ReactNode
}

export interface IContentLayout extends IContentWrapper, ILayout {
  bgColor: 'default' | 'light' | 'dark'
  contentDirection: 'row' | 'column'
}
