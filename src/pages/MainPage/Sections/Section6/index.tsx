import React from 'react'

import { CardsContainer, CommonButton, Section, TestimonialCard, Title } from '@components/index'
import { testimonialData } from '@constants/homePage'
import { BlockLayout, ContentLayout } from '@layout/index'

export const Section6 = () => (
  <ContentLayout contentDirection="column">
    <Section contentDirection="column">
      <BlockLayout directionRow jc="space-between" top={120}>
        <Title size="extrabold_2" top={15}>
          Testimonials
        </Title>
        <BlockLayout width={235} directionRow jc="space-between">
          <CommonButton color="light" radius="M" width="S" height="L" handleClick={() => {}} />
          <CommonButton color="light" radius="M" width="S" height="L" handleClick={() => {}} />
        </BlockLayout>
      </BlockLayout>
      <CardsContainer height={760} top={50} bottom={120} directionRow gap={30}>
        {testimonialData.map(({ alt, src, nameTitle, paragraph1, paragraph2 }) => (
          <TestimonialCard
            width={350}
            key={nameTitle}
            titleSize="bold_6"
            paragraphSize1="regular_3"
            paragraphSize2="regular_2"
            alt={alt}
            src={src}
            nameTitle={nameTitle}
            paragraph1={paragraph1}
            paragraph2={paragraph2}
            imgSize="XL"
            radius="FULL"
          />
        ))}
      </CardsContainer>
    </Section>
  </ContentLayout>
)
