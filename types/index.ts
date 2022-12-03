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