import { TextInputField } from 'evergreen-ui'
import { FormProps } from 'Form'
import React, { useState } from 'react'

import { Icon } from 'uikit/atoms'
import { FormState } from '../shared'
import type { FormStateProps } from '../shared/FormState'

import {
  Container,
  IconButton,
  IconContainer,
  InputWrapper,
  TextInput,
} from './styles'

export interface InputProps extends FormStateProps, FormProps {
  mode?: 'default' | 'secure' | 'calendar' | 'card'
}

const Input = ({
  mode = 'default',
  value,
  onChangeText,
  label,
  error,
  disabled,
  ...inputProps
}: InputProps) => {
  const [active, setActive] = useState<boolean>(false)
  const [secureText, setSecureText] = useState<boolean>(mode === 'secure')
  const [dateVisible, setDateVisible] = useState<boolean>(false)

  const onFocus = () => setActive(true)

  const onBlur = () => setActive(false)

  const toggleSecureText = () => setSecureText(!secureText)

  const onChangeDate = (date: string) => {
    setDateVisible(false)
    onChangeText && onChangeText(date)
  }

  const onHideDate = () => setDateVisible(false)

  const onShowDate = () => setDateVisible(true)

  return (
    <FormState {...{ label, error, disabled }}>
      <Container {...{ disabled }}>
        <InputWrapper {...{ error, active, disabled }}>
          <TextInput
            secureTextEntry={secureText}
            editable={!disabled}
            {...{ value, onChangeText, onFocus, onBlur }}
            {...(inputProps as any)}
          />
          <TextInputField
            label="Default text input field"
            hint="This is a hint."
            placeholder="Placeholder text"
          />

          {mode === 'calendar' && (
            <>
              <IconButton
                icon={{
                  name: 'calendar',
                  size: 22,
                  fill: 'transparent',
                  stroke: 'strongGrey',
                  strokeWidth: 1.5,
                }}
                onPress={onShowDate}
              />
            </>
          )}
        </InputWrapper>
      </Container>
    </FormState>
  )
}

export default Input
