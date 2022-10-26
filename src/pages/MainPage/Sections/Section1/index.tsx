import React from 'react'

import banner_1 from '@assets/webp/home_page/banner_1.webp'
import banner_1_mobile from '@assets/webp/home_page/banner_1_mobile.webp'
import { Banner, CircleButton, Paragraph, Section, Title } from '@components/index'
import { BlockLayout, ContentLayout } from '@layout/index'

export const Section1 = () => (
  <ContentLayout background="default" contentDirection="column">
    <Section top={70} bottom={88}>
      <Title width={540}>
        Find true power in your data with <span>Ensome</span>
      </Title>
      <BlockLayout width={350}>
        <Paragraph top={4} size="regular_2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
        </Paragraph>
        <CircleButton name="Learn more" handleClick={() => {}} />
      </BlockLayout>
    </Section>
    <Banner bannerDesktop={banner_1} bannerMobile={banner_1_mobile} width={1920} />
  </ContentLayout>
)
