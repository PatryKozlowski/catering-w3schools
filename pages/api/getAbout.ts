import { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../lib/sanityClient'
import { About } from '../../types'

const query = groq`
  *[_type == "about"]
`

interface Data {
  about: About[]
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const about: About[] = await sanityClient.fetch(query)
  return res.status(200).json({ about })
}
