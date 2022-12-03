import { RefObject } from 'react'
import { navElementProps } from '../types'

interface Props {
  navElements: navElementProps[]
}

const Nav = ({ navElements }: Props): JSX.Element => {
  const scrollToSection = (elementRef: RefObject<HTMLDivElement | HTMLFormElement>): any => {
    elementRef.current?.scrollIntoView({ block: 'end' })

    if (elementRef.current?.id === 'contact' || elementRef.current?.id === 'menu') {
      elementRef.current?.scrollIntoView({ block: 'start' })
    }
  }

  return (
    <nav className={'space-x-1 hidden md:flex'}>
      <ul className={'flex'}>
        {
          navElements.map(({ navElementName, sectionName }, index) => (
            <li
              key={index}
              className={'py-2 px-4 transition duration-300 ease-in-out hover:bg-gray-300'}
              onClick={() => scrollToSection(sectionName)}
            >
              {navElementName}
            </li>

          ))
        }
      </ul>
    </nav>
  )
}

export default Nav
