import React from 'react'

import { BannerContainer, BannerImg } from './styled'
import { IBanner } from './types'

export const Banner = ({ children, bannerDesktop, bannerMobile, width, background }: IBanner) => (
  <BannerContainer background={background}>
    <picture>
      <source media="(min-width: 361px) and (max-width: 1920px)" srcSet={bannerDesktop} />
      <source media="(min-width: 360px)" srcSet={bannerMobile} />
      <BannerImg src={bannerMobile || bannerDesktop} alt="banner" width={width} />
    </picture>
    {children}
  </BannerContainer>
)
