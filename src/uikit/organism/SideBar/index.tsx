import { Avatar, Heading, Pane } from 'evergreen-ui'
import { useAuth } from 'hooks/useAuth'
import React from 'react'
import { useApplicationStorage } from 'common/storage/useApplicationStorage'
import Menu from './components/Menu'
import {
  SideBarContainer,
  SideBarComponent,
  UserContainer,
  AvatarContainer,
} from './styled'

const SideBar = () => {
  const { isAuth } = useAuth()
  const { userData } = useApplicationStorage()

  return (
    <SideBarContainer background={'red'} className={'p-0 m-0'}>
      <SideBarComponent>
        {isAuth() && (
          <UserContainer>
            <AvatarContainer>
              <Avatar
                name={`${userData?.firstName} ${userData?.lastName}`}
                size={40}
              />
            </AvatarContainer>
            <Heading>
              {userData?.firstName} {userData?.lastName}
            </Heading>
          </UserContainer>
        )}

        <Menu />
      </SideBarComponent>
    </SideBarContainer>
  )
}

export default SideBar
