declare module 'Form' {
  interface BaseField {
    name: string
    label?: string
    value?: string
    subtitle?: string
    validationMessage?: string
    gutter?: number
    error?: any
    hint?: string
  }

  type InputProps = BaseField &
    import('react-hook-form/dist/types/fields').FieldElement & {
      type: 'input'
      placeholder?: string
    }

  type PasswordInputProps = typeof InputProps & {
    type: 'password'
  }

  type DateProps = typeof InputProps & {
    type: 'date'
  }

  type RadioGroupProps = BaseField & {
    type: 'radioPicker'
    options: { label: string; value: string }[]
  }

  type FCProps = BaseField & {
    type: 'fc'
    component: React.FC
  }

  type Field =
    | InputProps
    | PasswordInputProps
    | RadioGroupProps
    | DateProps
    | FCProps

  interface FormProps {
    control: any
    fields: Field[]
    trigger: import('react-hook-form').UseFormTrigger<any>
    errors: import('react-hook-form').DeepMap<
      any,
      import('react-hook-form').FieldError
    >
    gutter?: number
  }
}
