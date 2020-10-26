declare namespace Data {
  type TNotification = {
    id: string
    type: 'ERROR' | 'SUCCESS'
    message: string
    button?: {
      Icon: TIconComponent
      text: string
      onClick: MouseEventHandler
    }
  }
}

export = Data
export as namespace Data
