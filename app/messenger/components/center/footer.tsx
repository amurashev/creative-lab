import classNames from 'classnames'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

const Footer = ({ onSend }: { onSend: (message: string) => void }) => {
  const [message, setMessage] = useState('')

  return (
    <div className="px-4 w-full flex items-center gap-2">
      <input
        className={classNames(
          'flex h-10 w-full rounded-md bg-muted/70 px-3 py-1 text-sm shadow-sm transition-colors',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
          'placeholder:text-muted-foreground',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium'
        )}
        placeholder="Write something..."
        type="email"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        onClick={() => {
          onSend(message)
          setMessage('')
        }}
      >
        Send
      </Button>
    </div>
  )
}

export default Footer
