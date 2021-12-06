import styled from 'styled-components/native'
import { IconButton as RNIconButton } from 'uikit/molecules/Buttons'
import TextInputMask from 'react-native-text-input-mask'
import type { Color } from 'uikit/styles/types'
import { Container } from 'uikit/molecules/FormElements/shared'
import type { FormStateProps } from 'uikit/molecules/FormElements/shared/FormState'

export { Container }

interface InputWrapperProps extends Pick<FormStateProps, 'disabled'> {
  error?: string
  active?: boolean
}

const getBorderColor = ({
  error,
  active,
  disabled,
}: InputWrapperProps): Color => {
  if (error && !disabled && !active) {
    return 'red'
  }

  if (active) {
    return 'softBlue'
  }

  return 'transparent'
}

const getBorderWidth = ({ error }: InputWrapperProps): number => {
  if (error) {
    return 2
  }
  return 1
}

export const InputWrapper = styled.View<InputWrapperProps>`
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border-width: ${props => getBorderWidth(props)}px;
  border-color: ${({ theme, ...props }) => theme.colors[getBorderColor(props)]};
`

export const TextInput = styled(TextInputMask).attrs(({ theme }) => ({
  underlineColorAndroid: 'transparent',
  placeholderTextColor: theme.colors.grey,
  returnKeyType: 'done',
}))`
  flex: 1;
  padding: 0;
  font-family: ${({ theme }) => theme.primaryFont.regular};
  font-size: ${({ theme }) => theme.typeScale.display1};
  color: ${({ theme }) => theme.colors.black};
`

export const IconButton = styled(RNIconButton)`
  margin-left: auto;
`

export const IconContainer = styled.View`
  margin-left: auto;
`
