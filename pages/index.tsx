import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import { GetStaticProps } from 'next'
import { navElementProps, StaticProps } from '../types'
import { bannerData } from '../lib/fetcher'

const Home = ({ bannerTemplate }: StaticProps): JSX.Element => {
  const aboutRef = React.useRef<HTMLDivElement>(null)
  const menuRef = React.useRef<HTMLDivElement>(null)
  const contactRef = React.useRef<HTMLFormElement>(null)

  const navElements: navElementProps[] = [
    { navElementName: 'About', sectionName: aboutRef },
    { navElementName: 'Menu', sectionName: menuRef },
    { navElementName: 'Contact', sectionName: contactRef }
  ]

  return (
    <>
      <Head>
        <title>Gourmet au Catering</title>
        <meta
          name={'description'}
          content={'Gourmet au Catering. We offer full-service catering for any event, large or small.'}
        />
        <link
          rel={'icon'}
          href={'/favicon.ico'}
        />
      </Head>

      <Header>
        <Nav
          navElements={navElements}
        />
      </Header>

      <Banner bannerTemplate={bannerTemplate} />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  try {
    const bannerTemplate = await bannerData()

    if (!bannerTemplate) {
      console.log('Data occured error, some data probaly is null')
      return { notFound: true }
    }

    return {
      props: {
        bannerTemplate
      }
    }

  } catch (error) {
    console.log(error)
    return { notFound: true }
  }
}