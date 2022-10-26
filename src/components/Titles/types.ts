import React from 'react'

import { TitleSize } from '@interfaces/styles'

export interface ITitleElement {
  width?: number
  size?: TitleSize
  top?: number
  bottom?: number
  color?: 'blue'
}

export interface ITitle extends ITitleElement {
  children: React.ReactNode
}
