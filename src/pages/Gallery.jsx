import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

const Gallery = () => {
  const items = [
    {
      name: "Balapan Dengan Menteri",
      desc: "Menteri Basuki menaiki motor anggota Biawak Motors",
      img: "https://images.bisnis.com/posts/2017/05/02/649764/basoeki-naik-motor.jpg",
    },
    {
      name: "Kopdar Pangandaran Bersama Bu Susi",
      desc: "Biawak Motor ikut serta dalam Kopdar Pangandaran bersama Bu Susi.",
      img: "https://asset-2.tstatic.net/manado/foto/bank/images/susi-menteri-naik-motor.jpg",
    },
    {
      name: "Touring Bareng Jokowi",
      desc: "Biawak Motor ikut serta dalam touring bersama Presiden Jokowi.",
      img: "https://thumb.viva.co.id/media/frontend/thumbs3/2018/11/11/5be7bf095775b-presiden-jokowi-naik-moge-ke-braga_665_374.jpg",
    },
    {
      name: "Vespaan Bareng Anies",
      desc: "Motor anggota Biawak Motors ikut serta dalam acara vespaan bersama Anies Baswedan.",
      img: "https://images.bisnis.com/posts/2017/10/16/699657/anies-motor.jpg",
    },
    {
      name: "Orderan Menhan",
      desc: "Anggota Biawak Motors dapat orderan dari Menteri Pertahanan Prabowo Subianto.",
      img: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/metrojambi/2018/12/16/83wojek.gif",
    },
    {
      name: "Touring Klaten Bersama Ganjar",
      desc: "Anggota Biawak Motors mendapati Ganjar Pranowo sedang kopdar di Klaten.",
      img: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/radarsolo/2023/01/ganjar-5.gif",
    },
    {
      name: "Mudik Bareng Biawak Motors",
      desc: "Penampakan anggota Biawak Motors sedang mudik ramai-ramai naik ferry.",
      img: "https://imgx.gridoto.com/crop/0x0:0x0/700x500/photo/2020/02/11/809968954.jpg",
    },
    {
      name: "Hadiah 17-an",
      desc: "Pak Rusdi sekretaris Biawak Motors kesulitan membawa hadiah 17-an.",
      img: "https://asset-2.tstatic.net/jakarta/foto/bank/images/Biawak-berukuran-hampir-3-meter-ditangkap-pemancing-di-Jalan-Pluit-Indah-Penjaringan-Jakarta.jpg",
    },
  ]

  return (
    <div className='bg-gray-100'>
      <Sidebar />
      <Topbar />
      <div className='container mx-auto flex flex-col justify-center'>
        <div className='relative my-5' id='products'>
          <div className='bg-black/50 w-full h-52 absolute rounded-lg'>
            <h1 className='text-white text-4xl font-bold z-10 text-center left-52 mt-20 select-none'>
              Galeri Foto
            </h1>
          </div>

          <img
            src='https://bengkelmania.com/wp-content/uploads/2022/05/lagi.jpg'
            alt='banner'
            className='rounded-lg object-cover object-center w-full h-52'
          />
        </div>

        <div className='grid grid-cols-4 gap-5 grid-rows-2 select-none mb-5'>
          {items.map((item) => (
            <div key={item.id}>
              <h3 className='h-24 bg-white flex items-center rounded-t-lg'>
                <p className='p-5 font-semibold text-green-600 text-xl'>
                  {item.name}
                </p>
              </h3>
              <img
                src={item.img}
                alt='image'
                className='h-[255px] object-cover w-full'
              />
              <p className='h-[106px] p-5 text-green-600 bg-white rounded-b-lg'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery
