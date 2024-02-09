import { faker } from "@faker-js/faker"
const Products = () => {
  const randomImg = faker.image.urlLoremFlickr({ category: "transport" })

  const items = [
    {
      id: 1,
      name: "Leasing Motor",
      desc: "Kami menawarkan jasa leasing motor untuk member.",
    },
    {
      id: 2,
      name: "Jual-Beli Motor Bekas",
      desc: "Kami menawarkan jasa jual-beli motor bekas.",
    },
    {
      id: 3,
      name: "Sparepart Motor",
      desc: "Kami menawarkan jasa penjualan sparepart motor.",
    },
    {
      id: 4,
      name: "Service Motor",
      desc: "Kami menawarkan jasa service motor.",
    },
  ]

  return (
    <>
      <div className='relative my-5' id='asd'>
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
      <div className='flex gap-6 my-2'>
        {items.map((item) => (
          <div key={item.id} className='w-[385px] h-[465px]'>
            <h3 className='h-24 bg-white flex items-center rounded-t-lg'>
              <span className='p-5 font-semibold text-green-600 text-xl'>
                {item.name}
              </span>
            </h3>
            <img
              src={randomImg}
              alt='image'
              className='h-[255px] object-cover w-full'
            />
            <p className='h-[106px] p-6 text-green-600 bg-white rounded-b-lg'>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products
