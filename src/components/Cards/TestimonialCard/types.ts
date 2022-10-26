import { ParagraphSize, SvgSize, TitleSize, Radius, BackgroundColor } from '@interfaces/styles'

export interface ICardWrapper {
  width?: number
  height?: number
  background?: BackgroundColor
}

export interface IStyledImg {
  imgSize: SvgSize
  radius?: Radius
}

export interface ITestimonialCard extends ICardWrapper, IStyledImg {
  src: string
  alt: string
  nameTitle: string
  paragraph1: string
  paragraph2: string
  titleSize?: TitleSize
  paragraphSize1?: ParagraphSize
  paragraphSize2?: ParagraphSize
  topTitle?: number
  bottomTitle?: number
  topParagraph1?: number
  topParagraph2?: number
  bottomParagraph1?: number
  bottomParagraph2?: number
}
