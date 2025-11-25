import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Biogerafi from './components/Biogerafi'
import SectionTwo from './components/SectionTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='pt-4 mt-0 flex flex-col '>
      <Header/>
      
</div>

<div>
        <Biogerafi/>
      </div>
      <div className='pt-4'>

     
      <SectionTwo/>
      </div>
      </>
  )
}

export default App
