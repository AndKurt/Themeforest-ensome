import React from 'react'

import { TitleSize } from '@interfaces/textSize'

type ButtonColor = 'blue' | 'white'
type ButtonRadius = 'small' | 'medium'
type ButtonSize = 'extra-small' | 'small' | 'medium' | 'large' | 'round'

export interface IButtonWrapper {
  color: ButtonColor
  radius?: ButtonRadius
  buttonSize: ButtonSize
  size?: TitleSize
  padding?: number
}

export interface IButton extends IButtonWrapper {
  name: string
  icon?: string
  // TODO remove ?
  handleClick: () => void
}
