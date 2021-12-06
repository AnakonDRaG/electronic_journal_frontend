import { getHumanData } from 'api/human'
import { useAuth } from 'hooks/useAuth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { PaneOwnProps } from 'evergreen-ui'
import { useTheme } from 'styled-components'
import { useApplicationStorage } from 'common/storage/useApplicationStorage'
import { Role } from 'types/roles'
import MenuItem from './components/MenuItem'
import { MenuContainer, MenuListContainer } from './styles'

interface MenuProps extends PaneOwnProps {}

const Menu = ({ ...props }: MenuProps) => {
  const theme = useTheme()
  const router = useRouter()
  const { isAuth, logOut } = useAuth()
  const { userData } = useApplicationStorage()

  return (
    <MenuContainer {...props}>
      <MenuListContainer>
        {isAuth() && userData?.role === Role.STUDENT && (
          <Link href="/profile/student">
            <MenuItem
              text="My schedule"
              icon={{ name: 'clipboard' }}
              color={theme.palette.neutral.base}
              background={theme.palette.blue.lightest}
              active={router.pathname == '/profile/student'}
            />
          </Link>
        )}

        {isAuth() && userData?.role === Role.TEACHER && (
          <Link href={'/profile/teacher/myClass'}>
            <MenuItem
              text="My class"
              icon={{ name: 'people' }}
              color={theme.palette.neutral.base}
              background={theme.palette.blue.lightest}
              active={router.pathname == '/profile/teacher/myClass'}
            />
          </Link>
        )}

        {isAuth() && (
          <Link href="/">
            <MenuItem
              text="My journal"
              icon={{ name: 'book' }}
              color={theme.palette.neutral.base}
              background={theme.palette.blue.lightest}
              active={router.pathname == '/'}
            />
          </Link>
        )}

        {isAuth() && userData?.role === Role.TEACHER && (
          <Link href={'/profile/teacher/classes'}>
            <MenuItem
              text="Classes"
              icon={{ name: 'symbol-triangle-up' }}
              color={theme.palette.neutral.base}
              background={theme.palette.blue.lightest}
              active={router.pathname == '/profile/teacher/classes'}
            />
          </Link>
        )}

        {isAuth() && (
          <Link href="/">
            <MenuItem
              text="Classrooms"
              icon={{ name: 'people' }}
              color={theme.palette.neutral.base}
              background={theme.palette.blue.lightest}
              active={router.pathname == '/'}
            />
          </Link>
        )}

        {isAuth() && userData?.role === Role.TEACHER && (
          <Link href={'/profile/teacher/panel'}>
            <MenuItem
              text="Panel"
              icon={{ name: 'edit' }}
              color={theme.palette.neutral.base}
              background={theme.palette.blue.lightest}
              active={router.pathname == '/profile/teacher/panel'}
            />
          </Link>
        )}

        {!isAuth() && (
          <>
            <Link href="/signin">
              <MenuItem
                text="Sign in"
                icon={{ name: 'arrow-right' }}
                color={theme.palette.neutral.base}
                background={theme.palette.blue.lightest}
                active={router.pathname == '/signin'}
              />
            </Link>
            <Link href="/signup">
              <MenuItem
                text="Sign up"
                icon={{ name: 'new-person' }}
                color={theme.palette.neutral.base}
                background={theme.palette.blue.lightest}
                active={router.pathname == '/signup'}
              />
            </Link>
          </>
        )}
        {isAuth() && (
          <MenuItem
            text="Log-out"
            icon={{ name: 'log-out' }}
            color={theme.palette.red.base}
            background={theme.palette.red.lightest}
            onClick={async () => await logOut()}
          />
        )}
      </MenuListContainer>
    </MenuContainer>
  )
}

export default Menu
