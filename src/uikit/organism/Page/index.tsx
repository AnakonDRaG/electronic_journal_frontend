import { Heading, Pane } from 'evergreen-ui'
import React, { ComponentProps } from 'react'
import { useTheme } from 'styled-components'
import { Title } from './styles'

export interface PageProps extends ComponentProps<any> {
  title?: string
}

const Page = ({ title, children, ...props }: PageProps) => {
  return (
    <Pane>
      {title && <Title>{title}</Title>}
      <Pane>{children}</Pane>
    </Pane>
  )
}

export default Page
