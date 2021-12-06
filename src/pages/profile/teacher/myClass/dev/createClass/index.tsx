import { zodResolver } from '@hookform/resolvers/zod'
import { createClassRequest } from 'api/class'
import { Pane } from 'evergreen-ui'
import { Field } from 'Form'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useApplicationStorage } from 'storage/useApplicationStorage'
import { useTheme } from 'styled-components'
import { Card } from 'uikit/molecules'
import IconButton from 'uikit/molecules/Buttons/IconButton'
import Form from 'uikit/organism/Form'
import { number } from 'zod'
import { Header } from '../../../../../signup/styled'

export interface CreateClassForm {
  classroomTeacherId: number
  name: string
}

const CreateClassPage = () => {
  const theme = useTheme()
  const { userData } = useApplicationStorage()

  const {
    control,
    handleSubmit,
    trigger,
    formState: { isValid, errors },
    watch,
    getValues,
    setValue,
  } = useForm<CreateClassForm>({
    reValidateMode: 'onBlur',
  })

  const CREATE_CLASS_FIELDS: Field[] = [
    {
      type: 'input',
      name: 'name',
      label: 'Class name',
    },
  ]

  const onSubmit = async (data: CreateClassForm) => {
    data.classroomTeacherId = Number(userData?.id)
    console.log(data)
    await createClassRequest(data)
  }

  return (
    <Pane>
      <Card padding={48}>
        <Pane display="flex" gap={24}>
          <Header>📝</Header>
          <Header maxWidth={600}>Create class</Header>
        </Pane>
        Teacher id: {userData?.id}
        <Form
          fields={CREATE_CLASS_FIELDS}
          {...{
            trigger,
            errors,
            control,
            handleSubmit,
          }}
        />
        <Pane display="flex" justifyContent="flex-end">
          <IconButton
            background={theme.palette.green.base}
            icon={{
              name: 'new-object',
              size: 48,
              color: theme.palette.green.lightest,
            }}
            onClick={handleSubmit(onSubmit)}
            disabled={!isValid}
          />
        </Pane>
      </Card>
    </Pane>
  )
}

export default CreateClassPage
