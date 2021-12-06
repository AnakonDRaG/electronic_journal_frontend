import { Heading, Text } from 'evergreen-ui'

import styled from 'styled-components'
import { Card } from 'uikit/molecules'

export const NotificationContainer = styled(Card)`
  background-color: ${({ theme }) => theme.palette.yellow.light};

  * {
    color: ${({ theme }) => theme.palette.yellow.dark};
  }
`

export const Title = styled(Heading).attrs({
  size: 900,
})`
  margin-bottom: ${({ theme }) => theme.indent.large}px;
`
