import { SignUpRequest } from 'api/auth'
import { useAuth } from 'hooks/useAuth'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Field } from 'Form'
import { Button, Heading, Pane, Text } from 'evergreen-ui'
import { Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useLocalStorage } from 'react-use-storage'
import { useStorage } from '../../common/storage/useStorage'
import { useTheme } from 'styled-components'
import { Icon } from 'uikit/atoms'
import IconButton from 'uikit/molecules/Buttons/IconButton'
import { Card } from 'uikit/molecules/Components'
import { NotificationCard, Page } from 'uikit/organism'
import Form from 'uikit/organism/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useStep } from './hooks/useStep'
import { FirstStepScheme } from './validation'
import {
  BottomButtonContainer,
  FormContainer,
  Header,
  StepTextContainer,
} from './styled'

export interface SignUpForm {
  login: string
  password: string
  confirmPassword: string
  role: string
  human: Omit<Human, 'user' | 'role'>
}

const SignInPage = () => {
  const { isAuth, registration } = useAuth()
  const router = useRouter()

  const theme = useTheme()
  const totalSteps = 1
  const { currentStep, onPrevStep, onNextStep } = useStep(totalSteps)

  const {
    control,
    handleSubmit,
    trigger,
    formState: { isValid, errors },
    getValues,
  } = useForm<SignUpForm>({
    reValidateMode: 'onBlur',
    resolver: zodResolver(FirstStepScheme),
  })

  const FIRST_STEP_FIELDS: Field[] = [
    {
      type: 'input',
      name: 'login',
      label: 'Email',
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password',
    },
    {
      type: 'password',
      name: 'confirmPassword',
      label: 'Confirm password',
    },
  ]

  const SECOND_STEP_FIELDS: Field[] = [
    {
      type: 'input',
      name: 'human.firstname',
      label: 'First name',
    },
    {
      type: 'input',
      name: 'human.lastName',
      label: 'Last name',
    },
    {
      type: 'date',
      name: 'human.birthDate',
      label: '🎁 Birth date',
    },
    {
      type: 'radioPicker',
      name: 'role',
      options: [
        { label: 'Student', value: 'student' },
        { label: 'Teacher', value: 'teacher' },
      ],
      label: 'Role',
    },
  ]

  const onSubmit = async () => {
    await registration(getValues())
  }

  if (isAuth()) {
    return (
      <NotificationCard
        padding={64}
        textAlign="center"
        title={'🤓'}
        content={
          <Pane>
            <Pane>
              <Heading>REALLY.... WHAT ARE YOU DOING HERE????</Heading> You are
              already <b>authorized</b>, go do your homework....
            </Pane>
            <Pane marginTop={48} display="flex" justifyContent="center">
              <IconButton
                background={theme.palette.yellow.base}
                icon={{
                  name: 'arrow-left',
                  size: 48,
                  color: theme.palette.yellow.dark,
                }}
                onClick={() => router.push('/')}
              />
            </Pane>
          </Pane>
        }
      />
    )
  }

  return (
    <Page>
      <Row>
        <Col>
          <Card padding={24}>
            <FormContainer>
              <Header>📝 Welcome and let`s start!</Header>
              {currentStep == 0 && (
                <Form
                  fields={FIRST_STEP_FIELDS}
                  {...{
                    trigger,
                    errors,
                    control,
                  }}
                />
              )}
              {currentStep == 1 && (
                <Pane>
                  <Pane marginBottom={theme.indent.large}>
                    <Card background={theme.colors.background.yellowTint}>
                      <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquid, consequuntur distinctio doloremque
                        laboriosam nobis rerum velit vero voluptas. Beatae culpa
                        dolores doloribus eum facilis harum ipsa labore mollitia
                        reprehenderit sapiente!
                      </Text>
                    </Card>
                  </Pane>
                  <Form
                    fields={SECOND_STEP_FIELDS}
                    {...{
                      trigger,
                      errors,
                      control,
                    }}
                  />
                </Pane>
              )}
            </FormContainer>
            <BottomButtonContainer>
              <Pane display="flex" gap={24}>
                <StepTextContainer>
                  <Heading size={300} color={theme.palette.blue.base}>
                    {currentStep + 1}
                  </Heading>
                </StepTextContainer>
                <StepTextContainer>
                  <Heading size={300} color={theme.palette.blue.base}>
                    {totalSteps + 1}
                  </Heading>
                </StepTextContainer>
              </Pane>
              <Pane display="flex" gap={24}>
                {currentStep != 0 && (
                  <IconButton
                    background={theme.palette.blue.lightest}
                    icon={{
                      name: 'arrow-left',
                      size: 48,
                      color: theme.palette.blue.base,
                    }}
                    onClick={onPrevStep}
                    disabled={!isValid}
                  />
                )}
                {currentStep < totalSteps && (
                  <IconButton
                    background={theme.palette.green.lightest}
                    icon={{
                      name: 'arrow-right',
                      size: 48,
                      color: theme.palette.green.base,
                    }}
                    onClick={onNextStep}
                    disabled={!isValid}
                  />
                )}

                {currentStep === totalSteps && (
                  <IconButton
                    background={theme.palette.green.lightest}
                    icon={{
                      name: 'new-person',
                      size: 48,
                      color: theme.palette.green.base,
                    }}
                    onClick={handleSubmit(onSubmit)}
                    disabled={!isValid}
                  />
                )}
              </Pane>
            </BottomButtonContainer>
          </Card>
        </Col>
        <Col />
      </Row>
    </Page>
  )
}

export default SignInPage
