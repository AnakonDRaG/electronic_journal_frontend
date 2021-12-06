import { zodResolver } from '@hookform/resolvers/zod'
import { createClassRequest } from 'api/class'
import { createSubject } from 'api/subject'
import { Pane } from 'evergreen-ui'
import { Field } from 'Form'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useApplicationStorage } from 'storage/useApplicationStorage'
import { useTheme } from 'styled-components'
import { Card } from 'uikit/molecules'
import IconButton from 'uikit/molecules/Buttons/IconButton'
import Form from 'uikit/organism/Form'
import { Header } from '../../../../signup/styled'

export interface SubjectForm {
  name: string
}

const CreateSubjectPage = () => {
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
  } = useForm<SubjectForm>({
    reValidateMode: 'onBlur',
  })

  const FIELDS: Field[] = [
    {
      type: 'input',
      name: 'name',
      label: 'Subject name',
    },
  ]

  const onSubmit = async (data: SubjectForm) => {
    const response = await createSubject(data)
    console.log(response)

    if (response.success) {
      await router.back()
    }
  }

  return (
    <Pane>
      <Card padding={48}>
        <Pane display="flex" gap={24}>
          <Header>📝</Header>
          <Header maxWidth={600}>Create subject</Header>
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

export default CreateSubjectPage
