import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

const Client = () => {
  const items = [
    "https://seeklogo.com/images/H/honda-logo-5D061745A5-seeklogo.com.png",
    "https://1000logos.net/wp-content/uploads/2020/06/Yamaha-Logo.png",
    "https://logos-world.net/wp-content/uploads/2023/03/Akrapovic-Logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/6/6e/Lambang_Polri.png",
    "https://seeklogo.com/images/B/bmw-logo-248C3D90E6-seeklogo.com.png",
    "https://seeklogo.com/images/S/sekretariat-negara-republik-indonesia-logo-843BDB1264-seeklogo.com.png",
    "https://cdn1-production-images-kly.akamaized.net/HAV7cyTKP5OjmSWYgFIB_sdqiu4=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3853478/original/015860900_1640776087-logo_komunitas_motor_indonesia-20150411-008-editor.jpg",
    "https://esemkaindonesia.co.id/themes/esemka3/images/esemka/logo-esemka-3.png",
    "https://mudaberdaya.id/wp-content/uploads/2021/06/aice-logo-st22.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Moto_Gp_logo.svg/2560px-Moto_Gp_logo.svg.png",
  ]

  return (
    <div className='bg-gray-100 min-h-screen select-none'>
      <Sidebar />
      <Topbar />
      <div className='container mx-auto relative my-5'>
        <div className='bg-black/50 w-full h-52 absolute rounded-lg'>
          <h1 className='text-white text-4xl font-bold z-10 text-center left-52 mt-20 select-none'>
            Klien Kami
          </h1>
        </div>

        <img
          src='https://as1.ftcdn.net/v2/jpg/04/82/00/60/1000_F_482006071_R4efR2f6atg2JToE5Hu2O91hPzrxi6fX.jpg'
          alt='banner'
          className='rounded-lg object-cover object-center w-full h-52'
        />
      </div>
      <div className='container mx-auto flex flex-col items-center gap-6 py-8 md:gap-12.5 md:py-12.5'>
        <div className='flex w-full flex-wrap items-center justify-center gap-x-[52px] gap-y-20'>
          {items.map((item, index) => (
            <div key={index}>
              <img className='w-full h-32' src={item} alt='Logo' />
            </div>
          ))}
        </div>
      </div>
      <Footer style='fixed w-full bottom-0' />
    </div>
  )
}

export default Client
