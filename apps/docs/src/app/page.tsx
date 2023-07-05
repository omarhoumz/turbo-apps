import { Button, Header } from 'ui'

export default function Page() {
  return (
    <div className='h-full w-full max-w-5xl mx-auto px-6 lg:px-0'>
      <div className='border-b-2 py-2 mb-3'>
        <Header text='Docs' />
      </div>

      <main>
        <div className='min-h-[90vh] flex flex-col justify-center gap-y-4 py-12'>
          <h2 className='text-8xl font-black [&>:first-child]:text-blue-600 text-balance'>
            <span>Unlock</span> the full power of the API docs
          </h2>

          <p className='max-w-lg text-gray-600 text-balance'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            ipsa at accusamus, nostrum veniam architecto? Quasi quidem illo
            molestiae! Mollitia totam perspiciatis deserunt.
          </p>

          <div className='space-x-2'>
            <Button>Get started</Button>
            <Button>View on github</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
