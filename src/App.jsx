// import { useState } from "react"

import Sidebar from "./components/Sidebar"

const App = () => {
  const items = [
    { id: 1, name: "Profile" },
    { id: 2, name: "Visi dan Misi" },
    { id: 3, name: "Produk Kami" },
    { id: 4, name: "Kontak Kami" },
    { id: 5, name: "About Us" },
  ]

  return (
    <>
      <Sidebar />
      <div className='container mx-auto'>
        <div className='w-full pt-5'>
          <div className='flex items-center py-5'>
            {/* <div className='p-5 w-36 inline-block'>
            <img src='./assets/logo.png' alt='Logo' className='w-24 h-24' />
          </div> */}

            <h1 className='text-center inline-block w-full text-3xl font-bold pr-9'>
              Biawak Logistics
            </h1>
          </div>

          <nav>
            <ul className='flex justify-center gap-x-5'>
              {items.map((item) => (
                <li
                  key={item.id}
                  className='text-center text-lg p-2 text-gray-500'
                >
                  <a href='#' className='hover:font-medium'>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='container mx-auto mt-5'>
          <h1>asd</h1>
        </div>
      </div>
    </>
  )
}

export default App
