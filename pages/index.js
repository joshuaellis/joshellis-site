import React from 'react'
import styled from 'styled-components'
import { NextSeo } from 'next-seo'

const HomePage = () => {
  return (
    <Home>
      <NextSeo title='Josh Ellis' titleTemplate='%s' />
    </Home>
  )
}

export default HomePage

const Home = styled.main``
