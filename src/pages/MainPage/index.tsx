import React, { useEffect } from 'react'

import banner_1 from '@assets/webp/home_page/banner_1.webp'
import banner_1_mobile from '@assets/webp/home_page/banner_1_mobile.webp'
import { Banner, CircleButton, CommonButton, MainTitle, Paragraph, Section, Title } from '@components/index'
import { BlockLayout, ContentLayout } from '@layout/index'

export const MainPage = () => (
  <ContentLayout bgColor="default" contentDirection="column">
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

    <Banner bannerDesktop={banner_1} bannerMobile={banner_1_mobile} />

    <Section top={114} bottom={120}>
      <MainTitle width={540}>
        The <span>newest</span> business analytics platform
      </MainTitle>
      <BlockLayout width={540}>
        <Paragraph top={10} bottom={30}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </Paragraph>
        <CommonButton buttonSize="medium" color="blue" name="Discover more" radius="small" handleClick={() => {}} />
      </BlockLayout>
    </Section>
  </ContentLayout>
)
