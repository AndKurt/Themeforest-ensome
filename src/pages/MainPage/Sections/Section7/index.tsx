import React from 'react'

import { CardsContainer, Section, TariffPlanCard, TestimonialCard, Title } from '@components/index'
import { tariffCardData } from '@constants/homePage'
import { BlockLayout, ContentLayout } from '@layout/index'

export const Section7 = () => (
  <ContentLayout contentDirection="column">
    <Section contentDirection="column">
      <BlockLayout directionRow jc="space-between">
        <Title size="extrabold_2">Our pricing</Title>
      </BlockLayout>
      <CardsContainer height={760} top={50} bottom={120} directionRow gap={30}>
        {tariffCardData.map(({ plan, price, options }) => (
          <TariffPlanCard key={plan} plan={plan} price={price} options={options} />
        ))}
      </CardsContainer>
    </Section>
  </ContentLayout>
)
