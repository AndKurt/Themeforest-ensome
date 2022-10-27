export interface ICardsContainerWrapper {
  directionRow?: boolean
  width?: number
  height?: number
  gap?: number
  top?: number
  bottom?: number
  isWrap?: boolean
}

export interface ICardsContainer extends ICardsContainerWrapper {
  children: React.ReactNode
}
