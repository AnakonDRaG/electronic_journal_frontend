import React, { FC } from 'react'
import styled from 'styled-components'
import { Card as CardBase } from 'evergreen-ui'

export const Card = styled(CardBase)<{ padding?: number; background?: string }>`
  padding: ${({ theme, padding }) => padding || theme.indent.default}px;
  background-color: ${({ theme, background }) =>
    background ?? theme.custom.colors.white};
  border-radius: ${({ theme }) => `${theme.indent.default}px`};
`

export default Card
