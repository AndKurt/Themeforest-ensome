import React from 'react'

import { TitleSize } from '@interfaces/textSize'

export interface ITitleElement {
  width?: number
  size?: TitleSize
}

export interface ITitle extends ITitleElement {
  children: React.ReactNode
}
