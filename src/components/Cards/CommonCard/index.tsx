import React, { memo } from 'react'

import { Paragraph, Title } from '@components/index'

import { CardWrapper, StyledImg } from './styled'
import { ICommonCard } from './types'

export const CommonCard = memo(
  ({
    src,
    alt,
    title,
    paragraph,
    titleSize,
    paragraphSize,
    width,
    imgSize,
    topTitle,
    bottomTitle,
    topParagraph,
    bottomParagraph,
    radius,
    offset,
  }: ICommonCard) => (
    <CardWrapper width={width} radius={radius} offset={offset}>
      <StyledImg src={src} alt={alt} imgSize={imgSize} />
      <Title size={titleSize} top={topTitle} bottom={bottomTitle}>
        {title}
      </Title>
      <Paragraph size={paragraphSize} top={topParagraph} bottom={bottomParagraph}>
        {paragraph}
      </Paragraph>
    </CardWrapper>
  ),
)
