import React from 'react'

import { Color, ParagraphSize } from '@interfaces/index'

export interface IParagraphWrapper {
  top?: number
  bottom?: number
  size?: ParagraphSize
  color?: Color
}

export interface IParagraph extends IParagraphWrapper {
  children: React.ReactNode
}
