import React from 'react'

export interface ISectionWrapper {
  top?: number
  bottom?: number
}

export interface ISection extends ISectionWrapper {
  children: React.ReactNode
}
