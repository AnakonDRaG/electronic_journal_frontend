import {
  CardProps,
  Heading,
  ListItem,
  OrderedList,
  Pane,
  Table,
  Tablist,
  Text,
} from 'evergreen-ui'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { Card } from 'uikit/molecules/Components'

export const LessonContainer = styled(Card).attrs({})<CardProps>`
  overflow: hidden;
  background-color: ${({ theme }) => theme.custom.colors.white};
  margin-bottom: 12px;
`

export const LessonHeaderContainer = styled(Pane)``

export const LessonHeader = styled(Card)`
  padding: ${({ theme }) => `${theme.indent.large}px`};
`

export const LessonListContainer = styled(Tablist)`
  list-style: none;
`

export const LessonTableRow = styled(Table.Row).attrs({
  borderBottom: false,
})`
  margin-bottom: ${({ theme }) => `${theme.indent.small}px`};

  border-radius: ${({ theme }) => `${theme.border.default}px`};
  &:hover {
    background: ${({ theme }) => theme.colors.background.blueTint};
    transition: 0.05s;
  }
  transition: 0.025s;
`

export const SubjectIndexBox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${({ theme }) => theme.colors.background.blueTint};
  color: ${({ theme }) => theme.palette.blue.base};
  padding: ${({ theme }) => `${theme.indent.default}px`};
  border-radius: ${({ theme }) => `${theme.border.default}px`};
`

export const HomeWorkComponent = styled(Pane)`
  &:hover {
    cursor: help;
  }
`
