import React from 'react'

import { ContentDirection } from '@interfaces/index'

export interface ISectionWrapper {
  top?: number
  bottom?: number
  contentDirection?: ContentDirection
}

export interface ISection extends ISectionWrapper {
  children: React.ReactNode
}
