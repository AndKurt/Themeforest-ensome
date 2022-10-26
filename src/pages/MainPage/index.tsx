import React, { useEffect } from 'react'

import banner_1 from '@assets/webp/home_page/banner_1.webp'
import banner_1_mobile from '@assets/webp/home_page/banner_1_mobile.webp'
import banner_2 from '@assets/webp/home_page/banner_2.webp'
import banner_2_mobile from '@assets/webp/home_page/banner_2_mobile.webp'
import { Banner, CircleButton, CommonButton, MainTitle, Paragraph, Section, Title } from '@components/index'
import { brandImages, successData } from '@constants/index'
import { BlockLayout, ContentLayout } from '@layout/index'

export const MainPage = () => (
  <ContentLayout bgColor="default" contentDirection="column">
    {/* SECTION-1 */}
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

    {/* SECTION-2 */}
    <Section top={114} bottom={120}>
      <MainTitle width={540}>
        The <span>newest</span> business analytics platform
      </MainTitle>
      <BlockLayout width={540}>
        <Paragraph top={10} bottom={30}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis <br />
          et quasi architecto beatae vitae dicta sunt explicabo.
        </Paragraph>
        <CommonButton buttonSize="medium" color="blue" name="Discover more" radius="small" handleClick={() => {}} />
      </BlockLayout>
    </Section>

    {/* SECTION-3 */}
    <Banner bannerDesktop={banner_2} bannerMobile={banner_2_mobile} width={929} background>
      <BlockLayout width={540} top={-10}>
        <Title size="extrabold_2" bottom={30}>
          Radically new solutions <br />
          for data
        </Title>
        <Paragraph bottom={30}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </Paragraph>
        <CommonButton buttonSize="medium" color="blue" name="Learn more" radius="small" handleClick={() => {}} />
      </BlockLayout>
    </Banner>

    {/* SECTION-4 */}
    <>
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
      <BlockLayout directionRow>
        {brandImages.map(({ alt, img }) => (
          <img key={alt} src={img} alt={alt} />
        ))}
      </BlockLayout>
    </>
  </ContentLayout>
)
