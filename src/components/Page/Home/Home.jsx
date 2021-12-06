import React from 'react'
import { Footer } from '../../Layout/Footer/Footer'
import { Header } from '../../Layout/Header/Header'
import { Main } from '../../Layout/Main/Main'

export const Home = () => {
  return (
    <div className="div-home">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
