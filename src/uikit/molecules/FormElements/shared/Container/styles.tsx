import { Pane } from 'evergreen-ui'
import styled from 'styled-components'
import type { FormStateProps } from '../FormState'

export const Container = styled(Pane)<Pick<FormStateProps, 'disabled'>>`
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`
