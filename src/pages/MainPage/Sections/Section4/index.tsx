import React from 'react'

import { Banner, CommonButton, Paragraph, Section, Title } from '@components/index'
import { brandImages, successData } from '@constants/index'
import { BlockLayout, ContentLayout } from '@layout/index'

export const Section4 = () => (
  <ContentLayout contentDirection="column">
    <Title size="extrabold_2" top={115}>
      We provide services that guarantee your success
    </Title>
    <Section bottom={50}>
      <BlockLayout width={540} directionRow jc="space-between" top={20}>
        {successData.map(({ title, text }) => (
          <BlockLayout width={160} key={title}>
            <Title size="extra" color="blue" bottom={-20}>
              {title}
            </Title>
            <Paragraph size="regular_2">{text}</Paragraph>
          </BlockLayout>
        ))}
      </BlockLayout>
      <BlockLayout width={540} top={49}>
        <Paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </Paragraph>
      </BlockLayout>
    </Section>
    <BlockLayout directionRow bottom={80}>
      {brandImages.map(({ alt, src }) => (
        <img key={alt} src={src} alt={alt} />
      ))}
    </BlockLayout>
  </ContentLayout>
)
