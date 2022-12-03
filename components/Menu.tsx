import React from 'react'
import Image from 'next/image'
import MenuItem from './MenuItem'
import { Menu as MenuProps, MenuItem as MenuItemProps } from '../types'
import { useNextSanityImage } from 'next-sanity-image'
import { sanityClient } from '../lib/sanityClient'

interface Props {
  menuTemplate: {
    menu: MenuProps[]
  }
  menuItemTemplate: {
    menuItem: MenuItemProps[]
  }
}

const Menu = React.forwardRef<HTMLDivElement, Props>(({ menuItemTemplate, menuTemplate }, ref) => {
  const { title, image } = menuTemplate?.menu[0]
  const menuImageUrl = useNextSanityImage(sanityClient, image)

  return (
    <div
      id={'menu'}
      className={'flex flex-col lg:grid lg:grid-cols-2 py-16'}
      ref={ref}
    >
      <div className={'flex flex-col px-6 py-3'}>
        <h2 className={'text-4xl my-4 text-center'}>{title}</h2>
        {
          menuItemTemplate?.menuItem?.map((menuItem, index) => (
            <MenuItem
              key={index}
              {...menuItem}
            />
          ))
        }
      </div>

      <div className={'px-6 py-3'}>
        <Image
          src={menuImageUrl}
          alt={'Food image'}
          width={500}
          height={750}
          className={'img md:w-full'}
        />
      </div>
    </div >
  )
})

Menu.displayName = 'Menu'

export default Menu
