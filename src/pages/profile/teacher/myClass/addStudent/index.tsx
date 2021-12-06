import { addStudentToClass, createClassRequest } from 'api/class'
import { Pane } from 'evergreen-ui'
import { Field } from 'Form'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { Card } from 'uikit/molecules'
import IconButton from 'uikit/molecules/Buttons/IconButton'
import Form from 'uikit/organism/Form'
import { Header } from '../../../../signup/styled'

export interface AddStudentToClassForm {
  studentId: number
  classId: number
}

const AddStudent = () => {
  const theme = useTheme()
  const router = useRouter()

  const {
    control,
    handleSubmit,
    trigger,
    formState: { isValid, errors },
    watch,
    getValues,
    setValue,
  } = useForm<AddStudentToClassForm>({
    reValidateMode: 'onBlur',
  })

  const FIELDS: Field[] = [
    {
      type: 'input',
      name: 'studentId',
      label: 'Student id',
    },
  ]

  const onSubmit = async (data: AddStudentToClassForm) => {
    data.classId = Number(router.query!.classId)
    const response = await addStudentToClass(data)
    if (response.success) {
      await router.back()
    }
  }
  return (
    <Pane>
      <Card padding={48}>
        <Pane display="flex" gap={24}>
          <Header>📝</Header>
          <Header maxWidth={600}>Add student to class</Header>
        </Pane>
        <Form
          fields={FIELDS}
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

export default AddStudent
