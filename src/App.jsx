// import { useState } from "react"
import Topbar from "./components/Topbar"
import Sidebar from "./components/Sidebar"
import Introduction from "./components/Introduction"
import Products from "./components/Products"
import Footer from "./components/Footer"

// import BackgroundImage from "./assets/banner.jpg"

const App = () => {
  return (
    <div className='bg-gray-100'>
      <Sidebar />
      <div className='container mx-auto'>
        <Topbar />
        asdasd
        <Introduction />
        <Products />
      </div>
      <Footer />
    </div>
  )
}

export default App
