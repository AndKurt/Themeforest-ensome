import React from 'react'

import { BackgroundColor, ButtonSize, Radius, TitleSize } from '@interfaces/styles'

export interface IButtonWrapper {
  color?: BackgroundColor
  radius?: Radius
  buttonSize: ButtonSize
  size?: TitleSize
  padding?: number
  top?: number
  bottom?: number
  shadow?: boolean
  border?: boolean
}

export interface IButton extends IButtonWrapper {
  name?: string
  icon?: string
  // TODO remove ?
  handleClick: () => void
}
