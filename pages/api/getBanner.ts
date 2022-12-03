import { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../lib/sanityClient'
import { Banner } from '../../types'

const query = groq`
  *[_type == "banner"]
`

interface Data {
  banner: Banner[]
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const banner: Banner[] = await sanityClient.fetch(query)
  return res.status(200).json({ banner })
}
