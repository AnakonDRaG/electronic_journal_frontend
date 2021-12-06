import { Heading } from 'evergreen-ui'
import styled from 'styled-components'

export const Title = styled(Heading).attrs({
  size: 800,
})`
  color: ${({ theme }) => theme.palette.neutral.base};
  margin-bottom: ${({ theme }) => theme.indent.large}px;
`
