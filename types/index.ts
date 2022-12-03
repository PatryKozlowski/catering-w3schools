import { RefObject } from 'react'

interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface SanityImage {
  _type: 'image'
  assets: {
    _ref: string
    _type: 'reference'
  }
}
export interface navElementProps {
  navElementName: string
  sectionName: RefObject<HTMLDivElement | HTMLFormElement>
}

export interface Banner extends SanityBody {
  _type: 'banner'
  title: string
  image: SanityImage
}

export interface About extends SanityBody {
  _type: 'about'
  title: string
  subtitle: string
  desc: string
  descSpecificWord: string
  descLighter: string
  image: SanityImage
}

export interface Menu extends SanityBody {
  _type: 'menu'
  title: string
  image: SanityImage
}

export interface MenuItem extends SanityBody {
  _type: 'menuItem'
  title: string
  desc: string
  price: string
}

export interface Contact extends SanityBody {
  _type: 'contact'
  title: string
  desc: string
  subDesc: string
  adress: string
}

export interface InputsForm {
  name: string
  amount: number
  date: string
  message: string
}

export interface InputProps {
  placeholder: string
  type: 'text' | 'number' | 'datetime-local'
  errorMessage: string | undefined
}

export interface StaticProps {
  bannerTemplate: {
    banner: Banner[]
  }
  aboutTemplate: {
    about: About[]
  }
  menuTemplate: {
    menu: Menu[]
  }
  menuItemTemplate: {
    menuItem: MenuItem[]
  }
  contactTemplate: {
    contact: Contact[]
  }
}