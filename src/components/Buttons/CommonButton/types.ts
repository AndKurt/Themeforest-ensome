import { BackgroundColor, ButtonSize, Radius, TitleSize } from '@interfaces/styles'

export interface IButtonWrapper {
  color?: BackgroundColor
  radius?: Radius
  width?: ButtonSize
  height?: ButtonSize
  textSize?: TitleSize
  padding?: number
  top?: number
  bottom?: number
  isShadow?: boolean
  border?: boolean
}

export interface IButton extends IButtonWrapper {
  name?: string
  icon?: string
  // TODO remove ?
  handleClick: () => void
}
