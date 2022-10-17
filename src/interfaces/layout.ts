import { IContentWrapper } from './theme'

export interface ILayout {
  children?: JSX.Element
}

export interface IContentLayout extends IContentWrapper {
  bgColor: 'default' | 'light' | 'dark'
  contentDirection: 'row' | 'column'
  children: JSX.Element
}
