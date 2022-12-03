import Link from 'next/link'

const Footer = (): JSX.Element => {
  return (
    <footer className={'flex items-center justify-center flex-col bg-gray-200 py-8 space-x-1'}>
      {/* <p className={'my-4'}>
        Powered by
      </p> */}

      <Link
        className={'my-4'}
        href={'https://www.w3schools.com/w3css/default.asp'}
        target={'_blank'}
      >
        Powered by w3.css
      </Link>
      <Link
        className={'text-xs hover:underline'}
        href={'https://github.com/PatryKozlowski/catering-w3schools'}
        target={'_blank'}
      >
        Refactoring Patryk Kozłowski
      </Link>
    </footer >
  )
}

export default Footer
