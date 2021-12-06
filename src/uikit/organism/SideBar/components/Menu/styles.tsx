import { Pane, UnorderedList } from 'evergreen-ui'
import styled from 'styled-components'

export const MenuContainer = styled(Pane)`
  margin-top: ${({ theme }) => theme.indent.large}px;
`

export const MenuListContainer = styled(Pane)`
  display: flex;
  flex-direction: column;
  width: 100%;
`
