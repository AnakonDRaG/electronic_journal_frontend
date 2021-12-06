import React, { FC } from 'react'
import { Container, LabelMessage, ErrorMessage } from './styles'

interface LabelProps {
  label?: JSX.Element | string
  disabled?: boolean
}

const Label = ({ label, disabled }: LabelProps) => {
  if (!label) {
    return null
  }

  if (typeof label === 'string') {
    return <LabelMessage {...{ disabled }}>{label}</LabelMessage>
  }

  return <label />
}

export interface FormStateProps extends Pick<LabelProps, 'label'> {
  error?: string
  disabled?: boolean
  active?: boolean
}

const FormState: FC<FormStateProps> = ({
  children,
  label,
  error,
  disabled,
  active,
}) => {
  return (
    <Container>
      <Label {...{ label, disabled }} />
      {children}
      {/* {error && error.length > 1 && <ErrorMessage>{error}</ErrorMessage>} */}
      <ErrorMessage>
        {!!error && !disabled && !active ? error : ' '}
      </ErrorMessage>
    </Container>
  )
}

export default FormState
