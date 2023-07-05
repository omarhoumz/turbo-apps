import { Button, Header } from 'ui'
import Badge from 'ui/atoms/badge'

export default function Page() {
  return (
    <>
      <div className='absolute inset-0 grid grid-cols-2'>
        <div />
        <div className='bg-gray-900' />
      </div>

      <div className='h-full w-full max-w-5xl mx-auto grid grid-cols-2 relative'>
        <div className='space-y-2 p-4'>
          <Header text='Weboo' />

          <Button>Beep</Button>

          <Badge />
        </div>
        <div className='text-white p-4'>white text</div>
      </div>
    </>
  )
}
