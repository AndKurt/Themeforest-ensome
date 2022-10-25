import styled from 'styled-components/macro'

import { IBlockWrapper } from './types'

export const BlocWrapper = styled.div<IBlockWrapper>`
  display: flex;
  flex-direction: column;
  max-width: ${({ width }) => (width ? `${width}px` : '100%')};
  position: relative;
  width: 100%;
`
