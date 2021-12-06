import { Overlay, Pane } from 'evergreen-ui'
import styled, { css } from 'styled-components'
import { hexToRGB } from 'utils/helper'

export const ScreenLoaderContainer = styled(Pane)<{ isShown: boolean }>`
  position: fixed;
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  z-index: 9999;
`

export const OverlayBackgroundComponent = styled(Pane)`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #ebf0ff;
`

export const SpinnerContainer = styled(Pane)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 100;
`
