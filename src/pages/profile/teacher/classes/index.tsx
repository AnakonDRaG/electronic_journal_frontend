import { getClasses } from 'api/class'
import { getTeacherData } from 'api/teacher'
import { Heading, Pane, Text } from 'evergreen-ui'
import React, { useEffect, useState } from 'react'
import { useApplicationStorage } from 'storage/useApplicationStorage'
import { useTheme } from 'styled-components'
import { Card } from 'uikit/molecules'
import { Page } from 'uikit/organism'

const Classes = () => {
  const theme = useTheme()

  const {
    page: { setIsLoaderShown },
  } = useApplicationStorage()

  const [classes, setClasses] = useState<Class[]>()

  useEffect(() => {
    ;(async () => {
      setIsLoaderShown(true)

      const response = await getClasses()
      if (response.success) {
        setClasses([response.data.$values])
      }

      setIsLoaderShown(false)
    })()
  }, [])

  return (
    <Page title="Classes">
      <Pane display="flex" flexDirection="column" gap={12}>
        <Card padding={24}>
          <Heading marginBottom={12} size={700} textTransform={'uppercase'}>
            Test
          </Heading>
          <Pane display="flex" flexDirection="row" gap={12}>
            <Card background={theme.palette.blue.lightest}>
              <Heading marginBottom={12}>Teacher</Heading>
              <Text> Anakon Test</Text>
            </Card>
            <Card background={theme.palette.blue.lightest}>
              <Heading marginBottom={12}>Headman</Heading>
              <Text>qwe qwe</Text>
            </Card>
          </Pane>
        </Card>
      </Pane>
    </Page>
  )
}

export default Classes
