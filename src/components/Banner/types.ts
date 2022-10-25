import React from 'react'

export interface IBannerContainer {
  height?: number
  width?: number
}

export interface IBanner extends IBannerContainer {
  children?: React.ReactNode
  bannerDesktop: string
  bannerMobile?: string
}
