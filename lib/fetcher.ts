import { About, Banner, Contact, Menu, MenuItem } from '../types'

interface Data {
  banner: Banner[]
  about: About[]
  menu: Menu[]
  menuItem: MenuItem[]
  contact: Contact[]
}

const apiUrl: string = process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000'

export const bannerData = async (): Promise<Data | undefined> => {
  const res = await fetch(`${apiUrl}/api/getBanner`)
  return await res.json()
}

export const aboutData = async (): Promise<Data | undefined> => {
  const res = await fetch(`${apiUrl}/api/getAbout`)
  return await res.json()
}

export const menuData = async (): Promise<Data | undefined> => {
  const res = await fetch(`${apiUrl}/api/getMenu`)
  return await res.json()
}

export const menuItemData = async (): Promise<Data | undefined> => {
  const res = await fetch(`${apiUrl}/api/getMenuItem`)
  return await res.json()
}

export const contactData = async (): Promise<Data | undefined> => {
  const res = await fetch(`${apiUrl}/api/getContact`)
  return await res.json()
}
