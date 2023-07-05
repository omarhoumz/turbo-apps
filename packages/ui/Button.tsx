'use client'

type ButtonProps = {
  children?: React.ReactNode
}

export function Button({ children }: ButtonProps) {
  return (
    <button
      className='px-3 py-1.5 rounded border text-gray-900 text-sm hover:bg-gray-50'
      onClick={() => alert('boop')}
    >
      {children}
    </button>
  )
}
