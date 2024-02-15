const Products = () => {
  const items = [
    {
      id: 1,
      name: "Leasing Motor",
      desc: "Kami menawarkan jasa leasing motor untuk member.",
      img: "https://imgx.motorplus-online.com/crop/0x0:0x0/360x240/photo/2021/09/08/motor-tarikan-leasingjpg-20210908070700.jpg",
    },
    {
      id: 2,
      name: "Jual-Beli Motor Bekas",
      desc: "Kami menawarkan jasa jual-beli motor bekas.",
      img: "https://koranmanado.co.id/foto_berita/1272062265-img20230410wa0007.jpg",
    },
    {
      id: 3,
      name: "Sparepart Motor",
      desc: "Kami menawarkan jasa penjualan sparepart motor.",
      img: "https://img.era.id/pKjUgJ4TdIvpNLbsbkgD8Ao42onTnJHkaFyeXccLslU/rs:fill:1280:720/g:sm/bG9jYWw6Ly8vcHVibGlzaGVycy8xNDA1ODgvMjAyMzExMDMyMDUzLW1haW4uY3JvcHBlZF8xNjk5MDE5NjczLmpwZw.jpg",
    },
    {
      id: 4,
      name: "Service Motor",
      desc: "Kami menawarkan jasa service motor.",
      img: "https://media.sukabumiupdate.com/media/2023/05/11/1683789229_645c95adec263_odKja32JPuCOZvwzfFEu.webp",
    },
  ]

  return (
    <>
      <div className='relative my-5' id='products'>
        <div className='bg-black/50 w-full h-52 absolute rounded-lg'>
          <h1 className='text-white text-4xl font-bold z-10 text-center left-52 mt-20 select-none'>
            Produk Kami
          </h1>
        </div>

        <img
          src='./assets/products.webp'
          alt='banner'
          className='rounded-lg object-cover object-center w-full h-52'
        />
      </div>
      <div className='flex gap-6 my-2 select-none'>
        {items.map((item) => (
          <div key={item.id} className='w-[385px] h-[465px]'>
            <h3 className='h-24 bg-white flex items-center rounded-t-lg'>
              <span className='p-5 font-semibold text-green-600 text-xl'>
                {item.name}
              </span>
            </h3>
            <img
              src={item.img}
              alt='image'
              className='h-[255px] object-cover w-full'
            />
            <p className='h-[106px] p-6 text-green-600 bg-white rounded-b-lg shadow-md'>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products
