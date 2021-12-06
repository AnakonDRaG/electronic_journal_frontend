import { Button, RadioGroup, TextInputField } from 'evergreen-ui'
import { FormProps } from 'Form'
import React, { FormEvent, useEffect } from 'react'
import { Controller } from 'react-hook-form'
import { FormContainer } from 'uikit/organism/Form/styles'

const Form = ({ control, fields, trigger, errors, gutter = 12 }: FormProps) => {
  const onChangeText = (
    text: any,
    onChange: (...event: any[]) => void,
    name: any,
  ) => {
    onChange(text)
    trigger(name)
  }

  return (
    <FormContainer gap={gutter}>
      {fields.map(field => {
        if (field.type === 'input') {
          return (
            <Controller
              control={control}
              name={field.name}
              render={({ field: { onChange, value } }) => (
                <TextInputField
                  hint={field.hint}
                  label={field.label}
                  description={field.subtitle}
                  placeholder={field.placeholder}
                  onChange={(e: any) =>
                    onChangeText(e.target.value, onChange, field.name)
                  }
                  validationMessage={errors[field.name]?.message || field.error}
                  value={value}
                  onBlur={() => trigger(field.name)}
                  isInvalid={errors[field.name] !== undefined}
                />
              )}
            />
          )
        }
        if (field.type === 'date') {
          return (
            <Controller
              control={control}
              name={field.name}
              render={({ field: { onChange, value } }) => (
                <TextInputField
                  type="date"
                  hint={field.hint}
                  label={field.label}
                  description={field.subtitle}
                  placeholder={field.placeholder}
                  onChange={(e: any) =>
                    onChangeText(e.target.value, onChange, field.name)
                  }
                  validationMessage={errors[field.name]?.message || field.error}
                  value={value}
                  onBlur={() => trigger(field.name)}
                  isInvalid={errors[field.name] !== undefined}
                />
              )}
            />
          )
        }
        if (field.type === 'password') {
          return (
            <Controller
              control={control}
              name={field.name}
              render={({ field: { onChange, value } }) => (
                <TextInputField
                  type="password"
                  label={field.label}
                  description={field.subtitle}
                  placeholder={field.placeholder}
                  onChange={(e: any) =>
                    onChangeText(e.target.value, onChange, field.name)
                  }
                  validationMessage={errors[field.name]?.message || field.error}
                  value={value}
                  onBlur={() => trigger(field.name)}
                  isInvalid={errors[field.name] !== undefined}
                />
              )}
            />
          )
        }
        if (field.type === 'radioPicker') {
          return (
            <Controller
              control={control}
              name={field.name}
              render={({ field: { onChange, value } }) => (
                <RadioGroup
                  label={field.label}
                  options={field.options}
                  onChange={(e: any) =>
                    onChangeText(e.target.value, onChange, field.name)
                  }
                  value={value}
                  marginBottom={18}
                />
              )}
            />
          )
        }
      })}
    </FormContainer>
  )
}

export default Form
