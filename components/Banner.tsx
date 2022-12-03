import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import { sanityClient } from '../lib/sanityClient'
import { Banner as BannerProps } from '../types'

interface Props {
  bannerTemplate: {
    banner: BannerProps[]
  }
}

const Banner = ({ bannerTemplate }: Props): JSX.Element => {
  const { title, image } = bannerTemplate?.banner[0]
  const bannerImageUrl = useNextSanityImage(sanityClient, image)
  return (
    <main className={'w-full text-center flex justify-center'}>
      <div className={'relative'}>
        <Image
          src={bannerImageUrl}
          alt={'Banner image'}
          width={1600}
          height={800}
          className={'object-fill'}
        />
        <h1 className={'md:text-4xl text-2xl mx-3 text-gray-600 absolute bottom-2 md:bottom-5 left-5 z-10'}>
          {title}
        </h1>
      </div>
    </main>
  )
}

export default Banner
