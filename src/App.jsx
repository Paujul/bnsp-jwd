import Topbar from "./components/Topbar"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import Home from "./pages/Home"

const App = () => {
  return (
    <div className='bg-gray-100'>
      <Sidebar />
      <div className='container mx-auto'>
        <Topbar />
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
