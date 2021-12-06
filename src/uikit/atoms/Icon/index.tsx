import { Colors } from 'evergreen-ui'
import React from 'react'

import { IconName, IconSize, Icon as IconCore } from '@blueprintjs/core'
import { IconComponent } from 'uikit/atoms/Icon/styles'

export interface IconProps {
  name: IconName
  size?: IconSize | number
  color?: Colors | any
}

const Icon = ({ name, size = 48, color }: IconProps) => {
  return <IconCore icon={name} {...size} color={color} />
}

export default Icon
