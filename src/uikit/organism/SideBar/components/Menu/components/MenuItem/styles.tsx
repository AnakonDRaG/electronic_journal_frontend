import { Heading, HeadingProps, LinkProps, Pane } from 'evergreen-ui'
import React from 'react'
import styled, { css } from 'styled-components'
import { Card } from 'uikit/molecules/Components'

export const MenuItemContainer = styled.a<{
  hoverBg: string
  active: boolean
}>`
  display: flex;
  align-items: center;
  padding: 0;
  border-radius: ${({ theme }) => theme.border.default}px;

  ${({ active, hoverBg }) =>
    active &&
    css`
      background-color: ${hoverBg};
    `}

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  &:hover {
    background-color: ${({ hoverBg }) => hoverBg};
    cursor: pointer;
    transition: 0.5s;
  }

  transition: 0.25s;
`

export const IconContainer = styled(Card)<{ background: any }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ background }) => background};
`

export const TextContainer = styled(Heading)`
  margin-left: ${({ theme }) => theme.indent.default}px;
` as React.FC<HeadingProps>

export const IconComponent = styled(Pane)`
  transform: translateY(10%);
`
