import React from 'react'

export interface IBannerContainer {
  width?: number
  background?: boolean
}

export interface IBanner extends IBannerContainer {
  children?: React.ReactNode
  bannerDesktop: string
  bannerMobile?: string
}
