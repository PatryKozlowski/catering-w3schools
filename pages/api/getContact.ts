import { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../lib/sanityClient'
import { Contact } from '../../types'

const query = groq`
  *[_type == "contact"]
`

interface Data {
  contact: Contact[]
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  const contact: Contact[] = await sanityClient.fetch(query)
  res.status(200).json({ contact })
}
