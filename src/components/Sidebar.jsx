import { Link } from "react-router-dom"

const Sidebar = () => {
  const items = [
    { id: 1, name: "Home", target: "/" },
    { id: 2, name: "Artikel", target: "/article" },
    { id: 3, name: "Event", target: "/event" },
    { id: 4, name: "Galeri Foto", target: "/gallery" },
    { id: 5, name: "Klien Kami", target: "/client" },
  ]
  return (
    <div className='p-5 fixed z-10 bg-white rounded-b-lg'>
      <div className='p-5 w-36 inline-block'>
        <img src='./assets/logo.png' alt='Logo' className='w-24 h-24' />
      </div>

      <nav className='text-md font-medium'>
        <ul>
          {items.map((item) => (
            <li key={item.id} className='py-2 text-center'>
              <a href={item.target}>{item.name}</a>
            </li>
          ))}
        </ul>

        <div className='flex flex-col gap-2 mt-5'>
          <Link to='/login'>
            <button className='bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 active:bg-blue-400 transition-all'>
              Sign In
            </button>
          </Link>

          <Link to='/signup'>
            <button className='bg-green-500 text-white p-2 rounded-md w-full hover:bg-green-600 active:bg-green-400 transition-all'>
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
