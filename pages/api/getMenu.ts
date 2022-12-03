import { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../lib/sanityClient'
import { Menu } from '../../types'

const query = groq`
  *[_type == "menu"]
`

interface Data {
  menu: Menu[]
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const menu: Menu[] = await sanityClient.fetch(query)
  return res.status(200).json({ menu })
}
