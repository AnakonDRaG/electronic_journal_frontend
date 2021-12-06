import React, { useEffect, useState } from 'react'
import { Empty, HeaderContainer } from 'uikit/organism/Header/styles'
import { useRouter } from 'next/router'

interface HeaderProps {
  activeInPages: Array<string>
}

const Header = ({ activeInPages }: HeaderProps) => {
  const router = useRouter()
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    setIsActive(activeInPages.includes(router.route.split('/')[1]))
  }, [router])

  return isActive ? <HeaderContainer></HeaderContainer> : <Empty />
}

export default Header
