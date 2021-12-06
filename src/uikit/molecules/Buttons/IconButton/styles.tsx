import { Button, Colors, Pane } from 'evergreen-ui'
import styled, { css } from 'styled-components'
import { Card } from 'uikit/molecules'
import { border } from 'uikit/styles/theme'
import { hexToRGB } from 'utils/helper'

export const IconContainer = styled(Button).attrs({
  appearance: 'minimal',
})<{ background: string; disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ background }) => background};
  border-radius: ${({ theme }) => theme.border.default}px;

  &:hover {
    background: ${({ background }) => hexToRGB(background, 0.7)} !important;
    transition: 0.25s;
  }

  &:active {
    background: ${({ background }) => background} !important;
    transform: scale(1.1);
  }

  transition: 0.1s;

  ${({ disabled }) =>
    disabled &&
    css`
      transform: scale(0.9);
    `}
`

export const IconComponent = styled(Pane)`
  transform: translateY(10%);
`
