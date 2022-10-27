import React from 'react'

import { CommonButton, MainTitle, Paragraph, Section } from '@components/index'
import { BlockLayout, ContentLayout } from '@layout/index'

export const Section2 = () => (
  <ContentLayout background="default" contentDirection="column">
    <Section top={114} bottom={120}>
      <MainTitle width={540} top={-27}>
        The <span>newest</span> business analytics platform
      </MainTitle>
      <BlockLayout width={540}>
        <Paragraph top={10} bottom={30}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis <br />
          et quasi architecto beatae vitae dicta sunt explicabo.
        </Paragraph>
        <CommonButton
          width="XL"
          height="M"
          isShadow
          color="primary"
          name="Discover more"
          radius="S"
          handleClick={() => {}}
        />
      </BlockLayout>
    </Section>
  </ContentLayout>
)
