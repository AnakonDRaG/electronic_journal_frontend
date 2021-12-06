import * as React from 'react'

export interface ModalProps {
  show?: boolean
  onClose?: () => void
  closeOnEsc?: boolean
  closeOnBlur?: boolean
  showClose?: boolean
  domRef?: React.RefObject<HTMLDivElement>
  document?: Document
  children?: React.ReactNode
  className?: string
}
