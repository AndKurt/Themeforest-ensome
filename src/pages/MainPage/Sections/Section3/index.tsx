import React from 'react'

import banner_2 from '@assets/webp/home_page/banner_2.webp'
import banner_2_mobile from '@assets/webp/home_page/banner_2_mobile.webp'
import { Banner, CommonButton, Paragraph, Title } from '@components/index'
import { BlockLayout, ContentLayout } from '@layout/index'

export const Section3 = () => (
  <ContentLayout contentDirection="column" background="light">
    <Banner bannerDesktop={banner_2} bannerMobile={banner_2_mobile} width={929}>
      <BlockLayout width={540} top={10}>
        <Title size="extrabold_2" bottom={30}>
          Radically new solutions <br />
          for data
        </Title>
        <Paragraph bottom={30}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </Paragraph>
        <CommonButton
          width="XL"
          color="primary"
          bottom={20}
          isShadow
          name="Learn more"
          radius="S"
          handleClick={() => {}}
        />
      </BlockLayout>
    </Banner>
  </ContentLayout>
)
