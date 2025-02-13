import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TopHeader from './Components/TopHeader'
import NavigationBar from './Components/NavigationBar'
import SideBar from './Components/SideBar'
import SlideShow from './Components/SlideShow'
// import './App.css'

function App() {

  return (
    <>

      <TopHeader />
      <NavigationBar />
      <div className='flex'>
      <SideBar/>
      <SlideShow />
      </div>

    </>
  )
}

export default App
