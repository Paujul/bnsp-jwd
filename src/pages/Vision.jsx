import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

const Vision = () => {
  return (
    <div className='bg-gray-100'>
      <Sidebar />
      <Topbar />
      <div className='container mx-auto flex flex-col justify-center'>
        <h1 className='text-center text-3xl font-bold my-5'>Visi & Misi</h1>
        <ul className='text-justify text-lg mx-auto list-inside list-disc my-3'>
          <li>
            Menciptakan sebuah komunitas atau organisasi yang positif dan
            bermanfaat bagi anggota dan masyarakat luas.
          </li>
          <li>
            Menyatukan pemikiran positif dan mengarahkan agar pemikiran tersebut
            bisa terwujud.
          </li>
          <li>
            Menjalin persaudaraan untuk semua bikers yang ada di Indonesia
          </li>
          <li>Menjadi media bertukar informasi tentang motor</li>
          <li>
            Menjadi pelopor dan contoh kepada masyarakat cara berkendara yang
            baik
          </li>
        </ul>
        <img
          src='./assets/visimisi.jpg'
          alt='goals'
          className='self-center my-3'
        />
      </div>
      <Footer />
    </div>
  )
}

export default Vision
