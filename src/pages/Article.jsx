import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

const Article = () => {
  const items = [
    {
      name: "Peluncuran Royal Enfield Bullet 350 di IIMS 2024",
      desc: "Royal Enfield Bullet 350 Bakal Meluncur di IIMS 2024, Simak Bocorannya",
      url: "https://otomotif.tempo.co/read/1832846/royal-enfield-bullet-350-bakal-meluncur-di-iims-2024-simak-bocorannya",
      img: "https://statik.tempo.co/data/2023/09/05/id_1234159/1234159_720.jpg",
    },
    {
      name: "Analisis Luca Marini di MotoGP 2024",
      desc: "Johann Zarco Puji Analisis Luca Marini untuk Masalah Motor Honda di MotoGP 2024",
      url: "https://otomotif.tempo.co/read/1832466/johann-zarco-puji-analisis-luca-marini-untuk-masalah-motor-honda-di-motogp-2024",
      img: "https://statik.tempo.co/data/2024/02/11/id_1278827/1278827_720.jpg",
    },
    {
      name: "Cara Membayar Denda Tilang Kendaraan secara Online sesuai Prosedur",
      desc: "Cara Membayar Denda Tilang Kendaraan secara Online sesuai Prosedur",
      url: "https://otomotif.tempo.co/read/1832485/cara-membayar-denda-tilang-kendaraan-secara-online-sesuai-prosedur",
      img: "https://statik.tempo.co/data/2023/11/01/id_1250639/1250639_720.jpg",
    },
    {
      name: "Penjualan Motor Nasional Awal 2024 Turun, Ekspor Ikut Lesu",
      desc: "Penjualan Motor Nasional Awal 2024 Turun, Ekspor Ikut Lesu",
      url: "https://otomotif.tempo.co/read/1832537/penjualan-motor-nasional-awal-2024-turun-ekspor-ikut-lesu",
      img: "https://statik.tempo.co/data/2023/08/19/id_1229469/1229469_720.jpg",
    },
    {
      name: "Tips Perawatan Motor Berwarna Doff",
      desc: "Jangan Cuci Pakai Sabun Colek",
      url: "https://otomotif.tempo.co/read/1832539/tips-perawatan-motor-berwarna-doff-jangan-cuci-pakai-sabun-colek",
      img: "https://statik.tempo.co/data/2019/05/01/id_838623/838623_720.jpg",
    },
    {
      name: "United E-Motor melantai di BEI",
      desc: "United E-Motor Berharap Dapat Rp 400 M Usai Melantai di BEI",
      url: "https://otomotif.tempo.co/read/1832855/united-e-motor-berharap-dapat-rp-400-m-usai-melantai-di-bei",
      img: "https://statik.tempo.co/data/2024/01/04/id_1268486/1268486_720.jpg",
    },
    {
      name: "Daftar 6 Komunitas Sepeda Motor Kondang di Indonesia",
      desc: "Dari BAMC, HDCI hingga MACI",
      url: "https://otomotif.tempo.co/read/1683892/daftar-6-komunitas-sepeda-motor-kondang-di-indonesia-bamc-hdci-hingga-maci",
      img: "https://statik.tempo.co/data/2017/09/19/id_643240/643240_620.jpg",
    },
    {
      name: "3 Arti Biawak Masuk Rumah",
      desc: "Berdasarkan Waktunya, Bisa Menjadi Pertanda Baik dan Buruk",
      url: "https://www.dream.co.id/stories/arti-biawak-masuk-rumah-berdasarkan-waktunya-bisa-menjadi-pertanda-baik-dan-buruk-221014c.html",
      img: "https://asset-2.tstatic.net/jogja/foto/bank/images/biawak-berlafaz-allah.jpg",
    },
  ]
  //

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Sidebar />
      <Topbar />
      <div className='container mx-auto mt-12 mb-5'>
        <div className='relative my-5'>
          <div className='bg-black/50 w-full h-52 absolute rounded-lg'>
            <h1 className='text-white text-4xl font-bold z-10 text-center left-52 mt-20 select-none'>
              Berita & Artikel
            </h1>
          </div>

          <img
            src='https://thumb.viva.co.id/media/frontend/thumbs3/2015/10/20/343405_pria-buang-air-besar-sambil-membaca-_1265_711.jpg'
            alt='banner'
            className='rounded-lg object-cover w-full h-52'
          />
        </div>

        <div className='grid grid-cols-4 gap-5 grid-rows-2'>
          {items.map((item) => (
            <div key={item.id}>
              <h3 className='h-24 bg-white flex items-center rounded-t-lg'>
                <a
                  className='p-5 font-semibold text-green-600 text-xl'
                  href={item.url}
                  target='_blank'
                  rel='noreferrer'
                >
                  {item.name}
                </a>
              </h3>
              <img
                src={item.img}
                alt='image'
                className='h-[255px] object-cover w-full'
              />
              <p className='h-[106px] p-6 text-green-600 bg-white rounded-b-lg'>
                <a href={item.url} target='_blank' rel='noreferrer'>
                  {item.desc}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Article
