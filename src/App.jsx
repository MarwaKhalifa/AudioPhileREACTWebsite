import { useState } from 'react'
import HomePage from './HomePage'
import './App.css'
import ProductsPage from './ProductsPage'
import SpeakerPage from './SpeakerPage'
import EarphonesPage from './EarphonesPage'
import AudioGearPage from './AudioGearPage'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />
      <ProductsPage/>
      <SpeakerPage/>
      <EarphonesPage/>
      <AudioGearPage/>
      <Footer/>

    </>
  )
}

export default App
