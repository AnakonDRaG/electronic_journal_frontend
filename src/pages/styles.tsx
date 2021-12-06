import { Pane, PaneOwnProps } from 'evergreen-ui'
import React from 'react'
import { Container, ContainerProps, Row } from 'react-bootstrap'
import styled from 'styled-components'

export const PageContainer = styled(Pane)`
  position: relative;
  padding: 1em;
` as React.ComponentType<ContainerProps>

export const BoxContainer = styled(Pane)`
  margin: auto;
`

export const ColumnsContainer = styled(Pane).attrs({
  justifyContent: 'space-between',
  alignItems: 'center',
})``
