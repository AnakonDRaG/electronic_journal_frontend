import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useApplicationStorage } from '../common/storage/useApplicationStorage'
import SideBar from '../uikit/organism/SideBar'

const Application = ({ Component, pageProps, router }: AppProps) => {
  const applicationStorage = useApplicationStorage()

  useEffect(() => {
    applicationStorage.page!.setIsLoaderShown(true)
  }, [])

  useEffect(() => {
    if (applicationStorage.page!.isLoaderShown) {
      applicationStorage.page!.setIsLoaderShown(false)
    }
  }, [router.route])

  return (
    <Row className="g-0">
      <Col md="auto">
        <SideBar />
      </Col>
      <Col>
        <Component {...pageProps} />
      </Col>
    </Row>
  )
}

export default Application
