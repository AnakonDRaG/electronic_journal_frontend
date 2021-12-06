import { zodResolver } from '@hookform/resolvers/zod'
import { LoginRequest } from 'api/auth'
import { Button, Heading, Pane, Text } from 'evergreen-ui'
import { Field } from 'Form'
import { useAuth } from 'hooks/useAuth'
import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import IconButton from 'uikit/molecules/Buttons/IconButton'
import { Card } from 'uikit/molecules/Components'
import { NotificationCard, Page } from 'uikit/organism'
import Form from 'uikit/organism/Form'
import { useApplicationStorage } from '../../common/storage/useApplicationStorage'
import { Header } from '../signup/styled'
import { SignInValidation } from './validation'

export interface SignInForm {
  login: string
  password: string
}

const SignInPage = () => {
  const theme = useTheme()
  const { isAuth, logIn } = useAuth()
  const applicationStorage = useApplicationStorage()

  const {
    control,
    handleSubmit,
    trigger,
    formState: { isValid, errors },
    watch,
    getValues,
    setValue,
  } = useForm<SignInForm>({
    reValidateMode: 'onBlur',
    resolver: zodResolver(SignInValidation),
  })

  const LOGIN_FIELDS: Field[] = [
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
  ]

  const onSubmit = async (data: SignInForm) => {
    await logIn(data)
  }
  return isAuth() ? (
    <NotificationCard
      padding={64}
      textAlign="center"
      title={'🧐'}
      content={
        <Text>
          <Heading>WHAT ARE YOU DOING HERE????</Heading> You are already
          authorized
        </Text>
      }
    />
  ) : (
    <Page>
      <Row>
        <Col>
          <Card padding={24}>
            <Pane display="flex" gap={24}>
              <Header>🤓</Header>
              <Header maxWidth={600}>
                Welcome to your personal schedule, sign in and let ` s start!
              </Header>
            </Pane>
            <Form
              fields={LOGIN_FIELDS}
              {...{
                trigger,
                errors,
                control,
                handleSubmit,
              }}
            />
            <Pane display="flex" justifyContent="flex-end">
              <IconButton
                background={theme.palette.neutral.light}
                icon={{
                  name: 'log-in',
                  size: 48,
                  color: theme.palette.neutral.base,
                }}
                onClick={handleSubmit(onSubmit)}
                disabled={!isValid}
              />
            </Pane>
          </Card>
        </Col>
        <Col />
      </Row>
    </Page>
  )
}

export default SignInPage
