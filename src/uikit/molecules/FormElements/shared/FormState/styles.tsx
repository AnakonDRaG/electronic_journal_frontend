import { Pane, Text } from 'evergreen-ui'
import styled from 'styled-components'

export const Container = styled(Pane)``

export const LabelMessage = styled(Text).attrs({
  type: 'display2',
  color: 'grey',
})<{ disabled?: boolean }>`
  margin-bottom: 5px;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`

export const ErrorMessage = styled(Text).attrs({
  type: 'display3',
  color: 'red',
  numberOfLines: 2,
})`
  margin-top: 5px;
  min-height: 16px;
`
