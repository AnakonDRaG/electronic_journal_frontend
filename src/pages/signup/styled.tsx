import { Heading, Pane } from 'evergreen-ui'
import styled from 'styled-components'
import { Card } from 'uikit/molecules'

export const FormContainer = styled(Pane)``

export const Header = styled(Heading).attrs({
  size: 900,
})`
  color: ${({ theme }) => theme.colors.text.default};
  margin-bottom: ${({ theme }) => theme.indent.large}px;
`

export const BottomButtonContainer = styled(Pane)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StepContainer = styled(Pane)`
  display: flex;
  align-items: center;
`

export const StepTextContainer = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background: ${({ theme }) => theme.colors.background.blueTint};
`
