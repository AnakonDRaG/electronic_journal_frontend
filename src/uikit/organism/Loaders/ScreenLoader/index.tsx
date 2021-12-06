import { Pane, Spinner } from 'evergreen-ui'
import React, { useEffect, useState } from 'react'
import {
  OverlayBackgroundComponent,
  ScreenLoaderContainer,
  SpinnerContainer,
} from 'uikit/organism/Loaders/ScreenLoader/styled'
import { useApplicationStorage } from 'common/storage/useApplicationStorage'

export interface ScreenLoaderProps {
  isShown: boolean
}

const ScreenLoader = () => {
  const applicationStorage = useApplicationStorage()
  const isShown = applicationStorage.page!.isLoaderShown

  useEffect(() => {
    document.body.style.overflow = isShown ? 'hidden' : 'unset'
  }, [isShown])

  return (
    <ScreenLoaderContainer isShown={isShown}>
      <SpinnerContainer>
        <Spinner size={64} />
      </SpinnerContainer>
      <OverlayBackgroundComponent />
    </ScreenLoaderContainer>
  )
}

export default ScreenLoader
