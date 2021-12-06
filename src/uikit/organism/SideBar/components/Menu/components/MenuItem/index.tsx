import { Colors, LinkProps, Pane } from 'evergreen-ui'
import React, { forwardRef } from 'react'
import { Icon } from 'uikit/atoms'
import { IconProps } from 'uikit/atoms/Icon'

import {
  IconComponent,
  IconContainer,
  MenuItemContainer,
  TextContainer,
} from './styles'

export interface MenuItemProps extends LinkProps {
  icon: Omit<IconProps, 'color'>
  text: string
  color: Colors | any
  background: Colors | any
  active?: boolean
}

const MenuItem = forwardRef(
  ({
    icon,
    text,
    color = 'blue',
    background,
    active = false,
    href,
    ...props
  }: MenuItemProps) => (
    <MenuItemContainer {...{ active, ...props }} hoverBg={background}>
      <Pane display="flex" alignItems={'center'}>
        <IconContainer background={background}>
          <IconComponent>
            <Icon name={icon.name} size={icon.size} color={color} />
          </IconComponent>
        </IconContainer>
        <TextContainer color={color}>{text}</TextContainer>
      </Pane>
    </MenuItemContainer>
  ),
)

export default MenuItem
