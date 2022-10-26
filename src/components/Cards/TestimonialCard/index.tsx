import React from 'react'

import { Paragraph } from '@components/Paragraph'
import { Title } from '@components/Titles'
import { BlockLayout } from '@layout/BlockLayout'

import { CardWrapper, StyledImg } from './styled'
import { ITestimonialCard } from './types'

export const TestimonialCard = ({
  src,
  alt,
  nameTitle,
  paragraph1,
  paragraph2,
  titleSize,
  paragraphSize1,
  paragraphSize2,
  width,
  imgSize,
  topTitle,
  bottomTitle,
  topParagraph1,
  topParagraph2,
  bottomParagraph1,
  bottomParagraph2,
  radius,
}: ITestimonialCard) => (
  <CardWrapper width={width}>
    <BlockLayout width={250} directionRow>
      <StyledImg src={src} alt={alt} radius={radius} imgSize={imgSize} />
      <BlockLayout>
        <Title size={titleSize} top={topTitle} bottom={bottomTitle}>
          {nameTitle}
        </Title>
        <Paragraph size={paragraphSize1} top={topParagraph1} bottom={bottomParagraph1}>
          {paragraph1}
        </Paragraph>
      </BlockLayout>
    </BlockLayout>
    <Paragraph size={paragraphSize2} top={topParagraph2} bottom={bottomParagraph2}>
      {paragraph2}
    </Paragraph>
  </CardWrapper>
)
