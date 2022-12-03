import { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../lib/sanityClient'
import { MenuItem } from '../../types'

const query = groq`
  *[_type == "menuItem"]
`

interface Data {
  menuItem: MenuItem[]
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const menuItem: MenuItem[] = await sanityClient.fetch(query)
  return res.status(200).json({ menuItem })
}
