import React, { memo } from 'react'

import { TitleElement } from './styled'

import { ITitle } from '../types'

export const MainTitle = memo(({ children, width }: ITitle) => <TitleElement width={width}>{children}</TitleElement>)
