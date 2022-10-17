type ButtonColor = 'blue' | 'white'
type ButtonRadius = 'small' | 'medium'
type ButtonSize = 'extra-small' | 'small' | 'medium' | 'large' | 'round'

export interface IButtonWrapper {
  color: ButtonColor
  radius?: ButtonRadius
  buttonSize: ButtonSize
}

export interface IButton extends IButtonWrapper {
  text: string
  // TODO remove ?
  onClick?: () => void
}
