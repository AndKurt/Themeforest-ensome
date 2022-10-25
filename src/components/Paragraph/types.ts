import React from 'react'

import { ParagraphSize } from '@interfaces/index'

export interface IParagraphWrapper {
  top?: number
  bottom?: number
  size?: ParagraphSize
}

export interface IParagraph extends IParagraphWrapper {
  children: React.ReactNode
}
