import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Header = ({ children }: Props): JSX.Element => {
  return (
    <header className={'flex items-center justify-between py-3 px-4 shadow-lg fixed top-0 left-0 z-50 w-full bg-white'}>
      <Link
        href={'/'}
        className={'py-1 md:py-2 md:px-4 transition duration-300 ease-in-out hover:bg-gray-300'}
      >
        Gourmet au Catering
      </Link>
      {children}
    </header >
  )
}

export default Header
