import 'uikit/styles/theme.scss'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import StorageProvider from '../common/storage/StorageProvider'
import { ThemeProvider } from 'styled-components'
import SideBar from 'uikit/organism/SideBar'
import { defaultTheme } from 'uikit/styles/theme'
import AuthProvider from 'common/auth/AuthProvider'
import ScreenLoader from 'uikit/organism/Loaders/ScreenLoader'
import { useApplicationStorage } from '../common/storage/useApplicationStorage'
import Application from './application'
import { PageContainer } from './styles'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <StorageProvider>
          <ScreenLoader />
          <PageContainer>
            <Application {...{ Component, pageProps, router }} />
          </PageContainer>
        </StorageProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
