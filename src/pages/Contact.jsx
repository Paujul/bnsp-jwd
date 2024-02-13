import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

const Contact = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Sidebar />
      <Topbar />
      <div className='container mx-auto flex flex-col justify-center'>
        <h1 className='text-center text-3xl font-bold my-5'>Kontak Kami</h1>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.3100340983584!2d106.83668006967815!3d-6.3629595667583505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed77f920c2cf%3A0x893c9397f84f4811!2sBiawak%20Mobilindo!5e0!3m2!1sen!2sid!4v1707793878487!5m2!1sen!2sid'
          width='600'
          height='450'
          //   style='border:0;'
          allowfullscreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='w-full mb-3'
        />
        <h2 className='font-semibold'>Lokasi</h2>
        <p>
          Villa Bougenville, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16451
        </p>
        <h2 className='font-semibold'>Telepon</h2>
        <p>0812-1234-5678</p>
        <h2 className='font-semibold'>Email</h2>
        <p className='font-semibold text-blue-500'>
          <a href='mailto:@biawakmotors.com'>@ Biawak Motors</a>
        </p>
      </div>
      <Footer style='fixed w-full bottom-0' />
    </div>
  )
}

export default Contact
