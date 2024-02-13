import { useNavigate } from "react-router-dom"

const Topbar = () => {
  const navigate = useNavigate()
  console.log(navigate)

  const items = [
    { id: 1, name: "Profile", target: "/#about" },
    { id: 2, name: "Visi dan Misi", target: "/goals" },
    { id: 3, name: "Produk Kami", target: "/#products" },
    { id: 4, name: "Kontak Kami", target: "/contact" },
    { id: 5, name: "About Us", target: "/#about" },
  ]

  return (
    <div className='w-full'>
      <div className='flex items-center py-5'>
        {/* <div className='p-5 w-36 inline-block'>
      <img src='./assets/logo.png' alt='Logo' className='w-24 h-24' />
    </div> */}

        <h1 className='text-center inline-block w-full text-3xl font-bold pr-9'>
          Biawak Motors
        </h1>
      </div>

      <nav>
        <ul className='flex justify-center gap-x-5'>
          {items.map((item) => (
            <li key={item.id} className='text-center text-lg p-2 text-gray-500'>
              <a href={item.target} className='hover:font-medium'>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Topbar
