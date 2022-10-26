import React from 'react'

import { JustifyContent } from '@interfaces/index'

export interface IBlockWrapper {
  width?: number
  top?: number
  bottom?: number
  directionRow?: boolean
  jc?: JustifyContent
}
export interface IBlockLayout extends IBlockWrapper {
  children: React.ReactNode
}
