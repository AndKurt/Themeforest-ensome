import { ParagraphSize, SvgSize, TitleSize, Radius, BackgroundColor } from '@interfaces/styles'

export interface ICardWrapper {
  width?: number
  height?: number
  background?: BackgroundColor
  radius?: Radius
  offset?: number
}
export interface IStyledImg {
  imgSize: SvgSize
}

export interface ICommonCard extends ICardWrapper, IStyledImg {
  src: string
  alt: string
  title: string
  paragraph: string
  titleSize?: TitleSize
  paragraphSize?: ParagraphSize
  topTitle?: number
  bottomTitle?: number
  topParagraph?: number
  bottomParagraph?: number
}
