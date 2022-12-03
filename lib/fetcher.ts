import { Banner } from '../types'

interface Data {
  banner: Banner[]
}

const apiUrl: string = process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000'

export const bannerData = async (): Promise<Data | undefined> => {
  const res = await fetch(`${apiUrl}/api/getBanner`)
  return await res.json()
}