import { MenuItem as MenuItemProps } from '../types'

const MenuItem = ({ title, desc, price }: MenuItemProps): JSX.Element => {
  return (
    <>
      <h4 className={'text-lg my-4'}>{title}</h4>
      <p className={'text-gray-500 mb-8'}>{desc} {price}</p>
    </>
  )
}

export default MenuItem
