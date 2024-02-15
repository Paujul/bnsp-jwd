import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

const Event = () => {
  const items = [
    {
      name: "Honda Premium Matic Day",
      desc: "Biawak Motor ikut meramaikan Honda Premium Matic Day 2024",
      img: "https://radarpekalongan.disway.id/upload/c7b7e6ef1f50e77b42068bad03a1934f.jpg",
    },
    {
      name: "Bhayangkara Trail Adventure Reborn",
      desc: "Biawak Motor ikut serta dalam Bhayangkara Trail Adventure Reborn 2024",
      img: "https://www.lampungselatankab.go.id/web/wp-content/uploads/2022/07/IMG-20220703-WA0014.jpg",
    },
    {
      name: "Jalan-jalan ke Ranca Upas",
      desc: "Agenda 4 bulan sekali",
      img: "https://asset.kompas.com/crops/Ke12JN_VtsKu7R8C9HFwOn_upVU=/3x151:1080x869/1200x800/data/photo/2022/01/31/61f8003f8757a.jpg",
    },
    {
      name: "Patroli Malam Senopati",
      desc: "Sejumlah Anggota Biawak Motors yang bertugas menjadi anggota Polisi melakukan patroli malam di wilayah Senopati.",
      img: "https://awsimages.detik.net.id/community/media/visual/2023/02/20/polisi-patroli-di-wilayah-jakarta-selatan-antisipasi-tawuran-hingga-balap-liar_169.jpeg?w=1200",
    },
    {
      name: "Tertib Lalu-lintas",
      desc: "Anggota Biawak Motors kena tilang saat kegiatan Night Ride setiap malam minggu.",
      img: "https://imgx.motorplus-online.com/crop/0x0:0x0/700x465/photo/2021/09/25/direktur-lalu-lintas-polda-metro-20210925103230.jpg",
    },
    {
      name: "Balapan Joki Antasari",
      desc: "Anggota Biawak Motors ikut serta dalam balapan liar di Jalan Antasari, Jakarta Selatan.",
      img: "https://disk.mediaindonesia.com/thumbs/1200x700/news/2021/09/6b8549236b0d82269ddaf9850525ed12.jpg",
    },
    {
      name: "Kopdar di Senayan City",
      desc: "Anggota Biawak Motors berkumpul nyarap bubur setiap Minggu pagi.",
      img: "https://asset-a.grid.id/crop/256x162:1280x811/x/photo/2021/02/28/para-bikers-sunmori-menjadikan-m-20210228054015.jpg",
    },
    {
      name: "Lomba Nangkep Biawak",
      desc: "Acara tahunan Biawak Motors.",
      img: "https://i.ytimg.com/vi/3hahgaSVQj4/maxresdefault.jpg",
    },
  ]

  return (
    <div className='bg-gray-100'>
      <Sidebar />
      <Topbar />
      <div className='container mx-auto flex flex-col justify-center'>
        <div className='relative my-5'>
          <div className='bg-black/50 w-full h-52 absolute rounded-lg'>
            <h1 className='text-white text-4xl font-bold z-10 text-center left-52 mt-20 select-none'>
              Event & Kegiatan
            </h1>
          </div>

          <img
            src='https://imgx.motorplus-online.com/crop/0x0:0x0/700x465/photo/2022/09/04/sunmorijpg-20220904065445.jpg'
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

export default Event
