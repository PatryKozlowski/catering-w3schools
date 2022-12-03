import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import { GetStaticProps } from 'next'
import { navElementProps, StaticProps } from '../types'
import { aboutData, bannerData, menuData, menuItemData } from '../lib/fetcher'
import About from '../components/About'
import Menu from '../components/Menu'

const Home = ({ bannerTemplate, aboutTemplate, menuTemplate, menuItemTemplate }: StaticProps): JSX.Element => {
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

      <section className={'centerSection'}>
        <About
          ref={aboutRef}
          aboutTemplate={aboutTemplate}
        />
        <hr />
      </section>

      <section className={'centerSection'}>
        <Menu
          ref={menuRef}
          menuTemplate={menuTemplate}
          menuItemTemplate={menuItemTemplate}
        />
        <hr />
      </section>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  try {
    const bannerTemplate = await bannerData()
    const aboutTemplate = await aboutData()
    const menuTemplate = await menuData()
    const menuItemTemplate = await menuItemData()

    if (!bannerTemplate || !aboutTemplate || !menuTemplate || !menuItemTemplate) {
      console.log('Data occured error, some data probaly is null')
      return { notFound: true }
    }

    return {
      props: {
        bannerTemplate,
        aboutTemplate,
        menuTemplate,
        menuItemTemplate
      }
    }

  } catch (error) {
    console.log(error)
    return { notFound: true }
  }
}