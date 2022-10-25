import React from 'react'

export interface IBlockWrapper {
  width?: number
}
export interface IBlockLayout extends IBlockWrapper {
  children: React.ReactNode
}
