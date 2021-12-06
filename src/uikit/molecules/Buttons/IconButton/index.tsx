import { ButtonProps } from 'evergreen-ui'
import React from 'react'
import { Icon } from 'uikit/atoms'
import { IconProps } from 'uikit/atoms/Icon'
import { IconComponent, IconContainer } from './styles'

interface IconButtonProps extends ButtonProps {
  background: string
  icon: IconProps
  disable?: boolean
}

const IconButton = ({
  background,
  icon,
  disable = false,
  ...props
}: IconButtonProps) => {
  return (
    <IconContainer {...{ background, disable, ...props }}>
      <IconComponent>
        <Icon {...icon} />
      </IconComponent>
    </IconContainer>
  )
}

export default IconButton
