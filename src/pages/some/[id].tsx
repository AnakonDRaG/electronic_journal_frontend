import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

interface SomeElementProps {
  id: string
}

const SomeElement: NextPage = () => {
  const {
    query: { id },
  } = useRouter()
  return <div>{id}</div>
}
export default SomeElement
