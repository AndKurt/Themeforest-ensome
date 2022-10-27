import React from 'react'

import { Color, TitleSize } from '@interfaces/styles'

export interface ITitleElement {
  width?: number
  size?: TitleSize
  top?: number
  bottom?: number
  color?: Color
}

export interface ITitle extends ITitleElement {
  children: React.ReactNode
}
