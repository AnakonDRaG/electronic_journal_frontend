import React from 'react'
import { Avatar, Heading, Pane, Text } from 'evergreen-ui'
import { Col, Row } from 'react-bootstrap'
import { Card } from 'uikit/molecules/Components'

export interface StudentCardProps {
  fullName: string
}

const StudentCard = ({ fullName }: StudentCardProps) => {
  return (
    <Card>
      <Row>
        <Col>
          <Heading>Student</Heading>
          <Text>{fullName}</Text>
        </Col>
        <Col>
          <Avatar name={fullName} size={40} />
        </Col>
      </Row>
    </Card>
  )
}

export default StudentCard
