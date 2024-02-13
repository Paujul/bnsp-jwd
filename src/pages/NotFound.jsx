import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

const NotFound = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Sidebar />
      <Topbar />
      <div className='container mx-auto flex flex-col justify-center mt-52'>
        <h1 className='text-center text-3xl font-bold my-5 text-red-500'>
          Halaman yang anda tuju tidak ada!
        </h1>
      </div>
      <Footer style='fixed w-full bottom-0' />
    </div>
  )
}

export default NotFound
