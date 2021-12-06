import React from 'react'
import {
  DefaultTheme,
  StyledComponentPropsWithRef,
  ThemedStyledFunctionBase,
} from 'styled-components'
import { deprecatedDefaultTheme } from 'evergreen-ui'

type CustomTheme = typeof deprecatedDefaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {
    indent: typeof indent
    border: typeof border
    custom: typeof custom
  }
}

export const custom = {
  colors: {
    white: '#FFFFFF',
  },
}

export const border = {
  default: 12,
}

export const indent = {
  small: 8,
  default: 12,
  large: 18,
}

export const defaultTheme: DefaultTheme = {
  ...deprecatedDefaultTheme,
  border,
  custom,
  indent,
}
