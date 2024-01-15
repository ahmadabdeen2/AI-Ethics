import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import sdaia from './assets/sdaia.svg'
import Image from 'next/image'
const config: DocsThemeConfig = {
  logo: "AI Ethics Principles",
  useNextSeoProps() {
    return {
      titleTemplate: '%s – AI Ethics Principles',
    }
  },
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },

  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'AI Ethics Documentation',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="AI Ethics Principles" />
      <meta property="og:description" content="The Documentation" />
    </>
  ), 
  feedback: {
    content: '',
    labels: 'feedback',
    useLink() {
      return null
      // const config = useConfig()
      // return `https://google.com/search?q=${encodeURIComponent(Feedback for ${config.title})`
    }
  }, 
  editLink: {
    component: () => null,
  },
  

  


}

export default config
