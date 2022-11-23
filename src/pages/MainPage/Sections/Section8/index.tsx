import React from 'react'

import { CardsContainer, CommonButton, Section, Title } from '@components/index'
import { tariffCardData } from '@constants/homePage'
import { BlockLayout, ContentLayout } from '@layout/index'

export const Section8 = () => (
  <ContentLayout contentDirection="column">
    <Section contentDirection="column" bottom={120}>
      <BlockLayout directionRow jc="space-between">
        <Title size="extrabold_2" top={15}>
          Our blog
        </Title>
        <BlockLayout width={235} directionRow jc="space-between">
          <CommonButton color="light" radius="M" width="S" height="L" handleClick={() => {}} />
          <CommonButton color="light" radius="M" width="S" height="L" handleClick={() => {}} />
        </BlockLayout>
      </BlockLayout>
      <CardsContainer height={482} top={50} bottom={120} directionRow gap={30}>
        <div>asdasd</div>
      </CardsContainer>
    </Section>
  </ContentLayout>
)
