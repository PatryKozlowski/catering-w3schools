import React, { ReactNode } from 'react'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { sanityClient } from '../lib/sanityClient'
import { About as AboutProps } from '../types'

interface Props {
  aboutTemplate: {
    about: AboutProps[]
  }
}

const About = React.forwardRef<HTMLDivElement, Props>(({ aboutTemplate }, ref) => {
  const { title, subtitle, desc, descSpecificWord, descLighter, image } = aboutTemplate?.about[0]
  const aboutImageUrl = useNextSanityImage(sanityClient, image)
  const [template, setTemplate] = React.useState<string>(desc)

  const phraseChange = (phrase: string, specificWord: string = ''): ReactNode => {
    const outPutString: any = []
    let index = 0

    if (specificWord.length === 0) {
      setTemplate(phrase)
      return
    }

    do {
      const phraseIndex: number = phrase.indexOf(specificWord, index)
      const specificWordLength: number = specificWord.length

      if (phraseIndex === -1) {
        const restString = phrase.substring(index)
        outPutString.push(restString)
        break
      }

      const textUntilMatch: string = phrase.substring(index, phraseIndex)

      outPutString.push(textUntilMatch)
      outPutString.push(
        <span
          key={phraseIndex}
          className={'bg-gray-200 p-1'}
        >
          {specificWord}
        </span>
      )
      index = phraseIndex + specificWordLength
    } while (index < phrase.length)

    setTemplate(outPutString)
  }

  React.useEffect(() => {
    phraseChange(desc, descSpecificWord)
  }, [descSpecificWord, desc])

  return (
    <div
      id={'about'}
      className={'grid grid-cols-1 py-16 md:grid-cols-2'}
      ref={ref}
    >
      <div className={'px-6 py-3'}>
        <Image
          src={aboutImageUrl}
          alt={'Cake image'}
          width={500}
          height={600}
          className={'img hidden md:flex'}
        />
      </div>
      <div className={'font-playFair text-[18px] flex flex-col items-center px-6 py-3'}>
        <h2 className={'text-4xl my-4'}>{title}</h2>
        <h5 className={'text-gray-600 mt-4'}>{subtitle}</h5>
        <p className={'mt-5'}>
          {template}
        </p>
        <p className={'text-gray-500 my-5 md:hidden lg:flex'}>
          {descLighter}
        </p>
      </div>
    </div>
  )
})

About.displayName = 'About'

export default About
