import { Pane } from 'evergreen-ui'
import Link from 'next/link'
import React from 'react'
import { useTheme } from 'styled-components'
import { Card } from 'uikit/molecules'
import { Page } from 'uikit/organism'
import MenuItem from 'uikit/organism/SideBar/components/Menu/components/MenuItem'

const CreatePanel = () => {
  const theme = useTheme()

  return (
    <Page title="Teacher dashboard">
      <Pane display="flex">
        <Link
          href={{
            pathname: '/profile/teacher/dev/createSubject',
            query: {},
          }}
        >
          <Card padding={12}>
            <MenuItem
              text="Create subject"
              icon={{ name: 'clipboard' }}
              color={theme.palette.neutral.base}
              background={theme.palette.blue.lightest}
            />
          </Card>
        </Link>
      </Pane>
    </Page>
  )
}

export default CreatePanel
