import { Pane } from 'evergreen-ui'
import styled, { css } from 'styled-components'

const SIDE_BAR_WIDTH = 200

export const SideBarContainer = styled(Pane)`
  position: relative;
  width: ${({ theme }) => `${SIDE_BAR_WIDTH + theme.indent.default}px`};
  margin-right: ${({ theme }) => `${theme.indent.default}px`};
`

export const SideBarComponent = styled(Pane)`
  position: fixed;

  width: ${`${SIDE_BAR_WIDTH}px`};
  height: calc(100vh - ${({ theme }) => `${theme.indent.default * 3}px`});
  background: ${({ theme }) => theme.custom.colors.white};
  left: ${({ theme }) => `${theme.indent.default}px`};
  padding: ${({ theme }) => `${theme.indent.default}px`};
  border-radius: ${({ theme }) => `${theme.border.default}px`};
`

export const UserContainer = styled(Pane).attrs({
  gap: 12,
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`

export const AvatarContainer = styled(Pane)``
