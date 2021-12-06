import React, { useState } from 'react'
import { BoxContainer, PageContainer } from './styles'
import { Button, Pane, Heading } from 'evergreen-ui'
import { Container } from 'react-bootstrap'

const Main = () => {
  return (
    <PageContainer>
      <Container>
        <Pane>
          <Heading size={900}>WELCOME TO ONLINE JOURNAL</Heading>
        </Pane>
      </Container>
    </PageContainer>
  )
}

export default Main
