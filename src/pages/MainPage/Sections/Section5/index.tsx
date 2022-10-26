import React from 'react'

import { CardsContainer, CommonCard, Paragraph, Section, Title } from '@components/index'
import { benefitsData } from '@constants/index'
import { BlockLayout, ContentLayout } from '@layout/index'

export const Section5 = () => (
  <ContentLayout contentDirection="column" background="light">
    <Section>
      <BlockLayout width={540}>
        <Title size="extrabold_2" bottom={30}>
          The benefits of Ensome
        </Title>
        <Paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </Paragraph>
      </BlockLayout>
      <CardsContainer width={540} height={600} top={120} bottom={120} gap={30}>
        {benefitsData.map(({ src, alt, title, paragraph }) => (
          <CommonCard
            key={title}
            src={src}
            alt={alt}
            title={title}
            paragraph={paragraph}
            width={255}
            titleSize="bold_5"
            paragraphSize="regular_3"
            imgSize="L"
            topTitle={17}
            bottomTitle={11}
            radius="S"
            offset={3}
          />
        ))}
      </CardsContainer>
    </Section>
  </ContentLayout>
)
