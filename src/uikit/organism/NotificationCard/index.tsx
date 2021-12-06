import { CardProps, Pane, Text } from 'evergreen-ui'
import React from 'react'
import { NotificationContainer, Title } from './styles'

export interface NotificationCardProps extends CardProps {
  title: string
  content: JSX.Element
}

const NotificationCard = ({
  title,
  content,
  ...props
}: NotificationCardProps) => {
  return (
    <NotificationContainer {...props}>
      <Title>{title}</Title>
      <Pane>{content}</Pane>
    </NotificationContainer>
  )
}

export default NotificationCard
